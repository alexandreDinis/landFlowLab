import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Target, Sparkles, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Mecânica Tech",
    niche: "Oficina Mecânica",
    image: "/assets/oficina.png",
    description: "Foco em diagnósticos rápidos e agendamento online intuitivo.",
    strategy: "Alta Conversão Local",
    path: "/demo/mecanica",
    color: "cyan"
  },
  {
    title: "D'Barber Premium",
    niche: "Barbearia",
    image: "/assets/barbearia.png",
    description: "Design clássico com sistema de agendamento integrado via WhatsApp.",
    strategy: "Agendamento Direto",
    path: "/demo/barbearia",
    color: "purple"
  },
  {
    title: "Sorriso Dental",
    niche: "Clínica Odontológica",
    image: "/assets/dentista.png",
    description: "Interface limpa que transmite confiança e facilita o contato inicial.",
    strategy: "Captação de Leads",
    path: "/demo/dentista",
    color: "cyan"
  }
];

export function Showcase() {
  return (
    <section id="projects" className="py-32 px-6 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Modern Section Header */}
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            <Layout className="w-3 h-3 mr-2" />
            Portfólio Estratégico
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
             Nossas criações de <br />
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(188,19,254,0.3)] font-black">alto nível</span>
          </h2>
          <p className="text-white/40 max-w-3xl mx-auto text-lg md:text-xl font-medium tracking-tight leading-relaxed">
            Designs demonstrativos que provam como aplicamos estratégias de conversão em nichos reais para gerar faturamento imediato.
          </p>
        </div>

        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Link
              to={project.path}
              key={index}
              className="block group h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  relative h-full rounded-[40px] overflow-hidden glass border border-white/10
                  group-hover:neon-border-glow-${project.color} transition-all duration-700
                `}
              >
                {/* Image Container with Custom Mask */}
                <div className="aspect-[4/5] overflow-hidden grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  />
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                </div>

                {/* Card Content Polish */}
                <div className="absolute inset-x-0 bottom-0 p-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-accent-cyan uppercase tracking-[0.3em] bg-accent-cyan/10 px-3 py-1.5 rounded-full border border-accent-cyan/20">
                      {project.niche}
                    </span>
                    <div className="flex items-center text-[10px] text-white/40 uppercase tracking-widest font-black">
                      <Target className="w-3 h-3 mr-2 text-accent-purple" />
                      {project.strategy}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black tracking-tight">{project.title}</h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed tracking-tight group-hover:text-white/80 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center text-accent-cyan text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer">
                    Abrir Demo Viva <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>

                {/* Inner Glow Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-cyan/10 rounded-[40px] pointer-events-none transition-all duration-700" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Ethical Footer for Section */}
        <div className="text-center pt-10">
          <p className="text-white/20 text-xs font-bold uppercase tracking-[0.4em]">
            LAND FLOW LAB • DESIGN ESTRATÉGICO • © 2024
          </p>
        </div>
      </div>
    </section>
  );
}
