import {ListUserOrganizationsQuery, ListUserReposQuery} from "~/gql/graphql";
import {NextAuthProvider} from "~/providers/NextAuthProvider";
import {SignInButton} from "./SignInButton";
import {authOptions} from "./api/auth/[...nextauth]/authOptions";
import {getServerSession} from "next-auth";
import {githubClient} from "~/lib/githubClient";
import {toUserRepos} from "./(repos)/toUserRepos.server";
import Image from "next/image";

// eslint-disable-next-line complexity, max-statements
export default async function Home() {
  const session = await getServerSession(authOptions);

  const repos = session
    ? await toUserRepos(
        githubClient(session.accessToken),
        session.user.username,
      )
    : ([] as ListUserReposQuery);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session && (
        <>
          <Image
            src={`${session.user.image}`}
            alt="Profile picture"
            width={64}
            height={64}
            className="rounded-full"
          />
          {repos?.user?.repositories?.nodes?.map(org => (
            <div key={org?.url}>
              <a href={org?.url}>{org?.nameWithOwner}</a>
              {org?.id}
            </div>
          ))}
        </>
      )}
      <NextAuthProvider>
        <SignInButton />
      </NextAuthProvider>
    </main>
  );
}
