import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-hseq-blue scroll-smooth">
      
      {/* SECCIÓN HERO CON VIDEO DE FONDO Y MAYOR TRANSPARENCIA */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* CONTENEDOR DE VIDEO */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          
          {/* OVERLAY MODIFICADO: Mucho más transparente (opacity-65) */}
          <div className="absolute inset-0 bg-[#001a33]/65 z-1"></div>
        </div>

        {/* Luces de ambiente decorativas */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-hseq-gold/10 rounded-full blur-[120px] z-1"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-hseq-gold/20 border border-hseq-gold/30 px-4 py-2 rounded-full mb-6 text-hseq-gold">
                <Star size={16} fill="currentColor" />
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase">Consultoría de Alto Nivel</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
                Liderazgo en <br />
                <span className="text-hseq-gold drop-shadow-lg">Sistemas HSEQ</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed border-l-4 border-hseq-gold pl-6">
                Transformamos el cumplimiento normativo en una ventaja competitiva para su negocio en Colombia.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="https://wa.me/573193197190" target="_blank" className="flex items-center justify-center gap-3 bg-hseq-gold hover:bg-[#b08d4a] text-hseq-blue text-lg font-black py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] active:scale-95">
                  CONTACTAR AHORA <ArrowRight size={22} />
                </a>
              </div>
            </div>

            {/* CAJA DE SERVICIOS DERECHA MODIFICADA: Ahora más translúcida */}
            <div className="relative">
              {/* Fondo cambiado a opacity-50 y backdrop-blur-lg */}
              <div className="bg-[#001a33]/50 backdrop-blur-lg border-2 border-hseq-gold p-10 rounded-3xl shadow-[0_0_40px_rgba(255,215,0,0.15)] relative overflow-hidden">
                <h3 className="text-hseq-gold text-2xl font-black mb-8 flex items-center gap-3">
                  <ShieldCheck size={32} /> PORTAFOLIO ELITE
                </h3>
                <ul className="space-y-5">
                  {[
                    { t: "ISO 9001 / 14001 / 45001", d: "Calidad, Ambiental y Seguridad" },
                    { t: "ISO 27001 / 18788", d: "Información y Seguridad Privada" },
                    { t: "SARLAFT / BASC / RUC", d: "Riesgos, Comercio y Contratistas" },
                    { t: "Circular 027 de 2026", d: "Reporte Obligatorio MinTrabajo" }
                  ].map((item, index) => (
                    <li key={index} className="group flex items-start gap-4">
                      <div className="mt-1 bg-hseq-gold rounded-md p-1 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="text-hseq-blue w-4 h-4" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg group-hover:text-hseq-gold transition-colors">{item.t}</p>
                        <p className="text-blue-200/80 text-sm font-medium">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEDES (Mantenemos el diseño original, se superpone al Hero) */}
      <section className="bg-hseq-gold py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-hseq-blue font-black tracking-widest text-sm">
          <span>BOGOTÁ</span><span>|</span><span>ARMENIA</span><span>|</span><span>IBAGUÉ</span><span>|</span><span>CALI</span>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-[#001a33] border-t border-hseq-gold/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-hseq-gold font-black text-sm uppercase tracking-[0.4em] mb-4">Lo que ofrecemos</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-white mb-16">Servicios Especializados</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Implementación ISO", desc: "Expertos en 9001, 14001, 45001 y 27001.", icon: <ShieldCheck className="w-10 h-10" /> },
              { title: "Gestión SST", desc: "Sistemas de Seguridad y Salud en el Trabajo según la ley.", icon: <CheckCircle2 className="w-10 h-10" /> },
              { title: "Auditorías", desc: "Evaluaciones internas y preparación para certificaciones.", icon: <Star className="w-10 h-10" /> },
            ].map((srv, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-hseq-gold transition-all group">
                <div className="text-hseq-gold mb-4 group-hover:scale-110 transition-transform">{srv.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-blue-200/70">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="scroll-mt-20 py-24 bg-gradient-to-r from-[#001a33] to-[#002b55] text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl md:text-5xl font-black italic text-hseq-gold">Su aliado estratégico.</h3>
            <p className="text-lg text-blue-100/90 leading-relaxed border-l-4 border-hseq-gold pl-8">
              VIVO HSEQ ofrece soluciones reales y personalizadas para que usted se concentre en hacer crecer su negocio mientras nosotros cuidamos su cumplimiento legal.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-4xl font-black text-hseq-gold">100%</p>
                <p className="text-xs uppercase font-bold text-blue-200">Legal</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-4xl font-black text-hseq-gold">+50</p>
                <p className="text-xs uppercase font-bold text-blue-200">Clientes</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-4 bg-hseq-gold/20 rounded-[2rem] blur-2xl"></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-hseq-gold/30">
              <Image src="/imagen1.png" alt="Vivo HSEQ" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* NORMATIVAS */}
      <section id="normativas" className="py-24 bg-[#001a33] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-hseq-gold p-10 rounded-3xl text-hseq-blue flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <h3 className="text-3xl font-black">Circular 027 de 2026</h3>
              <p className="font-bold opacity-80 italic text-lg">¿Ya realizó su reporte anual ante el MinTrabajo?</p>
            </div>
            <a href="https://wa.me/573193197190" target="_blank" className="bg-hseq-blue text-white px-10 py-5 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
              ASESORARME AHORA
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}