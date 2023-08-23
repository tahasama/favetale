import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { CartProvider } from "./provider/CartProvider";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FaveTale",
  description: "pet and animal community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />

          {children}
        </CartProvider>
      </body>
    </html>
  );
}
