import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hone Labs | Fractional Sales Leadership",
  description: "Senior sales leadership without the full-time commitment. We help startups and scale-ups build, fix, and accelerate their revenue engines.",
  keywords: ["fractional sales leader", "sales consultancy", "GTM strategy", "revenue operations", "sales process design"],
  openGraph: {
    title: "Hone Labs | Fractional Sales Leadership",
    description: "Senior sales leadership without the full-time commitment. We help startups and scale-ups build, fix, and accelerate their revenue engines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
