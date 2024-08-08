import "./globals.css";
import {Inter as FontSans} from "next/font/google";
import {authOptions} from "./api/auth/[...nextauth]/authOptions";
import {cn} from "~/lib/utils";
import {getServerSession} from "next-auth";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Idle Ideas",
  description: "The projects you'll never finish.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: React.ReactNode;
  signIn: React.ReactNode;
};

export default async function RootLayout({children, signIn}: RootLayoutProps) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {session ? children : signIn}
      </body>
    </html>
  );
}
