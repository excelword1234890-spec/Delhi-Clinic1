import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../data/clinicData';
import { Language } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  return (
    <section id="why-us" className="py-20 bg-[#F7F9FC] relative overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#0F6CBD]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2CB67D]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#2CB67D]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#2CB67D] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Pillars of Excellence' : 'उत्कृष्टता के स्तंभ'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F]">
            {language === 'en' ? (
              <>
                Why Choose <span className="text-[#0F6CBD]">Delhi Clinic</span>?
              </>
            ) : (
              <>
                <span className="text-[#0F6CBD]">दिल्ली क्लीनिक</span> क्यों चुनें?
              </>
            )}
          </h2>

          <p className="text-slate-600 font-inter text-base">
            {language === 'en'
              ? 'We blend advanced medical standards with personal attention to deliver healthcare that makes a genuine difference in your life.'
              : 'हम व्यक्तिगत ध्यान के साथ उन्नत चिकित्सा मानकों को मिलाते हैं ताकि ऐसी स्वास्थ्य सेवा प्रदान की जा सके जो आपके जीवन में वास्तविक बदलाव लाए।'}
          </p>
        </div>

        {/* 8 Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0F6CBD]/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Gradient Accent Line Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0F6CBD] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-[#0F6CBD]/10 text-[#0F6CBD] group-hover:bg-gradient-to-br group-hover:from-[#0F6CBD] group-hover:to-[#2CB67D] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-5 shadow-sm">
                <DynamicIcon name={item.iconName} className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-bold text-lg text-[#12263F] group-hover:text-[#0F6CBD] transition-colors mb-2 flex items-center justify-between">
                <span>{language === 'en' ? item.titleEn : item.titleHi}</span>
                <Sparkles className="w-4 h-4 text-[#2CB67D] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-inter leading-relaxed">
                {language === 'en' ? item.descEn : item.descHi}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
