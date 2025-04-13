import { gql } from "@apollo/client";

export const SIGN_IN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      message
      statusCode
      success
      results {
        access_token
        refresh_token
        session_user {
          id
          role
        }
      }
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation Signup($email: String!, $role_id: Int!, $role_name: String!, $password: String!, $phone_number: String) {
    signup(email: $email, role_id: $role_id, role_name: $role_name, password: $password, phone_number: $phone_number) {
      message
      statusCode
      success
      results {
        access_token
        refresh_token
        session_user {
          user_id
          role
        }
      }
    }
  }
`;

