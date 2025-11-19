import React from 'react';
import { ACCOLADES } from '../constants';
import { Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
          alt="Mediterranean Garden Dining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center space-x-4 animate-fade-in-up">
            {ACCOLADES.map((accolade, idx) => (
                <div key={idx} className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <Award className="text-victory-gold w-4 h-4" />
                    <span className="text-xs text-white font-medium tracking-wide">{accolade.title}</span>
                </div>
            ))}
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight shadow-sm">
          A Mediterranean<br />
          <span className="italic text-victory-gold">Escape</span> in Astoria
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
          Experience our European-style indoor/outdoor garden. 
          The perfect setting for dining, weddings, and timeless memories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="px-8 py-3 bg-victory-gold text-white font-bold uppercase tracking-widest hover:bg-yellow-600 transition-colors rounded-sm">
            View Menus
          </a>
          <a href="#events" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-colors rounded-sm">
            Private Events
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;