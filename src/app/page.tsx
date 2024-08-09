import {NextAuthProvider} from "~/providers/NextAuthProvider";
import {ReactQueryProvider} from "~/providers/ReactQueryProvider";
import {RepoGroup} from "./(repos)/RepoGroup";
import {SearchRepos} from "./(repos)/SearchRepos";
import {SignInButton} from "./SignInButton";
import {TFeaturedRepos} from "./(repos)/TRepoGroups";
import {authOptions} from "./api/auth/[...nextauth]/authOptions";
import {fetchFeaturedRepos} from "./(repos)/_data/fetchFeaturedRepo";
import {getServerSession} from "next-auth";
import {githubClient} from "~/lib/githubClient";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const repos = session
    ? await fetchFeaturedRepos(
        githubClient(session.accessToken),
        session.user.username,
      )
    : ({} as TFeaturedRepos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session && (
        <>
          <NextAuthProvider>
            <ReactQueryProvider>
              <SearchRepos>
                <RepoGroup heading="Popular" repos={repos.popular} />
                <RepoGroup heading="Active" repos={repos.active} />
              </SearchRepos>
            </ReactQueryProvider>
            <SignInButton />
          </NextAuthProvider>
        </>
      )}
    </main>
  );
}
