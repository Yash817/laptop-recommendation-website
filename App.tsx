import { MorphingBackground } from './components/MorphingBackground';
import { ProgressBar } from './components/ProgressBar';
import { StickyHeader } from './components/StickyHeader';
import { HeroSection } from './components/HeroSection';
import { AISearchSection } from './components/AISearchSection';
import { IntroSection } from './components/IntroSection';
import { ComparisonSection } from './components/ComparisonSection';
import { HardwareSection } from './components/HardwareSection';
import { RecommendationSection } from './components/RecommendationSection';
import { MistakesSection } from './components/MistakesSection';
import { ConclusionSection } from './components/ConclusionSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Morphing background */}
      <MorphingBackground />
      
      {/* Progress bar */}
      <ProgressBar />
      
      {/* Sticky header */}
      <StickyHeader />
      
      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <AISearchSection />
        <IntroSection />
        <ComparisonSection />
        <HardwareSection />
        <RecommendationSection />
        <MistakesSection />
        <ConclusionSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Custom scrollbar styles */}
      <style>{`
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(168, 85, 247, 0.5) rgba(10, 10, 15, 0.3);
        }
        
        *::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: rgba(10, 10, 15, 0.3);
        }
        
        *::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #4e2fda, #00e0ff);
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #a855f7, #00e0ff);
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Responsive adjustments for all devices */
        @media (max-width: 640px) {
          body {
            font-size: 14px;
          }
        }
        
        @media (min-width: 1920px) {
          body {
            font-size: 18px;
          }
        }
        
        /* TV/Large screen optimizations */
        @media (min-width: 2560px) {
          body {
            font-size: 20px;
          }
        }
        
        /* Tablet landscape */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          html {
            font-size: 15px;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
}
