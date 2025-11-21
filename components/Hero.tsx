import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Next.js Style Optimization: Use img tag instead of background-image for better LCP & accessibility */}
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
        alt="Astore Deosai Lake Landscape"
        className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-fade-in"
        // mimic next/image priority
        fetchPriority="high"
        loading="eager"
        decoding="sync"
      />
      
      {/* Dark Blue Gradient Overlay for Theme Consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30 z-0" />
      <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply z-0" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10">
        
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card/50 backdrop-blur-md border border-white/10 text-white mb-6 hover:bg-brand-card/70 transition-colors cursor-default">
            <MapPin size={16} className="text-brand-gold" />
            <span className="text-sm font-medium tracking-wide">Experience Luxury in Quetta Style</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Taste of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Nature & Tradition</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl leading-relaxed drop-shadow-md">
            Dine with a view. Enjoy our signature tea and traditional cuisine in a luxury outdoor setting inspired by the serenity of Deosai.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setView(ViewState.MENU)}
              className="bg-brand-primary hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-emerald-500/40 flex items-center justify-center gap-3 group"
            >
              View Digital Menu
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => setView(ViewState.CONTACT)}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 text-lg font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center shadow-lg"
            >
              Reserve A Table
            </button>
          </div>
        </div>

        {/* Visual polish gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-0 pointer-events-none"></div>
      </div>
    </div>
  );
};