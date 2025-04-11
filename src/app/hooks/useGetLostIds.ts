import { useQuery } from "@apollo/client";
import { GET_LOST_IDS } from "../apis/graphql/queries";
import { UserIdentityCard } from "../types";



interface GetLostIdsResponse {
  getLostIds: {
    message: string;
    statusCode: number;
    success: boolean;
    results: UserIdentityCard[];
  };
}

const useGetLostIds = () => {
  const { data, loading, error } = useQuery<GetLostIdsResponse>(GET_LOST_IDS);

  return { data, loading, error };
};

export default useGetLostIds;
