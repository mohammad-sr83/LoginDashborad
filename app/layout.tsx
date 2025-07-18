import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Login Dashboard App",
  description: "Login Dashboard App",
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
