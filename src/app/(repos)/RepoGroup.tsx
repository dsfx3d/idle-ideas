import {CommandGroup, CommandItem} from "~/components/ui/command";
import {IconRepo} from "~/components/icons";
import {SearchRepoItemFragment} from "~/gql/graphql";

type TProps = {
  heading: string;
  repos: SearchRepoItemFragment[];
};

export function RepoGroup({heading, repos}: TProps) {
  return (
    <CommandGroup heading={heading}>
      {repos.map(item => (
        <CommandItem key={item.id} className="flex gap-2 cursor-pointer">
          <IconRepo />
          {item.name}
        </CommandItem>
      ))}
    </CommandGroup>
  );
}
