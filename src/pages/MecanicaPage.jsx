import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, ChevronRight, ArrowLeft, Phone, Calendar, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MecanicaPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Banner - Back to Main */}
      <div className="bg-cyan-600/20 border-b border-cyan-500/30 py-2 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-white transition-colors">
          <ArrowLeft className="w-3 h-3 mr-2" /> Voltar para Land Flow Lab (Sair do modo Demo)
        </Link>
      </div>

      <header className="py-6 px-8 flex justify-between items-center bg-black/40 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center gap-2">
          <Settings className="w-8 h-8 text-cyan-500 animate-spin-slow" />
          <span className="text-2xl font-black italic tracking-tighter">MECÂNICA <span className="text-cyan-500">TECH</span></span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a href="#servicos" className="hover:text-cyan-500 transition-colors">Serviços</a>
          <a href="#depoimentos" className="hover:text-cyan-500 transition-colors">Depoimentos</a>
          <a href="#unidades" className="hover:text-cyan-500 transition-colors">Unidades</a>
        </nav>
        <button className="bg-cyan-600 hover:bg-cyan-500 px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg shadow-cyan-500/20">
          AGENDAR AGORA
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-bold uppercase tracking-widest">
                Diagnóstico 3D Computadorizado
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                A MANUTENÇÃO <br />
                QUE O SEU <br />
                <span className="text-cyan-500">CARRO MERECE.</span>
              </h1>
              <p className="text-white/50 text-xl leading-relaxed max-w-lg">
                Tecnologia de ponta e mecânicos especializados para garantir sua segurança e a performance máxima do seu veículo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-cyan-500 transition-all flex items-center justify-center">
                  Cote pelo WhatsApp <Phone className="ml-2 w-5 h-5" />
                </button>
                <div className="flex -space-x-2 items-center">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                    </div>
                  ))}
                  <div className="pl-4 text-xs font-bold text-white/40 uppercase tracking-widest">
                    +2.000 Carros Revisados
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
              <img 
                src="/assets/oficina.png" 
                alt="Mecânica Tech Preview" 
                className="relative z-10 rounded-3xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white/5 py-16 px-8 border-y border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-black text-cyan-500">10k+</div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Clientes Satisfeitos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-cyan-500">15+</div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Anos de Mercado</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-cyan-500">24h</div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Suporte Guincho</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-cyan-500">100%</div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Garantia Técnica</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-24 px-8 max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">NOSSOS SERVIÇOS</h2>
            <p className="text-white/40">Especialistas em nacionais e importados.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Diagnóstico", icon: <Settings /> },
              { title: "Mecânica", icon: <Wrench /> },
              { title: "Elétrica", icon: <ChevronRight /> }
            ].map((s, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  Utilizamos scanners de última geração para identificar problemas ocultos instantaneamente.
                </p>
                <div className="text-cyan-500 font-bold text-sm tracking-widest flex items-center cursor-pointer hover:underline">
                  SAIBA MAIS <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 px-8 bg-black border-t border-white/5 text-center space-y-8">
         <div className="flex items-center justify-center gap-2 grayscale opacity-40">
            <Settings className="w-6 h-6" />
            <span className="text-xl font-black italic tracking-tighter">MECÂNICA TECH</span>
         </div>
         <p className="text-white/20 text-sm max-w-md mx-auto">
            © 2024 Mecânica Tech. Orgulhosamente criado com Land Flow Lab. No demo mode.
         </p>
      </footer>
    </div>
  );
}
