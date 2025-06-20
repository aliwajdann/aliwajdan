import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google';

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the subsets you need
  variable: '--font-montserrat', // Optional: Use a CSS variable for easier application
  display: 'swap', // Preload the font for better performance
  fallback: ['Arial', 'sans-serif'], // Optional: Specify fallback fonts
});
export const metadata: Metadata = {
  title: "Ali Wajdan",
  description: "Welcome to Ali Wajdan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
