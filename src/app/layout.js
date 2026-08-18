import "./globals.css";
import Script from "next/script";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-PR8EG5CF69";

export const metadata = {
  title: "Pinnacle Logic Consulting | Lean Manufacturing & Operational Excellence Firm",
  description: "Pinnacle Logic Consulting is a premium manufacturing consulting firm helping manufacturers improve productivity, reduce operational costs, optimize manufacturing processes, and achieve sustainable operational excellence.",
  keywords: "Lean Manufacturing Consultant, Industrial Engineering Consultant, Operational Excellence Consulting, Factory Layout Consultant, Manufacturing Consulting India, Productivity Improvement, Line Balancing, SMED, OEE Improvement, Manufacturing Transformation",
  icons: {
    icon: "/images/logo-new.webp",
    apple: "/images/logo-new.webp",
  },
  openGraph: {
    title: "Pinnacle Logic Consulting | Lean Manufacturing & Operational Excellence Firm",
    description: "Pinnacle Logic Consulting is a premium manufacturing consulting firm helping manufacturers improve productivity, reduce operational costs, optimize manufacturing processes, and achieve sustainable operational excellence.",
    url: "https://plconsulting.co.in",
    siteName: "Pinnacle Logic Consulting",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo-new.webp",
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
      <head>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-off-white text-steel font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
