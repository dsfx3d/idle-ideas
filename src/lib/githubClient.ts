import {GraphQLClient} from "graphql-request";
import {env} from "~/env/client";

export const githubClient = (token: string) =>
  new GraphQLClient(env.NEXT_PUBLIC_GITHUB_GRAPHQL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
