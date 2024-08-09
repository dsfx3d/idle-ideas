import {fetchUserRepos} from "../_data/fetchUserRepos";
import {githubClient} from "~/lib/githubClient";
import {useQuery} from "@tanstack/react-query";
import {useSession} from "next-auth/react";

type TOptions = {
  query: string;
};

export function useRepos({query}: TOptions) {
  const session = useSession();
  const token = `${session.data?.accessToken}`;
  const username = `${session.data?.user?.username}`;
  return useQuery({
    queryKey: [fetchUserRepos.name, token, query, username],
    async queryFn() {
      if (query.length > 0) {
        return (
          (await fetchUserRepos(githubClient(token), {
            query,
            username,
          })) ?? []
        );
      }
    },
  });
}
