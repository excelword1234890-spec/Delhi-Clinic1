import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { Phone, MessageSquare, Navigation, Clock, CheckCircle2 } from 'lucide-react';

interface QuickRibbonProps {
  language: Language;
}

export const QuickRibbon: React.FC<QuickRibbonProps> = ({ language }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    "Hello Delhi Clinic, I would like to inquire about consultation and appointment availability."
  )}`;

  return (
    <div className="bg-[#12263F] text-white py-4 px-4 sm:px-8 border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        {/* OPD Hours */}
        <div className="flex items-center space-x-3 p-2 bg-white/5 rounded-xl border border-white/10">
          <div className="w-10 h-10 rounded-lg bg-[#0F6CBD]/20 flex items-center justify-center text-[#0F6CBD]">
            <Clock className="w-5 h-5 text-[#2CB67D]" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#2CB67D] animate-ping"></span>
              <span className="font-semibold text-emerald-400">
                {language === 'en' ? 'OPD Open Daily' : 'OPD रोजाना खुला है'}
              </span>
            </div>
            <p className="text-xs font-bold text-white mt-0.5">8:00 AM – 9:00 PM</p>
          </div>
        </div>

        {/* Call Now */}
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex items-center space-x-3 p-2 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/10 group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#0F6CBD] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">
              {language === 'en' ? 'Call Directly' : 'डायरेक्ट कॉल करें'}
            </span>
            <p className="text-xs font-bold text-white">{CLINIC_INFO.phone}</p>
          </div>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-2 bg-white/5 hover:bg-[#2CB67D]/20 transition-colors rounded-xl border border-[#2CB67D]/30 group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#2CB67D] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-emerald-300 uppercase tracking-wider font-medium">
              {language === 'en' ? 'Instant WhatsApp' : 'तुरंत व्हाट्सएप करें'}
            </span>
            <p className="text-xs font-bold text-white">
              {language === 'en' ? 'Chat with Doctor' : 'डॉक्टर से चैट करें'}
            </p>
          </div>
        </a>

        {/* Directions */}
        <a
          href={CLINIC_INFO.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-2 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/10 group col-span-2 md:col-span-1"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Navigation className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">
              {language === 'en' ? 'Get Directions' : 'दिशा-निर्देश पाएं'}
            </span>
            <p className="text-xs font-bold text-white truncate max-w-[150px]">
              Jharoda Kalan, New Delhi
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
