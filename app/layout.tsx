// app/layout.tsx or RootLayout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bit.dev",
  description:
    "I’m Bem Ioryisa, a full-stack developer building scalable, elegant web apps with Next.js, React, Node.js, and MongoDB.",
  authors: [{ name: "Bem Ioryisa", url: "https://github.com/arcanesmile" }],
  keywords: [
    "Full-stack developer",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Software Engineer",
  ],
  openGraph: {
    title: "Bem Ioryisa | Full-Stack Developer Portfolio",
    description:
      "I build scalable, elegant, and user-centric web applications.",
    url: "https://github.com/arcanesmile",
    siteName: "Bem Ioryisa Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bem Ioryisa Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bem Ioryisa | Full-Stack Developer Portfolio",
    description:
      "I build scalable, elegant, and user-centric web applications.",
    images: ["https://yourportfolio.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bem Ioryisa",
              url: "https://github.com/arcanesmile",
              sameAs: [
                "https://github.com/arcanesmile",
                "https://linkedin.com/in/bem-ioryisa-a4447135a",
                "https://twitter.com/arcane_smile1",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self-Employed",
              },
            }),
          }}
        />
      </head>

      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
