import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import "./i18n/provider";

export const metadata: Metadata = {
  title: "Agency Music",
  description:
    "Music creates authentic connections through the power of emotion. We use it to make your brand resonate like never before. Are you ready to turn up the volume on your brand?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0E0E0E]">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
