import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageNavigation } from "@/components/page-navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lumi Key | Your Keyboard. Your Style.",
    template: "%s | Lumi Key",
  },
  description:
    "Meet Lumi Key: a colorful keyboard experience designed around your language, your ideas, and your style.",
  applicationName: "Lumi Key",
  keywords: ["Lumi Key", "keyboard", "themes", "multilingual typing"],
  openGraph: {
    title: "Lumi Key | Your Keyboard. Your Style.",
    description: "A keyboard experience with room for your own style.",
    siteName: "Lumi Key",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <PageNavigation>{children}</PageNavigation>
        <Footer />
      </body>
    </html>
  );
}