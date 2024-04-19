// Import the required types from Next.js
import type { Metadata } from "next";

// Import the Inter font from the next/font package
import { Inter } from "next/font/google";

// Import the global styles
import "./globals.css";

// Initialize the Inter font with subsets
const inter = Inter({ subsets: ["latin"] });

// Define the metadata for the application
export const metadata: Metadata = {
  title: "Create Next",
  description: "Generated by create next app",
  icons: {
    icon: ['/favico/favicon.ico?v=4'],
    apple: ['/favico/apple-touch-icon.png?v=4'],
    shortcut: ['/favico/apple-touch-icon.png'],
  },
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

