import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Saad Arafet Ben Mahfoudh | Software Engineering Student",
    template: "%s | Saad Arafet"
  },
  description: "Portfolio de Saad Arafet Ben Mahfoudh - Étudiant en 5ème année d’ingénierie logicielle & Développeur Front-End passionné par l'IA et la robotique.",
  keywords: ["Software Engineer", "Génie Logiciel", "PFE 2026", "Saad Arafet", "Développeur Front-End", "Robotique", "Tunisie"],
  authors: [{ name: "Saad Arafet Ben Mahfoudh" }],
  openGraph: {
    title: "Saad Arafet Ben Mahfoudh | Software Engineering Student",
    description: "Découvrez mes projets en génie logiciel, IA et robotique.",
    url: "https://saad-arafet.vercel.app", // À mettre à jour après déploiement
    siteName: "Portfolio Saad Arafet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Arafet Ben Mahfoudh | Software Engineering Student",
    description: "Étudiant Ingénieur Logiciel & Développeur Front-End",
    images: ["/og-image.png"],
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-blue-500/30`}>
        <LanguageProvider>
          {children}
          <ScrollToTop />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
