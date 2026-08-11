import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Our One Stop Sponsorship Management Company",
  description:
    "Tennent provides effective management of sponsorship and marketing investment for brands, helping provide funds for community groups through sponsorship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
