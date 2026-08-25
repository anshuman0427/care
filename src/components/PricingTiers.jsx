import React, { useState } from 'react';
import { Check, Users, User } from 'lucide-react';

export default function PricingTiers({ onOpenWaitlist }) {
  const [isCouple, setIsCouple] = useState(false);

  const tiers = [
    {
      id: 'essential',
      name: 'Essential',
      singlePrice: '₹2,499',
      couplePrice: '₹3,999',
      period: '/ month',
      description: 'Ideal for parents who need medicine discipline & weekly human check-in.',
      highlight: false,
      badge: 'Starter Care',
      features: [
        'Unlimited WhatsApp medicine & test reminders',
        'Monthly medicine refill tracking & auto-reorder',
        '1x / week human wellbeing check-in call',
        'WhatsApp support during operating hours (7 AM – 9 PM)',
        'Restrained notifications (weekly digest, instant alerts)'
      ]
    },
    {
      id: 'care',
      name: 'Care Plan',
      singlePrice: '₹5,499',
      couplePrice: '₹8,799',
      period: '/ month',
      description: 'Our recommended tier for active chronic disease management & doctor follow-through.',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Everything in Essential Plan',
        '3x / week human wellbeing check-in calls',
        'Diagnostics coordination (unlimited lab bookings)',
        'Doctor consultation booking & follow-up tracking',
        'Coordinator assists parent joining online consult calls',
        'Prescription capture & automatic reminder creation'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Concierge',
      singlePrice: '₹9,999',
      couplePrice: '₹15,999',
      period: '/ month',
      description: 'Full white-glove daily oversight for high-dependency or single parents.',
      highlight: false,
      badge: 'Full Oversight',
      features: [
        'Everything in Care Plan',
        'Daily morning human check-in calls (7 days a week)',
        'Dedicated named Senior Care Coordinator',
        'Priority WhatsApp SLA (< 15 mins during operating hours)',
        'Quarterly family health summary & record audit',
        'Direct coordinator escalation hotline'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-poppins font-normal tracking-widest text-[#075E54] bg-[#F0FDF4] px-4 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
            Simple, Transparent Subscription
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-normal text-[#0F172A]">
            Predictable Care Pricing. Zero Hidden Fees.
          </h2>
          <p className="font-body text-base text-slate-600 mt-3 font-normal">
            You pay only for the human coordination & check-in service. All actual medicine, test, and doctor costs pass through at exact partner cost.
          </p>
        </div>

        {/* Single Parent vs Couple Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
            <button
              onClick={() => setIsCouple(false)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-poppins font-normal transition-all cursor-pointer ${
                !isCouple ? 'bg-[#075E54] text-white shadow-sm' : 'text-slate-600 hover:text-[#075E54]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Single Parent</span>
            </button>

            <button
              onClick={() => setIsCouple(true)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-poppins font-normal transition-all cursor-pointer ${
                isCouple ? 'bg-[#075E54] text-white shadow-sm' : 'text-slate-600 hover:text-[#075E54]'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Both Parents (Couple Discount - Save 40%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = isCouple ? tier.couplePrice : tier.singlePrice;
            return (
              <div
                key={tier.id}
                className={`bg-white rounded-3xl p-8 border transition-all flex flex-col justify-between relative ${
                  tier.highlight
                    ? 'border-[#075E54] shadow-xl ring-2 ring-[#075E54]/20 scale-105 z-10'
                    : 'border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {tier.badge && (
                  <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] uppercase font-poppins font-normal tracking-wider px-3.5 py-1 rounded-full text-white shadow-sm ${
                    tier.highlight ? 'bg-[#075E54]' : 'bg-slate-700'
                  }`}>
                    {tier.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-poppins font-normal text-2xl text-[#0F172A] mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 h-10 font-normal">
                    {tier.description}
                  </p>

                  <div className="mb-6 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="font-poppins text-4xl font-normal text-[#0F172A]">{price}</span>
                      <span className="text-xs text-slate-500 font-normal">{tier.period}</span>
                    </div>
                    <span className="text-[11px] text-[#075E54] font-normal block mt-1">
                      {isCouple ? 'Covers both parents living together' : 'Billed per parent'}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-normal">
                        <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenWaitlist(tier.name)}
                    className={`w-full py-3.5 rounded-full text-xs font-poppins font-normal transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                      tier.highlight
                        ? 'bg-[#075E54] hover:bg-[#054C44] text-white'
                        : 'bg-[#0F172A] hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Join Waitlist For {tier.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-white p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1 shadow-sm font-normal">
          <p className="font-poppins font-normal text-[#0F172A]">
            🔒 Pass-Through Cost Guarantee:
          </p>
          <p>
            Medicines, lab tests, and doctor consultation fees are billed at actual partner cost. No inflated margins, no hidden platform surcharges.
          </p>
        </div>

      </div>
    </section>
  );
}
