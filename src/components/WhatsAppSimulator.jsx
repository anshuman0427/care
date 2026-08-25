import React, { useState } from 'react';
import { Send, CheckCheck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhatsAppSimulator({ onOpenWaitlist }) {
  const [activeScenario, setActiveScenario] = useState('reminder');

  const scenarios = {
    reminder: {
      title: '1. Medicine Reminder',
      asks: '“Please remind Dad to take his BP medicine every night at 9 PM.”',
      messages: [
        { sender: 'child', text: 'Please remind Dad to take his BP medicine every night at 9 PM.', time: '8:00 PM' },
        { sender: 'system', text: 'Done. We\'ll remind Mr. Sharma every day at 9:00 PM to take his BP medicine via WhatsApp & phone call. You\'ll only hear from us if he misses it.', time: '8:01 PM' },
        { sender: 'parent', text: 'Parent received: "Good evening Mr. Sharma 👋 Time for your 9 PM BP tablet." Replied: "✅ Done"', time: '9:02 PM' }
      ]
    },
    refill: {
      title: '2. Medicine Refill',
      asks: '“Dad\'s BP & thyroid medicines are running low.”',
      messages: [
        { sender: 'system', text: '🔔 Refill Alert: Mr. Sharma\'s BP and thyroid medicines are due for refill in 4 days. Shall we place the order with partner pharmacy?', time: '10:15 AM' },
        { sender: 'child', text: 'Yes, please place the order.', time: '10:18 AM' },
        { sender: 'system', text: 'Order placed! Total: ₹1,420 (Zero markup pass-through). Delivery coordinated for tomorrow 11 AM. Photo confirmation will be sent upon arrival.', time: '10:20 AM' }
      ]
    },
    diagnostics: {
      title: '3. Home Diagnostics',
      asks: '“Book a blood test for Mom tomorrow morning.”',
      messages: [
        { sender: 'child', text: 'Book a blood test for Mom tomorrow morning — doctor asked for HbA1c and lipid profile.', time: '4:30 PM' },
        { sender: 'system', text: 'Got it. Booking HbA1c + Lipid Profile with home sample collection tomorrow between 7–9 AM. Cost: ₹750.', time: '4:32 PM' },
        { sender: 'system', text: '📄 Report Delivered: Sample collected at 7:45 AM. PDF report attached. All key values in normal range. Logged to Mom\'s vault.', time: 'Next Day 2:15 PM' }
      ]
    },
    doctor: {
      title: '4. Doctor Consultation',
      asks: '“Mom needs to speak to a GP today.”',
      messages: [
        { sender: 'child', text: 'Mom is feeling slightly dizzy since morning. Can you arrange a GP consult?', time: '11:00 AM' },
        { sender: 'system', text: 'Coordinating with Dr. Sharma (Internal Medicine). Teleconsult booked for 2:30 PM today. Coordinator Ananya will assist Mom to join.', time: '11:12 AM' },
        { sender: 'system', text: '✅ Consult Complete: Doctor prescribed ORS & hydration. Prescription saved & updated in reminder cycle. No urgent concern.', time: '3:05 PM' }
      ]
    },
    checkin: {
      title: '5. Wellbeing Call Escalation',
      asks: '“Please check on Mom every morning.”',
      messages: [
        { sender: 'system', text: '🌅 Morning Check-in Call: Coordinator Ananya called your mother at 9:15 AM. She mentioned mild knee pain but took breakfast & meds.', time: '9:30 AM' },
        { sender: 'child', text: 'Did she say if she needs a doctor for the knee pain?', time: '9:35 AM' },
        { sender: 'system', text: 'Ananya re-confirmed with her: she prefers resting today. We will check again at 4 PM and notify you if pain continues. Rest assured!', time: '9:38 AM' }
      ]
    }
  };

  const current = scenarios[activeScenario];

  return (
    <section id="whatsapp-demo" className="py-20 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-poppins font-normal tracking-widest text-[#075E54] bg-[#F0FDF4] px-4 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
            💬 100% WhatsApp Interface
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-normal text-[#0F172A]">
            Experience The Service In Action
          </h2>
          <p className="font-body text-base text-slate-600 mt-3 font-normal">
            Click a scenario below to test how simple coordination feels over WhatsApp. No app downloads, no new usernames, no password resets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Scenario Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-poppins text-xl font-normal text-[#0F172A] mb-4">
              Select A Real-World Request:
            </h3>

            {Object.keys(scenarios).map((key) => {
              const item = scenarios[key];
              const isActive = activeScenario === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveScenario(key)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#075E54] text-white border-[#075E54] shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-[#F0FDF4]/50'
                  }`}
                >
                  <div>
                    <span className={`text-xs font-poppins font-normal uppercase tracking-wider block ${isActive ? 'text-[#25D366]' : 'text-slate-400'}`}>
                      {item.title}
                    </span>
                    <p className="text-xs font-normal mt-1 italic">
                      {item.asks}
                    </p>
                  </div>
                  <ArrowRight className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#25D366]' : 'text-slate-300'}`} />
                </button>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => onOpenWaitlist()}
                className="w-full bg-[#075E54] hover:bg-[#054C44] text-white py-3.5 rounded-full font-poppins font-normal text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Waitlist for WhatsApp Access</span>
              </button>
            </div>
          </div>

          {/* Right Column: Simulated WhatsApp Phone Screen */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md bg-[#0F172A] p-4 rounded-[40px] shadow-2xl border-4 border-slate-800 relative">
              
              {/* Phone Camera Notch */}
              <div className="w-28 h-4 bg-[#0F172A] rounded-b-xl mx-auto mb-2" />

              {/* Chat Header */}
              <div className="bg-[#075E54] text-white p-3.5 rounded-t-2xl flex items-center justify-between shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-[#075E54] font-poppins font-normal flex items-center justify-center text-xs shadow">
                    SM
                  </div>
                  <div>
                    <h4 className="font-poppins font-normal text-xs leading-tight flex items-center gap-1.5">
                      Serene MINDS Care
                      <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                    </h4>
                    <p className="text-[10px] text-emerald-200 font-normal">
                      Coordinator Ananya (Online)
                    </p>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
              </div>

              {/* Chat Canvas */}
              <div className="bg-[#E5DDD5] p-4 space-y-3 font-sans h-[400px] overflow-y-auto rounded-b-2xl border-t border-[#075E54]">
                <div className="text-center text-[10px] text-gray-500 my-1 bg-white/80 py-1 rounded-full w-40 mx-auto font-normal">
                  {current.title} Simulation
                </div>

                <div className="space-y-3">
                  {current.messages.map((m, i) => {
                    const isChild = m.sender === 'child';
                    const isParent = m.sender === 'parent';

                    return (
                      <div
                        key={i}
                        className={`p-3 rounded-xl shadow-sm text-xs max-w-[85%] ${
                          isChild
                            ? 'ml-auto bg-[#DCF8C6] text-slate-900 rounded-tr-none'
                            : isParent
                            ? 'mx-auto bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-center'
                            : 'mr-auto bg-white text-slate-900 rounded-tl-none border-l-4 border-[#075E54]'
                        }`}
                      >
                        {!isParent && (
                          <p className={`font-poppins font-normal text-[10px] uppercase mb-0.5 ${isChild ? 'text-[#075E54]' : 'text-[#075E54]'}`}>
                            {isChild ? 'You (Child)' : 'Serene MINDS Coordinator'}
                          </p>
                        )}
                        <p className="leading-relaxed font-normal">{m.text}</p>
                        <span className="text-[9px] text-gray-400 float-right mt-1 block flex items-center gap-1">
                          {m.time} {isChild && <CheckCheck className="w-3 h-3 text-[#25D366] inline" />}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Chat Input Bar */}
              <div className="bg-white p-2.5 rounded-b-[32px] mt-2 flex items-center gap-2 border border-slate-200">
                <input
                  type="text"
                  placeholder="Type a request on WhatsApp..."
                  disabled
                  className="w-full bg-slate-100 text-xs px-3 py-2 rounded-full text-slate-400 cursor-not-allowed font-normal"
                />
                <button 
                  onClick={() => onOpenWaitlist()}
                  className="p-2 bg-[#25D366] text-white rounded-full hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
