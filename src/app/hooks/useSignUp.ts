import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { SignupSessionResponse } from "../types";
import { SIGN_UP_MUTATION } from "../apis/graphql/mutations";



// Define the variables required for the mutation
interface SignUpVariables {
  email: string;
  role_id: number;
  role_name: string;
  phone_number: string;
  password: string;
}

// Custom hook for sign up
const useSignUp = () => {
  const [signUpMutation, { data, loading, error }] = useMutation<SignupSessionResponse,SignUpVariables>(SIGN_UP_MUTATION);

  const signUp = useCallback(
    async (email: string, role_id: number, role_name: string, password: string, phone_number: string) => {
      const response = await signUpMutation({
        variables: { email, role_id, role_name, password ,phone_number},
      });
      return response.data;
    },
    [signUpMutation]
  );

  return { signUp, loading, error, data };
};

export default useSignUp;
