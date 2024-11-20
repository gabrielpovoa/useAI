import { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
});

export const metadata: Metadata = {
  title: "How to master the AI",
  description: "Learn prompts to master the use of AI on your daily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} antialiased`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
