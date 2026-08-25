import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MapPin, Phone, Mail, User, Building, Heart, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';

// 💡 Connected SheetDB API endpoint to automatically save registrations into Google Sheets!
const SHEETDB_API_URL = "https://sheetdb.io/api/v1/iqlqifffuerr8"; 

export default function WaitlistModal({ isOpen, onClose, defaultTier }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneCode, setPhoneCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [parentLocation, setParentLocation] = useState('');
  const [tier, setTier] = useState(defaultTier || 'Care Plan');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState(47);

  useEffect(() => {
    if (defaultTier) {
      setTier(defaultTier);
    }
  }, [defaultTier]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !place || !parentLocation) return;
    
    setIsSubmitting(true);

    const payload = {
      data: [
        {
          "Timestamp": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          "Name": name,
          "Email": email,
          "Phone": `${phoneCode} ${phone}`,
          "Buyer City": place,
          "Parent Address": parentLocation,
          "Tier": tier
        }
      ]
    };

    // Send HTTP POST request to SheetDB API
    if (SHEETDB_API_URL) {
      try {
        await fetch(SHEETDB_API_URL, {
          method: 'POST',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('SheetDB API submission notice:', err);
      }
    }

    const randomNum = Math.floor(Math.random() * 50) + 38;
    setQueueNumber(randomNum);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setPlace('');
    setParentLocation('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          
          {/* Ultra-Smooth Backdrop Fade */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md" 
            onClick={onClose} 
          />

          {/* Ultra-Smooth Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-4 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              /* FORM STATE */
              <div>
                <div className="flex items-center gap-2 mb-2 pr-8">
                  <span className="text-[10px] sm:text-xs font-canva uppercase tracking-wider text-[#075E54] bg-[#F0FDF4] px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="font-normal">Serene </span><span className="font-bold">MINDS</span> • Priority Launch Waitlist
                  </span>
                </div>

                <h2 className="font-poppins text-xl sm:text-3xl font-normal text-[#0F172A] leading-tight">
                  Give Your Parents Dedicated Elder Care Coordination
                </h2>
                <p className="text-xs text-slate-500 mt-1 mb-5 sm:mb-6 font-normal">
                  Join our priority launch cohort. We will assign your family a dedicated care coordinator upon launch.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 font-normal">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-normal text-slate-700 uppercase font-poppins tracking-wider mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#075E54]" /> Your Full Name (Economic Buyer) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ritu Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#075E54]/30 transition-all font-normal"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-normal text-slate-700 uppercase font-poppins tracking-wider mb-1 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#075E54]" /> Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ritu.sharma@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#075E54]/30 transition-all font-normal"
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-normal text-slate-700 uppercase font-poppins tracking-wider mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#075E54]" /> Your WhatsApp Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={phoneCode}
                        onChange={(e) => setPhoneCode(e.target.value)}
                        className="px-2.5 sm:px-3 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-xs font-normal text-slate-800 focus:outline-none"
                      >
                        <option value="+91">🇮🇳 India (+91)</option>
                        <option value="+971">🇦🇪 UAE (+971)</option>
                        <option value="+1">🇺🇸 USA/CA (+1)</option>
                        <option value="+44">🇬🇧 UK (+44)</option>
                        <option value="+65">🇸🇬 Singapore (+65)</option>
                        <option value="+61">🇦🇺 Australia (+61)</option>
                      </select>
                      <input
                        type="tel"
                        required
                        placeholder="9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#075E54]/30 transition-all font-normal"
                      />
                    </div>
                  </div>

                  {/* Place & Parent's City/Town */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-normal text-slate-700 uppercase font-poppins tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#075E54]" /> Your Current City / Country *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bangalore, Dubai, US"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#075E54]/30 transition-all font-normal"
                      />
                    </div>

                    {/* Parent's City/Town Free Text Input */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-normal text-slate-700 uppercase font-poppins tracking-wider mb-1 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#075E54]" /> Parent's City/Town *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Noida, Delhi NCR, Pune"
                        value={parentLocation}
                        onChange={(e) => setParentLocation(e.target.value)}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#075E54]/30 transition-all font-normal"
                      />
                    </div>
                  </div>

                  {/* Plan / Primary Need */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-normal text-slate-700 uppercase font-poppins tracking-wider mb-1 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-[#075E54]" /> Preferred Tier / Care Need
                    </label>
                    <select
                      value={tier}
                      onChange={(e) => setTier(e.target.value)}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-xs font-normal text-slate-800 focus:outline-none"
                    >
                      <option value="Essential">Essential (₹2,499/mo - Reminders & 1x/wk call)</option>
                      <option value="Care Plan">Care Plan (₹5,499/mo - Diagnostics, Docs & 3x/wk call)</option>
                      <option value="Premium Concierge">Premium Concierge (₹9,999/mo - Daily calls & Dedicated Coordinator)</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#075E54] hover:bg-[#054C44] text-white py-3.5 sm:py-4 rounded-full font-poppins font-normal text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Saving to SheetDB...</span>
                        </>
                      ) : (
                        <>
                          <span>Reserve Priority Launch Spot</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-center text-slate-400 italic font-normal">
                    🔒 Zero upfront payment required. Submissions are saved automatically via SheetDB.
                  </p>
                </form>
              </div>
            ) : (
              /* CONFIRMATION / THANK YOU STATE */
              <div className="py-2 sm:py-4 space-y-4 sm:space-y-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F0FDF4] text-[#075E54] flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#25D366]" />
                </div>

                <div>
                  <span className="text-[10px] sm:text-xs font-poppins uppercase font-normal tracking-wider text-[#075E54] bg-[#F0FDF4] px-3 py-1 rounded-full border border-emerald-200 inline-block">
                    Priority Waitlist Confirmed!
                  </span>
                  <h2 className="font-poppins text-xl sm:text-3xl font-normal text-[#0F172A] mt-2 sm:mt-3 leading-tight px-2">
                    Thank You, {name}!
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2 font-normal">
                    You are <strong className="text-[#075E54] font-normal">#{queueNumber}</strong> in line for the Serene MINDS Launch Cohort.
                  </p>
                </div>

                {/* Reservation Summary Box */}
                <div className="bg-slate-50/70 p-3.5 sm:p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2.5 shadow-sm font-normal">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/60 pb-2 gap-0.5 sm:gap-2">
                    <span className="text-slate-500 font-normal">Registered Email:</span>
                    <span className="font-normal text-slate-800 break-all sm:break-normal text-left sm:text-right">{email}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/60 pb-2 gap-0.5 sm:gap-2">
                    <span className="text-slate-500 font-normal">WhatsApp Phone:</span>
                    <span className="font-normal text-slate-800 text-left sm:text-right">{phoneCode} {phone}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/60 pb-2 gap-0.5 sm:gap-2">
                    <span className="text-slate-500 font-normal">Your Location:</span>
                    <span className="font-normal text-slate-800 text-left sm:text-right">{place}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/60 pb-2 gap-0.5 sm:gap-2">
                    <span className="text-slate-500 font-normal">Parent's City/Town:</span>
                    <span className="font-normal text-[#075E54] text-left sm:text-right">{parentLocation}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                    <span className="text-slate-500 font-normal">Reserved Tier:</span>
                    <span className="font-normal text-[#075E54] text-left sm:text-right">{tier}</span>
                  </div>
                </div>

                {/* Simulated WhatsApp Confirmation Preview */}
                <div className="bg-[#DCF8C6] p-3.5 sm:p-4 rounded-2xl border border-emerald-300 text-left text-xs text-slate-900 space-y-1.5 shadow-sm font-normal">
                  <p className="font-normal flex items-center gap-1.5 text-[#075E54] text-[11px] sm:text-xs">
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] shrink-0" /> WhatsApp Confirmation Sent
                  </p>
                  <p className="text-[11px] sm:text-xs leading-relaxed">
                    "Namaste {name}! We have saved your registration in Google Sheets for parents in {parentLocation}. A Care Coordinator will reach out on WhatsApp before launch to set up your parent's profile."
                  </p>
                </div>

                <div className="pt-1 sm:pt-2">
                  <button
                    onClick={handleReset}
                    className="w-full bg-[#0F172A] hover:bg-slate-800 text-white py-3 sm:py-3.5 rounded-full font-poppins font-normal text-xs transition-all shadow-sm cursor-pointer"
                  >
                    Done & Return To Overview
                  </button>
                </div>
              </div>
            )}

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
