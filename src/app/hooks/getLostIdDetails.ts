import { useQuery } from "@apollo/client";
import { GET_LOST_ID_DETAILS } from "../apis/graphql/queries";
import { UserIdentityCard } from "../types";

interface GetLostIdResponse {
  getLostId: {
    message: string;
    statusCode: number;
    success: boolean;
    results: UserIdentityCard;
  }

  
}

const useGetLostId = (id: string) => {
  const { data, loading, error } = useQuery<GetLostIdResponse>(GET_LOST_ID_DETAILS, {
    variables: { id },
    skip: !id,  
  });
  return { data, loading, error };
};

export default useGetLostId;
