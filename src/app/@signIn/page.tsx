"use client";
import {signIn} from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center align-middle">
      <button onClick={() => signIn("github")}>Sign in with github</button>
    </div>
  );
}
