import { gql } from "@apollo/client";

export const SIGN_IN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      results {
        access_token
        refresh_token
      }
      message
      statusCode
      success
    }
  }
`;
