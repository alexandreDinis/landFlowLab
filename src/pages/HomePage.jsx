import React from 'react';
import { Hero } from '../components/Hero';
import { Showcase } from '../components/Showcase';
import { ContactForm } from '../components/ContactForm';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent-cyan selection:text-background relative overflow-hidden">
      {/* 
          ADVANCED FUTURISTIC BACKGROUND 
          Layers: Mesh Gradients -> Grid Overlay -> Grain Texture 
      */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Mesh Orbs */}
        <div className="absolute top-[-10%] left-[-10%] mesh-orb-1" aria-hidden="true" />
        <div className="absolute bottom-[-10%] right-[-10%] mesh-orb-2" aria-hidden="true" />
        
        {/* Floating Accent Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[140px] animate-pulse-glow" aria-hidden="true" />

        {/* Techno Grid Overlay */}
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />

        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-10" aria-hidden="true" />
      </div>

      <main className="relative z-10 flex flex-col gap-0 md:gap-0 lg:gap-0">
        <Hero />
        <Showcase />
        <ContactForm />
      </main>

      <FloatingWhatsApp />
      
      <footer className="py-12 px-4 text-center border-t border-white/5 bg-black/40 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
          <div className="text-xl font-black tracking-tighter italic">
            LAND FLOW <span className="text-accent-cyan">LAB</span>
          </div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-loose">
            © {new Date().getFullYear()} Land Flow Lab. <br className="md:hidden" /> Criamos o seu futuro digital.
          </p>
          <div className="text-[10px] text-accent-purple font-bold tracking-[0.3em] uppercase">
            Design High-End • Performance • Conversão
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
