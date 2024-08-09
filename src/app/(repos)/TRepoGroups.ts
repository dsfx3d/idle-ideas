import {SearchRepoItemFragment} from "~/gql/graphql";

export type TFeaturedRepos = {
  popular: SearchRepoItemFragment[];
  active: SearchRepoItemFragment[];
};
