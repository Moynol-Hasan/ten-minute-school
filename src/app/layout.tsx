import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "IELTS Course",
  description: "Master all four IELTS modules with expert guidance, practice materials, and proven strategies to achieve your desired band score.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${poppins.variable}`}>
      <body
      
      suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
