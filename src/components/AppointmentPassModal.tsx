import React from 'react';
import { AppointmentData, Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { CheckCircle2, Calendar, Clock, MapPin, User, Phone, MessageSquare, Printer, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AppointmentPassModalProps {
  appointment: AppointmentData | null;
  language: Language;
  onClose: () => void;
}

export const AppointmentPassModal: React.FC<AppointmentPassModalProps> = ({
  appointment,
  language,
  onClose,
}) => {
  if (!appointment) return null;

  const whatsappText = `Hello Delhi Clinic, my appointment reference is ${appointment.id} for ${appointment.fullName} on ${appointment.date} (${appointment.timeSlot}) for ${appointment.serviceName}. Please confirm.`;
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(whatsappText)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Success Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2CB67D] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold text-[#2CB67D] bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              {language === 'en' ? 'Appointment Confirmed' : 'अपॉइंटमेंट की पुष्टि हो गई'}
            </span>
            <h3 className="text-2xl font-poppins font-bold text-[#12263F]">
              {language === 'en' ? 'Digital Medical Pass' : 'डिजिटल मेडिकल पास'}
            </h3>
            <p className="text-xs text-slate-500">
              {language === 'en' ? 'Please present this pass at Delhi Clinic reception' : 'कृपया दिल्ली क्लीनिक रिसेप्शन पर यह पास दिखाएं'}
            </p>
          </div>

          {/* The Pass Container */}
          <div className="p-6 rounded-2xl bg-[#F7F9FC] border-2 border-dashed border-slate-300 space-y-4 relative">
            
            {/* Header Ribbon */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <p className="font-poppins font-bold text-base text-[#12263F]">{CLINIC_INFO.nameEn}</p>
                <p className="text-[11px] text-slate-500">{CLINIC_INFO.nameHi}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Pass ID</span>
                <p className="font-mono font-bold text-sm text-[#0F6CBD]">{appointment.id}</p>
              </div>
            </div>

            {/* Patient & Booking Details */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 font-medium">Patient Name:</span>
                <p className="font-bold text-[#12263F] mt-0.5">{appointment.fullName}</p>
              </div>

              <div>
                <span className="text-slate-400 font-medium">Phone Number:</span>
                <p className="font-bold text-[#12263F] mt-0.5">{appointment.phone}</p>
              </div>

              <div>
                <span className="text-slate-400 font-medium">Medical Service:</span>
                <p className="font-bold text-[#0F6CBD] mt-0.5">{appointment.serviceName}</p>
              </div>

              <div>
                <span className="text-slate-400 font-medium">Date & Time:</span>
                <p className="font-bold text-[#12263F] mt-0.5">{appointment.date}</p>
                <p className="text-[11px] text-slate-600">{appointment.timeSlot}</p>
              </div>
            </div>

            {/* Address snippet */}
            <div className="pt-3 border-t border-slate-200 flex items-start space-x-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#2CB67D] shrink-0 mt-0.5" />
              <span>RZ Plot No. 1 & 2, Near CRPF Camp, Vinoba Enclave, Jharoda Kalan, New Delhi – 110072</span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#2CB67D] hover:bg-[#259b6a] transition-all flex items-center justify-center space-x-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'en' ? 'Send Pass to WhatsApp' : 'व्हाट्सएप पर पास भेजें'}</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handlePrint}
                className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center space-x-1.5"
              >
                <Printer className="w-4 h-4 text-[#0F6CBD]" />
                <span>{language === 'en' ? 'Print Pass' : 'प्रिंट करें'}</span>
              </button>

              <button
                onClick={onClose}
                className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#12263F] hover:bg-[#0F6CBD] transition-all"
              >
                {language === 'en' ? 'Done' : 'पूर्ण'}
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
