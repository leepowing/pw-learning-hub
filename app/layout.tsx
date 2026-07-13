import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PW Learning Hub",
  description: "A learning space for Greta and Mathis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}