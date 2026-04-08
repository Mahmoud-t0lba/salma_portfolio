import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import Script from "next/script";

import { siteConfig } from "@/content/site";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.metaDescription,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.metaDescription,
    type: "website",
    locale: "en_US",
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="reset-scroll-on-reload" strategy="beforeInteractive">
          {`
            (() => {
              try {
                if ("scrollRestoration" in window.history) {
                  window.history.scrollRestoration = "manual";
                }

                const navigationEntries = window.performance.getEntriesByType("navigation");
                const navigationType = navigationEntries[0]?.type;

                if (navigationType === "reload") {
                  if (window.location.hash) {
                    window.history.replaceState(
                      window.history.state,
                      "",
                      window.location.pathname + window.location.search,
                    );
                  }

                  window.scrollTo(0, 0);
                }
              } catch (_error) {
                window.scrollTo(0, 0);
              }
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
