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
  title: "Ermeson Advogados | Advogado em Florianópolis",
  description:
    "Atendimento jurídico em Florianópolis com orientação clara, estratégia e contato direto pelo WhatsApp.",
  openGraph: {
    title: "Ermeson Advogados | Advogado em Florianópolis",
    description:
      "Atendimento jurídico claro, acolhedor e estratégico no Centro de Florianópolis.",
    images: ["/emerson-office.png"],
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
