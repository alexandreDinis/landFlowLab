import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Rocket, ArrowRight } from 'lucide-react';

export function Hero() {
  const whatsappLink = "https://wa.me/5511933496135?text=Olá,%20quero%20uma%20landing%20page";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden border-b border-white/5">
      {/* 
          HERO INTERNAL LIGHTSOURCES
          Depth defined by overlapping mesh-like glows 
      */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-accent-cyan/10 via-transparent to-transparent -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] bg-accent-purple/5 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-6xl w-full text-center space-y-12"
      >
        {/* Futuristic Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-md"
        >
          <Zap className="w-3 h-3 mr-2" />
          Landing Pages de Alta Performance
        </motion.div>

        {/* Aggressive Modern Headline */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] md:leading-[0.9]">
          CRIAMOS O <br />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,242,255,0.3)]">
            SUCESSO DIGITAL
          </span> <br />
          DO SEU NEGÓCIO
        </h1>

        <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight">
          Landing pages simples, rápidas e focadas em converter visitantes em <span className="text-white/80">faturamento real</span> para a sua empresa.
        </p>

        {/* Action Center */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white text-background font-black text-xl transition-all hover:bg-accent-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] flex items-center justify-center group"
          >
            Falar pelo WhatsApp
            <Rocket className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
          
          <a href="#projects" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
            Ver projetos reais <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Minimalist Trust & Technical Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 border-t border-white/5"
        >
          <div className="flex flex-col items-center space-y-2 group">
            <CheckCircle className="w-5 h-5 text-accent-cyan transition-transform group-hover:scale-110" />
            <span className="text-[10px] uppercase font-black tracking-widest text-white/30 group-hover:text-accent-cyan transition-colors">Performance Ultra</span>
          </div>
          <div className="flex flex-col items-center space-y-2 group">
            <CheckCircle className="w-5 h-5 text-accent-cyan transition-transform group-hover:scale-110" />
            <span className="text-[10px] uppercase font-black tracking-widest text-white/30 group-hover:text-accent-cyan transition-colors">Design Futurista</span>
          </div>
          <div className="flex flex-col items-center space-y-2 group">
            <CheckCircle className="w-5 h-5 text-accent-cyan transition-transform group-hover:scale-110" />
            <span className="text-[10px] uppercase font-black tracking-widest text-white/30 group-hover:text-accent-cyan transition-colors">Foco em Lead</span>
          </div>
          <div className="flex flex-col items-center space-y-2 group">
            <CheckCircle className="w-5 h-5 text-accent-cyan transition-transform group-hover:scale-110" />
            <span className="text-[10px] uppercase font-black tracking-widest text-white/30 group-hover:text-accent-cyan transition-colors">Carregamento Instantâneo</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
