import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreServices from './components/CoreServices';
import PricingTiers from './components/PricingTiers';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  const handleOpenWaitlist = (tierName = '') => {
    setSelectedTier(tierName);
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#075E54] selection:text-white">
      
      {/* 1. Clean Top Header */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      <main>
        {/* 2. Focused Hero Section */}
        <Hero onOpenWaitlist={handleOpenWaitlist} />

        {/* 3. The 5 Core Services (Side-by-Side) */}
        <CoreServices onOpenWaitlist={handleOpenWaitlist} />

        {/* 4. Simple Transparent Pricing */}
        <PricingTiers onOpenWaitlist={handleOpenWaitlist} />

        {/* 5. Essential FAQs */}
        <FAQSection onOpenWaitlist={handleOpenWaitlist} />
      </main>

      {/* 6. Clean Footer */}
      <Footer onOpenWaitlist={handleOpenWaitlist} />

      {/* 7. Priority Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={handleCloseWaitlist}
        defaultTier={selectedTier}
      />

    </div>
  );
}
