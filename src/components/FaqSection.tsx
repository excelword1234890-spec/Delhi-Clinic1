import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/clinicData';
import { Language } from '../types';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const q = language === 'en' ? item.questionEn : item.questionHi;
    const a = language === 'en' ? item.answerEn : item.answerHi;
    return (
      searchQuery === '' ||
      q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#0F6CBD]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#2CB67D]" />
            <span>{language === 'en' ? 'Common Inquiries' : 'सामान्य प्रश्न'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F]">
            {language === 'en' ? (
              <>
                Frequently Asked <span className="text-[#0F6CBD]">Questions</span>
              </>
            ) : (
              <>
                अक्सर पूछे जाने वाले <span className="text-[#0F6CBD]">सवाल</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 font-inter text-base">
            {language === 'en'
              ? 'Find quick answers regarding clinic timings, appointments, tests, and women’s health services.'
              : 'क्लीनिक के समय, अपॉइंटमेंट, परीक्षणों और महिला स्वास्थ्य सेवाओं के उत्तर।'}
          </p>
        </div>

        {/* Live Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search question (e.g. Timings, PCOD, Payment)...'
                : 'सवाल खोजें (जैसे समय, PCOD, पेमेंट)...'
            }
            className="w-full pl-12 pr-4 py-3 bg-[#F7F9FC] border border-slate-200 rounded-2xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-[#F7F9FC] transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left font-poppins font-bold text-base text-[#12263F] flex items-center justify-between gap-4 hover:text-[#0F6CBD] transition-colors"
                >
                  <span>{language === 'en' ? faq.questionEn : faq.questionHi}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0F6CBD] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-sm text-slate-600 font-inter border-t border-slate-200/60 pt-3"
                    >
                      {language === 'en' ? faq.answerEn : faq.answerHi}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
