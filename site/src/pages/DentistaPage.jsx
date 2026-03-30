import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity, MapPin, Phone, ArrowLeft, Star, Heart, CheckCircle, Clock, ShieldCheck, Zap, Award, Sparkles, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DentistaPage() {
  const whatsappLink = "https://wa.me/5511933496135?text=Olá,%20quero%20agendar%20uma%20avaliação";

  return (
    <div className="min-h-screen bg-white text-[#1a2b3c] font-sans selection:bg-[#4ea8de] selection:text-white antialiased">
      {/* Top Banner - Back to Main */}
      <div className="bg-[#4ea8de]/10 border-b border-[#4ea8de]/20 py-2 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#4ea8de] hover:text-[#1a2b3c] transition-colors">
          <ArrowLeft className="w-3 h-3 mr-2" /> Voltar para Land Flow Lab (Sair do modo Demo)
        </Link>
      </div>

      <header className="py-4 sm:py-6 px-4 sm:px-10 flex justify-between items-center bg-white/90 backdrop-blur-xl border-b border-gray-100 sticky top-[33px] z-40">
        <div className="flex items-center gap-2">
           <div className="p-1.5 sm:p-2 bg-blue-50 rounded-2xl shadow-sm">
             <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#4ea8de] fill-[#4ea8de]" />
           </div>
          <span className="text-lg sm:text-2xl font-black text-[#1a2b3c] tracking-tighter uppercase italic">SORRISO <span className="text-[#4ea8de]">DENTAL</span></span>
        </div>
        <nav className="hidden md:flex gap-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
          <a href="#tecnologia" className="hover:text-[#4ea8de] transition-colors">Prótese & Estética</a>
          <a href="#transformacoes" className="hover:text-[#4ea8de] transition-colors">Casos</a>
          <a href="#equipe" className="hover:text-[#4ea8de] transition-colors">Especialistas</a>
          <a href="#contato" className="bg-[#4ea8de] text-white px-10 py-3 rounded-full hover:bg-[#1a2b3c] transition-all shadow-xl shadow-[#4ea8de]/20">AGENDAR AVALIAÇÃO</a>
        </nav>
      </header>

      <main>
        {/* Clinical Clean Hero */}
        <section className="relative py-16 sm:py-32 px-4 sm:px-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white min-h-[90vh] flex items-center">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 text-[#4ea8de] text-[10px] font-black uppercase tracking-[0.3em] shadow-sm border border-[#4ea8de]/10"
              >
                Cuidado Moderno com Excelência
              </motion.div>
              <h1 className="text-4xl sm:text-7xl md:text-8xl font-black text-[#1a2b3c] leading-[0.95] tracking-tighter italic">
                A EVOLUÇÃO <br className="hidden sm:block" />
                DO SEU <br className="hidden sm:block" />
                <span className="text-[#4ea8de] uppercase underline decoration-[#1a2b3c]/10 decoration-8 underline-offset-8">SORRISO</span>.
              </h1>
              <p className="text-gray-500 text-2xl font-medium leading-relaxed max-w-lg">
                Combinamos alta tecnologia com um toque humano para transformar vidas através de sorrisos saudáveis e radiantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 pt-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a2b3c] text-white px-14 py-6 rounded-none font-black text-xs uppercase tracking-[0.4em] hover:bg-[#4ea8de] transition-all shadow-2xl text-center"
                >
                  AGENDAR MINHA AVALIAÇÃO <Zap className="ml-2 w-5 h-5 inline fill-current" />
                </a>
                <div className="flex items-center gap-6 border-l border-gray-100 pl-10">
                   <div className="text-center">
                      <div className="text-4xl font-black text-[#1a2b3c]">4.9</div>
                      <div className="text-[10px] uppercase font-black text-[#4ea8de] tracking-[0.2em] mt-1 space-x-1">
                        <Star className="w-3 h-3 inline fill-current" /> <Star className="w-3 h-3 inline fill-current" /> <Star className="w-3 h-3 inline fill-current" /> <Star className="w-3 h-3 inline fill-current" /> <Star className="w-3 h-3 inline fill-current" />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#4ea8de]/5 rounded-[80px] blur-[120px] -z-10 animate-pulse" />
              <div className="relative p-10 bg-white shadow-2xl rounded-[100px] border border-gray-50 group">
                <img 
                  src="/assets/dentista.png" 
                  alt="Sorriso Dental Mockup" 
                  className="w-full h-auto rounded-[80px] shadow-sm transition-transform duration-1000 group-hover:scale-103"
                />
                <div className="absolute -bottom-10 -right-10 bg-[#4ea8de] text-white p-10 rounded-[60px] shadow-2xl hidden lg:block border-8 border-white">
                   <Award className="w-12 h-12 mb-4" />
                   <p className="text-3xl font-black tracking-tighter">12+ Anos</p>
                   <p className="text-[10px] uppercase font-black tracking-widest opacity-60">de Tradição Médica</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Clinical Stats - Trust Bar */}
        <section className="bg-[#1a2b3c] py-12 sm:py-20 px-4 sm:px-10 text-white">
           <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
              <div className="space-y-2">
                 <div className="text-5xl font-black text-[#4ea8de]">5k+</div>
                 <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40">Pacientes Felizes</p>
              </div>
              <div className="space-y-2">
                 <div className="text-5xl font-black text-[#4ea8de]">10k+</div>
                 <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40">Implantes Realizados</p>
              </div>
              <div className="space-y-2">
                 <div className="text-5xl font-black text-[#4ea8de]">100%</div>
                 <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40">Segurança Estéril</p>
              </div>
              <div className="space-y-2">
                 <div className="text-5xl font-black text-[#4ea8de]">24h</div>
                 <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40">Suporte Emergencial</p>
              </div>
           </div>
        </section>

        {/* Technology & Clinical Excellence (New) */}
        <section id="tecnologia" className="py-20 sm:py-40 px-4 sm:px-10 max-w-7xl mx-auto space-y-16 sm:space-y-32">
           <div className="grid md:grid-cols-2 gap-12 sm:gap-24 items-center">
              <div className="space-y-8 sm:space-y-10 order-2 md:order-1">
                 <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-[#1a2b3c] tracking-tighter italic uppercase leading-tight">TECNOLOGIA <br /> <span className="text-[#4ea8de]">A FAVOR</span> DA SAÚDE</h2>
                 <p className="text-gray-400 text-lg sm:text-xl font-medium leading-relaxed">Não é apenas sorrir, é sentir-se bem. Investimos nos equipamentos mais modernos do mundo para diagnósticos indolores e precisos.</p>
                 <div className="space-y-6">
                    {[
                      { title: "Escaneamento 3D Intraloral", desc: "Dê adeus às moldagens desconfortáveis com gesso." },
                      { title: "Anestesia Sem Dor (I.A.)", desc: "Controle digital de entrada para conforto absoluto." },
                      { title: "Laser Whitening Premium", desc: "Dentes brancos em apenas 45 minutos de sessão." }
                    ].map((tech, i) => (
                      <div key={i} className="flex gap-4 sm:gap-6 group">
                         <div className="mt-1"><CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#4ea8de]" /></div>
                         <div className="space-y-2">
                            <h4 className="text-xl sm:text-2xl font-black text-[#1a2b3c] uppercase italic tracking-tight">{tech.title}</h4>
                            <p className="text-gray-500 text-xs sm:text-sm font-medium">{tech.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative order-1 md:order-2">
                 <div className="aspect-square bg-blue-50 rounded-[100px] flex items-center justify-center text-[#4ea8de]/40 font-black text-9xl">TECH</div>
                 <div className="absolute -top-10 -left-10 glass p-8 rounded-[40px] border-blue-100 flex items-center gap-4">
                    <Sparkles className="w-8 h-8 text-[#4ea8de]" />
                    <div>
                       <p className="text-sm font-black text-[#1a2b3c] uppercase">Padrão Ouro</p>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Equipamentos 2024</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Success Stories (New) */}
        <section id="transformacoes" className="py-16 sm:py-32 px-4 sm:px-10 bg-gray-50 border-y border-gray-100">
           <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
              <div className="text-center space-y-6">
                 <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2b3c] tracking-widest uppercase italic bg-white inline-block px-10 py-4 shadow-sm border border-gray-100">CASOS DE SUCESSO</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                 {[
                    { patient: "Letícia Miranda", case: "Lentes de Contato", review: "Meu sonho era ter um sorriso de comercial. Fiz tudo em 1 semana!", time: "Sessões: 02" },
                    { patient: "Carlos Andrade", car: "Implante Total", review: "Não conseguia comer o que gostava. A equipe mudou minha vida social.", time: "Sessões: 04" }
                 ].map((story, i) => (
                    <div key={i} className="bg-white p-12 rounded-[50px] shadow-sm border border-gray-100 space-y-8 group transition-all hover:bg-[#4ea8de] hover:text-white">
                       <div className="flex justify-between items-start">
                          <Stars />
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100">{story.time}</span>
                       </div>
                       <blockquote className="text-2xl font-black tracking-tight leading-relaxed">
                         "{story.review}"
                       </blockquote>
                       <div className="flex items-center gap-4 border-t border-gray-50 group-hover:border-white/20 pt-8">
                          <div className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-white/20" />
                          <div>
                             <p className="font-black uppercase tracking-tight italic">{story.patient}</p>
                             <p className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">{story.case}</p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Specialist Team (New) */}
        <section id="equipe" className="py-40 px-10 max-w-7xl mx-auto flex flex-col items-center">
           <div className="text-center space-y-4 mb-24">
              <p className="text-[#4ea8de] font-black text-xs uppercase tracking-[0.4em]">Autoridade Clínica</p>
              <h2 className="text-5xl md:text-6xl font-black text-[#1a2b3c] tracking-tight uppercase">DOUTORES ESPECIALISTAS</h2>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12 w-full">
              {[
                { name: "Dr. André Santos", role: "PhD em Ortodontia", bio: "Especialista em alinhadores invisíveis e estética avançada." },
                { name: "Dra. Beatriz Costa", role: "Mestre em Implantodontia", bio: "Referência nacional em procedimentos indolores e carga imediata." },
                { name: "Dr. Felipe Lima", role: "Estética Bucal", bio: "Focado em harmonização orofacial e lentes de porcelana premium." }
              ].map((dr, i) => (
                 <div key={i} className="text-center space-y-8 p-12 rounded-[60px] hover:shadow-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-blue-50">
                    <div className="w-48 h-48 rounded-[60px] bg-blue-50 mx-auto flex items-center justify-center mb-8 relative">
                       <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg"><Activity className="w-6 h-6 text-[#4ea8de]" /></div>
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-[#1a2b3c] italic uppercase tracking-tighter leading-none">{dr.name}</h3>
                       <p className="text-[#4ea8de] font-bold text-[10px] uppercase tracking-widest mt-3 mb-6">{dr.role}</p>
                       <p className="text-gray-400 text-sm leading-relaxed px-6 italic">"{dr.bio}"</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Accepted Plans Section (New) */}
        <section className="py-20 sm:py-32 bg-gray-50 flex items-center overflow-hidden relative">
           <div className="absolute inset-y-0 left-0 w-24 sm:w-64 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
           <div className="absolute inset-y-0 right-0 w-24 sm:w-64 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
           
           <motion.div 
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                 x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                 },
              }}
              className="flex gap-20 sm:gap-40 whitespace-nowrap opacity-20 hover:opacity-50 transition-opacity w-max"
           >
              {[
                "Amil Dental", "SulAmérica", "Unimed Odonto", "Bradesco", "Interodonto", "Care Plus",
                "MetLife", "Porto Seguro", "OdontoPrev", "Golden Cross", "BB Odonto", "Hapvida",
                // Duplicated for seamless loop
                "Amil Dental", "SulAmérica", "Unimed Odonto", "Bradesco", "Interodonto", "Care Plus",
                "MetLife", "Porto Seguro", "OdontoPrev", "Golden Cross", "BB Odonto", "Hapvida"
              ].map((name, i) => (
                <PlanLabel key={i} name={name} />
              ))}
           </motion.div>
        </section>
      </main>

      <footer className="py-16 sm:py-28 bg-[#1a2b3c] text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 p-20 opacity-5 pointer-events-none">
            <PlusCircle className="w-64 h-64" />
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-10 space-y-16 sm:space-y-20 relative">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16">
               <div className="space-y-8 max-w-sm">
                  <div className="flex items-center gap-2">
                     <Heart className="w-8 h-8 fill-[#4ea8de] text-[#4ea8de]" />
                     <span className="text-3xl font-black tracking-tighter italic uppercase">SORRISO <span className="text-[#4ea8de]">DENTAL</span></span>
                  </div>
                  <p className="text-white/40 font-medium italic leading-relaxed">Sua nova experiência em odontologia premium. Localizada estrategicamente para melhor lhe atender.</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20">
                  <div className="space-y-6">
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4ea8de]">Contato & Emergência</p>
                     <div className="space-y-4 font-bold text-lg tracking-tight">
                        <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-[#4ea8de]" /> (11) 98888-8888</p>
                        <p className="flex items-center gap-2 opacity-40"><Mail className="w-5 h-5" /> contato@sorrisodental.com</p>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4ea8de]">Localização</p>
                     <div className="space-y-4 font-bold text-lg tracking-tight">
                        <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-[#4ea8de]" /> Jardins, São Paulo - SP</p>
                        <p className="opacity-40">Av. Europa, 120 - 4º Andar</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/20 italic">
               <p>© 2024 CLÍNICA SORRISO DENTAL • TODOS OS DIREITOS RESERVADOS</p>
               <p className="text-white/10 uppercase font-black">Design High-Performance by Land Flow Lab • Demo Live</p>
            </div>
         </div>
      </footer>
    </div>
  );
}

function Stars() {
   return (
      <div className="flex gap-1 text-yellow-400">
         {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
      </div>
   );
}

function PlanLabel({ name }) {
   return (
      <span className="text-xl sm:text-4xl font-black uppercase tracking-[0.2em] text-[#1a2b3c] italic">
         {name}
      </span>
   )
}

function Mail(props) {
   return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
   )
}
