import { useQuery } from "@apollo/client";
import { GET_ID_DOCUMENT } from "../apis/graphql/queries";
import { IDDocument } from "../types";

// Response type
interface GetIDDocumentResponse {
  GetIDDocument: {
    message: string;
    statusCode: number;
    success: boolean;
    results: IDDocument;
  };
}

// Hook
const useGetIDDocument = (id: string, idType: string ) => {
  const { data, loading, error } = useQuery<GetIDDocumentResponse>(GET_ID_DOCUMENT, {
    variables: { id, idType },
    skip: !id, 
  });

  return {
    data: data?.GetIDDocument,
    loading,
    error,
  };
};

export default useGetIDDocument;
