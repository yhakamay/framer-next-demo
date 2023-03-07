import "./globals.css";

import { Inter } from "next/font/google";

export const metadata = {
  title: "Framer Motion x Next.js Demo",
  description: "A sandbox to showcase how Framer Motion works with Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
