"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573193197190"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] group"
      aria-label="Chat on WhatsApp"
    >
      {/* Efecto de pulso animado */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
      
      {/* Botón Principal */}
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
        <MessageCircle size={32} fill="currentColor" />
        
        {/* Tooltip opcional que aparece al pasar el mouse */}
        <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          ¿Necesitas asesoría? ¡Escríbenos!
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;