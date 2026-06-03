import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Parisienne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spize Weddings & Events | Luxury Wedding Planner & Event Management",
  description: "Spize Weddings & Events crafts extraordinary, high-end destination weddings, luxury decor, and timeless celebrations. Guided by Reema Thakkar and Atreya Tiwari.",
  keywords: ["Luxury Wedding Planner", "Destination Wedding India", "Spize Weddings", "Event Management Goa", "Jaipur Weddings", "Premium Wedding Decorator"],
  openGraph: {
    title: "Spize Weddings & Events | Luxury Wedding Planner & Event Management",
    description: "We don't just plan events; we create lifelong memories. Crafting extraordinary weddings and timeless celebrations globally.",
    type: "website",
    locale: "en_IN",
    siteName: "Spize Weddings & Events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spize Weddings & Events | Luxury Wedding Planner",
    description: "Crafting extraordinary weddings and timeless celebrations.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${parisienne.variable} antialiased bg-white text-text-dark`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
