import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden pt-16 md:pt-0">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10"
          >
            <span className="text-purple-300 text-sm">Educational Guide 2025</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            The Ultimate Laptop
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Buying Guide
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-400 text-base md:text-lg max-w-xl"
          >
            Everything students and professionals need to know before buying a laptop.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              onClick={() => scrollToSection('introduction')}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 text-sm md:text-base"
            >
              <span className="relative z-10">Explore Now</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                initial={false}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Right content - Self-drawing laptop SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 hidden lg:flex items-center justify-center"
        >
          <svg
            viewBox="0 0 400 300"
            className="w-full max-w-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Laptop base */}
            <motion.path
              d="M 50 200 L 350 200 L 370 260 L 30 260 Z"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="rgba(78, 47, 218, 0.1)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            
            {/* Laptop screen */}
            <motion.rect
              x="60"
              y="40"
              width="280"
              height="160"
              rx="8"
              stroke="url(#gradient2)"
              strokeWidth="3"
              fill="rgba(0, 224, 255, 0.05)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            
            {/* Screen glow */}
            <motion.rect
              x="70"
              y="50"
              width="260"
              height="140"
              rx="4"
              fill="url(#screenGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
            
            {/* Keyboard lines */}
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1="80"
                y1={210 + i * 8}
                x2="320"
                y2={210 + i * 8}
                stroke="rgba(168, 85, 247, 0.5)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
              />
            ))}
            
            {/* Touchpad */}
            <motion.rect
              x="160"
              y="220"
              width="80"
              height="30"
              rx="4"
              stroke="rgba(0, 224, 255, 0.6)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
            />
            
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4e2fda" />
                <stop offset="100%" stopColor="#00e0ff" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00e0ff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4e2fda" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#00e0ff" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </motion.div>
    </section>
  );
}
