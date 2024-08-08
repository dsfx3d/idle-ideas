"use client";
import {signOut} from "next-auth/react";

export function SignInButton() {
  return <button onClick={() => signOut({redirect: false})}>Sign out</button>;
}
