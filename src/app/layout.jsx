import { Archivo, Inter } from "next/font/google";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import MobileBookBar from "@/components/site/MobileBookBar";
import AnalyticsInit from "@/components/site/AnalyticsInit";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Style In The City Studio — Personal Styling & Closet Organization",
    template: "%s | Style In The City Studio",
  },
  description:
    "Love your style, love your closet, love yourself. Personal styling, closet organization, and curated wellness and beauty for women who want a wardrobe — and a routine — that works.",
  applicationName: SITE_NAME,
  robots: { index: true, follow: true },
  openGraph: { siteName: SITE_NAME, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col bg-ivory pb-[5.25rem] text-espresso lg:pb-0">
          <AnalyticsInit />
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileBookBar />
        </div>
      </body>
    </html>
  );
}
