import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script"; // 1. Importamos el componente de Script
import "./globals.css";

export const metadata = {
  title: "VIVO HSEQ | Consultoría y Certificación ISO en Colombia",
  description: "Asesoría profesional en Sistemas Integrados de Gestión, ISO 45001, 9001, 14001 y cumplimiento SG-SST.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* 2. Script de Umami con tu ID */}
        <Script 
          src="https://cloud.umami.is/script.js" 
          data-website-id="34564a8c-5543-4fbf-9215-88ddb57b98ea"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#001a33] selection:bg-hseq-gold selection:text-white">
        
        {/* PUNTO DE ANCLAJE CRÍTICO */}
        <div id="top" className="absolute top-0 left-0" />

        <Navbar />
        
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        <WhatsAppButton />
        <Footer />

        {/* Analíticas de Vercel */}
        <Analytics /> 
      </body>
    </html>
  );
}