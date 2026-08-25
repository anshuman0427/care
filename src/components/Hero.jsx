import React from 'react';
import { MessageSquare, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-100">
      
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F0FDF4] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Strategic Thesis */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Main Headline */}
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F172A] leading-[1.15] tracking-tight">
              Your parents have someone on the ground.{' '}
              <span className="text-[#075E54] underline decoration-[#25D366] underline-offset-8">
                You have us on WhatsApp.
              </span>
            </h1>

            {/* Strategic Thesis */}
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              We are not trying to replace pharmacies, doctors, or diagnostic labs. We are the coordination layer that makes all of them work seamlessly for families who live far away from their parents.
            </p>

            {/* 3 Core Promises */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                <span className="text-xs font-canva font-normal text-[#0F172A]">Zero App Download</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                <span className="text-xs font-canva font-normal text-[#0F172A]">Human Care Coordinator</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                <span className="text-xs font-canva font-normal text-[#0F172A]">Full 5 Service Coverage</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenWaitlist()}
                className="bg-[#075E54] hover:bg-[#054C44] text-white px-8 py-4 rounded-full font-canva font-normal text-sm sm:text-base shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Join Priority Launch Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#services"
                className="bg-[#F0FDF4] hover:bg-emerald-100 text-[#075E54] px-6 py-4 rounded-full font-canva font-normal text-sm border border-emerald-200 transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <span>Explore 5 Core Services</span>
              </a>
            </div>

          </div>

          {/* Right Column: Mobile Mockup containing hello.png */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Realistic Curved Smartphone Frame */}
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[350px] bg-[#1E293B] p-2.5 sm:p-3 rounded-[48px] shadow-2xl border-4 border-slate-900 ring-1 ring-slate-800/80">
              
              {/* Inner Screen Container */}
              <div className="relative overflow-hidden rounded-[38px] bg-white shadow-inner border border-slate-700/50">
                <img
                  src="/assets/hello.png"
                  alt="Serene MINDS WhatsApp Mobile Mockup"
                  className="w-full h-auto object-cover rounded-[38px] block"
                />
              </div>

            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-full bg-[#F0FDF4] text-[#075E54] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-xs font-canva font-normal text-[#0F172A]">100% Peace of Mind</p>
                <p className="text-[11px] text-slate-500 font-normal">Restrained alerts • Zero app hassle</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
