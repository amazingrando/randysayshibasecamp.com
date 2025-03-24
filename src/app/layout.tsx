import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from "@/components/layout/footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import Fathom from '@/lib/fathom';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Hi Basecamp, I’m Randy — a designer, builder, and lifelong maker.",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased font-base text-slate-700`}
      >
        <Fathom />
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
