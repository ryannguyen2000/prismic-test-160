import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import _ from "lodash";

export const fetchSEOData = async (path: string) => {
  try {
    const response = await fetch(process.env.NEXT_SEO_URL as string, {
      headers: {
        Authorization: process.env.NEXT_AUTHORIZATION as string,
      },
      cache: "force-cache", // Sử dụng cache để giảm tải
    });
    const data = await response.json();
    return _.find(_.get(data, "docs"), {
      projectID: process.env.NEXT_SEO_PROJECTID as string,
      path_name: path,
    });
  } catch (err) {
    console.error("Failed to fetch SEO data:", err);
    return null;
  }
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
