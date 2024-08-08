import {NextAuthProvider} from "~/providers/NextAuthProvider";
import {Repositories} from "./(repos)/Repositories";
import {SignInButton} from "./SignInButton";
import {authOptions} from "./api/auth/[...nextauth]/authOptions";
import {fetchRepoGroups} from "./(repos)/_data/fetchRepoGroups";
import {getServerSession} from "next-auth";
import {githubClient} from "~/lib/githubClient";
import Image from "next/image";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

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
          <Repositories
            repos={await fetchRepoGroups(
              githubClient(session.accessToken),
              session.user.username,
            )}
          />
          <NextAuthProvider>
            <SignInButton />
          </NextAuthProvider>
        </>
      )}
    </main>
  );
}
