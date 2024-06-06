import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-HC7LF45ZGQ" />
      </body>

    </html>
  );
}
