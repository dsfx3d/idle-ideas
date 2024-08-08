import {RepoGroup} from "./RepoGroup";
import {SearchRepoItemFragment} from "~/gql/graphql";
import {SearchRepos} from "./SearchRepos";

type TProps = {
  repos: {
    popular: SearchRepoItemFragment[];
    active: SearchRepoItemFragment[];
  };
};

export function Repositories({repos}: TProps) {
  return (
    <SearchRepos>
      <RepoGroup heading="Active Repositories" repos={repos.active} />
      <RepoGroup heading="Popular Repositories" repos={repos.popular} />
    </SearchRepos>
  );
}
