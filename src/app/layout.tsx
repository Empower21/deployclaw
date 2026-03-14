import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeployClaw | Your AI Assistant Deployed in 48 Hours",
  description:
    "White-glove OpenClaw deployment for businesses on the East Coast and Caribbean. Private AI on your hardware — no cloud, no leaks. Remote or in-person.",
  keywords: [
    "OpenClaw",
    "AI deployment",
    "private AI",
    "Mac Mini AI",
    "East Coast AI",
    "Caribbean AI",
    "DeployClaw",
  ],
  openGraph: {
    title: "DeployClaw | Your AI Assistant Deployed in 48 Hours",
    description:
      "White-glove OpenClaw deployment for businesses. Private AI on your hardware — remote or in-person, from Atlanta to Kingston.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeployClaw | AI Deployed in 48 Hours",
    description:
      "Private AI on your hardware. No cloud. No leaks. East Coast + Caribbean.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
