"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "~/components/ui/command";
import {SearchRepoItemFragment} from "~/gql/graphql";
import {useState} from "react";

type TProps = {
  children: React.ReactNode;
  popularRepos?: SearchRepoItemFragment[];
};

export function SearchRepo({children}: TProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Command>
      <CommandInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeCapture={e => setValue(e.currentTarget.value)}
        placeholder="Search for a repository..."
      />
      {isFocused && (
        <CommandList>
          <CommandEmpty>No repositories found</CommandEmpty>
          {value.trim().length === 0 && children}
        </CommandList>
      )}
    </Command>
  );
}
