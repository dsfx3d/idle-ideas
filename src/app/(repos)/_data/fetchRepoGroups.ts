import {ComponentProps} from "react";
import {GraphQLClient} from "graphql-request";
import {
  ReposGroupsDocument,
  ReposGroupsQuery,
  ReposGroupsQueryVariables,
  SearchRepoItemFragment,
} from "~/gql/graphql";
import {type Repositories} from "../Repositories";

export async function fetchRepoGroups(
  client: GraphQLClient,
  username: string,
): Promise<ComponentProps<typeof Repositories>["repos"]> {
  const query = await client.request<
    ReposGroupsQuery,
    ReposGroupsQueryVariables
  >(ReposGroupsDocument, {username});

  return {
    popular: (query.user?.popularRepos.nodes ?? []) as SearchRepoItemFragment[],
    active: (query.user?.activeRepos.nodes ?? []) as SearchRepoItemFragment[],
  };
}
