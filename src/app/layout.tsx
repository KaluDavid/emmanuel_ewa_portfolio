import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { inter, oleo, onest, sans, poppins } from "../../public/fonts/fonts";
import Header from "@/components/container/header";
import Footer from "@/components/container/footer";

export const metadata: Metadata = {
  title: "Ugobo Emmanuel",
  description: "Portfolio website of Ugobo Emmanuel",
  icons: "/Logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-white ${oleo.variable} ${sans.variable} ${onest.variable}  ${poppins.variable} ${inter.variable}  overflow-x-hidden  antialiased`}
      >
        <Header />
        <main className="sm:pt-30 pt-35"> {children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
