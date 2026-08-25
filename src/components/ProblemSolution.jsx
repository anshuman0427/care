import React from 'react';
import { Heart, AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, UserCheck, PhoneOff } from 'lucide-react';

export default function ProblemSolution({ onOpenWaitlist }) {
  return (
    <section id="problem" className="py-20 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-poppins font-medium tracking-widest text-[#075E54] bg-[#F0FDF4] px-4 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
            Bridging The Distance
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-normal text-[#0F172A] leading-tight">
            Distance Breaks Care Coordination. <br className="hidden sm:inline" />
            <span className="text-[#075E54]">We Replace Anxiety With Certainty.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-600 mt-4">
            You live in Bangalore, Dubai, London or the US. Your parents live independently in Noida. The problem has two painful layers that traditional apps ignore.
          </p>
        </div>

        {/* Two-Column Problem Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Emotional Problem */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6 border border-amber-100">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-poppins tracking-wider font-medium text-amber-800">Layer 1: The Emotional Burden</span>
              <h3 className="font-poppins text-2xl font-normal text-[#0F172A] mt-2 mb-4">
                "I feel guilty because I am not there."
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Every missed phone call, every reluctant <em>"I'm fine beta"</em> that may or may not be true, adds to a quiet, constant anxiety. You spend your workday wondering if they ate properly, took their evening BP tablet, or remembered their lab test.
              </p>
            </div>
            
            <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs text-amber-900 font-medium flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>Existing apps treat your parent as an app user. But your parent doesn't want another complex app. They want peace & dignity.</span>
            </div>
          </div>

          {/* Card 2: Practical Chaos */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] text-[#075E54] flex items-center justify-center mb-6 border border-emerald-100">
                <ShieldAlert className="w-6 h-6 text-[#25D366]" />
              </div>
              <span className="text-xs uppercase font-poppins tracking-wider font-medium text-[#075E54]">Layer 2: The Practical Chaos</span>
              <h3 className="font-poppins text-2xl font-normal text-[#0F172A] mt-2 mb-4">
                "Healthcare in India is fragmented across 5 apps."
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                One app for medicines, another for diagnostic labs, another for doctor booking, and an emergency number. Coordinating all of it through an elderly parent over long-distance phone calls is exhausting, confusing, and prone to critical errors.
              </p>
            </div>

            <div className="bg-[#F0FDF4] p-4 rounded-2xl border border-emerald-200 text-xs text-emerald-900 font-medium flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>Serene MINDS Solution:</strong> We act as the single point of coordination on WhatsApp. We deal with the pharmacy, lab, doctor & delivery so you don't have to.</span>
            </div>
          </div>

        </div>

        {/* Persona Split */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-poppins text-2xl font-normal text-[#0F172A]">
              Designed Around Two People, Two Roles
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              We never force elderly parents to use a complex app. WhatsApp is the entire interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* Economic Buyer (Child) */}
            <div className="pr-0 md:pr-6 pt-4 md:pt-0 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#075E54] text-white flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-poppins text-lg font-medium text-[#0F172A]">The Economic Buyer (Child)</h4>
                  <p className="text-xs text-[#075E54] font-medium">Living in Bangalore, Dubai, London, US</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Digitally fluent, WhatsApp-native, time-poor
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Driven by love & peace of mind
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Receives restrained daily/weekly digests instead of spam alerts
                </li>
              </ul>
            </div>

            {/* Service Recipient (Parent) */}
            <div className="pl-0 md:pl-6 pt-6 md:pt-0 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0FDF4] text-[#075E54] border border-emerald-200 flex items-center justify-center">
                  <PhoneOff className="w-5 h-5 text-[#075E54]" />
                </div>
                <div>
                  <h4 className="font-poppins text-lg font-medium text-[#0F172A]">The Service Recipient (Parent)</h4>
                  <p className="text-xs text-[#075E54] font-medium">Living independently in Noida</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Smartphone-literate but app-averse; comfortable with WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Values dignity and independence — does not want to feel "managed"
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Enjoys warm, respectful human check-in calls on schedule
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 text-center pt-6 border-t border-slate-100">
            <button
              onClick={() => onOpenWaitlist()}
              className="bg-[#075E54] hover:bg-[#054C44] text-white px-8 py-3.5 rounded-full font-poppins font-medium text-sm transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get Peace of Mind for Your Noida Parents</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
