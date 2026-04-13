import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KoalityKids — Explore Nature, One Discovery at a Time",
  description:
    "KoalityKids is a nature exploration app for children. Snap a photo, identify species, track observations, and earn badges. Available on iOS and Android.",
  keywords:
    "nature app for kids, wildlife identification, outdoor learning, nature exploration, kids education app, species identification, KoalityKids",
  openGraph: {
    title: "KoalityKids — Explore Nature, One Discovery at a Time",
    description:
      "The fun, safe way for kids to explore and learn about the natural world around them.",
    type: "website",
    url: "https://koalitykids.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
