import {GraphQLClient} from "graphql-request";
import {env} from "~/env/client";

export const githubClient = (token?: string, signal?: AbortSignal) =>
  new GraphQLClient(env.NEXT_PUBLIC_GITHUB_GRAPHQL_ENDPOINT, {
    signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
