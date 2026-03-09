import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bramble & Branch Counseling",
  description: "Kerith Hopper, LCSW — Therapy rooted in growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-bark">
        {children}
      </body>
    </html>
  );
}
