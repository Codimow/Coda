"use client";

import { motion } from 'framer-motion';
import { Calendar, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar3DScene } from '@/components/ui/3d-calendar';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-24 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Open Source
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            AI-Powered Calendar
            <br />
            <span className="text-primary">for the Future</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience intelligent scheduling that adapts to your needs. Let AI optimize your time
            while you focus on what matters most.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Calendar className="mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
              <Github className="mr-2" />
              Star on GitHub
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Calendar3DScene />
        </motion.div>
      </div>
    </section>
  );
}