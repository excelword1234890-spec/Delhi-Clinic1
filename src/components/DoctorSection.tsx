import React from 'react';
import { DOCTOR_PROFILE, CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { Award, GraduationCap, Clock, Languages, CheckCircle2, Heart, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface DoctorSectionProps {
  language: Language;
  onBookClick: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ language, onBookClick }) => {
  return (
    <section id="doctor" className="py-20 bg-[#F7F9FC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0F6CBD]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#2CB67D]" />
            <span>{language === 'en' ? 'Experienced Medical Leader' : 'अनुभवी चिकित्सा नेतृत्व'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F]">
            {language === 'en' ? (
              <>
                Meet Our <span className="text-[#0F6CBD]">Senior Specialist</span>
              </>
            ) : (
              <>
                हमारे <span className="text-[#0F6CBD]">वरिष्ठ विशेषज्ञ</span> से मिलें
              </>
            )}
          </h2>

          <p className="text-slate-600 font-inter text-base">
            {language === 'en'
              ? 'Dedicated to gentle, accurate, and evidence-based clinical care for every family.'
              : 'प्रत्येक परिवार के लिए सौम्य, सटीक और साक्ष्य-आधारित नैदानिक देखभाल के लिए समर्पित।'}
          </p>
        </div>

        {/* Doctor Card Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Doctor Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-slate-100 bg-slate-50">
                <img
                  src={CLINIC_INFO.doctorImage}
                  alt={DOCTOR_PROFILE.nameEn}
                  className="w-full h-[380px] sm:h-[420px] object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12263F]/80 via-transparent to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 glass-dark rounded-xl">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-[#2CB67D]" />
                    <div>
                      <p className="text-xs font-bold text-white">
                        {language === 'en' ? DOCTOR_PROFILE.qualificationsEn : DOCTOR_PROFILE.qualificationsHi}
                      </p>
                      <p className="text-[11px] text-emerald-300">
                        {language === 'en' ? 'Verified Practitioner' : 'सत्यापित चिकित्सक'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Badge Floating */}
              <div className="absolute -bottom-4 -right-2 sm:right-4 bg-gradient-to-br from-[#0F6CBD] to-[#2CB67D] text-white p-4 rounded-2xl shadow-xl flex items-center space-x-3">
                <Clock className="w-6 h-6 text-emerald-200" />
                <div>
                  <p className="text-xl font-bold font-poppins leading-none">10+ Yrs</p>
                  <p className="text-[10px] text-slate-100 uppercase tracking-wider font-semibold mt-0.5">
                    {language === 'en' ? 'Experience' : 'अनुभव'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Doctor Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-bold text-[#0F6CBD] uppercase tracking-widest bg-[#0F6CBD]/10 px-3 py-1 rounded-md">
                  {language === 'en' ? DOCTOR_PROFILE.titleEn : DOCTOR_PROFILE.titleHi}
                </span>

                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-[#12263F] mt-2">
                  {language === 'en' ? DOCTOR_PROFILE.nameEn : DOCTOR_PROFILE.nameHi}
                </h3>

                <p className="text-sm font-semibold text-slate-500 mt-1 flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-[#2CB67D]" />
                  <span>{language === 'en' ? DOCTOR_PROFILE.qualificationsEn : DOCTOR_PROFILE.qualificationsHi}</span>
                </p>
              </div>

              {/* About Text */}
              <p className="text-slate-600 font-inter text-sm sm:text-base leading-relaxed">
                {language === 'en' ? DOCTOR_PROFILE.aboutEn : DOCTOR_PROFILE.aboutHi}
              </p>

              {/* Specialization List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#12263F] uppercase tracking-wider">
                  {language === 'en' ? 'Key Specializations:' : 'प्रमुख विशेषताएं:'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(language === 'en' ? DOCTOR_PROFILE.specializationsEn : DOCTOR_PROFILE.specializationsHi).map(
                    (spec, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-[#F7F9FC] p-2.5 rounded-xl border border-slate-200/60">
                        <CheckCircle2 className="w-4 h-4 text-[#2CB67D] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Languages & Consultation CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <Languages className="w-4 h-4 text-[#0F6CBD]" />
                  <span className="font-bold">{language === 'en' ? 'Languages:' : 'भाषाएं:'}</span>
                  <span>{(language === 'en' ? DOCTOR_PROFILE.languagesEn : DOCTOR_PROFILE.languagesHi).join(', ')}</span>
                </div>

                <button
                  onClick={onBookClick}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D] hover:opacity-95 shadow-md shadow-[#0F6CBD]/20 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'en' ? 'Consultation with Doctor' : 'डॉक्टर से परामर्श लें'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
