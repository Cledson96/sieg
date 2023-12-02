import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
export const metadata: Metadata = {
  title: "SIEG - AD",
  description: "https://sieg-ad.com.br/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
