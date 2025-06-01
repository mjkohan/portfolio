import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/providers/theme-provider"
import { DM_Mono } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'

const dmMono = DM_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '300'], // Include desired font weights
    display: 'swap',
});


export const metadata: Metadata = {
  title: "Mohammad Javad - Front-End developer",
  description: "Front-End developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ` + dmMono.className} suppressHydrationWarning>
    <GoogleTagManager  gtmId="G-DLPEQ9CZWJ" />
      <body
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
