import {GraphQLClient} from "graphql-request";
import {
  SearchRepoItemFragment,
  SearchReposDocument,
  SearchReposQuery,
  SearchReposQueryVariables,
} from "~/gql/graphql";

export async function fetchUserRepos(
  client: GraphQLClient,
  {
    query,
    username,
  }: {
    query: string;
    username: string;
  },
): Promise<SearchRepoItemFragment[]> {
  const result = await client.request<
    SearchReposQuery,
    SearchReposQueryVariables
  >(SearchReposDocument, {query: `user:${username} ${query}`});
  return (result.search.nodes ?? []) as SearchRepoItemFragment[];
}
