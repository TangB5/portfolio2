import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import 'primeicons/primeicons.css'; 



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "A portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.className} ${playfair.variable} bg-dark-900 text-gray-100 min-h-screen`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}
