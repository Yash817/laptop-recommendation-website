import { motion } from 'framer-motion';
import { Monitor, Laptop, Check, X } from 'lucide-react';

export function ComparisonSection() {
  const laptopFeatures = [
    { text: 'Portable & Mobile', isPositive: true },
    { text: 'Built-in Battery', isPositive: true },
    { text: 'All-in-one Design', isPositive: true },
    { text: 'Limited Upgradability', isPositive: false },
    { text: 'Higher Cost per Performance', isPositive: false },
  ];
  
  const desktopFeatures = [
    { text: 'Maximum Performance', isPositive: true },
    { text: 'Easy to Upgrade', isPositive: true },
    { text: 'Better Value for Money', isPositive: true },
    { text: 'Not Portable', isPositive: false },
    { text: 'Requires More Space', isPositive: false },
  ];
  
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-white mb-4 text-2xl md:text-3xl lg:text-4xl">
            Laptop vs Desktop
          </h2>
          <p className="text-gray-400 text-base md:text-lg px-4">
            Understanding the key differences
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Laptop Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="relative bg-gradient-to-br from-purple-950/40 to-purple-900/20 border border-purple-500/30 rounded-2xl p-8 overflow-hidden backdrop-blur-sm">
              {/* Self-drawing border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, #4e2fda, #00e0ff)',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-white mb-6">Laptop</h3>
              
              <div className="space-y-4">
                {laptopFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        feature.isPositive ? 'bg-green-500/20' : 'bg-red-500/20'
                      }`}
                    >
                      {feature.isPositive ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <X className="w-4 h-4 text-red-400" />
                      )}
                    </motion.div>
                    <span className={feature.isPositive ? 'text-gray-300' : 'text-gray-500'}>
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10"
                style={{
                  background: 'radial-gradient(circle at center, #4e2fda 0%, transparent 70%)',
                }}
              />
            </div>
          </motion.div>
          
          {/* Desktop Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="relative bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-8 overflow-hidden backdrop-blur-sm">
              {/* Self-drawing border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, #00e0ff, #4e2fda)',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h3 className="text-white mb-6">Desktop</h3>
              
              <div className="space-y-4">
                {desktopFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        feature.isPositive ? 'bg-green-500/20' : 'bg-red-500/20'
                      }`}
                    >
                      {feature.isPositive ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <X className="w-4 h-4 text-red-400" />
                      )}
                    </motion.div>
                    <span className={feature.isPositive ? 'text-gray-300' : 'text-gray-500'}>
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10"
                style={{
                  background: 'radial-gradient(circle at center, #00e0ff 0%, transparent 70%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
