"use client";

import { Nunito, Poppins } from "next/font/google";
import { AppProvider } from "../context";
import "./globals.css";

const poppins = Poppins({
  display: "auto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-header",
});

const nunito = Nunito({
  display: "auto",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${poppins.variable} ${nunito.variable} antialiased`}>
          {children}
        </body>
      </html>
    </AppProvider>
  );
}
