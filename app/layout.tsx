import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import "./globals.css";

const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Preview Card",
  description: "es un componente de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${monserrat.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
