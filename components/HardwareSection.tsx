import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, MemoryStick, HardDrive, MonitorPlay, Monitor, Battery } from 'lucide-react';
import { useRef } from 'react';

export function HardwareSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  const hardware = [
    {
      Icon: Cpu,
      title: 'CPU',
      description: 'The brain of your laptop. Look for Intel i5/i7 or AMD Ryzen 5/7 for best performance.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      Icon: MemoryStick,
      title: 'RAM',
      description: '8GB minimum for students, 16GB recommended for professionals and multitasking.',
      gradient: 'from-pink-600 to-red-600',
    },
    {
      Icon: HardDrive,
      title: 'Storage',
      description: 'Always choose SSD over HDD. 256GB minimum, 512GB+ recommended for media files.',
      gradient: 'from-red-600 to-orange-600',
    },
    {
      Icon: MonitorPlay,
      title: 'GPU',
      description: 'Integrated graphics for office work. Dedicated GPU (RTX 3050+) for design/gaming.',
      gradient: 'from-orange-600 to-yellow-600',
    },
    {
      Icon: Monitor,
      title: 'Display',
      description: 'Full HD (1920x1080) minimum. Consider 120Hz+ for smoother experience.',
      gradient: 'from-yellow-600 to-green-600',
    },
    {
      Icon: Battery,
      title: 'Battery',
      description: 'Look for 6+ hours of real-world usage. Check reviews, not just specs.',
      gradient: 'from-green-600 to-cyan-600',
    },
  ];
  
  return (
    <section id="hardware" className="relative py-12 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-white mb-4 text-2xl md:text-3xl lg:text-4xl">
            Hardware Explained
          </h2>
          <p className="text-gray-400 text-base md:text-lg px-4">
            Understanding key components
          </p>
        </motion.div>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {hardware.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative group h-full">
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 rounded-2xl p-8 h-full backdrop-blur-sm overflow-hidden">
                  {/* Animated icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="mb-6"
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                      {/* Self-drawing circle */}
                      <motion.svg
                        className="absolute inset-0 w-20 h-20 -rotate-90"
                      >
                        <motion.circle
                          cx="40"
                          cy="40"
                          r="38"
                          stroke="rgba(255,255,255,0.5)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                        />
                      </motion.svg>
                      <item.Icon className="w-10 h-10 text-white relative z-10" />
                    </div>
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    className="text-white mb-4"
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                    className="text-gray-400 leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                  
                  {/* Morphing glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradient.includes('purple') ? '#4e2fda' : '#00e0ff'} 0%, transparent 70%)`,
                    }}
                  />
                  
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
