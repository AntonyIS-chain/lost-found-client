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
  mutation Signup($email: String!, $role_id: Int!, $role_name: String!, $password: String!) {
    signup(email: $email, role_id: $role_id, role_name: $role_name, password: $password) {
      message
      statusCode
      success
      results {
        email
        role_id
        role_name
      }
    }
  }
`;

