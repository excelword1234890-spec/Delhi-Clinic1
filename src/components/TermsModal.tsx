import React from 'react';
import { Language } from '../types';
import { X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TermsModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, language, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[85vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-[#0F6CBD]" />
            <h3 className="text-xl font-poppins font-bold text-[#12263F]">
              {language === 'en' ? 'Privacy Policy & Terms of Service' : 'गोपनीयता नीति एवं सेवा की शर्तें'}
            </h3>
          </div>

          <div className="space-y-4 text-xs text-slate-600 font-inter leading-relaxed">
            <h4 className="font-bold text-[#12263F] text-sm">1. Patient Data Confidentiality</h4>
            <p>
              Delhi Clinic (दिल्ली क्लीनिक) complies strictly with Indian medical privacy standards. All patient health records, blood reports, and consultation notes are strictly confidential and shared solely between the doctor and patient.
            </p>

            <h4 className="font-bold text-[#12263F] text-sm">2. Online Appointments</h4>
            <p>
              Online appointments reserved via this website serve as scheduled time requests. Emergency cases are prioritized on-site. Patients are advised to arrive 10 minutes prior to their slot.
            </p>

            <h4 className="font-bold text-[#12263F] text-sm">3. Medical Advice Disclaimer</h4>
            <p>
              Information on this website is for educational purposes. Final diagnosis and medical treatment are provided in person by our certified doctor.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-right">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#0F6CBD] text-white text-xs font-bold hover:bg-[#0d5aa0] transition-colors"
            >
              {language === 'en' ? 'I Understand' : 'मैं समझ गया'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
