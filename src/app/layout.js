import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "PL Consulting | Manufacturing Operational Excellence & Profit Recovery",
  description: "Recover ₹5-30 Cr in operational losses without new machines. Tarun Sharma leads hands-on shopfloor execution, Lean Six Sigma optimization, and OEE improvements for Indian manufacturing MSMEs.",
  keywords: "manufacturing consulting, operational excellence, OEE improvement, SMED, Lean Six Sigma, capacity optimization, Indian MSME consulting, Tarun Sharma",
  openGraph: {
    title: "PL Consulting | Manufacturing Operational Excellence & Profit Recovery",
    description: "Recover ₹5-30 Cr in operational losses without new machines. Tarun Sharma leads hands-on shopfloor execution, Lean Six Sigma optimization, and OEE improvements for Indian manufacturing MSMEs.",
    url: "https://plconsulting.co.in",
    siteName: "PL Consulting",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-off-white text-steel font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
