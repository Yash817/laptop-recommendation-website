import { motion } from 'framer-motion';
import { AlertTriangle, Battery, Cpu, HardDrive, DollarSign, Eye } from 'lucide-react';

export function MistakesSection() {
  const mistakes = [
    {
      Icon: HardDrive,
      text: 'Believing fake SSD claims',
      detail: 'Always verify storage type - some brands advertise "SSD-like" speeds with HDDs',
    },
    {
      Icon: Eye,
      text: 'Ignoring refresh rate',
      detail: '60Hz is standard, but 120Hz+ makes a huge difference for daily use',
    },
    {
      Icon: Cpu,
      text: 'Buying old generation processors',
      detail: 'Avoid processors older than 2 generations (e.g., Intel 10th gen)',
    },
    {
      Icon: Battery,
      text: 'Trusting advertised battery life',
      detail: 'Real-world usage is 30-40% less than claimed specs',
    },
    {
      Icon: DollarSign,
      text: 'Not comparing prices',
      detail: 'Same laptop can have 20-30% price difference across retailers',
    },
    {
      Icon: AlertTriangle,
      text: 'Skipping warranty & support',
      detail: 'Good after-sales service is crucial for long-term reliability',
    },
  ];
  
  return (
    <section id="mistakes" className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-600 mb-4 md:mb-6"
          >
            <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </motion.div>
          
          <h2 className="text-white mb-4 text-2xl md:text-3xl lg:text-4xl">
            Mistakes to Avoid
          </h2>
          <p className="text-gray-400 text-base md:text-lg px-4">
            Don't fall for these common traps
          </p>
        </motion.div>
        
        <div className="space-y-4 md:space-y-6">
          {mistakes.map((mistake, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 rounded-xl p-4 md:p-6 overflow-hidden backdrop-blur-sm hover:border-red-500/50 transition-colors">
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Animated icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center">
                      {/* Self-drawing circle */}
                      <motion.svg
                        className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 -rotate-90"
                      >
                        <motion.circle
                          cx="20"
                          cy="20"
                          r="18"
                          className="md:hidden"
                          stroke="url(#mistakeGradient)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                        />
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="22"
                          className="hidden md:block"
                          stroke="url(#mistakeGradient)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                        />
                        <defs>
                          <linearGradient id="mistakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#dc2626" />
                            <stop offset="100%" stopColor="#ea580c" />
                          </linearGradient>
                        </defs>
                      </motion.svg>
                      <mistake.Icon className="w-5 h-5 md:w-6 md:h-6 text-red-400 relative z-10" />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 space-y-1 md:space-y-2">
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                      className="text-white text-sm md:text-base"
                    >
                      {mistake.text}
                    </motion.h4>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      className="text-gray-400 text-xs md:text-sm leading-relaxed"
                    >
                      {mistake.detail}
                    </motion.p>
                  </div>
                  
                  {/* Warning indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </motion.div>
                </div>
                
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
                  style={{
                    background: 'radial-gradient(circle at left, #dc2626 0%, transparent 70%)',
                  }}
                />
                
                {/* Animated scan line */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.1), transparent)',
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
            </motion.div>
          ))}
        </div>
        
        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-12 p-4 md:p-6 rounded-xl bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-600/30"
        >
          <p className="text-yellow-400 text-center text-sm md:text-base">
            💡 Pro Tip: Always check multiple reviews and compare specs before making a decision
          </p>
        </motion.div>
      </div>
    </section>
  );
}
