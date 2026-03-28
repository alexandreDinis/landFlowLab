import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mkopjwzl");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-40 px-6 max-w-2xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="p-16 rounded-[40px] glass neon-border-glow-cyan bg-accent-cyan/5 border-accent-cyan/20"
        >
          <Mail className="w-16 h-16 mx-auto mb-6 text-accent-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
          <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">Mensagem enviada!</h2>
          <p className="text-white/60 text-lg font-medium tracking-tight">Entraremos em contato em até 24h. Prepare-se para o sucesso digital.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      {/* 
          FORM BACKGROUND GLOW 
          Concentrated light source behind the form 
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 blur-[130px] rounded-full -z-10" />

      <div className="max-w-3xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-accent-cyan mb-2"
          >
            <ShieldCheck className="w-4 h-4 mr-2" />
            Privacidade Garantida
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-loose uppercase">
            Solicite seu <span className="text-gradient">Orçamento</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto leading-relaxed italic">
            Não quer falar por WhatsApp agora? Descreva seu projeto e responderemos com uma proposta personalizada em breve.
          </p>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10 p-10 md:p-14 rounded-[50px] glass neon-border-glow-purple relative z-10 border-white/10"
        >
          {/* Honeypot field */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <div className="space-y-4">
            <label htmlFor="email" className="text-xs font-black text-accent-cyan ml-2 flex items-center uppercase tracking-widest">
               <Mail className="w-4 h-4 mr-2" /> E-mail Profissional
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              required
              minLength={5}
              placeholder="exemplo@empresa.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-4 focus:ring-accent-cyan/20 focus:border-accent-cyan/60 transition-all font-medium text-lg"
            />
            <ValidationError prefix="E-mail" field="email" errors={state.errors} className="text-xs text-red-500 mt-2 font-bold ml-2" />
          </div>

          <div className="space-y-4">
            <label htmlFor="message" className="text-xs font-black text-accent-purple ml-2 flex items-center uppercase tracking-widest">
              <MessageSquare className="w-4 h-4 mr-2" /> Descreva seu Projeto
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={500}
              placeholder="Qual o nicho do seu negócio? Qual seu objetivo principal?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-4 focus:ring-accent-purple/20 focus:border-accent-purple/60 min-h-[180px] transition-all font-medium text-lg"
            />
            <ValidationError prefix="Mensagem" field="message" errors={state.errors} className="text-xs text-red-500 mt-2 font-bold ml-2" />
          </div>

          <motion.button
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-6 rounded-2xl bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan text-background font-black text-xl tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center relative overflow-hidden shadow-[0_10px_40px_rgba(188,19,254,0.3)]"
          >
             {/* Light Sweep Animation Overlay */}
            <div className="absolute inset-x-0 inset-y-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out cursor-none" />
            
            <Zap className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform" />
            {state.submitting ? 'ENVIANDO...' : 'SOLICITAR PROPOSTA'}
          </motion.button>

          <p className="text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
             Seguro • Formspree SSL • Anti-Spam Ativo
          </p>
        </motion.form>
      </div>
    </section>
  );
}
