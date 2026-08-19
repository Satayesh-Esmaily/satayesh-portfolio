import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://satayesh-esmaily.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Satayesh Esmaily | Frontend Developer & Python Enthusiast",
  description:
    "Portfolio of Satayesh Esmaily, a frontend developer and Python enthusiast passionate about modern web development, creative interfaces, testing, robotics, and technology.",
  keywords: [
    "Satayesh Esmaily",
    "Frontend Developer",
    "Python Developer",
    "React Developer",
    "Next.js Portfolio",
    "QA Tester",
  ],
  authors: [{ name: "Satayesh Esmaily" }],
  openGraph: {
    title: "Satayesh Esmaily | Frontend Developer & Python Enthusiast",
    description:
      "Portfolio of Satayesh Esmaily, a frontend developer and Python enthusiast passionate about modern web development, creative interfaces, testing, robotics, and technology.",
    url: siteUrl,
    siteName: "Satayesh Esmaily",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satayesh Esmaily | Frontend Developer & Python Enthusiast",
    description:
      "Portfolio of Satayesh Esmaily, a frontend developer and Python enthusiast passionate about modern web development, creative interfaces, testing, robotics, and technology.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
