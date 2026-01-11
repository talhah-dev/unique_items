import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Unique Items | Premium Watches Online",
  description:
    "Unique Items is an e-commerce store offering premium, stylish, and affordable watches. Discover modern designs and timeless classics for every occasion.",
  keywords: [
    "Unique Items",
    "watches",
    "buy watches online",
    "men watches",
    "women watches",
    "ecommerce watches",
    "stylish watches",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
