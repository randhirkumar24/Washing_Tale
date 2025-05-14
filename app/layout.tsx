import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Washing Tale - Premium Laundry Service",
  description: "Professional laundry and dry cleaning services at your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-[60px] md:pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
