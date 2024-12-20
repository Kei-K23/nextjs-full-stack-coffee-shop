import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { LocationProvider } from "@/provider/ip-address-provider";

const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfairDisplay",
  weight: "100 900",
});
const clickerScript = localFont({
  src: "./fonts/ClickerScript-Regular.ttf",
  variable: "--font-clickerScript",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Brew Haven Coffee Shop",
    template: "%s | Brew Haven Coffee Shop",
  },
  description:
    "Discover artisanal coffee and cozy vibes at Brew Haven, your local coffee shop serving premium brews and delightful pastries.",
  keywords: ["coffee shop", "artisanal coffee", "pastries", "local cafe"],
  authors: [{ name: "Brew Haven Team" }],
  creator: "Brew Haven Coffee Shop",
  publisher: "Brew Haven Coffee Shop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Brew Haven Coffee Shop",
    description: "Your cozy corner for premium coffee and delightful treats",
    url: "https://www.brewhaven.com",
    siteName: "Brew Haven Coffee Shop",
    images: [
      {
        url: "https://www.brewhaven.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brew Haven Coffee Shop - Artisanal Coffee and Cozy Vibes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Brew Haven Coffee Shop",
    description: "Your cozy corner for premium coffee and delightful treats",
    creator: "@brewhaven",
    images: ["https://www.brewhaven.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${clickerScript.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <LocationProvider>{children}</LocationProvider>
          </SessionProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
