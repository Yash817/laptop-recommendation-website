import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Cpu, HardDrive, Battery } from 'lucide-react';

export function IntroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Choosing a laptop can be confusing — specs, brands, processors, and more. Here's the simple breakdown.";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, []);
  
  const icons = [
    { Icon: Cpu, label: 'CPU', delay: 0.5 },
    { Icon: HardDrive, label: 'RAM', delay: 0.7 },
    { Icon: Battery, label: 'Battery', delay: 0.9 },
  ];
  
  return (
    <section id="introduction" className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 md:space-y-12"
        >
          {/* Typing animation text */}
          <div className="relative px-4">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed min-h-[4rem]">
              {displayedText}
              <motion.span
                className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
            
            {/* Glowing border effect */}
            <motion.div
              className="absolute -inset-4 rounded-2xl opacity-20 blur-xl"
              style={{
                background: 'linear-gradient(90deg, #4e2fda, #00e0ff, #a855f7)',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
          
          {/* Animated icons */}
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            {icons.map(({ Icon, label, delay }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: delay,
                  type: 'spring',
                  stiffness: 200,
                }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="relative">
                  {/* Icon container with self-drawing circle */}
                  <motion.div
                    className="w-20 h-20 rounded-full border-2 flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-cyan-900/30"
                    style={{
                      borderColor: 'transparent',
                    }}
                  >
                    <motion.svg
                      className="absolute inset-0 w-20 h-20 -rotate-90"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="url(#iconGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: delay }}
                      />
                      <defs>
                        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4e2fda" />
                          <stop offset="100%" stopColor="#00e0ff" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                    
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: delay + 0.5 }}
                    >
                      <Icon className="w-10 h-10 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                    style={{
                      background: 'radial-gradient(circle, #00e0ff 0%, transparent 70%)',
                    }}
                  />
                </div>
                
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: delay + 0.8 }}
                  className="text-gray-400 text-sm uppercase tracking-wider"
                >
                  {label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
