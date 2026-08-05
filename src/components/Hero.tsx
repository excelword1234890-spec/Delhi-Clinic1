import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { Calendar, Phone, Navigation, Star, ShieldCheck, Heart, Award, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  language: Language;
  onBookClick: () => void;
  onSymptomCheckerClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onBookClick, onSymptomCheckerClick }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#F7F9FC]">
      {/* Soft Background Gradient & Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F6CBD]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#2CB67D]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#0F6CBD]/10 border border-[#0F6CBD]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0F6CBD]">
              <ShieldCheck className="w-4 h-4 text-[#2CB67D]" />
              <span>
                {language === 'en'
                  ? 'Delhi Clinic (दिल्ली क्लीनिक) • Top Rated Medical Center'
                  : 'दिल्ली क्लीनिक • शीर्ष श्रेणी चिकित्सा केंद्र'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-[#12263F] leading-[1.15] tracking-tight">
              {language === 'en' ? (
                <>
                  Your Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D]">Comes First</span>
                </>
              ) : (
                <>
                  आपका स्वास्थ्य <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D]">हमारी प्राथमिकता</span> है
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-inter leading-relaxed">
              {language === 'en'
                ? 'Professional healthcare with compassionate treatment, accurate diagnosis, and personalized medical care for every family member.'
                : 'प्रत्येक परिवार के सदस्य के लिए करुणामय उपचार, सटीक निदान और व्यक्तिगत चिकित्सा देखभाल के साथ पेशेवर स्वास्थ्य सेवा।'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D] hover:opacity-95 shadow-xl shadow-[#0F6CBD]/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all group"
              >
                <Calendar className="w-5 h-5" />
                <span>{language === 'en' ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl text-base font-semibold text-[#12263F] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow transition-all"
              >
                <Phone className="w-5 h-5 text-[#0F6CBD]" />
                <span>{language === 'en' ? 'Call Now' : 'कॉल करें'}</span>
              </a>

              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-3.5 rounded-2xl text-sm font-semibold text-slate-700 hover:text-[#0F6CBD] bg-slate-100 hover:bg-slate-200/80 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#2CB67D]" />
                <span>{language === 'en' ? 'Get Directions' : 'दिशा-निर्देश'}</span>
              </a>
            </div>

            {/* Smart Symptom Checker Helper Link */}
            <div className="pt-1">
              <button
                onClick={onSymptomCheckerClick}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0F6CBD] hover:text-[#0d5aa0] underline underline-offset-4 cursor-pointer"
              >
                <Award className="w-4 h-4 text-[#2CB67D]" />
                <span>
                  {language === 'en'
                    ? 'Unsure which doctor or service you need? Use Smart Symptom Guide'
                    : 'निश्चित नहीं हैं कि किस सेवा की आवश्यकता है? स्मार्ट लक्षण गाइड उपयोग करें'}
                </span>
              </button>
            </div>

            {/* Trust Highlights Grid */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-amber-500 font-bold text-lg sm:text-xl">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span>4.7★</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {language === 'en' ? 'Google Rating (24+ Reviews)' : 'गूगल रेटिंग (24+ समीक्षाएं)'}
                </p>
              </div>

              <div className="text-center lg:text-left">
                <p className="font-poppins font-bold text-lg sm:text-xl text-[#0F6CBD]">5,000+</p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {language === 'en' ? 'Satisfied Patients' : 'संतुष्ट मरीज'}
                </p>
              </div>

              <div className="text-center lg:text-left">
                <p className="font-poppins font-bold text-lg sm:text-xl text-[#2CB67D]">10+ Yrs</p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {language === 'en' ? 'Clinical Excellence' : 'नैदानिक अनुभव'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Frame with Soft Shadow */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={CLINIC_INFO.heroImage}
                alt="Delhi Clinic Doctor with Patient"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12263F]/70 via-transparent to-transparent"></div>

              {/* Bottom Caption inside Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white p-4 glass-dark rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#2CB67D] flex items-center justify-center text-white shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-300">
                      {language === 'en' ? 'Experienced Doctor On-site' : 'अनुभवी डॉक्टर ऑन-साइट उपलब्ध'}
                    </p>
                    <p className="text-sm font-bold text-white">
                      {language === 'en' ? 'Compassionate & Accurate Diagnosis' : 'सहानुभूतिपूर्ण एवं सटीक निदान'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Badge Top Left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-6 glass-panel px-4 py-3 rounded-2xl shadow-xl border border-white/60 hidden sm:flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-pink-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#12263F]">
                  {language === 'en' ? 'Women-Friendly Care' : 'महिला-अनुकूल देखभाल'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {language === 'en' ? 'Specialized PCOD/PCOS Care' : 'विशेषज्ञ PCOD/PCOS देखभाल'}
                </p>
              </div>
            </motion.div>

            {/* Floating Glassmorphism Badge Bottom Right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 sm:-right-6 glass-panel px-4 py-3 rounded-2xl shadow-xl border border-white/60 hidden sm:flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#12263F]">
                  {language === 'en' ? 'Sanitized Clinic' : 'सैनिटाइज्ड क्लीनिक'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {language === 'en' ? 'Safe & Hygienic Environment' : 'सुरक्षित और स्वच्छ वातावरण'}
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
