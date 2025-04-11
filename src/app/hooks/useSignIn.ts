import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { SIGN_IN_MUTATION } from "../apis/graphql/mutations";

// Your GraphQL mutation (already defined above)

interface LoginResponse {
  login: {
    results: {
      access_token: string;
      refresh_token: string;
      session_user: {
        id : string;
        role : string;
      }
    };
    message: string;
    statusCode: number;
    success: boolean;
  };
}

interface LoginVariables {
  email: string;
  password: string;
}

const useSignIn = () => {
  const [signInMutation, { data, loading, error }] = useMutation<
    LoginResponse,
    LoginVariables
  >(SIGN_IN_MUTATION);

  const signIn = useCallback(
    async (email: string, password: string) => {
      const response = await signInMutation({ variables: { email, password } });
      return response.data;
    },
    [signInMutation]
  );

  return { signIn, loading, error, data };
};

export default useSignIn;
