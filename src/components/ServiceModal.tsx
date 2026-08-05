import React from 'react';
import { Service, Language } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { X, Calendar, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceModalProps {
  service: Service | null;
  language: Language;
  onClose: () => void;
  onBookThisService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  language,
  onClose,
  onBookThisService,
}) => {
  if (!service) return null;

  const title = language === 'en' ? service.titleEn : service.titleHi;
  const fullDesc = language === 'en' ? service.fullDescEn : service.fullDescHi;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0F6CBD] to-[#2CB67D] text-white flex items-center justify-center shrink-0 shadow-lg">
              <DynamicIcon name={service.iconName || 'Stethoscope'} className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F6CBD] bg-[#0F6CBD]/10 px-2.5 py-0.5 rounded-md">
                {service.category.toUpperCase()}
              </span>
              <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#12263F] mt-1">
                {title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-8 text-sm text-slate-600 font-inter leading-relaxed">
            <p>{fullDesc}</p>

            {/* Service Highlights */}
            <div className="p-4 rounded-2xl bg-[#F7F9FC] border border-slate-200 space-y-2">
              <h4 className="font-poppins font-bold text-xs text-[#12263F] uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-[#2CB67D]" />
                <span>{language === 'en' ? 'What To Expect:' : 'क्या अपेक्षा करें:'}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2CB67D]" />
                  <span>
                    {language === 'en'
                      ? 'In-depth clinical examination by Senior Medical Doctor'
                      : 'वरिष्ठ चिकित्सक द्वारा गहन नैदानिक परीक्षण'}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2CB67D]" />
                  <span>
                    {language === 'en'
                      ? 'Personalized medical prescription & dietary guidance'
                      : 'व्यक्तिगत चिकित्सा नुस्खे और आहार मार्गदर्शन'}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2CB67D]" />
                  <span>
                    {language === 'en'
                      ? 'Digital medical record tracking & follow-up advice'
                      : 'डिजिटल मेडिकल रिकॉर्ड ट्रैकिंग और फॉलो-अप सलाह'}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {language === 'en' ? 'Close' : 'बंद करें'}
            </button>

            <button
              onClick={() => {
                onClose();
                onBookThisService(service.titleEn);
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D] shadow-md shadow-[#0F6CBD]/20 hover:opacity-95 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'en' ? 'Book This Service' : 'यह सेवा बुक करें'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
