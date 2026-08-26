import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";

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
<html lang="en" suppressHydrationWarning>
  <body suppressHydrationWarning>{children}</body>
</html>
  );
}