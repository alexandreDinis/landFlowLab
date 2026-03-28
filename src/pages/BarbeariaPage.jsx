import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Calendar, MapPin, Instagram, Phone, ArrowLeft, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BarbeariaPage() {
  return (
    <div className="min-h-screen bg-[#0d0a08] text-[#f4e8d1] font-serif selection:bg-[#c9a063] selection:text-black">
      {/* Top Banner - Back to Main */}
      <div className="bg-[#c9a063]/20 border-[#c9a063]/30 py-2 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#c9a063] hover:text-white transition-colors">
          <ArrowLeft className="w-3 h-3 mr-2" /> Voltar para Land Flow Lab (Sair do modo Demo)
        </Link>
      </div>

      <header className="py-8 px-10 flex justify-between items-center bg-black/40 backdrop-blur-lg border-b border-[#c9a063]/20">
        <div className="flex items-center gap-3">
          <Scissors className="w-8 h-8 text-[#c9a063]" />
          <span className="text-3xl font-black italic tracking-widest uppercase">D'BARBER <span className="text-[#c9a063]">PREMIUM</span></span>
        </div>
        <nav className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest">
          <a href="#servicos" className="hover:text-[#c9a063] transition-all">Serviços</a>
          <a href="#galeria" className="hover:text-[#c9a063] transition-all">Galeria</a>
          <a href="#agendar" className="bg-[#c9a063] text-black px-6 py-2 rounded transition-all hover:bg-white">RESERVAR AGORA</a>
        </nav>
      </header>

      <main>
        {/* Luxury Hero */}
        <section className="relative py-32 px-10 overflow-hidden min-h-[80vh] flex items-center">
           <div className="absolute inset-0 z-[-1] opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a063]/10 rounded-full blur-[100px]" />
           </div>

           <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="space-y-10"
             >
               <div className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a063] border-b border-[#c9a063]/30 pb-2">
                 ESTILO • TRADIÇÃO • EXCELÊNCIA
               </div>
               <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                 EXPERIÊNCIA <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a063] to-[#ebd2ae]">PREMIUM</span> <br />
                 DE BARBEARIA
               </h1>
               <p className="text-[#f4e8d1]/60 text-xl font-sans italic opacity-80 leading-relaxed max-w-md">
                 Transformamos o seu visual com a sofisticação da barbearia clássica aliada ao design moderno.
               </p>
               <div className="flex flex-col sm:flex-row gap-6">
                 <button className="bg-[#c9a063] text-black px-12 py-5 font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(201,160,99,0.3)]">
                   AGENDAR VISITA
                 </button>
                 <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#f4e8d1]/40 border-l border-white/10 pl-6">
                   <Clock className="w-5 h-5 text-[#c9a063]" /> Ter - Sáb: 09:00 - 21:00
                 </div>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="relative lg:p-10"
             >
                <div className="absolute inset-0 border border-[#c9a063]/20 translate-x-4 translate-y-4 -z-10" />
                <img 
                  src="/assets/barbearia.png" 
                  alt="D'Barber Premium Mockup" 
                  className="w-full h-auto shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
             </motion.div>
           </div>
        </section>

        {/* Exclusive Services Menu */}
        <section id="servicos" className="py-24 px-10 bg-black/20 border-y border-[#c9a063]/10">
           <div className="max-w-4xl mx-auto space-y-20">
              <div className="text-center space-y-6">
                 <h2 className="text-4xl font-black tracking-widest uppercase italic">MENU DE SERVIÇOS</h2>
                 <p className="text-[#c9a063]/60 font-sans italic">Apenas o essencial para o homem de bom gosto.</p>
              </div>
              <div className="space-y-12">
                 {[
                   { name: "Corte Executive", price: "R$ 80", desc: "Consultoria de imagem + Corte + Finalização." },
                   { name: "Barba Real", price: "R$ 65", desc: "Toalha quente + Lâmina + Hidratação." },
                   { name: "Combo Premium", price: "R$ 130", desc: "Corte + Barba + Massagem de couro cabeludo." }
                 ].map((service, i) => (
                   <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#c9a063]/10 pb-8 hover:bg-[#c9a063]/5 transition-all px-4 rounded">
                      <div className="space-y-1">
                         <h3 className="text-2xl font-black uppercase tracking-wider">{service.name}</h3>
                         <p className="text-[#f4e8d1]/30 text-xs italic">{service.desc}</p>
                      </div>
                      <div className="text-3xl font-black text-[#c9a063] leading-none">
                         {service.price}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <footer className="py-20 px-10 text-center space-y-10">
         <div className="flex justify-center gap-10 grayscale opacity-40">
            <Instagram className="w-6 h-6" />
            <Phone className="w-6 h-6" />
            <MapPin className="w-6 h-6" />
         </div>
         <p className="text-[#f4e8d1]/20 text-[10px] uppercase tracking-[0.4em]">
            D'BARBER PREMIUM • © 2024 • LAND FLOW LAB DEMO
         </p>
      </footer>
    </div>
  );
}
