
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivanshu Tiwari | AI / GenAI Engineer",
  description:
    "Portfolio of Shivanshu Tiwari, a Computer Science graduate focused on Python, backend development, Generative AI, RAG, and AI engineering.",
  keywords: [
    "Shivanshu Tiwari",
    "AI Engineer",
    "GenAI Engineer",
    "Generative AI",
    "Python Developer",
    "Backend Developer",
    "RAG",
    "Next.js Developer",
  ],
  authors: [{ name: "Shivanshu Tiwari" }],
  creator: "Shivanshu Tiwari",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

