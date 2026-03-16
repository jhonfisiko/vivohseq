import { ArrowRight, CheckCircle2, ShieldCheck, Star, Menu, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-hseq-blue scroll-smooth">
      
      {/* NAVBAR / ENCABEZADO FIJO */}
      <nav className="fixed top-0 w-full z-50 bg-[#001a33]/90 backdrop-blur-md border-b border-hseq-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* LOGO - Usando el que guardaste en /public/logo.png */}
          <div className="relative w-40 h-12 md:w-56 md:h-16 transition-transform hover:scale-105">
            <Image 
              src="/logo2.png" 
              alt="Vivo HSEQ Logo" 
              fill 
              className="object-contain"
              priority 
            />
          </div>
          
          {/* MENÚ ESCRITORIO */}
          <div className="hidden md:flex items-center gap-8 text-white font-bold text-xs uppercase tracking-[0.2em]">
            <a href="#servicios" className="hover:text-hseq-gold transition-colors">Servicios</a>
            <a href="#sobre-mi" className="hover:text-hseq-gold transition-colors">Nosotros</a>
            <a href="#normativas" className="hover:text-hseq-gold transition-colors">Normativas</a>
            <a 
              href="https://wa.me/573193197190" 
              target="_blank" 
              className="bg-hseq-gold text-hseq-blue px-6 py-2.5 rounded-full hover:bg-white transition-all shadow-lg"
            >
              CONTACTO
            </a>
          </div>

          {/* MENÚ MÓVIL (Icono) */}
          <button className="md:hidden text-hseq-gold">
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* SECCIÓN HERO */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-40 overflow-hidden">
        {/* VIDEO DE FONDO */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-[#001a33]/70 z-1"></div>
        </div>

        {/* Luces decorativas */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-hseq-gold/10 rounded-full blur-[120px] z-1"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-hseq-gold/20 border border-hseq-gold/30 px-4 py-2 rounded-full mb-8 text-hseq-gold">
                <Star size={16} fill="currentColor" />
                <span className="text-xs font-black tracking-widest uppercase">Consultoría de Alto Nivel</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8">
                Liderazgo en <br />
                <span className="text-hseq-gold drop-shadow-2xl">Sistemas HSEQ</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed border-l-4 border-hseq-gold pl-6">
                Transformamos el cumplimiento normativo en una ventaja estratégica para su empresa en toda Colombia.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="https://wa.me/573193197190" target="_blank" className="flex items-center justify-center gap-3 bg-hseq-gold hover:bg-white text-hseq-blue text-lg font-black py-5 px-10 rounded-full transition-all shadow-xl active:scale-95">
                  CONTACTAR AHORA <ArrowRight size={22} />
                </a>
              </div>
            </div>

            {/* CAJA DE SERVICIOS TRANSLÚCIDA */}
            <div className="relative">
              <div className="bg-[#001a33]/40 backdrop-blur-xl border-2 border-hseq-gold/50 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <h3 className="text-hseq-gold text-2xl font-black mb-8 flex items-center gap-3">
                  <ShieldCheck size={32} /> PORTAFOLIO ELITE
                </h3>
                <ul className="space-y-6">
                  {[
                    { t: "ISO 9001 / 14001 / 45001", d: "Calidad, Ambiental y Seguridad" },
                    { t: "ISO 27001 / 18788", d: "Información y Seguridad Privada" },
                    { t: "SARLAFT / BASC / RUC", d: "Riesgos, Comercio y Contratistas" },
                    { t: "Circular 027 de 2026", d: "Reporte Obligatorio MinTrabajo" }
                  ].map((item, index) => (
                    <li key={index} className="group flex items-start gap-4">
                      <div className="mt-1 bg-hseq-gold rounded-lg p-1.5 group-hover:rotate-12 transition-transform">
                        <CheckCircle2 className="text-hseq-blue w-4 h-4" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg group-hover:text-hseq-gold transition-colors">{item.t}</p>
                        <p className="text-blue-200/70 text-sm font-medium">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER DE SEDES */}
      <section className="bg-hseq-gold py-12 relative z-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-hseq-blue font-black tracking-[0.3em] text-sm md:text-base">
          <span>BOGOTÁ</span><span className="hidden md:block opacity-30">•</span>
          <span>ARMENIA</span><span className="hidden md:block opacity-30">•</span>
          <span>IBAGUÉ</span><span className="hidden md:block opacity-30">•</span>
          <span>CALI</span><span className="hidden md:block opacity-30">•</span>
          <span>CIUDAD DE MEXICO CDMX</span>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-32 bg-[#001a33] border-t border-hseq-gold/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-hseq-gold font-black text-sm uppercase tracking-[0.4em] mb-4">Lo que ofrecemos</h2>
          <p className="text-4xl md:text-6xl font-black text-white mb-20">Servicios Especializados</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              { title: "Implementación ISO", desc: "Expertos en 9001, 14001, 45001 y 27001 con enfoque a resultados.", icon: <ShieldCheck className="w-12 h-12" /> },
              { title: "Gestión SST", desc: "Sistemas de Seguridad y Salud en el Trabajo cumpliendo 100% de ley.", icon: <CheckCircle2 className="w-12 h-12" /> },
              { title: "Auditorías de Valor", desc: "Evaluaciones internas reales para garantizar su certificación.", icon: <Star className="w-12 h-12" /> },
            ].map((srv, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-hseq-gold transition-all group hover:-translate-y-2">
                <div className="text-hseq-gold mb-6 group-hover:scale-110 transition-transform">{srv.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{srv.title}</h3>
                <p className="text-blue-200/60 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN SOBRE MÍ */}
      <section id="sobre-mi" className="scroll-mt-20 py-32 bg-gradient-to-br from-[#001a33] to-[#002b55] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <h3 className="text-5xl md:text-7xl font-black text-hseq-gold leading-none">Su aliado <br/>estratégico.</h3>
            <p className="text-xl text-blue-100/80 leading-relaxed border-l-4 border-hseq-gold pl-8">
              En **VIVO HSEQ** entendemos que el cumplimiento no debe ser una carga, sino un motor de crecimiento. Ofrecemos soluciones a medida para que su empresa opere con total tranquilidad legal.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <p className="text-5xl font-black text-hseq-gold">100%</p>
                <p className="text-sm uppercase font-bold text-blue-300 tracking-widest mt-2">Cumplimiento Legal</p>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <p className="text-5xl font-black text-hseq-gold">+50</p>
                <p className="text-sm uppercase font-bold text-blue-300 tracking-widest mt-2">Empresas Líderes</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-4 bg-hseq-gold/20 rounded-[3rem] blur-3xl group-hover:bg-hseq-gold/30 transition-all"></div>
            <div className="relative aspect-square md:aspect-video rounded-[2.5rem] overflow-hidden border-2 border-hseq-gold/30 shadow-2xl">
              <Image src="/imagen1.png" alt="Equipo VIVO HSEQ" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NORMATIVAS / CTA */}
      <section id="normativas" className="py-24 bg-[#001a33] scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-hseq-gold to-[#b08d4a] p-12 rounded-[3rem] text-hseq-blue flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(197,160,89,0.4)]">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-black mb-2 tracking-tight">Circular 027 de 2026</h3>
              <p className="font-bold opacity-90 text-xl italic">¿Ya realizó su reporte anual ante el MinTrabajo?</p>
            </div>
            <a href="https://wa.me/573193197190" target="_blank" className="bg-hseq-blue text-white px-12 py-6 rounded-full font-black hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap">
              ASESORARME AHORA
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#000d1a] py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="relative w-48 h-12">
              <Image src="/logo2.png" alt="Logo Footer" fill className="object-contain" />
            </div>
            <p className="text-blue-200/50 text-sm">Consultoría especializada en sistemas integrados de gestión y seguridad en el trabajo.</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-hseq-gold font-bold uppercase tracking-widest">Contacto Directo</h4>
            <div className="space-y-4 text-blue-100/80">
              <p className="flex items-center gap-3"><Phone size={18} className="text-hseq-gold" /> +57 319 319 7190</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-hseq-gold" /> info@vivohseq.com</p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-hseq-gold" /> Presencia Nacional en Colombia</p>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-hseq-gold font-bold uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-blue-100/50 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tratamiento de Datos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li>© {new Date().getFullYear()} VIVO HSEQ.</li>
            </ul>
          </div>
        </div>
      </footer>

    </main>
  );
}