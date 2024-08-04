import "./globals.css";
import {Inter as FontSans} from "next/font/google";
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
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
