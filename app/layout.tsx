import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BlogsShop — Modern Editorial Blog",
    template: "%s | BlogsShop",
  },
  description:
    "BlogsShop is a clean, modern editorial blog covering design, technology, culture, and ideas worth sharing.",
  keywords: ["blog", "editorial", "design", "technology", "culture", "writing"],
  authors: [{ name: "BlogsShop Editorial" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogsshop.com",
    siteName: "BlogsShop",
    title: "BlogsShop — Modern Editorial Blog",
    description:
      "A clean, modern editorial blog covering design, technology, culture, and ideas worth sharing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogsShop — Modern Editorial Blog",
    description:
      "A clean, modern editorial blog covering design, technology, culture, and ideas worth sharing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-stone-50 text-stone-900 antialiased font-sans selection:bg-amber-200 selection:text-stone-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
