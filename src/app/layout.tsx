import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animations — Motion Playground",
  description: "A stunning, highly-detailed showcase of modern web animations.",
  metadataBase: new URL("https://agentic-7915eee9.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Animations — Motion Playground",
    description: "Explore parallax, morphing, scroll reveals, and delightful micro-interactions.",
    url: "/",
    siteName: "Motion Playground",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animations — Motion Playground",
    description: "Explore parallax, morphing, scroll reveals, and delightful micro-interactions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-grid`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
