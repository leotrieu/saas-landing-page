import type { Metadata } from "next";
import "./globals.css";

import { site } from "@/config/site-config";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
