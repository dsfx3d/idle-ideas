/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ReposGroups($username: String!) {\n  user(login: $username) {\n    popularRepos: repositories(\n      first: 5\n      orderBy: {field: STARGAZERS, direction: DESC}\n    ) {\n      nodes {\n        ...SearchRepoItem\n      }\n    }\n    activeRepos: repositories(\n      first: 5\n      orderBy: {field: PUSHED_AT, direction: DESC}\n    ) {\n      nodes {\n        ...SearchRepoItem\n      }\n    }\n  }\n}": types.ReposGroupsDocument,
    "fragment SearchRepoItem on Repository {\n  id\n  name: nameWithOwner\n  description: shortDescriptionHTML\n  stars: stargazerCount\n}": types.SearchRepoItemFragmentDoc,
    "query SearchRepos($query: String!) {\n  search(query: $query, type: REPOSITORY, first: 5) {\n    nodes {\n      ...SearchRepoItem\n    }\n  }\n}": types.SearchReposDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReposGroups($username: String!) {\n  user(login: $username) {\n    popularRepos: repositories(\n      first: 5\n      orderBy: {field: STARGAZERS, direction: DESC}\n    ) {\n      nodes {\n        ...SearchRepoItem\n      }\n    }\n    activeRepos: repositories(\n      first: 5\n      orderBy: {field: PUSHED_AT, direction: DESC}\n    ) {\n      nodes {\n        ...SearchRepoItem\n      }\n    }\n  }\n}"): (typeof documents)["query ReposGroups($username: String!) {\n  user(login: $username) {\n    popularRepos: repositories(\n      first: 5\n      orderBy: {field: STARGAZERS, direction: DESC}\n    ) {\n      nodes {\n        ...SearchRepoItem\n      }\n    }\n    activeRepos: repositories(\n      first: 5\n      orderBy: {field: PUSHED_AT, direction: DESC}\n    ) {\n      nodes {\n        ...SearchRepoItem\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SearchRepoItem on Repository {\n  id\n  name: nameWithOwner\n  description: shortDescriptionHTML\n  stars: stargazerCount\n}"): (typeof documents)["fragment SearchRepoItem on Repository {\n  id\n  name: nameWithOwner\n  description: shortDescriptionHTML\n  stars: stargazerCount\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchRepos($query: String!) {\n  search(query: $query, type: REPOSITORY, first: 5) {\n    nodes {\n      ...SearchRepoItem\n    }\n  }\n}"): (typeof documents)["query SearchRepos($query: String!) {\n  search(query: $query, type: REPOSITORY, first: 5) {\n    nodes {\n      ...SearchRepoItem\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;