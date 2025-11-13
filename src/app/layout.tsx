import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regalo | Send A Gift",
  description: "Send a gift",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-rootBg">
        <div>{children}</div>
      </body>
    </html>
  );
}
