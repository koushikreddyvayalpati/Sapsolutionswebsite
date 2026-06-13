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
  title: "SAP Global ServiceTech | Enterprise SAP Solutions",
  description:
    "End-to-end SAP consulting, implementation and managed services for global enterprises — from S/4HANA to Agentic AI. SAP Gold Partner, ISO 27001 certified, 30+ countries.",
  openGraph: {
    title: "SAP Global ServiceTech | Enterprise SAP Solutions",
    description:
      "End-to-end SAP consulting, implementation and managed services for global enterprises.",
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
