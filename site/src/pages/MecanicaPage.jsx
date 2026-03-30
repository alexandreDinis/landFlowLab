import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, ChevronRight, ArrowLeft, Phone, Calendar, Star, MapPin, ShieldCheck, Zap, Gauge, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MecanicaPage() {
  const whatsappLink = "https://wa.me/5511933496135?text=Olá,%20quero%20um%20diagnóstico";

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-cyan-500 selection:text-black antialiased">
      {/* Top Banner - Back to Main */}
      <div className="bg-cyan-600/20 border-b border-cyan-500/30 py-2 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-white transition-colors">
          <ArrowLeft className="w-3 h-3 mr-2" /> Voltar para Land Flow Lab (Sair do modo Demo)
        </Link>
      </div>

      <header className="py-4 sm:py-6 px-4 sm:px-8 flex justify-between items-center bg-black/40 backdrop-blur-lg border-b border-white/5 sticky top-[33px] z-40">
        <div className="flex items-center gap-2">
          <div className="p-1.5 sm:p-2 bg-cyan-500/10 rounded-lg">
             <Settings className="w-5 h-5 sm:w-8 sm:h-8 text-cyan-500 animate-slow-spin-slow" />
          </div>
          <span className="text-lg sm:text-2xl font-black italic tracking-tighter uppercase">MECÂNICA <span className="text-cyan-500 underline decoration-2 underline-offset-4">TECH</span></span>
        </div>
        <nav className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-white/50">
          <a href="#processo" className="hover:text-cyan-500 transition-colors">Diagnóstico</a>
          <a href="#servicos" className="hover:text-cyan-500 transition-colors">Serviços</a>
          <a href="#depoimentos" className="hover:text-cyan-500 transition-colors">Depoimentos</a>
        </nav>
        <button className="bg-cyan-600 hover:bg-cyan-500 px-8 py-3 rounded-xl font-black text-xs transition-all shadow-lg shadow-cyan-500/20 uppercase tracking-widest">
          AGENDAR AGORA
        </button>
      </header>

      <main>
        {/* Modern Hero Section */}
        <section className="relative py-12 sm:py-28 px-4 sm:px-8 overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em]">
                Centro de Inteligência Automotiva
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight">
                MAIS QUE <br className="hidden sm:block" />
                MECÂNICA, <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">TECNOLOGIA.</span>
              </h1>
              <p className="text-white/50 text-xl leading-relaxed max-w-lg font-medium">
                Utilizamos inteligência de dados e equipamentos 3D para diagnosticar seu veículo com precisão cirúrgica.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-cyan-500 transition-all flex items-center justify-center shadow-2xl"
                >
                  SOLICITAR DIAGNÓSTICO <Zap className="ml-3 w-5 h-5 fill-current" />
                </a>
                <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                   <div className="text-2xl font-black text-cyan-500">4.9/5</div>
                   <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Avaliação no Google My Business</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full" />
              <img 
                src="/assets/oficina.png" 
                alt="Mecânica Tech Preview" 
                className="relative z-10 rounded-[40px] shadow-2xl border border-white/10"
              />
              {/* Floating Stat Card */}
              <div className="absolute bottom-10 -left-10 z-20 glass p-6 rounded-3xl border-cyan-500/20 hidden lg:block">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500 rounded-2xl">
                       <Gauge className="w-6 h-6 text-black" />
                    </div>
                    <div>
                       <p className="text-xs uppercase font-black text-white/40 tracking-widest">Performance</p>
                       <p className="text-xl font-black text-cyan-500">+45% Ganho Ativo</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnostic Process Section (New) */}
        <section id="processo" className="py-16 sm:py-32 px-4 sm:px-8 bg-black/40 border-y border-white/5">
           <div className="max-w-7xl mx-auto space-y-20">
              <div className="grid md:grid-cols-2 gap-10 items-end">
                 <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
                       COMO FUNCIONA NOSSO <br />
                       <span className="text-cyan-500">PROCESSO DE PRECISÃO</span>
                    </h2>
                    <p className="text-white/40 text-lg">Acabamos com o "achismo" mecânico. Aqui tudo é baseado em dados.</p>
                 </div>
                 <div className="flex items-center gap-4 text-cyan-500 font-black text-sm uppercase tracking-widest pb-2 cursor-pointer hover:underline underline-offset-8">
                    Ver ferramentas de diagnóstico <ChevronRight className="w-5 h-5" />
                 </div>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                 {[
                   { step: "01", title: "Scan de Entrada", desc: "Varredura completa em todos os módulos eletrônicos.", icon: <Search /> },
                   { step: "02", title: "Análise 3D", desc: "Verificação estrutural e mecânica com lasers de precisão.", icon: <Gauge /> },
                   { step: "03", title: "Relatório Digital", desc: "Você recebe o laudo no WhatsApp com fotos e vídeos.", icon: <ShieldCheck /> },
                   { step: "04", title: "Reparo Ativo", desc: "Execução com peças originais e garantia estendida.", icon: <Settings /> }
                 ].map((item, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="p-8 rounded-[35px] glass border-white/5 hover:border-cyan-500/30 transition-all group"
                   >
                      <div className="text-4xl font-black text-cyan-500/20 group-hover:text-cyan-500/40 mb-4">{item.step}</div>
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 font-black">
                         {item.icon}
                      </div>
                      <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Niche services enhancement */}
        <section id="servicos" className="py-16 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col items-center">
           <div className="text-center space-y-6 mb-20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                 Especialidades Tech
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight uppercase">SERVIÇOS ESPECIALIZADOS</h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                { title: "Diagnóstico Computadorizado", tags: ["Eletrônica", "Módulos", "Checkup"] },
                { title: "Manutenção Preventiva I.A.", tags: ["Óleo", "Filtros", "Direção"] },
                { title: "Reparos Híbridos/EV", tags: ["Baterias", "Motores", "Inversores"] }
              ].map((s, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-cyan-500/20 transition-all space-y-8">
                   <h3 className="text-3xl font-black tracking-tight">{s.title}</h3>
                   <div className="flex flex-wrap gap-2">
                      {s.tags.map(t => <span key={t} className="px-3 py-1 bg-cyan-500/5 border border-cyan-500/10 text-cyan-500 text-[10px] font-bold uppercase rounded-lg">{t}</span>)}
                   </div>
                   <p className="text-white/40 text-sm leading-relaxed">
                      Utilizamos tecnologia alemã para garantir que seu carro funcione como se tivesse acabado de sair da fábrica.
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* Niche Testimonials (New) */}
        <section id="depoimentos" className="py-16 sm:py-32 px-4 sm:px-8 bg-cyan-500/5 relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
             {[
               { name: "Ricardo Santos", car: "BMW 320i", text: "Resolviam um problema de injeção que 3 oficinas não conseguiram. Diagnosticado em 10 minutos." },
               { name: "Camila Lins", car: "Volvo XC60", text: "Atendimento impecável para carros híbridos. O laudo digital via WhatsApp traz muita confiança." },
               { name: "Marcos Paulo", car: "Audi A4", text: "Preço justo e alta tecnologia. Sinto segurança em deixar equipamentos tão caros nas mãos deles." }
             ].map((t, i) => (
                <div key={i} className="space-y-6">
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-cyan-500 fill-cyan-500" />)}
                   </div>
                   <p className="text-xl font-medium italic text-white/70 leading-relaxed">"{t.text}"</p>
                   <div>
                      <p className="text-lg font-black text-cyan-500">{t.name}</p>
                      <p className="text-xs uppercase font-bold text-white/30 tracking-widest">{t.car}</p>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* Emergency Footer (New) */}
        <section className="py-12 sm:py-24 px-4 sm:px-8 border-t border-white/5">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 p-6 sm:p-12 rounded-[30px] sm:rounded-[50px] bg-white text-black relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5">
                 <Settings className="w-64 h-64 -rotate-12" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                 <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">PANE ELÉTRICA <br /> OU MECÂNICA?</h3>
                 <p className="font-bold text-black/50 uppercase text-[10px] sm:text-xs tracking-[0.2em]">Atendimento de emergência 24h em toda capital.</p>
              </div>
              <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-black text-white rounded-2xl font-black text-lg sm:text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center">
                 CHAMAR AGORA <Phone className="ml-3 w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              </button>
           </div>
        </section>
      </main>

      <footer className="py-20 px-8 bg-black/80 text-center space-y-12">
         <div className="flex items-center justify-center gap-2 grayscale opacity-40">
            <Settings className="w-6 h-6" />
            <span className="text-xl font-black italic tracking-tighter">MECÂNICA TECH</span>
         </div>
         <div className="flex flex-col md:flex-row justify-center gap-10 text-[10px] font-black tracking-[0.3em] uppercase text-white/30">
            <div className="flex items-center justify-center gap-2"><MapPin className="w-4 h-4" /> Av. Paulista, 1000 - SP</div>
            <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> (11) 99999-9999</div>
         </div>
         <p className="text-white/20 text-[10px] tracking-widest">
            © 2024 Mecânica Tech. Orgulhosamente criado com Land Flow Lab. Demo Mode.
         </p>
      </footer>
    </div>
  );
}
