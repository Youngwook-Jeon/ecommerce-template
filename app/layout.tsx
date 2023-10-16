import type { Metadata } from "next";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

import "./css/globals.css";
import "slick-carousel/slick/slick.css";

export const metadata: Metadata = {
  title: "ecomart",
  description: "Shopping Mart - A place for all",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
