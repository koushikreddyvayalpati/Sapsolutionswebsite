import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UtilityNexus.ai | SAP Services for Utilities",
  description:
    "SAP ECC to S/4HANA upgrades, AMS resources, implementation governance and SAP IS-U health assessments for utilities.",
  openGraph: {
    title: "UtilityNexus.ai | SAP Services for Utilities",
    description:
      "Utilities-focused SAP upgrades, AMS, project governance and POWERON health assessments.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${grotesk.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
