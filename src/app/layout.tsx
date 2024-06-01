import type { Metadata } from "next";
import { leagueSpartan } from "./ui/fonts";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Gip's",
  description: "Search ip's all over the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
