import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Calendar, MapPin, Instagram, Phone, ArrowLeft, Star, Clock, UserCheck, Shield, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BarbeariaPage() {
  const whatsappLink = "https://wa.me/5511933496135?text=Olá,%20quero%20agendar%20um%20corte";

  return (
    <div className="min-h-screen bg-[#0d0a08] text-[#f4e8d1] font-serif selection:bg-[#c9a063] selection:text-black antialiased">
      {/* Top Banner - Back to Main */}
      <div className="bg-[#c9a063]/20 border-[#c9a063]/30 py-2 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#c9a063] hover:text-white transition-colors">
          <ArrowLeft className="w-3 h-3 mr-2" /> Voltar para Land Flow Lab (Sair do modo Demo)
        </Link>
      </div>

      <header className="py-8 px-10 flex justify-between items-center bg-black/40 backdrop-blur-lg border-b border-[#c9a063]/20 sticky top-[33px] z-40">
        <div className="flex items-center gap-3">
          <Scissors className="w-8 h-8 text-[#c9a063]" />
          <span className="text-3xl font-black italic tracking-widest uppercase">D'BARBER <span className="text-[#c9a063]">PREMIUM</span></span>
        </div>
        <nav className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
          <a href="#experiencia" className="hover:text-[#c9a063] transition-all">Experiência</a>
          <a href="#servicos" className="hover:text-[#c9a063] transition-all">Serviços</a>
          <a href="#equipe" className="hover:text-[#c9a063] transition-all">Equipe</a>
          <a href="#agendar" className="bg-[#c9a063] text-black px-8 py-3 rounded-none transition-all hover:bg-white shadow-xl shadow-[#c9a063]/10">RESERVAR AGORA</a>
        </nav>
      </header>

      <main>
        {/* Luxury Hero */}
        <section className="relative py-32 px-10 overflow-hidden min-h-[90vh] flex items-center border-b border-[#c9a063]/10">
           <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-[#c9a063]/5 via-transparent to-transparent -z-10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a063]/10 rounded-full blur-[140px] -z-10 opacity-30" />

           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="space-y-12"
             >
               <div className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a063] border-b border-[#c9a063]/40 pb-4">
                 DEDICAÇÃO • ESTILO • LEGADO
               </div>
               <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter italic">
                 A ARTE <br />
                 DO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a063] to-[#ebd2ae] uppercase">VISUAL</span> <br />
                 MASCULINO.
               </h1>
               <p className="text-[#f4e8d1]/60 text-xl font-sans italic opacity-80 leading-relaxed max-w-md">
                 Elevamos o padrão da barbearia clássica. Aqui, cada serviço é uma obra-prima de design e cuidado pessoal.
               </p>
               <div className="flex flex-col sm:flex-row gap-8 items-center pt-8">
                 <a 
                   href={whatsappLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full sm:w-auto bg-[#c9a063] text-black px-14 py-6 font-black text-sm uppercase tracking-[0.4em] hover:bg-white transition-all shadow-[0_0_40px_rgba(201,160,99,0.3)] text-center"
                 >
                   AGENDAR VISITA
                 </a>
                 <div className="flex items-center gap-6 border-l border-white/5 pl-10">
                   <div className="text-center">
                      <div className="text-3xl font-black text-[#f4e8d1]">15k+</div>
                      <div className="text-[10px] uppercase font-bold text-[#c9a063] tracking-widest opacity-50">Clientes</div>
                   </div>
                   <div className="text-center">
                      <div className="text-3xl font-black text-[#f4e8d1]">4.9</div>
                      <div className="text-[10px] uppercase font-bold text-[#c9a063] tracking-widest opacity-50">Rating</div>
                   </div>
                 </div>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3, duration: 1 }}
               className="relative lg:p-14"
             >
                <div className="absolute inset-0 border-2 border-[#c9a063]/20 translate-x-10 translate-y-10 -z-10" />
                <div className="relative overflow-hidden group">
                  <img 
                    src="/assets/barbearia.png" 
                    alt="D'Barber Premium Mockup" 
                    className="w-full h-auto shadow-2xl grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/40 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                </div>
                {/* Vintage Badge */}
                <div className="absolute -top-10 -right-10 bg-black border border-[#c9a063]/30 p-10 rounded-full shadow-2xl hidden lg:flex flex-col items-center justify-center text-center">
                   <Award className="w-10 h-10 text-[#c9a063] mb-2" />
                   <p className="text-[10px] font-black uppercase tracking-widest">Desde <br /> 2012</p>
                </div>
             </motion.div>
           </div>
        </section>

        {/* Premium Experience Section (New) */}
        <section id="experiencia" className="py-32 px-10 bg-black/30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-20 border-y border-[#c9a063]/5">
           <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
              {[
                { title: "Lounge & Bar", desc: "Desfrute de nosso bar exclusivo com cafés selecionados e cervejas artesanais cortesia.", icon: <Shield /> },
                { title: "Consultoria", desc: "Análise visagista completa para alinhar o corte ao seu estilo e formato de rosto.", icon: <UserCheck /> },
                { title: "Toalha Quente", desc: "A técnica clássica de barbearia para relaxamento total e máxima precisão da lâmina.", icon: <Sparkles /> }
              ].map((item, i) => (
                <div key={i} className="space-y-6 group">
                   <div className="w-16 h-16 rounded-full border border-[#c9a063]/20 flex items-center justify-center text-[#c9a063] group-hover:bg-[#c9a063]/10 transition-all">
                      {item.icon}
                   </div>
                   <h3 className="text-3xl font-black italic tracking-widest uppercase">{item.title}</h3>
                   <p className="font-sans text-[#f4e8d1]/50 leading-relaxed italic pr-6 group-hover:text-[#f4e8d1]/80 transition-colors">"{item.desc}"</p>
                </div>
              ))}
           </div>
        </section>

        {/* Style Gallery Section (New) */}
        <section className="py-32 overflow-hidden">
           <div className="max-w-7xl mx-auto px-10 mb-16 flex justify-between items-end">
              <div className="space-y-4">
                 <h2 className="text-4xl md:text-5xl font-black italic tracking-widest uppercase">GALERIA DE ESTILO</h2>
                 <p className="text-[#c9a063]/50 font-bold uppercase text-[10px] tracking-[0.5em]">Inspirações dos mestres da lâmina</p>
              </div>
              <div className="hidden md:flex gap-4">
                 {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#c9a063]/20" />)}
                 <div className="w-10 h-2 rounded-full bg-[#c9a063]" />
              </div>
           </div>
           
           <div className="flex gap-10 px-10 overflow-x-auto no-scrollbar scroll-smooth pb-10">
              {[
                { title: "Fade Executive", desc: "Precisão lateral." },
                { title: "Pompadour Clássico", desc: "Volume e elegância." },
                { title: "Beard Sculpture", desc: "Linhas definidas." },
                { title: "Crew Cut Modern", desc: "Praticidade militar." }
              ].map((style, i) => (
                 <div key={i} className="min-w-[400px] aspect-[4/5] bg-[#1a1512] border border-[#c9a063]/10 group relative transition-all">
                    <div className="absolute inset-0 bg-[#c9a063]/10 opacity-0 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute inset-x-8 bottom-8 z-10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                       <h3 className="text-2xl font-black uppercase italic">{style.title}</h3>
                       <p className="text-[10px] font-black tracking-widest text-[#c9a063]/80 uppercase">{style.desc}</p>
                    </div>
                    {/* Mock Image Placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-[#c9a063]/20 font-black text-6xl italic grayscale group-hover:grayscale-0 transition-all">
                       STYLED
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Exclusive Services Menu */}
        <section id="servicos" className="py-32 px-10 bg-black/60 border-y border-[#c9a063]/10 relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a063]/5 blur-[100px] rounded-full pointer-events-none" />
           <div className="max-w-5xl mx-auto space-y-24">
              <div className="text-center space-y-8">
                 <h2 className="text-5xl md:text-7xl font-black italic tracking-widest uppercase">CATÁLOGO DE SERVIÇOS</h2>
                 <p className="text-[#c9a063]/40 font-sans italic max-w-xl mx-auto">Excelência técnica aplicada em cada detalhe da sua imagem pessoal.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-16">
                 {[
                   { name: "Corte Executive", price: "R$ 80", desc: "Corte técnico + higienização premium + finalização modeladora." },
                   { name: "Barba Real", price: "R$ 65", desc: "Toalha quente + massagem facial + alinhamendo na lâmina." },
                   { name: "Pigmentação", price: "R$ 45", desc: "Preenchimento de falhas com acabamento natural." },
                   { name: "Combo Legend", price: "R$ 130", desc: "Experiência completa: Corte + Barba + Massagem capilar." }
                 ].map((service, i) => (
                   <div key={i} className="flex items-start justify-between gap-10 border-b border-[#c9a063]/10 pb-10 group hover:border-[#c9a063]/50 transition-all cursor-default">
                      <div className="space-y-4">
                         <h3 className="text-3xl font-black uppercase italic tracking-wider leading-none">{service.name}</h3>
                         <p className="text-[#f4e8d1]/30 text-xs italic font-sans max-w-xs">{service.desc}</p>
                      </div>
                      <div className="text-4xl font-black text-[#c9a063] drop-shadow-[0_0_15px_rgba(201,160,99,0.2)]">
                         {service.price}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Team Showcase Section (New) */}
        <section id="equipe" className="py-32 px-10">
           <div className="max-w-7xl mx-auto space-y-20">
              <div className="text-center">
                 <h2 className="text-4xl font-black italic uppercase tracking-widest text-[#f4e8d1]/20">OS MESTRES DO CUIDADO</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                 {[
                   { name: "Marco 'The Blade'", role: "Especialista em Navalha", experience: "12 anos" },
                   { name: "Lucas Barber", role: "Mestre em Visagismo", experience: "08 anos" },
                   { name: "Bruno Silva", role: "Cortes Modernos / Fade", experience: "06 anos" }
                 ].map((member, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 p-10 border border-[#c9a063]/10 hover:bg-[#c9a063]/5 transition-all group">
                      <div className="w-32 h-32 rounded-full border border-[#c9a063]/30 p-2 overflow-hidden">
                         <div className="w-full h-full rounded-full bg-[#1a1512] flex items-center justify-center font-black text-[#c9a063]/30">
                            IMG
                         </div>
                      </div>
                      <div>
                         <h4 className="text-2xl font-black uppercase italic">{member.name}</h4>
                         <p className="text-[#c9a063]/60 text-[10px] uppercase font-bold tracking-widest mt-2">{member.role}</p>
                         <p className="text-white/20 text-[9px] uppercase font-black tracking-[0.3em] mt-4">{member.experience} de Experiência</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <footer className="py-24 px-10 bg-black border-t border-[#c9a063]/10 text-center space-y-12">
         <div className="flex justify-center gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
            <Instagram className="w-6 h-6 hover:text-[#c9a063] cursor-pointer" />
            <Phone className="w-6 h-6 hover:text-[#c9a063] cursor-pointer" />
            <MapPin className="w-6 h-6 hover:text-[#c9a063] cursor-pointer" />
         </div>
         <div className="space-y-2">
            <p className="text-[#f4e8d1]/20 text-[10px] uppercase tracking-[0.5em]">D'BARBER PREMIUM • © 2024</p>
            <p className="text-white/10 text-[8px] font-black tracking-widest">AV. NOVA EUROPA, 452 - SP • TER - SÁB: 09:00 - 21:00</p>
         </div>
         <p className="text-[#f4e8d1]/10 text-[9px] uppercase tracking-widest italic">
            CONSTRUÍDO POR LAND FLOW LAB • DEMONSTRAÇÃO PROFISSIONAL
         </p>
      </footer>
    </div>
  );
}
