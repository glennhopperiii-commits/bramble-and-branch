import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bramble & Branch Counseling",
    template: "%s | Bramble & Branch",
  },
  description: "Kerith Hopper, LCSW. Trauma-informed counseling rooted in warmth, creativity, and the belief that what you feel makes sense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-charcoal font-body">
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
