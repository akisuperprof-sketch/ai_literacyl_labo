import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "家庭AIリテラシー・ラボ",
  description: "考える・整理する・表現する",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
