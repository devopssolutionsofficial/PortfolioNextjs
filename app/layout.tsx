import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devops Solutions Official",
  description: "Welcome to Devops Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}

      </body>
    </html>
  );
}
