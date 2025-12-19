
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialGrid from './components/EditorialGrid';
import ConciergeChat from './components/ConciergeChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior for an editorial feel
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#BFA181]/30">
      {/* Editorial Overlay Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] border-[1.5rem] border-[#FDFBF7] hidden lg:block" />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Transitional Statement Section */}
        <section className="py-48 px-8 bg-[#2D2D2A] text-[#FDFBF7] flex items-center justify-center overflow-hidden relative">
          <div className="max-w-4xl text-center space-y-12 relative z-10">
            <span className="text-xs uppercase tracking-[0.5em] text-[#BFA181] font-bold">The Philosophy</span>
            <h2 className="text-4xl md:text-7xl font-light leading-snug italic">
              "To be modern is to understand the soul of the classic."
            </h2>
            <div className="w-16 h-px bg-[#BFA181] mx-auto" />
            <p className="text-sm md:text-base uppercase tracking-[0.2em] font-light max-w-sm mx-auto opacity-70">
              A commitment to the slow, the intentional, and the lasting.
            </p>
          </div>
          {/* Subtle Graphic background decoration */}
          <div className="absolute left-[-10%] bottom-[-20%] text-[20vw] leading-none text-[#FDFBF7]/5 select-none font-bold uppercase pointer-events-none italic">
            Ætheria
          </div>
        </section>

        <EditorialGrid />

        {/* Product Callout Section */}
        <section className="py-32 px-8 flex flex-col md:flex-row items-center justify-center gap-24">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-[#F4F1EA] p-12 relative">
             <img 
               src="https://picsum.photos/600/800?grayscale&v=3" 
               alt="Featured Product" 
               className="w-full h-full object-cover shadow-xl"
             />
             <div className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[1em] whitespace-nowrap opacity-30">
               Essential Ritual No. 01
             </div>
          </div>
          <div className="w-full md:w-1/3 space-y-8">
            <span className="text-[10px] uppercase tracking-widest text-[#BFA181] font-bold">Boutique Spotlight</span>
            <h3 className="text-5xl font-light">The Silk Serum</h3>
            <p className="text-lg font-light leading-relaxed text-[#2D2D2A]/70 italic">
              Formulated at the intersection of botanic wisdom and modern chemistry. A singular drop of clarity for the skin.
            </p>
            <div className="pt-6">
              <button className="text-xs uppercase tracking-widest border-b border-[#2D2D2A] pb-2 font-bold hover:text-[#BFA181] hover:border-[#BFA181] transition-all">
                Discover the Formulation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConciergeChat />
    </div>
  );
};

export default App;
