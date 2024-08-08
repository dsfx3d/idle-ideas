import {createEnv} from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GITHUB_GRAPHQL_ENDPOINT: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_GITHUB_GRAPHQL_ENDPOINT:
      process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_ENDPOINT,
  },
});
