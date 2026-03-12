"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#top" }, // Cambiado de "/" a "#top"
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Normativas", href: "#normativas" },
  ];

  // Función para cerrar el menú y asegurar el scroll
  const handleScroll = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#001a33] border-b border-hseq-gold/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO CLICKEABLE PARA SUBIR AL INICIO */}
          <Link href="#top" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="bg-hseq-gold p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-[#001a33] w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-tight leading-none">
                VIVO HSEQ
              </span>
              <span className="text-[10px] text-hseq-gold font-bold uppercase tracking-[0.2em]">
                Consultoría & Certificación
              </span>
            </div>
          </Link>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-blue-100 hover:text-hseq-gold font-bold text-sm uppercase tracking-wider transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/573193197190"
              target="_blank"
              className="bg-hseq-gold text-[#001a33] px-6 py-2.5 rounded-full font-black text-sm hover:bg-white transition-all shadow-[0_0_15px_rgba(197,160,89,0.4)] active:scale-95"
            >
              ASESORÍA YA
            </Link>
          </div>

          {/* BOTÓN MÓVIL */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-hseq-gold p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-[#001a33] border-b border-hseq-gold/20 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleScroll}
                className="block px-3 py-4 text-base font-bold text-white border-b border-white/5 hover:text-hseq-gold"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/573193197190"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-hseq-gold text-[#001a33] px-6 py-4 rounded-xl font-black mt-4"
            >
              SOLICITAR ASESORÍA
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;