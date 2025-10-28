import { motion, useScroll, useTransform } from 'framer-motion';
import { Laptop } from 'lucide-react';

export function StickyHeader() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 15, 0)', 'rgba(10, 10, 15, 0.95)']
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.3]);
  
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md"
      style={{
        backgroundColor,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
              <Laptop className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-white text-sm md:text-base hidden sm:block">Laptop Buying Guide</span>
          </motion.div>
          
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {['Introduction', 'Hardware', 'Top Picks', 'Mistakes'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  const id = item.toLowerCase().replace(' ', '-');
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-gray-400 hover:text-white transition-colors text-sm relative group"
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            ))}
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
}
