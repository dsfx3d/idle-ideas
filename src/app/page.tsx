"use client";
import {useSession} from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session.status === "authenticated" && (
        <Image
          src={`${session.data?.user.image}`}
          alt="Profile picture"
          width={128}
          height={128}
          className="rounded-full w-32 h-32"
        />
      )}
    </main>
  );
}
