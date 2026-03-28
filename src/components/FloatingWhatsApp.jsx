import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/5511933496135?text=Olá,%20quero%20uma%20landing%20page";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent-green hover:bg-white text-background shadow-[0_0_20px_rgba(15,252,161,0.5)] transition-all group animate-pulse-glow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-background px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        WhatsApp Offline? Clique aqui!
      </span>
    </motion.a>
  );
}
