import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Almeida Kehl Advogados Associados | Florianópolis",
  description:
    "Advocacia especializada em Florianópolis, com atendimento presencial e online nas áreas trabalhista, civil, família, sucessões e previdenciário.",
  openGraph: {
    title: "Almeida Kehl Advogados Associados",
    description:
      "Atendimento jurídico ético, ágil e especializado em Jurerê Internacional, Florianópolis.",
    images: ["/almeida-office.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
