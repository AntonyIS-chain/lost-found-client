import { gql } from "@apollo/client";

export const GET_LOST_IDS = gql`
    query GetLostIds {
        getLostIds {
        message
        statusCode
        success
        results {
            created_at
            date_reported
            full_name
            id
            id_number
            location_found
            status
            updated_at
        }
        }
    }
`;


// GraphQL query to get specific lost ID details
export const GET_LOST_ID_DETAILS = gql`
    query GetLostId($id: String!) {
        getLostId(id: $id) {
            message
            statusCode
            success
            results {
                created_at
                date_reported
                full_name
                id
                id_number
                location_found
                status
                updated_at
            }
        }
    }
`;
