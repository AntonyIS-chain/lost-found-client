import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { SIGN_UP_MUTATION } from "../apis/graphql/mutations";

// Define the shape of the response returned by the mutation
interface SignUpResponse {
  signup: {
    message: string;
    statusCode: number;
    success: boolean;
    results: {
      email: string;
      role_id: number;
      role_name: string;
    };
  };
}

// Define the variables required for the mutation
interface SignUpVariables {
  email: string;
  role_id: number;
  role_name: string;
  password: string;
}

// Custom hook for sign up
const useSignUp = () => {
  const [signUpMutation, { data, loading, error }] = useMutation<
    SignUpResponse,
    SignUpVariables
  >(SIGN_UP_MUTATION);

  const signUp = useCallback(
    async (email: string, role_id: number, role_name: string, password: string) => {
      const response = await signUpMutation({
        variables: { email, role_id, role_name, password },
      });
      return response.data;
    },
    [signUpMutation]
  );

  return { signUp, loading, error, data };
};

export default useSignUp;
