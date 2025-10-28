import { motion } from 'framer-motion';
import { GraduationCap, Palette, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecommendationSection() {
  const recommendations = [
    {
      Icon: GraduationCap,
      title: 'Budget-Friendly Student Laptops',
      specs: [
        'Intel i3/i5 या Ryzen 3/5',
        '8GB रैम, बढ़ाने योग्य',
        '256GB एसएसडी',
        'बैटरी: 5-6 घंटे',
        'वजन: 1.8kg तक',
      ],
      priceRange: '₹30,000 - ₹45,000',
      gradient: 'from-blue-600 to-cyan-600',
      image: '/student-laptop.jpg',
      suggestions: [
        {
          name: 'HP 15s-Ryzen 3',
          specs: 'Ryzen 3 5300U, 8GB RAM, 512GB SSD, 15.6" FHD',
          price: '₹33,990',
          originalPrice: '₹45,990',
          discount: '26% छूट',
          source: 'Amazon',
          link: 'https://amzn.to/xyz',
          inStock: true,
          rating: 4.2,
          delivery: 'फ्री डिलीवरी',
        },
        {
          name: 'Lenovo IdeaPad Slim 3',
          specs: 'Intel i3 12th Gen, 8GB RAM, 256GB SSD, 15.6" FHD',
          price: '₹35,990',
          originalPrice: '₹49,990',
          discount: '28% छूट',
          source: 'Flipkart',
          link: 'https://flipkart.com/xyz',
          inStock: true,
          rating: 4.3,
          delivery: '2 दिन में डिलीवरी',
        },
        {
          name: 'ASUS VivoBook 15',
          specs: 'Ryzen 5 5500U, 8GB RAM, 512GB SSD, 15.6" FHD',
          price: '₹41,990',
          originalPrice: '₹56,990',
          discount: 'विशेष छूट',
          source: 'Ananya Online',
          link: '#contact',
          inStock: true,
          rating: 4.4,
          delivery: 'तुरंत उपलब्ध',
          emi: '₹2,799/माह से शुरू',
        },
      ],
    },
    {
      Icon: Palette,
      title: 'Content Creator Laptops',
      specs: [
        'Latest Gen i5/i7 या Ryzen 5/7',
        '16GB रैम (बढ़ाने योग्य)',
        '512GB NVMe एसएसडी',
        'RTX 3050 4GB या बेहतर',
        'पैनल: 100% sRGB कवरेज',
      ],
      priceRange: '₹65,000 - ₹95,000',
      gradient: 'from-purple-600 to-pink-600',
      image: '/creator-laptop.jpg',
      suggestions: [
        {
          name: 'ASUS VivoBook Pro 15 OLED',
          specs: 'Ryzen 7 5800H, RTX 3050, 16GB RAM, 512GB SSD',
          price: '₹79,990',
          originalPrice: '₹94,990',
          discount: '15% छूट',
          source: 'Amazon',
          link: 'https://amzn.to/xyz',
          inStock: true,
          rating: 4.5,
          delivery: 'अगले दिन डिलीवरी',
          features: ['OLED डिस्प्ले', 'प्रो कूलिंग'],
        },
        {
          name: 'HP Victus Gaming',
          specs: 'Intel i7 12th Gen, RTX 3050Ti, 16GB RAM, 512GB SSD',
          price: '₹82,990',
          originalPrice: '₹1,02,990',
          discount: '19% छूट',
          source: 'Flipkart',
          link: 'https://flipkart.com/xyz',
          inStock: true,
          rating: 4.4,
          delivery: 'एक्सप्रेस डिलीवरी उपलब्ध',
        },
        {
          name: 'Acer Nitro 5',
          specs: 'Ryzen 7 6800H, RTX 3060, 16GB RAM, 512GB SSD',
          price: '₹89,990',
          originalPrice: '₹1,09,990',
          discount: 'बेस्ट डील',
          source: 'Ananya Online',
          link: '#contact',
          inStock: true,
          rating: 4.6,
          delivery: 'स्टॉक में उपलब्ध',
          emi: '₹4,999/माह से शुरू',
        },
      ],
    },
    {
      Icon: Briefcase,
      title: 'Premium Business Laptops',
      specs: [
        'Intel i7/i9 या Ryzen 7/9',
        '32GB रैम तक',
        '1TB NVMe एसएसडी',
        'प्रीमियम मेटल बॉडी',
        'थंडरबोल्ट 4 पोर्ट्स',
      ],
      priceRange: '₹95,000 - ₹1,65,000',
      gradient: 'from-orange-600 to-red-600',
      image: '/business-laptop.jpg',
      suggestions: [
        {
          name: 'MacBook Air M2',
          specs: 'M2 चिप, 16GB RAM, 512GB SSD, 13.6" लिक्विड रेटिना',
          price: '₹1,34,990',
          originalPrice: '₹1,49,990',
          discount: '10% छूट',
          source: 'Amazon',
          link: 'https://amzn.to/xyz',
          inStock: true,
          rating: 4.8,
          delivery: 'प्राइम डिलीवरी',
          features: ['18 घंटे की बैटरी', 'टच आईडी'],
        },
        {
          name: 'Dell XPS 13 Plus',
          specs: 'Intel i7 13th Gen, 16GB RAM, 1TB SSD, 13.4" 4K टच',
          price: '₹1,42,990',
          originalPrice: '₹1,64,990',
          discount: '13% छूट',
          source: 'Flipkart',
          link: 'https://flipkart.com/xyz',
          inStock: true,
          rating: 4.7,
          delivery: 'असुरक्षित क्षेत्रों में भी डिलीवरी',
        },
        {
          name: 'Lenovo ThinkPad X1 Carbon',
          specs: 'Intel i7 13th Gen, 32GB RAM, 1TB SSD, 14" 2.8K OLED',
          price: '₹1,54,990',
          originalPrice: '₹1,79,990',
          discount: 'कॉर्पोरेट ऑफर',
          source: 'Ananya Online',
          link: '#contact',
          inStock: true,
          rating: 4.9,
          delivery: 'एडवांस बुकिंग उपलब्ध',
          emi: '₹8,999/माह से शुरू',
          features: ['MIL-STD टेस्टेड', '5G सपोर्ट'],
        },
      ],
    },
  ];
  
  return (
    <section id="top-picks" className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-white mb-4 text-2xl md:text-3xl lg:text-4xl">
            Top Picks
          </h2>
          <p className="text-gray-400 text-base md:text-lg px-4">
            Recommendations based on your needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm h-full">
                {/* Glowing hover edge */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${rec.gradient.includes('blue') ? '#00e0ff' : rec.gradient.includes('purple') ? '#a855f7' : '#f97316'} 0%, transparent 70%)`,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={rec.image}
                    alt={rec.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${rec.gradient} opacity-40`} />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${rec.gradient} flex items-center justify-center shadow-lg`}>
                      <rec.Icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-white">{rec.title}</h3>
                  
                  <div className="space-y-2">
                    {rec.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + specIndex * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${rec.gradient}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + specIndex * 0.1 }}
                        />
                        <span className="text-gray-400 text-sm">{spec}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${rec.gradient} text-white mb-4`}
                  >
                    {rec.priceRange}
                  </motion.div>
                  
                  {/* Product Suggestions */}
                  <div className="space-y-4 mt-4 border-t border-gray-700/50 pt-4">
                    <h4 className="text-white text-sm font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                      सुझाए गए लैपटॉप
                    </h4>
                    {rec.suggestions.map((suggestion, sIndex) => (
                      <motion.a
                        key={sIndex}
                        href={suggestion.link}
                        target={suggestion.source !== 'Ananya Online' ? '_blank' : undefined}
                        rel={suggestion.source !== 'Ananya Online' ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + sIndex * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={`group block p-4 rounded-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/30 hover:border-${
                          suggestion.source === 'Amazon' ? 'orange' : 
                          suggestion.source === 'Flipkart' ? 'blue' : 
                          'purple'
                        }-500/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden`}
                      >
                        {/* Animated gradient background */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(45deg, ${
                              suggestion.source === 'Amazon' ? '#ff9900, #ff5500' :
                              suggestion.source === 'Flipkart' ? '#2874f0, #0055ff' :
                              '#a855f7, #7928ca'
                            })`,
                          }}
                        />
                        
                        <div className="space-y-4 relative z-10">
                          {/* Header with Shine Effect */}
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h5 className="text-white text-base font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                {suggestion.name}
                              </h5>
                              <p className="text-gray-400 text-sm mt-1">{suggestion.specs}</p>
                            </div>
                            <div className="flex flex-col items-end ml-4">
                              <motion.div 
                                className="flex items-baseline gap-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                <span className="text-white text-lg font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text">
                                  {suggestion.price}
                                </span>
                                <span className="text-gray-500 text-xs line-through">
                                  {suggestion.originalPrice}
                                </span>
                              </motion.div>
                              <span className="text-green-400 text-xs font-medium mt-1">
                                {suggestion.discount}
                              </span>
                            </div>
                          </div>
                          
                          {/* Enhanced Details with Animations */}
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className={`px-3 py-1.5 rounded-full backdrop-blur-sm ${
                                  suggestion.source === 'Amazon' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                                  suggestion.source === 'Flipkart' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                                  'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                }`}
                              >
                                {suggestion.source}
                              </motion.div>
                              {suggestion.inStock && (
                                <motion.span 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-green-400 flex items-center gap-1"
                                >
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                  स्टॉक में है
                                </motion.span>
                              )}
                            </div>
                            <motion.div 
                              className="flex items-center gap-1"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="flex text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                  >
                                    {i < Math.floor(suggestion.rating) ? '★' : '☆'}
                                  </motion.span>
                                ))}
                              </div>
                              <span className="text-gray-400">({suggestion.rating})</span>
                            </motion.div>
                          </div>
                          
                          {/* Enhanced Additional Info with Hover Effects */}
                          <div className="flex flex-wrap gap-2">
                            {suggestion.delivery && (
                              <motion.span
                                whileHover={{ scale: 1.05 }}
                                className="text-xs px-3 py-1.5 rounded-full bg-green-500/10 text-green-300 border border-green-500/20 backdrop-blur-sm"
                              >
                                🚚 {suggestion.delivery}
                              </motion.span>
                            )}
                            {suggestion.emi && (
                              <motion.span
                                whileHover={{ scale: 1.05 }}
                                className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 backdrop-blur-sm"
                              >
                                💳 {suggestion.emi}
                              </motion.span>
                            )}
                            {suggestion.features?.map((feature, fIndex) => (
                              <motion.span
                                key={fIndex}
                                whileHover={{ scale: 1.05 }}
                                className="text-xs px-3 py-1.5 rounded-full bg-gray-700/30 text-gray-300 border border-gray-600/20 backdrop-blur-sm"
                              >
                                ✨ {feature}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Animated hover glow effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 -z-10 blur-xl transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, ${
                              suggestion.source === 'Amazon' ? '#ff9900' :
                              suggestion.source === 'Flipkart' ? '#2874f0' :
                              '#a855f7'
                            }, transparent)`,
                          }}
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                {/* Motion blur shadow */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, ${rec.gradient.includes('blue') ? '#00e0ff' : rec.gradient.includes('purple') ? '#a855f7' : '#f97316'}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
