import { UserProfile } from "@/features/profile/components/user-profile";
import { auth } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Profile",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default async function ProfilePage() {
  const session = await auth();

  return (
    <div className="pt-28">
      <div className="container mx-auto px-4 py-8">
        <UserProfile user={session?.user} />
      </div>
    </div>
  );
}
