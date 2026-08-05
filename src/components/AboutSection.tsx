import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { ShieldCheck, Heart, Award, Sparkles, CheckCircle, Users, Stethoscope, Microscope } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'hygiene'>('mission');

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0F6CBD]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#2CB67D]" />
            <span>{language === 'en' ? 'About Delhi Clinic' : 'दिल्ली क्लीनिक के बारे में'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F]">
            {language === 'en' ? (
              <>
                Compassionate Healthcare <span className="text-[#0F6CBD]">You Can Trust</span>
              </>
            ) : (
              <>
                करुणामय स्वास्थ्य सेवा <span className="text-[#0F6CBD]">जिस पर आप भरोसा कर सकते हैं</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 font-inter text-base leading-relaxed">
            {language === 'en'
              ? 'Delhi Clinic (दिल्ली क्लीनिक) was established with a single unwavering goal: to bring international-standard primary healthcare, accurate diagnosis, and empathetic treatment to every family in New Delhi.'
              : 'दिल्ली क्लीनिक (दिल्ली क्लीनिक) की स्थापना एक ही अटूट लक्ष्य के साथ की गई थी: नई दिल्ली में प्रत्येक परिवार के लिए अंतर्राष्ट्रीय मानक की प्राथमिक स्वास्थ्य सेवा, सटीक निदान और सहानुभूतिपूर्ण उपचार लाना।'}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Cards Showcase */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Highlight Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#12263F] to-[#0F6CBD] text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-[#2CB67D]">
                  <ShieldCheck className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-white">
                    {language === 'en' ? 'Women-Owned & Family Centric' : 'महिला संचालित एवं परिवार केंद्रित'}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {language === 'en' ? 'Safe, empathetic and respectful care for all ages' : 'सभी उम्र के लोगों के लिए सुरक्षित, सहानुभूतिपूर्ण और सम्मानजनक देखभाल'}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-200 font-inter leading-relaxed">
                {language === 'en'
                  ? 'We take special pride in creating a warm, non-judgmental healthcare environment where women and families feel comfortable sharing their health concerns openly.'
                  : 'हम एक गर्मजोशी भरे, बिना किसी पूर्वाग्रह वाले स्वास्थ्य सेवा वातावरण का निर्माण करने पर विशेष गर्व करते हैं जहाँ महिलाएँ और परिवार अपनी स्वास्थ्य चिंताओं को खुलकर साझा करने में सहज महसूस करते हैं।'}
              </p>
            </div>

            {/* 2 Small Sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-slate-200/80 hover:border-[#0F6CBD]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0F6CBD]/10 text-[#0F6CBD] flex items-center justify-center mb-3">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-sm text-[#12263F]">
                  {language === 'en' ? 'Experienced Doctor' : 'अनुभवी डॉक्टर'}
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {language === 'en' ? '10+ years of dedicated clinical practice and high diagnostic accuracy.' : '10+ वर्षों का समर्पित नैदानिक अभ्यास और उच्च निदान सटीकता।'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-slate-200/80 hover:border-[#2CB67D]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#2CB67D]/10 text-[#2CB67D] flex items-center justify-center mb-3">
                  <Microscope className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-sm text-[#12263F]">
                  {language === 'en' ? 'Modern Diagnostics' : 'आधुनिक निदान'}
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {language === 'en' ? 'Seamless blood testing and digital health tracking.' : 'सहज रक्त परीक्षण और डिजिटल स्वास्थ्य ट्रैकिंग।'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive Philosophy Tabs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tab Selector Buttons */}
            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveTab('mission')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'mission'
                    ? 'bg-white text-[#0F6CBD] shadow-md'
                    : 'text-slate-600 hover:text-[#12263F]'
                }`}
              >
                {language === 'en' ? 'Our Mission' : 'हमारा मिशन'}
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'vision'
                    ? 'bg-white text-[#0F6CBD] shadow-md'
                    : 'text-slate-600 hover:text-[#12263F]'
                }`}
              >
                {language === 'en' ? 'Our Vision' : 'हमारा दृष्टिकोण'}
              </button>

              <button
                onClick={() => setActiveTab('hygiene')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'hygiene'
                    ? 'bg-white text-[#0F6CBD] shadow-md'
                    : 'text-slate-600 hover:text-[#12263F]'
                }`}
              >
                {language === 'en' ? 'Safe Environment' : 'सुरक्षित वातावरण'}
              </button>
            </div>

            {/* Tab Content Cards */}
            <div className="p-6 rounded-3xl bg-[#F7F9FC] border border-slate-200 space-y-4">
              {activeTab === 'mission' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-bold text-[#12263F]">
                    {language === 'en' ? 'Mission: Patient-First Medical Excellence' : 'मिशन: रोगी-प्रथम चिकित्सा उत्कृष्टता'}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {language === 'en'
                      ? 'To provide accessible, affordable, and high-quality medical consultations to residents of Vinoba Enclave, Jharoda Kalan, and surrounding New Delhi regions, ensuring no patient feels unheard or rushed.'
                      : 'विनोबा एन्क्लेव, झरोदा कलां और आसपास के नई दिल्ली क्षेत्रों के निवासियों को सुलभ, सस्ती और उच्च गुणवत्ता वाली चिकित्सा परामर्श प्रदान करना।'}
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2CB67D]" />
                      <span>{language === 'en' ? 'Thorough symptom evaluation and clear explanations' : 'विस्तृत लक्षण मूल्यांकन और स्पष्ट व्याख्या'}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2CB67D]" />
                      <span>{language === 'en' ? 'Zero unnecessary pharmaceutical prescriptions' : 'शून्य अनावश्यक दवा नुस्खे'}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2CB67D]" />
                      <span>{language === 'en' ? 'Specialized guidance for PCOD, PCOS, and Women’s Health' : 'PCOD, PCOS और महिला स्वास्थ्य के लिए विशेष मार्गदर्शन'}</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-bold text-[#12263F]">
                    {language === 'en' ? 'Vision: A Healthier Community for Generations' : 'दृष्टिकोण: पीढ़ियों के लिए एक स्वस्थ समुदाय'}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {language === 'en'
                      ? 'To become the premier neighborhood healthcare provider recognized for ethical practice, early preventive diagnosis, and holistic lifestyle-driven disease management.'
                      : 'नैतिक अभ्यास, प्रारंभिक निवारक निदान और समग्र जीवन शैली-संचालित रोग प्रबंधन के लिए पहचाना जाने वाला प्रमुख पड़ोस स्वास्थ्य सेवा प्रदाता बनना।'}
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#0F6CBD]" />
                      <span>{language === 'en' ? 'Long-term metabolic wellness (Diabetes & Hypertension)' : 'दीर्घकालिक चयापचय कल्याण (मधुमेह एवं उच्च रक्तचाप)'}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#0F6CBD]" />
                      <span>{language === 'en' ? 'Community health education and preventive checkups' : 'समुदाय स्वास्थ्य शिक्षा और निवारक जांच'}</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'hygiene' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-bold text-[#12263F]">
                    {language === 'en' ? 'Sanitized & Ultra-Clean Medical Setup' : 'सैनिटाइज्ड एवं अति-स्वच्छ चिकित्सा व्यवस्था'}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {language === 'en'
                      ? 'We enforce hospital-grade sanitation standards. Every room, surface, and equipment is sanitized continuously to guarantee 100% infection control and peace of mind.'
                      : 'हम अस्पताल-ग्रेड स्वच्छता मानकों को लागू करते हैं। 100% संक्रमण नियंत्रण की गारंटी के लिए प्रत्येक कमरे, सतह और उपकरण को लगातार सैनिटाइज किया जाता है।'}
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2CB67D]" />
                      <span>{language === 'en' ? 'Sterilized clinical instruments & single-use disposables' : 'निर्जीवाणुकृत नैदानिक उपकरण और एकल-उपयोग वाली सामग्री'}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2CB67D]" />
                      <span>{language === 'en' ? 'Air-purified, fresh and well-ventilated waiting area' : 'वायु-शोधित, ताजा और हवादार प्रतीक्षालय'}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
