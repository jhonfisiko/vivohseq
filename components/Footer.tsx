import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000d1a] text-white border-t border-hseq-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-8 bg-hseq-gold rounded-full"></div>
              <h3 className="text-3xl font-black tracking-tighter text-white">VIVO <span className="text-hseq-gold">HSEQ</span></h3>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Líderes en implementación de Sistemas Integrados de Gestión. 
              Garantizamos la certificación y el cumplimiento legal de su empresa con estándares internacionales.
            </p>
            {/* REDES SOCIALES UNIFICADAS (Blancas que resaltan) */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/vivohseq" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-hseq-gold hover:text-[#000d1a] hover:border-hseq-gold transition-all duration-300 shadow-sm">
                <Facebook size={20} />
              </a>
              
              <a href="https://www.instagram.com/vivohseq/" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-hseq-gold hover:text-[#000d1a] hover:border-hseq-gold transition-all duration-300 shadow-sm">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: CONTACTO PREMIUM */}
          <div className="space-y-6">
            <h4 className="text-hseq-gold font-black text-sm uppercase tracking-widest">Canales Oficiales</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-hseq-gold/10 text-hseq-gold group-hover:bg-hseq-gold group-hover:text-[#000d1a] transition-all">
                  <Phone size={20} />
                </div>
                <span className="font-bold text-white text-lg">+57 319 3197190</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-hseq-gold/10 text-hseq-gold">
                  <Mail size={20} />
                </div>
                <span className="text-blue-100 font-medium">info@vivohseq.com</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-hseq-gold/10 text-hseq-gold">
                  <MapPin size={20} />
                </div>
                <span className="text-blue-100 text-sm leading-tight">
                  Sedes Principales:<br />
                  <strong className="text-white">Bogotá • Armenia • Cali • Ibagué</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: CERTIFICACIONES */}
          <div className="space-y-6">
            <h4 className="text-hseq-gold font-black text-sm uppercase tracking-widest">Alcance Normativo</h4>
            <div className="grid grid-cols-2 gap-2">
              {["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "ISO 18788", "RUC", "BASC", "SARLAFT"].map((norma) => (
                <div key={norma} className="flex items-center gap-2 text-[11px] font-bold text-blue-200/60 bg-white/5 p-2 rounded border border-white/10 hover:border-hseq-gold/30 transition-colors">
                  <div className="w-1.5 h-1.5 bg-hseq-gold rounded-full"></div>
                  {norma}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-blue-300/40 uppercase tracking-[0.3em]">
          <p>© 2026 VIVO HSEQ - TODOS LOS DERECHOS RESERVADOS</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-hseq-gold transition-colors">Privacidad</a>
            <a href="#" className="hover:text-hseq-gold transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;