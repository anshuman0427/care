import React from 'react';

export default function Footer({ onOpenWaitlist }) {
  return (
    <footer className="bg-[#054C44] text-white py-8 border-t border-emerald-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Minimal Brand Title */}
        <div>
          <span className="font-canva text-xl text-white">
            <span className="font-normal">Serene </span>
            <span className="text-[#25D366] font-bold uppercase tracking-wider">MINDS</span>
          </span>
        </div>

        {/* Minimal Copyright */}
        <div className="text-xs text-emerald-100/70 font-canva font-normal text-center sm:text-right">
          © 2026 Serene MINDS Care Coordination. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
