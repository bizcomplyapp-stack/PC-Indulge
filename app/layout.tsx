import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PC Indulge | Private Chef Experiences",
  description: "Bespoke private chef experiences by Chef Sindi Shozi for intimate dinners, home events, office meetings and special occasions.",
  metadataBase: new URL("https://pcindulge.example"),
  openGraph: { title: "PC Indulge — Nourish & Taste", description: "Your table. Beautifully indulged.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "PC Indulge — Nourish & Taste", description: "Premium private chef experiences by Chef Sindi Shozi.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
