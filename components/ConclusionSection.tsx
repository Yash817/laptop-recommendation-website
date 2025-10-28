import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function ConclusionSection() {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed px-4"
          >
            A smart laptop choice today
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              powers your dreams tomorrow.
            </span>
          </motion.p>
        </motion.div>
        
        {/* Animated signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="py-8"
        >
          <svg
            viewBox="0 0 400 100"
            className="w-full max-w-md mx-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* "Created by Yash" in handwritten style */}
            <motion.path
              d="M 50 50 Q 70 30, 90 50 T 130 50"
              stroke="url(#signatureGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
            />
            <motion.path
              d="M 150 40 L 150 60 M 145 45 L 155 45"
              stroke="url(#signatureGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
            <motion.path
              d="M 180 40 Q 190 30, 200 40 Q 210 50, 220 40 L 220 60"
              stroke="url(#signatureGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 2 }}
            />
            <motion.path
              d="M 240 40 Q 250 50, 260 40 T 280 40"
              stroke="url(#signatureGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 2.5 }}
            />
            <motion.path
              d="M 300 40 L 300 60 Q 300 65, 305 65 Q 310 65, 310 60 L 310 40"
              stroke="url(#signatureGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 3 }}
            />
            
            {/* Underline flourish */}
            <motion.path
              d="M 40 75 Q 200 65, 360 75"
              stroke="url(#signatureGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 3.5 }}
            />
            
            <defs>
              <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4e2fda" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#00e0ff" />
              </linearGradient>
            </defs>
          </svg>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 4 }}
            className="text-gray-400 mt-4 text-sm md:text-base"
          >
            Created by Yash
          </motion.p>
        </motion.div>
        
        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 4.2 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-4"
        >
          <Button
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg shadow-purple-500/50 text-sm md:text-base"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2 inline-block" />
            Download Specs Sheet
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
          
          <Button
            variant="outline"
            className="group relative overflow-hidden border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 px-6 md:px-8 py-5 md:py-6 rounded-full text-sm md:text-base"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 inline-block" />
            Contact Me
            <motion.div
              className="absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-10"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="relative h-32">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${10 + i * 7}%`,
                background: i % 3 === 0 ? '#4e2fda' : i % 3 === 1 ? '#a855f7' : '#00e0ff',
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
