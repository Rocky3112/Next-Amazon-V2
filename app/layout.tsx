import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Amazon-V2",
  description: "Rocky NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header></Header>
        {children}
        <footer className=" footer footer-center p-5 bg-base-300 ">
<p>Copyright @ 2024 - All right reserved by Rocky Next-Amazon-V2</p>

        </footer>
        </div>
        </body>
    </html>
  );
}
