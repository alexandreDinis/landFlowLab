import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity, MapPin, Phone, ArrowLeft, Star, Heart, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DentistaPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a2b3c] font-sans selection:bg-[#4ea8de] selection:text-white">
      {/* Top Banner - Back to Main */}
      <div className="bg-[#4ea8de]/10 border-b border-[#4ea8de]/20 py-2 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#4ea8de] hover:text-[#1a2b3c] transition-colors">
          <ArrowLeft className="w-3 h-3 mr-2" /> Voltar para Land Flow Lab (Sair do modo Demo)
        </Link>
      </div>

      <header className="py-6 px-10 flex justify-between items-center bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-[33px] z-40">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-[#4ea8de] fill-[#4ea8de]" />
          <span className="text-2xl font-black text-[#1a2b3c] tracking-tight">SORRISO <span className="text-[#4ea8de]">DENTAL</span></span>
        </div>
        <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-500 uppercase tracking-widest">
          <a href="#especialidades" className="hover:text-[#4ea8de] transition-all">Especialidades</a>
          <a href="#sobre" className="hover:text-[#4ea8de] transition-all">Sobre</a>
          <a href="#contato" className="bg-[#4ea8de] text-white px-8 py-3 rounded-full hover:bg-[#1a2b3c] transition-all shadow-xl shadow-[#4ea8de]/20">AGENDAR CONSULTA</a>
        </nav>
      </header>

      <main>
        {/* Clinical Clean Hero */}
        <section className="relative py-28 px-10 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-[#4ea8de] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
                Cuidado com Excelência e Carinho
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-[#1a2b3c] leading-[1.1] tracking-tighter">
                SUA SAÚDE BUCAL <br />
                EM <span className="text-[#4ea8de]">BOAS MÃOS</span>.
              </h1>
              <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-lg">
                Cuidando do seu sorriso com tecnologia de ponta e um atendimento humanizado no coração da sua cidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="bg-[#1a2b3c] text-white px-12 py-5 rounded-none font-black text-xs uppercase tracking-widest hover:bg-[#4ea8de] transition-all shadow-2xl flex items-center justify-center">
                  AGENDAR MINHA CONSULTA <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                </button>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  +500 Avaliações 5 Estrelas
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative p-10"
            >
              <div className="absolute inset-x-10 inset-y-0 bg-[#4ea8de]/5 rounded-[60px] blur-3xl -z-10" />
              <img 
                src="/assets/dentista.png" 
                alt="Sorriso Dental Mockup" 
                className="w-full h-auto rounded-[40px] shadow-2xl border-8 border-white"
              />
            </motion.div>
          </div>
        </section>

        {/* Specialists Highlights */}
        <section id="especialidades" className="py-24 px-10 max-w-6xl mx-auto space-y-20">
           <div className="text-center space-y-6">
              <h2 className="text-4xl font-black text-[#1a2b3c] tracking-tight">NOSSAS ESPECIALIDADES</h2>
              <div className="w-20 h-1 bg-[#4ea8de] mx-auto rounded-full" />
           </div>
           <div className="grid md:grid-cols-3 gap-8 ">
              {[
                { title: "Clínica Geral", icon: <CheckCircle /> },
                { title: "Ortodontia", icon: <Activity /> },
                { title: "Implantes", icon: <Star /> }
              ].map((spec, i) => (
                <div key={i} className="p-12 rounded-[40px] bg-white border border-gray-100 hover:border-[#4ea8de]/30 hover:shadow-2xl transition-all group text-center space-y-6">
                   <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-[#4ea8de] mx-auto group-hover:scale-110 transition-transform">
                      {spec.icon}
                   </div>
                   <h3 className="text-2xl font-black text-[#1a2b3c] tracking-tight">{spec.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed px-4">
                      Cuidando do seu sorriso com carinho e resultado garantido.
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* Mock Testimonial Section */}
        <section className="bg-gray-50 py-24 px-10">
           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 border-l-4 border-[#4ea8de] pl-12">
              <div className="space-y-6">
                 <div className="flex gap-1 text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
                 </div>
                 <blockquote className="text-2xl font-semibold text-[#1a2b3c] italic leading-relaxed">
                   "A melhor experiência que já tive em uma clínica. Atendimento impecável e o resultado final superou minhas expectativas."
                 </blockquote>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-200" />
                    <div>
                       <p className="font-bold text-[#1a2b3c]">Ana Silva</p>
                       <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Paciente de Ortodontia</p>
                    </div>
                 </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                 <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                   <Clock className="w-5 h-5 text-[#4ea8de]" /> Seg - Sex: 08:00 - 18:00
                 </div>
                 <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                   <MapPin className="w-5 h-5 text-[#4ea8de]" /> Av. Central, 1234 - Centro
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-20 px-10 text-center bg-white border-t border-gray-100 space-y-6">
         <div className="flex items-center justify-center gap-2 grayscale opacity-30">
            <Heart className="w-6 h-6 fill-current" />
            <span className="text-xl font-black tracking-tight text-[#1a2b3c]">SORRISO DENTAL</span>
         </div>
         <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em] max-w-md mx-auto">
            © 2024 Clínica Sorriso Dental. Landing page demonstrativa criada com Land Flow Lab.
         </p>
      </footer>
    </div>
  );
}
