import { motion } from 'framer-motion';
import { Search, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface Recommendation {
  category: string;
  specs: string[];
  tips: string[];
  priceRange: string;
  icon: string;
}

export function AISearchSection() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [showResults, setShowResults] = useState(false);

  const analyzeRequirements = (input: string) => {
    const lowerInput = input.toLowerCase();
    const results: Recommendation[] = [];

    // Student detection
    if (lowerInput.includes('student') || lowerInput.includes('study') || lowerInput.includes('college') || lowerInput.includes('school') || lowerInput.includes('learning')) {
      results.push({
        category: 'For Students',
        specs: [
          'Intel Core i5 (12th Gen) or AMD Ryzen 5 6000 series',
          '8GB RAM (16GB recommended for multitasking)',
          '256GB SSD minimum (512GB for storing projects)',
          'Integrated Intel Iris Xe or AMD Radeon graphics',
          '6-8 hours battery life for all-day classes',
          '14" or 15.6" Full HD display (1920x1080)',
          'Lightweight (under 1.8kg) for portability',
        ],
        tips: [
          '✓ Look for student discounts from brands like Dell, HP, Lenovo',
          '✓ Choose laptops with good keyboard for typing assignments',
          '✓ Ensure WiFi 6 support for fast connectivity',
          '✓ Consider 2-in-1 convertibles for note-taking',
          '✓ Check warranty and on-campus service centers',
        ],
        priceRange: '₹40,000 - ₹70,000',
        icon: '🎓',
      });
    }

    // Professional detection
    if (lowerInput.includes('professional') || lowerInput.includes('work') || lowerInput.includes('office') || lowerInput.includes('business') || lowerInput.includes('productivity')) {
      results.push({
        category: 'For Professionals',
        specs: [
          'Intel Core i7 (13th Gen) or AMD Ryzen 7 7000 series',
          '16GB RAM minimum (32GB for heavy workloads)',
          '512GB NVMe SSD (1TB for extensive files)',
          'Premium build quality (aluminum chassis)',
          '10+ hours battery life',
          '14" or 15.6" Full HD or 4K display',
          'Thunderbolt 4 ports for docking stations',
        ],
        tips: [
          '✓ Prioritize build quality and durability',
          '✓ Look for business-grade security features (TPM, fingerprint)',
          '✓ Ensure excellent webcam and microphone for video calls',
          '✓ Consider brands with robust enterprise support',
          '✓ Get extended warranty for business use',
        ],
        priceRange: '₹90,000 - ₹1,90,000',
        icon: '💼',
      });
    }

    // Creator/Designer detection
    if (lowerInput.includes('creator') || lowerInput.includes('design') || lowerInput.includes('video') || lowerInput.includes('edit') || lowerInput.includes('photoshop') || lowerInput.includes('render') || lowerInput.includes('3d')) {
      results.push({
        category: 'For Creators & Designers',
        specs: [
          'Intel Core i7/i9 or AMD Ryzen 7/9 (latest gen)',
          '16GB RAM minimum (32GB+ for 4K video editing)',
          '512GB SSD + 1TB HDD or 1TB SSD',
          'NVIDIA RTX 4050/4060 or higher (6GB+ VRAM)',
          '15.6" or 17" display with 100% sRGB color accuracy',
          '120Hz+ refresh rate for smooth editing',
          'Good cooling system for sustained performance',
        ],
        tips: [
          '✓ Color-accurate display is crucial (check reviews)',
          '✓ Dedicated GPU required for Adobe CC, Blender, DaVinci',
          '✓ Consider Creator series from MSI, ASUS ProArt',
          '✓ Ensure multiple USB ports and SD card reader',
          '✓ Invest in good external monitor for color grading',
        ],
        priceRange: '₹90,000 - ₹2,10,000',
        icon: '🎨',
      });
    }

    // Gaming detection
    if (lowerInput.includes('gaming') || lowerInput.includes('game') || lowerInput.includes('fps') || lowerInput.includes('streaming')) {
      results.push({
        category: 'For Gaming',
        specs: [
          'Intel Core i7/i9 or AMD Ryzen 7/9',
          '16GB DDR5 RAM (32GB for streaming)',
          '1TB NVMe SSD (Gen 4 for faster loading)',
          'NVIDIA RTX 4060/4070 or AMD RX 7600M/7700M',
          '15.6" or 17" Full HD 144Hz+ or 1440p 120Hz display',
          'Advanced cooling (dual/triple fan setup)',
          'RGB keyboard with good key travel',
        ],
        tips: [
          '✓ High refresh rate (144Hz+) is essential for competitive gaming',
          '✓ Check thermal performance reviews before buying',
          '✓ Consider gaming brands: ASUS ROG, Lenovo Legion, MSI',
          '✓ Ensure upgradeable RAM and storage',
          '✓ Do not compromise on cooling - affects longevity',
        ],
        priceRange: '₹75,000 - ₹1,90,000',
        icon: '🎮',
      });
    }

    // Programming/Developer detection
    if (lowerInput.includes('programming') || lowerInput.includes('coding') || lowerInput.includes('developer') || lowerInput.includes('software')) {
      results.push({
        category: 'For Developers',
        specs: [
          'Intel Core i7 or AMD Ryzen 7 (multicore performance)',
          '16GB RAM minimum (32GB for VMs and containers)',
          '512GB NVMe SSD (fast read/write speeds)',
          'Good keyboard with comfortable typing experience',
          '14" or 15.6" Full HD matte display (anti-glare)',
          'Long battery life (8+ hours)',
          'Linux compatibility (check before buying)',
        ],
        tips: [
          '✓ Consider ThinkPad, Dell XPS, or MacBook for development',
          '✓ Good keyboard is crucial for long coding sessions',
          '✓ Matte display reduces eye strain',
          '✓ Ensure multiple USB ports for peripherals',
          '✓ Check RAM upgradeability for future needs',
        ],
        priceRange: '₹70,000 - ₹1,35,000',
        icon: '💻',
      });
    }

    // Budget detection
    if (lowerInput.includes('budget') || lowerInput.includes('cheap') || lowerInput.includes('affordable') || lowerInput.includes('low price')) {
      results.push({
        category: 'Budget-Friendly Options',
        specs: [
          'Intel Core i3 (12th Gen) or AMD Ryzen 3/5',
          '8GB RAM (check if upgradeable)',
          '256GB SSD (avoid HDD)',
          'Integrated graphics',
          '14" or 15.6" HD or Full HD display',
          '5-6 hours battery life',
          'Plastic build is okay for this range',
        ],
        tips: [
          '✓ Wait for seasonal sales (Black Friday, Amazon Prime Day)',
          '✓ Consider previous generation models at discount',
          '✓ Brands to check: Acer Aspire, HP 15s, Lenovo IdeaPad',
          '✓ Ensure SSD storage - never buy HDD in 2025',
          '✓ Check if RAM/storage is upgradeable',
        ],
        priceRange: '₹25,000 - ₹45,000',
        icon: '💰',
      });
    }

    // General tips if no specific category
    if (results.length === 0) {
      results.push({
        category: 'General Recommendations',
        specs: [
          'Intel Core i5/i7 or AMD Ryzen 5/7 (latest 2 gens)',
          '16GB RAM for future-proofing',
          '512GB SSD minimum',
          'Full HD (1920x1080) display',
          'Minimum 6 hours battery life',
          'Windows 11 or macOS',
          'Good brand warranty and support',
        ],
        tips: [
          '✓ Always choose SSD over HDD for faster performance',
          '✓ 8GB RAM is minimum, 16GB is recommended',
          '✓ Check real-world reviews, not just specs',
          '✓ Verify battery life from user reviews',
          '✓ Compare prices across retailers before buying',
          '✓ Consider refurbished from authorized sellers',
        ],
        priceRange: '₹55,000 - ₹90,000',
        icon: '💡',
      });
    }

    return results;
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setShowResults(false);
    
    // Simulate AI processing
    setTimeout(() => {
      const results = analyzeRequirements(query);
      setRecommendations(results);
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 mb-4 md:mb-6"
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </motion.div>
          
          <h2 className="text-white mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
            AI-Powered Recommendation
          </h2>
          <p className="text-gray-400 text-base md:text-lg px-4">
            Tell us your requirements and get personalized laptop suggestions
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-purple-500/30 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="e.g., I'm a student looking for a budget laptop for coding and video streaming"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-10 md:pl-12 pr-4 py-5 md:py-6 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 rounded-xl text-sm md:text-base focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={isSearching || !query.trim()}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 md:px-8 py-5 md:py-6 rounded-xl whitespace-nowrap text-sm md:text-base disabled:opacity-50"
                >
                  {isSearching ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="mr-2"
                      >
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Get Suggestions
                    </>
                  )}
                </Button>
              </div>
              
              {/* Sample queries */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-gray-500 text-xs md:text-sm">Try:</span>
                {['Student laptop under $600', 'Gaming laptop', 'Video editing workstation'].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setQuery(sample)}
                    className="text-xs md:text-sm px-2 md:px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors border border-purple-500/20"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 rounded-2xl opacity-20 blur-xl -z-10"
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
        </motion.div>

        {/* Results */}
        {showResults && recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex items-center gap-2 md:gap-3 text-green-400 mb-4 md:mb-6">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
              <h3 className="text-lg md:text-xl">Found {recommendations.length} recommendation{recommendations.length > 1 ? 's' : ''} for you</h3>
            </div>

            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 p-4 md:p-6 lg:p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="text-4xl md:text-5xl lg:text-6xl">{rec.icon}</div>
                    
                    <div className="flex-1 space-y-4 md:space-y-6">
                      <h3 className="text-white text-xl md:text-2xl">{rec.category}</h3>
                      
                      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <h4 className="text-purple-400 mb-3 text-sm md:text-base">Recommended Specs:</h4>
                          <ul className="space-y-2">
                            {rec.specs.map((spec, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                                className="flex items-start gap-2 text-gray-400 text-xs md:text-sm"
                              >
                                <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                                <span>{spec}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-cyan-400 mb-3 text-sm md:text-base">Expert Tips:</h4>
                          <ul className="space-y-2">
                            {rec.tips.map((tip, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                                className="text-gray-400 text-xs md:text-sm"
                              >
                                {tip}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm md:text-base">
                        Price Range: {rec.priceRange}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
