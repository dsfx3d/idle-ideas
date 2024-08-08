"use client";
import {signIn, signOut, useSession} from "next-auth/react";

export function SignInButton() {
  const session = useSession();
  return (
    <button
      onClick={() => {
        session.status === "authenticated"
          ? signOut({redirect: false})
          : signIn("github");
      }}
    >
      {session.status === "authenticated" ? "Sign out" : "Sign in with GitHub"}
    </button>
  );
}
