
import React, { useEffect, useState } from 'react';
import { gemini } from '../services/geminiService';

const Hero: React.FC = () => {
  const [snippet, setSnippet] = useState("A study in silence and structure.");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gemini.generateEditorialSnippet("minimalist architecture and morning light").then(res => {
      setSnippet(res);
      setLoading(false);
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center pt-24 px-8 overflow-hidden">
      <div className="grid grid-cols-12 gap-8 w-full max-w-7xl relative z-10 h-full">
        {/* Main Text Content */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#BFA181] font-medium">Issue No. 04 — Vernal Equinox</span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-light tracking-tighter">
            The Art <br /> of <span className="italic font-normal">Being</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2D2D2A]/70 max-w-md font-light leading-relaxed h-16">
            {loading ? "Composing reflection..." : snippet}
          </p>
          <div className="pt-8">
            <button className="border border-[#2D2D2A] px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#2D2D2A] hover:text-[#FDFBF7] transition-all duration-500">
              Explore the Collection
            </button>
          </div>
        </div>

        {/* Hero Image Block - Asymmetrical */}
        <div className="hidden md:flex col-span-6 relative h-full items-center justify-end">
          <div className="w-[80%] aspect-[3/4] overflow-hidden shadow-2xl relative translate-y-12">
            <img 
              src="https://picsum.photos/800/1000?grayscale" 
              alt="Luxury Portrait" 
              className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
            />
            <div className="absolute -bottom-8 -left-8 bg-[#FDFBF7] p-8 max-w-[200px] border border-[#2D2D2A]/5">
              <p className="text-xs uppercase tracking-widest leading-loose">Visual Poetry by Helena Graves</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F1EA] -z-10 opacity-50" />
    </section>
  );
};

export default Hero;
