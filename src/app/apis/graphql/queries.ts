import { gql } from "@apollo/client";

export const GET_ID_DOCUMENTS = gql`
    query GetIDDocuments($idType: String!) {
        GetIDDocuments(IDType: $idType) {
            message
            statusCode
            success
            results {
                full_name
                id
                id_number
                location
                status
            }
        }
    }
`;


// GraphQL query to get specific lost ID details
export const GET_ID_DOCUMENT = gql`
    query GetIDDocument($idType: String!, $id: String!) {
    GetIDDocument(IDType: $idType, id: $id) {
        message
        statusCode
        success
        results {
            status
            location
            id_number
            full_name
            id
        }
    }
    }
`;
