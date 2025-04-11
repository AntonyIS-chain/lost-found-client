import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

// GraphQL URI
const proxyUri = "http://localhost:5000/graphql";

// HTTP connection to the API
const httpLink = new HttpLink({ uri: proxyUri });

// Retry link
const retryLink = new RetryLink();

// Type for refresh token response
type RefreshResponse = {
  access_token: string;
};

// Shared refresh promise to avoid multiple calls
let refreshing: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) return null;

  try {
    const response = await fetch("http://localhost:5000/refresh-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });

    const data: RefreshResponse = await response.json();

    if (data?.access_token) {
      localStorage.setItem("accessToken", data.access_token);
      return data.access_token;
    }
  } catch (err) {
    console.error("🔁 Token refresh failed:", err);
  }

  return null;
}

// Wrap promise into an Observable
const fromPromise = (promise: Promise<any>) =>
  new Observable((subscriber) => {
    promise
      .then((value) => {
        subscriber.next(value);
        subscriber.complete();
      })
      .catch((error) => subscriber.error(error));
  });

// Ensure single refresh call at a time
async function getRefreshedAccessToken(): Promise<string | null> {
  if (!refreshing) {
    refreshing = refreshAccessToken().finally(() => {
      refreshing = null;
    });
  }
  return refreshing;
}

// Middleware to attach access token
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Error handling for auth and network
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      const isUnauthorized =
        err?.extensions?.statusCode === 403 || err?.message.includes("Unauthorized");

      if (isUnauthorized) {
        return fromPromise(getRefreshedAccessToken())
          .filter(Boolean)
          .flatMap((newAccessToken) => {
            if (!newAccessToken) {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refresh_token");
              window.location.href = "/sign-in";
              return [];
            }

            operation.setContext(({ headers = {} }) => ({
              headers: {
                ...headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            }));

            return forward(operation);
          });
      } else {
        console.error(`[GraphQL error]: ${err.message}`);
      }
    }
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }

  return undefined;
});

// Combine all links
const link = from([errorLink, authLink, retryLink, httpLink]);

// Apollo Client instance
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default apolloClient;
