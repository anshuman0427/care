import React from 'react';
import { Bell, Pill, Activity, Stethoscope, PhoneCall, Check, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

export default function CoreServices({ onOpenWaitlist }) {
  const services = [
    {
      id: 1,
      number: '01',
      title: 'Medicine & Health Reminders',
      icon: Bell,
      badge: 'Daily Discipline',
      image: '/assets/service1.jpg',
      ask: '“Remind Mom to take BP medicine at 9 PM.”',
      action: 'Daily or recurring WhatsApp & call reminders with automated follow-up.',
      bullets: [
        'Free-text WhatsApp request creation',
        'Parent acknowledges with a single tap (✅ Done)',
        'Child receives restrained alerts — only notified if a reminder is missed'
      ],
      reverse: false
    },
    {
      id: 2,
      number: '02',
      title: 'Monthly Medicine Management',
      icon: Pill,
      badge: 'Refill Automation',
      image: '/assets/service2.jpg',
      ask: '“Dad\'s medicines are running out.”',
      action: 'Track prescriptions, confirm refill 4 days prior, and coordinate doorstep delivery.',
      bullets: [
        'Refill warning sent 3–5 days before medicine depletion',
        'Coordinated through vetted local partner pharmacies',
        'Transparent cost pass-through with delivery proof'
      ],
      reverse: true
    },
    {
      id: 3,
      number: '03',
      title: 'Home Diagnostics',
      icon: Activity,
      badge: 'At-Home Testing',
      image: '/assets/service3.jpg',
      ask: '“Book a blood test for Mom.”',
      action: 'Book home sample collection, collect PDF report, and send directly on WhatsApp.',
      bullets: [
        'Partnered with accredited home sample collection labs',
        'Sample collection coordinated around parent\'s schedule',
        'PDF report delivered directly in-chat upon issuance'
      ],
      reverse: false
    },
    {
      id: 4,
      number: '04',
      title: 'Online Doctor Consultation & Follow-up',
      icon: Stethoscope,
      badge: 'End-to-End Care',
      image: '/assets/service4.jpg',
      ask: '“Mom needs to speak to a doctor.”',
      action: 'Book consultation, assist parent joining call, and store prescription notes.',
      bullets: [
        'Coordinator assists parent 10 mins before call setup',
        'Post-consultation prescription saved and updated in reminder cycle',
        'Plain-language summary sent to family\'s WhatsApp'
      ],
      reverse: true
    },
    {
      id: 5,
      number: '05',
      title: 'Parent Check-in / Well-being Calls',
      icon: PhoneCall,
      badge: 'Human Connection',
      image: '/assets/service5.jpg',
      ask: '“Please check on Dad every morning.”',
      action: 'Scheduled check-ins by named human care coordinator with family updates.',
      bullets: [
        'Named care coordinator calls parent on a predictable schedule',
        'Structured check-in: mood, meals, medicine adherence',
        'Daily digest for normal status; immediate alerts for concerns'
      ],
      reverse: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-poppins font-normal tracking-widest text-[#075E54] bg-[#F0FDF4] px-4 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
            The 5 Core Services
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight">
            Comprehensive Care. <br className="hidden sm:inline" />
            <span className="text-[#075E54]">Coordinated On WhatsApp.</span>
          </h2>
        </div>

        {/* Side-by-Side Service Cards */}
        <div className="space-y-16">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="bg-[#F0FDF4]/40 p-8 sm:p-10 rounded-3xl border border-emerald-100/80">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${s.reverse ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Hand Side: Content & Short Description */}
                  <div className={`lg:col-span-6 space-y-5 ${s.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-poppins font-normal uppercase tracking-wider bg-[#F0FDF4] text-[#075E54] px-3.5 py-1 rounded-full border border-emerald-200">
                        {s.badge}
                      </span>
                      <span className="text-xs font-mono font-normal text-slate-400">
                        SERVICE {s.number}
                      </span>
                    </div>

                    <h3 className="font-poppins text-2xl sm:text-3xl font-normal text-[#0F172A] leading-tight">
                      {s.title}
                    </h3>

                    <p className="font-body text-base text-slate-600 leading-relaxed font-normal">
                      {s.action}
                    </p>

                    {/* WhatsApp Request Snippet Box */}
                    <div className="bg-white p-4 rounded-2xl border border-emerald-200/60 shadow-sm space-y-1">
                      <p className="text-[11px] font-poppins font-normal text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" /> What You Ask On WhatsApp
                      </p>
                      <p className="text-sm font-normal italic text-[#0F172A]">
                        {s.ask}
                      </p>
                    </div>

                    {/* Bullet Features */}
                    <div className="space-y-2.5 pt-1">
                      {s.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-normal">
                          <div className="w-5 h-5 rounded-full bg-[#F0FDF4] text-[#075E54] border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#25D366]" />
                          </div>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => onOpenWaitlist(s.title)}
                        className="bg-[#075E54] hover:bg-[#054C44] text-white px-6 py-3 rounded-full font-poppins font-normal text-xs transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                      >
                        <span>Request This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Hand Side: Picture Illustration */}
                  <div className={`lg:col-span-6 ${s.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
                      <img 
                        src={s.image} 
                        alt={s.title}
                        className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

                      {/* Floating Picture Overlay Badge */}
                      <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-md flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#075E54] text-white flex items-center justify-center font-normal">
                            <Icon className="w-5 h-5 text-[#25D366]" />
                          </div>
                          <div>
                            <p className="text-xs font-poppins font-normal text-[#0F172A]">{s.title}</p>
                            <p className="text-[11px] text-slate-500 font-normal">Coordination by Serene MINDS</p>
                          </div>
                        </div>
                        <ShieldCheck className="w-5 h-5 text-[#25D366]" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
