import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react"; // 1. Importación
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
      <body className="antialiased min-h-screen flex flex-col bg-[#001a33] selection:bg-hseq-gold selection:text-white">
        
        {/* PUNTO DE ANCLAJE CRÍTICO */}
        <div id="top" className="absolute top-0 left-0" />

        <Navbar />
        
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        <WhatsAppButton />
        <Footer />

        {/* 2. Componente de Analíticas */}
        <Analytics /> 
      </body>
    </html>
  );
}