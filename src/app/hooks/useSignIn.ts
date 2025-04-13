import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { SIGN_IN_MUTATION } from "../apis/graphql/mutations";
import { SigninSessionResponse } from "../types";


interface LoginVariables {
  email: string;
  password: string;
}

const useSignIn = () => {
  const [signInMutation, { data, loading, error }] = useMutation<SigninSessionResponse,LoginVariables>(SIGN_IN_MUTATION);

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
