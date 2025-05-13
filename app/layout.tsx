import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { glacialIndifference } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "imbyher",
  description: "Schedule messages with AI assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${glacialIndifference.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-glacial dark:bg-dark dark:text-dark-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
