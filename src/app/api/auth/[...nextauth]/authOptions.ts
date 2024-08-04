import {NextAuthOptions} from "next-auth";
import {env} from "~/env/server";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    jwt({account, token, profile}) {
      if (account) {
        token.accessToken = account.access_token;
        token.username = profile?.login;
        token.url = profile?.url;
      }
      return token;
    },
    session({session, token}) {
      session.accessToken = token.accessToken;
      session.user.username = token.username;
      session.user.url = token.url;
      return session;
    },
  },
};
