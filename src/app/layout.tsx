import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hafizanasmajid.vercel.app"),

  title: {
    default: "Hafiz Muhammad Anas Majid | AI & Full-Stack Developer",
    template: "%s | Hafiz Muhammad Anas Majid",
  },

  description:
    "Portfolio of Hafiz Muhammad Anas Majid, an AI and Full-Stack Developer with experience at ML Bench and P2P Clouds. Explore my React, Next.js, MERN Stack, AI-powered applications, and modern software development projects.",

  keywords: [
    "Hafiz Muhammad Anas Majid",
    "Hafiz Anas",
    "Anas Majid",
    "Portfolio",
    "AI Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Tailwind CSS",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineer",
    "ML Bench",
    "P2P Clouds",
    "Pakistan Developer",
    "UMT Lahore",
  ],

  authors: [
    {
      name: "Hafiz Muhammad Anas Majid",
      url: "https://hafizanasmajid.vercel.app",
    },
  ],

  creator: "Hafiz Muhammad Anas Majid",

  publisher: "Hafiz Muhammad Anas Majid",

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

  openGraph: {
    title: "Hafiz Muhammad Anas Majid | AI & Full-Stack Developer",

    description:
      "Full-Stack Developer with experience at ML Bench and P2P Clouds, specializing in React, Next.js, MERN Stack, and AI-powered web applications.",

    url: "https://hafizanasmajid.vercel.app",

    siteName: "Hafiz Muhammad Anas Majid Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hafiz Muhammad Anas Majid Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hafiz Muhammad Anas Majid | AI & Full-Stack Developer",

    description:
      "AI & Full-Stack Developer | MERN Stack | React | Next.js | ML Bench | P2P Clouds",

    images: ["/og/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  alternates: {
    canonical: "https://hafizanasmajid.vercel.app",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <StructuredData />
        
        
        <AuthProvider>
          {children}
          </AuthProvider>
      </body>
    </html>
  );
}