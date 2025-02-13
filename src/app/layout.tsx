import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Largiemore COA",
  description: "Largiemore Chalet Owners Association",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
