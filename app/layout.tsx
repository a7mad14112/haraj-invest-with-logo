import type { Metadata } from "next";
import { Aref_Ruqaa } from "next/font/google";
import "./globals.css";

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-ruqaa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "حراج انڤست | سوق الفرص والمشاريع",
  description: "منصة رقمية لعرض المشاريع والفرص التجارية.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${arefRuqaa.variable} bg-slate-50 text-slate-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
