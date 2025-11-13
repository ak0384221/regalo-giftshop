import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/micro-components/navbar";
import MyButton from "@/atomic-components/myButton";
import Logo from "@/atomic-components/logo";
import Footer from "@/micro-components/footer";
import AdminNavbar from "@/micro-components/adminNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regalo | Send A Gift",
  description: "Send a gift",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/regalo.png" type="image/x-icon" />
      </head>
      <body className="bg-rootBg text-white">
        <AdminNavbar />
        <div className=" mt-[15dvh]">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
