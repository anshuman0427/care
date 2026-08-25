import React from 'react';

export default function Navbar({ onOpenWaitlist }) {
  return (
    <header className="w-full bg-white py-6 px-4 sm:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Name: "Serene" normal & "MINDS" bold (No Green Dot) */}
        <div 
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-canva text-2xl sm:text-3xl tracking-tight text-[#0F172A]">
            <span className="font-normal">Serene </span>
            <span className="text-[#075E54] font-bold uppercase tracking-wider">MINDS</span>
          </span>
        </div>

        {/* Join Waitlist Button */}
        <button
          onClick={() => onOpenWaitlist()}
          className="bg-[#075E54] hover:bg-[#054C44] text-white px-6 py-2.5 rounded-full font-canva text-xs sm:text-sm font-normal shadow-sm hover:shadow transition-all cursor-pointer"
        >
          Join Waitlist
        </button>

      </div>
    </header>
  );
}
