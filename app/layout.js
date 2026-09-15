import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { sans } from "./font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Richa | Video Editor",
  description:
    "I’m Richa, a video editor helping entrepreneurs turn their message into videos people can’t ignore.",
  keywords: ["Richa", "video editor", "social media video editing", "content creator"],
  authors: [{ name: "Richa" }],
  openGraph: {
    title: "Richa | Video Editor",
    description:
      "I’m Richa, a video editor helping entrepreneurs turn their message into videos people can’t ignore.",
    type: "website",
    images: ["/profile.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richa | Video Editor",
    description:
      "I’m Richa, a video editor helping entrepreneurs turn their message into videos people can’t ignore.",
    images: ["/profile.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sans.variable} bg-black text-white h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
