import { useQuery } from "@apollo/client";
import { GET_ID_DOCUMENTS } from "../apis/graphql/queries";
import { IDDocument } from "../types";

interface GetIDDocumentsResponse {
  GetIDDocuments: {
    message: string;
    statusCode: number;
    success: boolean;
    results: IDDocument[];
  };
}

const useGetIDDocuments = (idType: string) => {
  const { data, loading, error } = useQuery<GetIDDocumentsResponse>(GET_ID_DOCUMENTS, {
    variables: { idType },
    fetchPolicy: "cache-and-network",
  });

  return {
    data: data?.GetIDDocuments,
    loading,
    error,
  };
};

export default useGetIDDocuments;
