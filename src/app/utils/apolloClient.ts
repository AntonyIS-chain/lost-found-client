import {
    ApolloClient,
    from,
    HttpLink,
    InMemoryCache,
  } from "@apollo/client";
  import { RetryLink } from "@apollo/client/link/retry";
  import { setContext } from "@apollo/client/link/context";
  import { onError } from "@apollo/client/link/error";
  
  // Define the GraphQL URI
  const proxyUri: string = "http://localhost:5000/graphql";
  // const proxyUri: string = "http://10.184.18.142:30897/graphql"; // backup/internal
  
  // Retry link for handling retries
  const retryLink: RetryLink = new RetryLink();
  
  // HttpLink for connecting to the GraphQL server
  const httpLink: HttpLink = new HttpLink({ uri: proxyUri });
  
  // Middleware to dynamically add headers
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("accessToken"); // Make sure the token name matches what you use elsewhere
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  
  // Error Handling Link
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (
          err?.extensions?.statusCode === 403 ||
          err?.message.includes("Unauthorized")
        ) {
          console.error("Unauthorized! Logging out...");
          localStorage.removeItem("accessToken");
          window.location.href = "/sign-in";
        } else {
          console.error(`[GraphQL error]: ${err.message}`);
        }
      }
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });
  
  // Combine links in order: error → auth → retry → http
  const link = from([errorLink, authLink, retryLink, httpLink]);
  
  // Create Apollo Client
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
  
  export default apolloClient;
  