import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/providers/theme-provider"
import { DM_Mono } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'

const dmMono = DM_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '300'],
    display: 'swap',
});


export const metadata: Metadata = {
  title: "Mohammad Javad Kohankan- Front-End Developer",
  description: "Experienced Front-End Developer specializing in building responsive and user-friendly web applications.",
  keywords: [ "Mohammad Javad", "kohankan",
    "محمدجواد کهن کن", "typescript", "Front-End Developer", "Web Development", "React", "Next.js", "JavaScript", "tailwind"
  ],
  authors: [{ name: "Mohammad Javad Kohankan", url: "https://kohankan.vercel.app/" }],
  creator: "Mohammad Javad Kohankan",
  openGraph: {
    title: "Mohammad Javad Kohankan- Front-End Developer",
    description: "Experienced Front-End Developer specializing in building responsive and user-friendly web applications.",
    url: "https://kohankan.vercel.app/",
    siteName: "Mohammad Javad Kohankan Portfolio",
    images: [
      {
        url: "/public/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Javad Kohankan Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://kohankan.vercel.app/"),
  other : {"google-site-verification":"yzjWgZLvhgWIfeiXXdgkyWKooXWHpsGvf3Kpv61MWlk"}
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
