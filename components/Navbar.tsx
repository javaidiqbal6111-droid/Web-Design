
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#2D2D2A]/5 px-8 py-6 flex justify-between items-center">
      <div className="flex space-x-8 text-xs uppercase tracking-widest text-[#2D2D2A]/60 font-light">
        <a href="#" className="hover:text-[#BFA181] transition-colors">Journal</a>
        <a href="#" className="hover:text-[#BFA181] transition-colors">Archive</a>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl font-medium tracking-[0.2em] uppercase">ÆTHERIA</h1>
      </div>
      
      <div className="flex space-x-8 text-xs uppercase tracking-widest text-[#2D2D2A]/60 font-light">
        <a href="#" className="hover:text-[#BFA181] transition-colors">Boutique</a>
        <a href="#" className="hover:text-[#BFA181] transition-colors">Inquiry</a>
      </div>
    </nav>
  );
};

export default Navbar;
