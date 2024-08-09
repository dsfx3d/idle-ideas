import {
  FeaturedReposDocument,
  FeaturedReposQuery,
  FeaturedReposQueryVariables,
  SearchRepoItemFragment,
} from "../../../gql/graphql";
import {GraphQLClient} from "graphql-request";
import {TFeaturedRepos} from "../TRepoGroups";

export async function fetchFeaturedRepos(
  client: GraphQLClient,
  username: string,
): Promise<TFeaturedRepos> {
  const query = await client.request<
    FeaturedReposQuery,
    FeaturedReposQueryVariables
  >(FeaturedReposDocument, {username});
  return {
    popular: (query.user?.popularRepos.nodes ?? []) as SearchRepoItemFragment[],
    active: (query.user?.activeRepos.nodes ?? []) as SearchRepoItemFragment[],
  };
}
