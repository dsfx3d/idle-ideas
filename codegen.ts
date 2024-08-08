import type {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://docs.github.com/public/fpt/schema.docs.graphql",
  documents: ["src/**/*.gql", "!src/gql/**/*'"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
