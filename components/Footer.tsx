import { motion } from 'framer-motion';
import { Linkedin, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { Icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077b5' },
    { Icon: Youtube, href: '#', label: 'YouTube', color: '#ff0000' },
    { Icon: Instagram, href: '#', label: 'Instagram', color: '#e1306c' },
  ];
  
  const footerLinks = [
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'Privacy', href: '#' },
  ];
  
  return (
    <footer className="relative py-8 md:py-12 px-4 md:px-6 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
        >
          {/* Links */}
          <div className="flex items-center gap-4 md:gap-8">
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-gray-400 hover:text-white transition-colors relative group text-sm md:text-base"
              >
                {link.text}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
          
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="group relative"
                aria-label={social.label}
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors relative overflow-hidden">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                    style={{
                      background: `radial-gradient(circle, ${social.color} 0%, transparent 70%)`,
                    }}
                  />
                  
                  <social.Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                  
                  {/* Rotating border */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: `conic-gradient(from 0deg, ${social.color}, transparent, ${social.color})`,
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 md:mt-8 text-center text-gray-500 text-xs md:text-sm px-4"
        >
          <p>© 2025 The Ultimate Laptop Buying Guide. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
