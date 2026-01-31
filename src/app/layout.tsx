import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hone Labs | AI-Powered Sales Performance",
  description: "Sharpen your sales edge with AI-powered training, coaching, and live call assistance. Built for teams that want to win.",
  keywords: ["sales training", "AI coaching", "sales enablement", "live copilot", "sales performance"],
  openGraph: {
    title: "Hone Labs | AI-Powered Sales Performance",
    description: "Sharpen your sales edge with AI-powered training, coaching, and live call assistance.",
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
