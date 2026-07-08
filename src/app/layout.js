import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Pinnacle Logic Consulting | Manufacturing Operational Excellence & Profit Recovery",
  description: "Recover ₹5-30 Cr in operational losses without new machines. Tarun Sharma leads hands-on shopfloor execution, Lean Six Sigma optimization, and OEE improvements for Indian manufacturing MSMEs.",
  keywords: "manufacturing consulting, operational excellence, OEE improvement, SMED, Lean Six Sigma, capacity optimization, Indian MSME consulting, Tarun Sharma, Pinnacle Logic",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Pinnacle Logic Consulting | Manufacturing Operational Excellence & Profit Recovery",
    description: "Recover ₹5-30 Cr in operational losses without new machines. Tarun Sharma leads hands-on shopfloor execution, Lean Six Sigma optimization, and OEE improvements for Indian manufacturing MSMEs.",
    url: "https://plconsulting.co.in",
    siteName: "Pinnacle Logic Consulting",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Pinnacle Logic Consulting Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-off-white text-steel font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
