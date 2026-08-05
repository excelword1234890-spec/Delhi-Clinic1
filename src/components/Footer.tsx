import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { Heart, Phone, Mail, MapPin, Send, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  language: Language;
  onBookClick: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onBookClick, onOpenTerms }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12263F] text-slate-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F6CBD] to-[#2CB67D] flex items-center justify-center text-white font-bold">
                <Heart className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-white">
                  {CLINIC_INFO.nameEn}
                </h3>
                <p className="text-xs text-emerald-400 font-semibold">{CLINIC_INFO.nameHi}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-inter leading-relaxed">
              {language === 'en'
                ? 'Trusted family healthcare clinic providing comprehensive medical care, women’s wellness, PCOD/PCOS treatments, and health checkups in New Delhi.'
                : 'नई दिल्ली में व्यापक चिकित्सा देखभाल, महिला कल्याण, PCOD/PCOS उपचार और स्वास्थ्य जांच प्रदान करने वाला विश्वसनीय पारिवारिक क्लीनिक।'}
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'en' ? 'Women-Owned Medical Clinic' : 'महिला संचालित चिकित्सा क्लीनिक'}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider">
              {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Home' : 'मुख्य पृष्ठ'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {language === 'en' ? 'About Us' : 'हमारे बारे में'}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Why Choose Us' : 'क्यों चुनें'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Services' : 'सेवाएं'}
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Doctor Profile' : 'डॉक्टर प्रोफाइल'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {language === 'en' ? 'Gallery' : 'गैलरी'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {language === 'en' ? 'FAQs' : 'सवाल-जवाब'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Medical Services */}
          <div className="space-y-3">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider">
              {language === 'en' ? 'Key Services' : 'प्रमुख सेवाएं'}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  General Consultation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  PCOD & PCOS Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Pregnancy Care & Antenatal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Diabetes & Blood Pressure
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Full Body Health Checkup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Blood Tests & Pathology
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-poppins font-bold text-sm text-white uppercase tracking-wider">
              {language === 'en' ? 'Emergency & Health Updates' : 'आपातकालीन सहायता'}
            </h4>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <p className="text-[11px] text-slate-400 font-medium">
                {language === 'en' ? 'OPD Hours:' : 'ओपीडी का समय:'}
              </p>
              <p className="text-xs font-bold text-white">8:00 AM – 9:00 PM (Mon – Sun)</p>
              <p className="text-xs font-bold text-[#2CB67D] pt-1">{CLINIC_INFO.phone}</p>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-xs text-slate-400 mb-2">
                {language === 'en' ? 'Subscribe for free seasonal health tips:' : 'स्वास्थ्य टिप्स के लिए सदस्यता लें:'}
              </p>
              {subscribed ? (
                <p className="text-xs text-emerald-400 font-bold">✓ Subscribed successfully!</p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex items-center space-x-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-[#0F6CBD] hover:bg-[#2CB67D] text-white transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Delhi Clinic (दिल्ली क्लीनिक). All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenTerms}
              className="hover:text-white underline cursor-pointer transition-colors"
            >
              {language === 'en' ? 'Privacy Policy & Terms' : 'गोपनीयता नीति एवं शर्तें'}
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center space-x-1"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
