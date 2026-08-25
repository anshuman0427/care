import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Stethoscope, Pill, Activity, ShieldCheck, HeartHandshake, ExternalLink, Sparkles } from 'lucide-react';

export default function NoidaEcosystem({ onOpenWaitlist }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partnerCategories = [
    { id: 'all', label: 'All Partners' },
    { id: 'diagnostics', label: 'Diagnostic Labs' },
    { id: 'pharmacy', label: 'Pharmacy & Chemists' },
    { id: 'doctors', label: 'Doctors & Teleconsult' },
    { id: 'nursing', label: 'Home Nursing Escalation' },
    { id: 'community', label: 'RWAs & Savera Scheme' },
  ];

  const partners = [
    {
      category: 'diagnostics',
      name: 'Ganesh Diagnostic & Imaging',
      location: 'Sectors 2, 10, 15, 16, 18, 24, 37',
      type: 'NABL/NABH Pathology & Imaging',
      feature: 'Free Home Sample Collection',
      link: 'https://ganeshdiagnostic.com'
    },
    {
      category: 'diagnostics',
      name: 'Felix Hospital PathLabs',
      location: 'Sector 137, Noida',
      type: 'Hospital-Anchored Pathology',
      feature: 'Integrated WhatsApp Diagnostic Booking',
      link: 'https://felixhospital.com'
    },
    {
      category: 'diagnostics',
      name: 'Bhardwaj Hospital Pathology',
      location: 'Sector 29, Noida',
      type: '24x7 NABL Accredited Lab',
      feature: 'Emergency Home Collection Available',
      link: 'https://bhardwajhospitalnoida.com'
    },
    {
      category: 'diagnostics',
      name: 'IQ Diagnostics Lab',
      location: 'Noida & Greater Noida',
      type: 'Biochemistry & Molecular Lab',
      feature: 'Free Home Collection Across NCR',
      link: 'https://iqdiagnostics.in'
    },
    {
      category: 'pharmacy',
      name: 'MAA Pharmacy',
      location: 'Sector 15, Noida',
      type: 'Independent Chemist',
      feature: 'Explicit 24/7 WhatsApp Medicine Orders',
      link: 'https://maapharmacy.in'
    },
    {
      category: 'pharmacy',
      name: 'Felix Hospital Pharmacy',
      location: 'Sector 137, Noida',
      type: 'Hospital Pharmacy',
      feature: 'Prescription Verification & Fast Delivery',
      link: 'https://felixhospital.com/our-pharmacy'
    },
    {
      category: 'pharmacy',
      name: 'Zeelab Pharmacy',
      location: 'Noida & Greater Noida',
      type: 'Regional Medicine Fulfilment',
      feature: 'Fast 59-min Medicine Delivery Network',
      link: 'https://zeelabpharmacy.com'
    },
    {
      category: 'doctors',
      name: 'Bhardwaj Hospital Physicians',
      location: 'Sector 29, Noida',
      type: 'Internal Medicine & Geriatric Care',
      feature: 'In-Clinic & Video Consult Follow-Through',
      link: 'https://bhardwajhospitalnoida.com'
    },
    {
      category: 'doctors',
      name: 'DocGenie Platform',
      location: 'Noida & Noida Extension',
      type: 'Doctor Discovery & Consult',
      feature: 'WhatsApp Consultation Confirmations',
      link: 'https://docgenie.in'
    },
    {
      category: 'nursing',
      name: 'Sarita Nursing Bureau',
      location: 'Sector 31, Noida (Est. 2015)',
      type: 'Home Healthcare & Attendants',
      feature: 'Escalation Attendants & Physiotherapy',
      link: 'https://saritanursingbureau.com'
    },
    {
      category: 'nursing',
      name: 'Care Home Nurses',
      location: 'Noida & Gaur City 2',
      type: 'Nursing & Equipment Rental',
      feature: 'Post-Hospitalization Elder Care Support',
      link: 'https://carehomenurses.com'
    },
    {
      category: 'community',
      name: 'Sector 62 Senior Citizen Welfare Association',
      location: 'Sector 62, Noida (Est. 2012)',
      type: 'Registered Senior Welfare Group',
      feature: '6,200+ Community Members Access',
      link: '#'
    },
    {
      category: 'community',
      name: 'Arun Vihar RWA (Sectors 28/29/37)',
      location: 'Sectors 28, 29, 37, Noida',
      type: '4,752 Unit Township RWA',
      feature: 'On-site Polyclinic & Elder Outreach',
      link: 'https://avrwanoida.com'
    },
    {
      category: 'community',
      name: 'UP Police Savera Yojana Integration',
      location: 'Noida-wide RWA Safety Network',
      type: 'Government Senior Safety Scheme',
      feature: 'Complementary Safety Reference Point',
      link: '#'
    }
  ];

  const filteredPartners = selectedCategory === 'all'
    ? partners
    : partners.filter(p => p.category === selectedCategory);

  return (
    <section id="noida-coverage" className="py-20 bg-[#FAF7F2] relative overflow-hidden border-b border-[#D9C5B2]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: -80 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <span className="text-xs uppercase font-bold tracking-widest text-[#B35A44] bg-[#F0EDE9] px-4 py-1.5 rounded-full border border-[#D9C5B2] inline-block mb-3">
            📍 Hyperlocal Trust Network
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            Deeply Rooted In Noida & Greater Noida
          </h2>
          <p className="font-body text-base text-[#55433e] mt-3">
            We don't try to build expensive new hospitals or labs. Noida already has top-tier healthcare infrastructure — <strong className="text-[#1A1A1A]">we are the coordination layer that connects all of them for your parents.</strong>
          </p>
        </motion.div>

        {/* Local Sector Badges Showcase */}
        <motion.div 
          className="bg-[#F0EDE9] p-6 rounded-2xl border border-[#D9C5B2] mb-10"
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90 }}
        >
          <p className="text-xs uppercase font-bold text-[#3E5C45] tracking-wider mb-3 text-center">
            Key Coverage Sectors Included at Launch:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Sector 15', 'Sector 16', 'Sector 18', 'Sector 28/29/37 (Arun Vihar)',
              'Sector 31', 'Sector 41', 'Sector 50', 'Sector 62',
              'Sector 137', 'Gaur City / Noida Extension', 'Greater Noida Aqua Line Belt'
            ].map((sector, i) => (
              <span 
                key={i}
                className="bg-white px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-800 border border-[#D9C5B2] shadow-sm flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B35A44]" /> {sector}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {partnerCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-[#B35A44] text-white border-[#B35A44] shadow-md'
                  : 'bg-white text-gray-700 border-[#D9C5B2] hover:bg-[#F0EDE9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filtered Partner Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredPartners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: 100 }}
                transition={{ delay: 0.05 * idx, type: 'spring', stiffness: 100 }}
                className="bg-white p-6 rounded-2xl border border-[#D9C5B2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold bg-[#F0EDE9] text-[#3E5C45] px-2.5 py-1 rounded-md border border-[#D9C5B2]">
                      {partner.type}
                    </span>
                    <Building2 className="w-4 h-4 text-gray-400" />
                  </div>

                  <h3 className="font-headline font-bold text-lg text-[#1A1A1A]">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-[#B35A44] font-semibold flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5" /> {partner.location}
                  </p>

                  <p className="text-xs text-gray-600 mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#3E5C45] shrink-0" />
                    <span>{partner.feature}</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EDE9] flex items-center justify-between text-xs">
                  <span className="text-gray-400 text-[11px]">Vetted Noida Partner</span>
                  {partner.link !== '#' && (
                    <a 
                      href={partner.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#B35A44] hover:underline font-semibold flex items-center gap-1"
                    >
                      Website <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Community Trust Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 border-2 border-[#3E5C45]/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#3E5C45]/10 text-[#3E5C45] flex items-center justify-center font-bold shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg text-[#1A1A1A]">
                Complements Local Noida Trust Infrastructure
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                We align with Noida Sector RWAs and reference the UP Police <strong>Savera Yojana</strong> senior safety initiative. We don't compete with safety schemes — we provide the medical & daily coordination layer.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenWaitlist()}
            className="bg-[#3E5C45] hover:bg-[#304D37] text-white px-6 py-3 rounded-xl font-semibold text-xs transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join Noida Cohort Waitlist</span>
          </button>
        </div>

      </div>
    </section>
  );
}
