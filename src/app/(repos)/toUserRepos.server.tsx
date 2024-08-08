import {GraphQLClient} from "graphql-request";
import {
  ListUserReposDocument,
  ListUserReposQuery,
  ListUserReposQueryVariables,
} from "~/gql/graphql";

export function toUserRepos(
  client: GraphQLClient,
  username: string,
): Promise<ListUserReposQuery> {
  return client.request<ListUserReposQuery, ListUserReposQueryVariables>(
    ListUserReposDocument,
    {username},
  );
}
