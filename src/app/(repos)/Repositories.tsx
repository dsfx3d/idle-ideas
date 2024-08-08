import {RepoGroup} from "./RepoGroup";
import {SearchRepo} from "./SearchRepo";
import {SearchRepoItemFragment} from "~/gql/graphql";

type TProps = {
  repos: {
    popular: SearchRepoItemFragment[];
    active: SearchRepoItemFragment[];
  };
};

export function Repositories({repos}: TProps) {
  return (
    <SearchRepo>
      <RepoGroup heading="Active Repositories" repos={repos.active} />
      <RepoGroup heading="Popular Repositories" repos={repos.popular} />
    </SearchRepo>
  );
}
