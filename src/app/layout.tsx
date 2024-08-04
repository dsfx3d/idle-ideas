import "./globals.css";
import {Inter as FontSans} from "next/font/google";
import {NextAuthProvider} from "~/providers/NextAuthProvider";
import {Session} from "next-auth";
import {cn} from "~/lib/utils";
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
  session: Session;
};

export default async function RootLayout({children, session}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
