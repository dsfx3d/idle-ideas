"use client";

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {RepoGroup} from "./RepoGroup";
import {useDebounce} from "use-debounce";
import {useRepos} from "./_hooks/useRepos";
import {useState} from "react";

type TProps = {
  children: React.ReactNode;
};

export function SearchRepos({children}: TProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [query] = useDebounce(value, 300);
  const repos = useRepos({query});
  return (
    <Command shouldFilter={false}>
      <CommandInput
        placeholder="Search for a repository..."
        onValueChange={changed => setValue(changed.trim())}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (
        <CommandList>
          {repos.isLoading && <CommandItem>Loading...</CommandItem>}
          <RepoGroup repos={repos.data} />
          {children}
        </CommandList>
      )}
    </Command>
  );
}
