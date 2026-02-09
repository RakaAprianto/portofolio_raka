import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raka Aprianto | Creative Developer",
  description:
    "Full-stack developer specializing in IoT solutions, web applications, and machine learning. Building innovative digital experiences with Laravel, Next.js, Flutter, and Python.",
  keywords: [
    "Raka Aprianto",
    "Full Stack Developer",
    "IoT Developer",
    "Web Developer",
    "Flutter Developer",
    "Machine Learning",
  ],
  authors: [{ name: "Raka Aprianto" }],
  openGraph: {
    title: "Raka Aprianto | Creative Developer",
    description:
      "Full-stack developer portfolio showcasing innovative projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
