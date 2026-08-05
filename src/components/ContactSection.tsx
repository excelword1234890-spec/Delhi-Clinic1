import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation, CheckCircle2, Send } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    "Hello Delhi Clinic, I want to inquire about consultation."
  )}`;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setSentSuccess(true);
    setTimeout(() => {
      setFormName('');
      setFormPhone('');
      setFormMsg('');
      setSentSuccess(false);
    }, 4000);
  };

  // Check current open status (8 AM - 9 PM)
  const now = new Date();
  const currentHour = now.getHours();
  const isOpenNow = currentHour >= 8 && currentHour < 21;

  return (
    <section id="contact" className="py-20 bg-[#F7F9FC] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0F6CBD]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#2CB67D]" />
            <span>{language === 'en' ? 'Clinic Location & Contact' : 'स्थान एवं संपर्क'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F]">
            {language === 'en' ? (
              <>
                Visit or Reach <span className="text-[#0F6CBD]">Delhi Clinic</span>
              </>
            ) : (
              <>
                <span className="text-[#0F6CBD]">दिल्ली क्लीनिक</span> से संपर्क करें
              </>
            )}
          </h2>

          <p className="text-slate-600 font-inter text-base">
            {language === 'en'
              ? 'Conveniently located near CRPF Camp, Vinoba Enclave Extension, Jharoda Kalan, New Delhi.'
              : 'सीआरपीएफ कैंप के पास, विनोबा एन्क्लेव एक्सटेंशन, झरोदा कलां, नई दिल्ली में स्थित।'}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Address, Phone, Hours, Quick Action */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Open Status Badge */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#0F6CBD]" />
                <div>
                  <p className="text-xs text-slate-500 font-semibold">
                    {language === 'en' ? 'Clinic Status' : 'क्लीनिक स्थिति'}
                  </p>
                  <p className="text-sm font-bold text-[#12263F]">8:00 AM – 9:00 PM (Daily)</p>
                </div>
              </div>

              <span
                className={`text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 ${
                  isOpenNow
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-100 text-amber-800 border border-amber-300'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`}></span>
                <span>{isOpenNow ? (language === 'en' ? 'OPEN NOW' : 'अभी खुला है') : (language === 'en' ? 'CLOSED NOW' : 'अभी बंद है')}</span>
              </span>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F6CBD]/10 text-[#0F6CBD] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-base text-[#12263F]">
                    {language === 'en' ? 'Full Address' : 'पूरा पता'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-inter leading-relaxed mt-1">
                    {CLINIC_INFO.address.line1},<br />
                    {CLINIC_INFO.address.line2},<br />
                    <span className="font-semibold text-[#12263F]">{CLINIC_INFO.address.area}</span>
                  </p>
                </div>
              </div>

              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-xs font-bold text-[#12263F] transition-all"
              >
                <Navigation className="w-4 h-4 text-[#2CB67D]" />
                <span>{language === 'en' ? 'Open in Google Maps' : 'गूगल मैप्स में खोलें'}</span>
              </a>
            </div>

            {/* Contact Actions Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="p-4 rounded-2xl bg-[#0F6CBD] hover:bg-[#0d5aa0] text-white flex flex-col items-center text-center space-y-1 shadow-md transition-all"
              >
                <Phone className="w-6 h-6" />
                <span className="text-xs font-bold">{language === 'en' ? 'Direct Call' : 'कॉल करें'}</span>
                <span className="text-[11px] text-slate-200">{CLINIC_INFO.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#2CB67D] hover:bg-[#259b6a] text-white flex flex-col items-center text-center space-y-1 shadow-md transition-all"
              >
                <MessageSquare className="w-6 h-6" />
                <span className="text-xs font-bold">{language === 'en' ? 'WhatsApp' : 'व्हाट्सएप'}</span>
                <span className="text-[11px] text-emerald-100">Instant Response</span>
              </a>
            </div>

            {/* Quick Contact Form */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-poppins font-bold text-base text-[#12263F] flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0F6CBD]" />
                <span>{language === 'en' ? 'Send Quick Inquiry' : 'त्वरित पूछताछ भेजें'}</span>
              </h3>

              {sentSuccess ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>
                    {language === 'en'
                      ? 'Inquiry received! Our team will contact you shortly.'
                      : 'पूछताछ प्राप्त हुई! हमारी टीम जल्द ही आपसे संपर्क करेगी।'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder={language === 'en' ? 'Your Name' : 'आपका नाम'}
                    className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                  />
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder={language === 'en' ? 'Phone Number' : 'फोन नंबर'}
                    className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                  />
                  <textarea
                    rows={2}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder={language === 'en' ? 'Your Question...' : 'आपका प्रश्न...'}
                    className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#12263F] hover:bg-[#0F6CBD] text-white text-xs font-bold transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Send Message' : 'संदेश भेजें'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[420px] rounded-3xl overflow-hidden border-4 border-white shadow-xl relative bg-slate-100">
              <iframe
                title="Delhi Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.076629739501!2d76.9482!3d28.6575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0b0000000001%3A0x0!2sJharoda+Kalan%2C+New+Delhi%2C+Delhi+110072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px]"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
