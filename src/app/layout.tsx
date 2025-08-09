import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulbit — Regenerative Farming Solutions",
  description:
    "Pulbit helps farmers adopt sustainable, data-driven practices with visionary tools you can trust.",
  metadataBase: new URL("https://pulbit.local"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
