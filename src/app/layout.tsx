import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Inside Round Top — Stories from the World's Largest Antique Fair",
  description:
    "A video podcast exploring the creators, vendors, and characters behind the world's largest antique fair in Round Top, Texas. New episodes weekly starting July 2026.",
  keywords: [
    "Round Top",
    "antique fair",
    "podcast",
    "interior design",
    "antiques",
    "Texas",
    "vintage",
    "Round Top Texas",
  ],
  metadataBase: new URL("https://insideroundtop.com"),
  openGraph: {
    title: "Inside Round Top — Stories from the World's Largest Antique Fair",
    description:
      "A video podcast exploring the creators, vendors, and characters behind the world's largest antique fair in Round Top, Texas.",
    url: "https://insideroundtop.com",
    siteName: "Inside Round Top",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Inside Round Top",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inside Round Top — Stories from the World's Largest Antique Fair",
    description:
      "A video podcast exploring the creators, vendors, and characters behind the world's largest antique fair in Round Top, Texas.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
