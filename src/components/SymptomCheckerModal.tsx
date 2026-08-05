import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/clinicData';
import { Language } from '../types';
import { Stethoscope, ArrowRight, X, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SymptomCheckerModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const SymptomCheckerModal: React.FC<SymptomCheckerModalProps> = ({
  isOpen,
  language,
  onClose,
  onBookService,
}) => {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  if (!isOpen) return null;

  const symptomList = [
    {
      id: 's1',
      labelEn: 'Irregular periods, weight gain, facial hair, mood swings',
      labelHi: 'अनियमित माहवारी, वजन बढ़ना, चेहरे पर बाल, मूड स्विंग',
      recommendedService: 'PCOD Treatment',
      reasonEn: 'Classic indications of PCOD/PCOS hormonal imbalance.',
      reasonHi: 'PCOD/PCOS हार्मोनल असंतुलन के क्लासिक लक्षण।'
    },
    {
      id: 's2',
      labelEn: 'High body temperature, chills, body ache, fatigue',
      labelHi: 'शरीर का उच्च तापमान, ठंड लगना, शरीर में दर्द, थकान',
      recommendedService: 'Fever Treatment',
      reasonEn: 'Prompt evaluation for viral, dengue, or bacterial infection.',
      reasonHi: 'वायरल, डेंगू या जीवाणु संक्रमण का त्वरित मूल्यांकन।'
    },
    {
      id: 's3',
      labelEn: 'Frequent urination, excessive thirst, delayed wound healing',
      labelHi: 'बार-बार पेशाब आना, अत्यधिक प्यास लगना, घाव भरने में देरी',
      recommendedService: 'Diabetes Management',
      reasonEn: 'Requires blood glucose screening & HbA1c evaluation.',
      reasonHi: 'रक्त शर्करा स्क्रीनिंग और HbA1c मूल्यांकन आवश्यक है।'
    },
    {
      id: 's4',
      labelEn: 'Headache, dizziness, chest pressure, stress',
      labelHi: 'सिरदर्द, चक्कर आना, छाती में दबाव, तनाव',
      recommendedService: 'Blood Pressure Care',
      reasonEn: 'Blood pressure tracking and cardiovascular checkup.',
      reasonHi: 'रक्तचाप ट्रैकिंग और कार्डियोवैस्कुलर चेकअप।'
    },
    {
      id: 's5',
      labelEn: 'Pregnancy confirmation, trimester advice, morning sickness',
      labelHi: 'गर्भावस्था की पुष्टि, त्रैमासिक सलाह, मॉर्निंग सिकनेस',
      recommendedService: 'Pregnancy Consultation',
      reasonEn: 'Antenatal checkup and maternal wellness guidance.',
      reasonHi: 'प्रसवपूर्व जांच और मातृ कल्याण मार्गदर्शन।'
    },
    {
      id: 's6',
      labelEn: 'General weakness, annual health check, blood tests',
      labelHi: 'सामान्य कमजोरी, वार्षिक स्वास्थ्य जांच, रक्त परीक्षण',
      recommendedService: 'Full Body Health Checkup',
      reasonEn: 'Comprehensive preventive organ and metabolic panel.',
      reasonHi: 'व्यापक निवारक अंग और चयापचय पैनल।'
    }
  ];

  const matched = symptomList.find((s) => s.id === selectedSymptom);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F6CBD]/10 text-[#0F6CBD] flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-[#2CB67D]" />
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-[#12263F]">
                {language === 'en' ? 'Smart Symptom Guide' : 'स्मार्ट लक्षण गाइड'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'en' ? 'Select what you are experiencing' : 'चुनें कि आप क्या अनुभव कर रहे हैं'}
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-6 max-h-64 overflow-y-auto pr-1">
            {symptomList.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedSymptom(item.id)}
                className={`w-full text-left p-3.5 rounded-2xl border text-xs font-semibold transition-all flex items-center justify-between ${
                  selectedSymptom === item.id
                    ? 'bg-[#0F6CBD]/10 border-[#0F6CBD] text-[#0F6CBD]'
                    : 'bg-[#F7F9FC] border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{language === 'en' ? item.labelEn : item.labelHi}</span>
                {selectedSymptom === item.id && <Sparkles className="w-4 h-4 text-[#2CB67D]" />}
              </button>
            ))}
          </div>

          {matched && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#12263F] to-[#0F6CBD] text-white space-y-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                Recommended Service
              </span>
              <h4 className="font-poppins font-bold text-lg text-white">
                {matched.recommendedService}
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                {language === 'en' ? matched.reasonEn : matched.reasonHi}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700"
            >
              {language === 'en' ? 'Cancel' : 'रद्द करें'}
            </button>

            {matched ? (
              <button
                onClick={() => {
                  onClose();
                  onBookService(matched.recommendedService);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2CB67D] hover:bg-[#259b6a] transition-all flex items-center space-x-2 shadow-md cursor-pointer"
              >
                <span>Book {matched.recommendedService}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs text-slate-400 italic">Select a symptom above</span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
