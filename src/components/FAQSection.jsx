import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection({ onOpenWaitlist }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Why WhatsApp instead of a consumer mobile app?',
      a: 'Elderly parents are already comfortable with WhatsApp for family photos and audio calls. Forcing an elderly parent to download a new app with logins and passwords creates friction and feeling "managed". WhatsApp is zero-friction for both generations.'
    },
    {
      q: 'Will my parent accept calls from a third party?',
      a: 'Yes, when introduced warmly! We frame the care coordinator as a respectful, dedicated "family friend on the ground" arranged by their son or daughter. Coordinators do not read cold scripts; they build genuine relationships.'
    },
    {
      q: 'How are medicine, test, and doctor costs billed?',
      a: 'All transactional services are billed at exact partner cost (pass-through pricing) with zero hidden markups. Before any booking is finalized, an itemized WhatsApp receipt with a UPI payment link is sent to the adult child for instant approval.'
    },
    {
      q: 'What happens in case of a medical emergency?',
      a: 'Serene MINDS is a care coordination layer, not an emergency ambulance dispatcher. During onboarding, we establish an emergency escalation protocol. If a concern arises, we immediately alert the child and advise contacting local emergency services or partner hospital hotlines.'
    },
    {
      q: 'What are your operating hours and response SLAs?',
      a: 'Our core operating team runs 7:00 AM to 9:00 PM, 7 days a week — matching when elderly parents are awake and when children abroad message. WhatsApp messages receive responses within 15–30 minutes during operating hours.'
    },
    {
      q: 'Which cities & locations are supported?',
      a: 'We support major metropolitan cities across India (including Delhi NCR, Bangalore, Mumbai, Pune, Hyderabad, Chennai, Kolkata) and are expanding rapidly across tier-2 cities based on launch waitlist demand.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-poppins font-normal tracking-widest text-[#075E54] bg-[#F0FDF4] px-4 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
            ❓ Common Questions
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-normal text-[#0F172A]">
            Everything You Need To Know
          </h2>
          <p className="font-body text-base text-slate-600 mt-3 font-normal">
            Have questions about how we coordinate care for your parents? Here are clear answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F0FDF4]/30 transition-colors"
                >
                  <span className="font-poppins font-normal text-base text-[#0F172A] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#075E54] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#075E54]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F0FDF4]/20 border-l-4 border-[#075E54] font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-poppins font-normal text-xl text-[#0F172A]">
            Have A Specific Question About Your Parent's Needs?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto font-normal">
            Our care team is available to answer family questions directly on WhatsApp or phone.
          </p>
          <button
            onClick={() => onOpenWaitlist()}
            className="bg-[#075E54] hover:bg-[#054C44] text-white px-8 py-3.5 rounded-full font-poppins font-normal text-xs transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Join Launch Cohort & Ask Us Directly</span>
          </button>
        </div>

      </div>
    </section>
  );
}
