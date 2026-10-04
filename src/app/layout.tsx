import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soul Calibar | Developer Portfolio",
  description:
    "Computer Science student & developer specializing in AI, Systems Programming, and Cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
