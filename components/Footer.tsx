
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F1EA] py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-6 space-y-12">
          <h2 className="text-5xl font-light tracking-widest uppercase">ÆTHERIA</h2>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#BFA181]">Newsletter</p>
            <div className="flex border-b border-[#2D2D2A]/20 pb-2 max-w-sm">
              <input 
                type="email" 
                placeholder="Receive our monthly anthology" 
                className="bg-transparent text-sm focus:outline-none flex-1 italic placeholder-[#2D2D2A]/30"
              />
              <button className="text-[10px] uppercase tracking-widest hover:text-[#BFA181]">Join</button>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-2 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#BFA181]">Index</p>
          <ul className="space-y-3 text-sm font-light">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Archive</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Boutique</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Philosophy</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-2 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#BFA181]">Social</p>
          <ul className="space-y-3 text-sm font-light">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Instagram</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Pinterest</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Vimeo</a></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-2 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#BFA181]">Legal</p>
          <ul className="space-y-3 text-sm font-light">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Privacy</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] opacity-40">
        <p>© 2024 ÆTHERIA Studios</p>
        <p>Curated in Paris — Crafted in Silence</p>
      </div>
    </footer>
  );
};

export default Footer;
