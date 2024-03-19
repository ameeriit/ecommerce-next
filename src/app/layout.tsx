import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce | NextJs",
  description:
    "Practice project for next js app router, redux toolkit, tanstack and axios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} bg-blue-50`}>
        <Header />
        <main className="min-h-[calc(100vh-124px)] container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
