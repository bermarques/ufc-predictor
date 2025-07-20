import { useQuery } from "@tanstack/react-query";

import { getFights } from "../../services/api/fights";

export function useGetFights() {
  async function handler() {
    const { data } = await getFights();

    return data.data;
  }

  const { data, isLoading } = useQuery({
    queryFn: handler,
    refetchOnWindowFocus: false,
    queryKey: ["FIGHTS"],
  });

  return { data: data, isLoading };
}
