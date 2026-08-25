import React from 'react';
import { Lock, XCircle, CheckCircle, AlertTriangle, UserCheck } from 'lucide-react';

export default function TrustSafety({ onOpenWaitlist }) {
  return (
    <section id="trust-safety" className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-poppins font-normal tracking-widest text-[#075E54] bg-[#F0FDF4] px-4 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
            🛡️ Non-Negotiable Trust Standards
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-normal text-[#0F172A]">
            Trust Is Our Core Product. Safety Is Built In.
          </h2>
          <p className="font-body text-base text-slate-600 mt-3 font-normal">
            Handling your parents' health information requires absolute transparency, strict data privacy, and clear operational boundaries.
          </p>
        </div>

        {/* Clear Boundaries: What We ARE vs What We Are NOT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Column 1: What We ARE NOT */}
          <div className="bg-red-50/40 p-8 rounded-3xl border border-red-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="font-poppins text-xl font-normal text-red-950">
                What We Are NOT
              </h3>
            </div>

            <ul className="space-y-3.5 text-xs text-red-900 font-normal">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Not a Hospital or Emergency Response Unit:</strong> We do not dispatch proprietary ambulances or handle acute trauma triage.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Not a Licensed Medical Provider:</strong> We do not independently diagnose conditions or modify doctor prescriptions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Not an Autonomous AI Chatbot:</strong> AI only assists human coordinators with reminder parsing. A real human oversees all parent calls.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Not a Middleman Markup Trap:</strong> We do not mark up partner pharmacy bills or diagnostics unexpectedly.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: What We ARE */}
          <div className="bg-[#F0FDF4]/60 p-8 rounded-3xl border border-emerald-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] text-[#075E54] border border-emerald-200 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="font-poppins text-xl font-normal text-[#075E54]">
                What We ARE
              </h3>
            </div>

            <ul className="space-y-3.5 text-xs text-emerald-950 font-normal">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span><strong>The Ground Coordination Layer:</strong> We sit on top of licensed Noida pharmacies, labs, & doctors to ensure tasks get executed.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span><strong>Your Dedicated Ground Contact:</strong> A named care coordinator who knows your parent by name & checks on them on schedule.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span><strong>Restrained Family Communicator:</strong> We protect your signal-to-noise ratio. Daily digests for routine, instant alerts for concerns.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span><strong>DPDP Act Compliant Vault:</strong> Encrypted medical storage, strict access control, & full family consent management.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Security & Privacy Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-200/80">
            <Lock className="w-8 h-8 text-[#075E54] mb-3" />
            <h4 className="font-poppins font-normal text-base text-[#0F172A] mb-1">
              Encrypted Medical Data
            </h4>
            <p className="text-xs text-slate-600 font-normal">
              Prescriptions & lab report PDFs stored with military-grade AES-256 encryption. Access strictly restricted to assigned care coordinator.
            </p>
          </div>

          <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-200/80">
            <UserCheck className="w-8 h-8 text-[#075E54] mb-3" />
            <h4 className="font-poppins font-normal text-base text-[#0F172A] mb-1">
              Vetted Noida Partners
            </h4>
            <p className="text-xs text-slate-600 font-normal">
              Every pharmacy, diagnostic lab, and doctor partner verified for active licensing (NABH, NABL, NMC) before joining our network.
            </p>
          </div>

          <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-200/80">
            <AlertTriangle className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="font-poppins font-normal text-base text-[#0F172A] mb-1">
              Emergency Disclaimers
            </h4>
            <p className="text-xs text-slate-600 font-normal">
              Transparent protocol established at onboarding: if an acute medical emergency occurs, local emergency services & family are notified immediately.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
