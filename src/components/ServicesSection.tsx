import React, { useState, useMemo } from 'react';
import { SERVICES_DATA } from '../data/clinicData';
import { Service, Language } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { Search, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  language: Language;
  onSelectService: (service: Service) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onSelectService,
  onBookService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelEn: 'All Services (16)', labelHi: 'सभी सेवाएं (16)' },
    { id: 'general', labelEn: 'General Medicine', labelHi: 'सामान्य चिकित्सा' },
    { id: 'women', labelEn: 'Women & PCOD Care', labelHi: 'महिला एवं PCOD देखभाल' },
    { id: 'chronic', labelEn: 'Chronic Care (BP/Diabetes)', labelHi: 'पुरानी बीमारियाँ (BP/शुगर)' },
    { id: 'preventive', labelEn: 'Preventive & Vaccination', labelHi: 'निवारक एवं टीकाकरण' },
    { id: 'diagnostic', labelEn: 'Blood Tests & Labs', labelHi: 'रक्त परीक्षण एवं लैब' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const title = language === 'en' ? service.titleEn : service.titleHi;
      const desc = language === 'en' ? service.shortDescEn : service.shortDescHi;
      const matchesSearch =
        searchQuery === '' ||
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#0F6CBD]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2CB67D]" />
            <span>{language === 'en' ? 'Clinical Specialties' : 'चिकित्सा विशेषज्ञता'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F]">
            {language === 'en' ? (
              <>
                Comprehensive <span className="text-[#0F6CBD]">Healthcare Services</span>
              </>
            ) : (
              <>
                व्यापक <span className="text-[#0F6CBD]">स्वास्थ्य सेवाएं</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 font-inter text-base">
            {language === 'en'
              ? 'From routine general consultations to specialized women’s reproductive health and chronic disease management, we offer complete medical solutions.'
              : 'नियमित सामान्य परामर्श से लेकर विशेष महिला प्रजनन स्वास्थ्य और पुरानी बीमारी प्रबंधन तक, हम संपूर्ण चिकित्सा समाधान प्रदान करते हैं।'}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          {/* Live Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'en'
                  ? 'Search service (e.g. PCOD, Diabetes, Fever, Blood Test)...'
                  : 'सेवा खोजें (जैसे PCOD, शुगर, बुखार, ब्लड टेस्ट)...'
              }
              className="w-full pl-12 pr-4 py-3 bg-[#F7F9FC] border border-slate-200 rounded-2xl text-sm text-[#12263F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30 focus:border-[#0F6CBD] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-slate-200 hover:bg-slate-300 px-2 py-1 rounded-md text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none px-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F6CBD] text-white shadow-md shadow-[#0F6CBD]/20'
                    : 'bg-[#F7F9FC] text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {language === 'en' ? cat.labelEn : cat.labelHi}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (16 Services) */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-[#F7F9FC] rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-500 font-medium">
              {language === 'en'
                ? 'No matching medical service found. Try a different search term or view all services.'
                : 'कोई मेल खाती चिकित्सा सेवा नहीं मिली। कोई अन्य खोज शब्द आज़माएं।'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-bold text-[#0F6CBD] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="group p-6 rounded-3xl bg-[#F7F9FC] border border-slate-200/90 hover:bg-white hover:shadow-xl hover:border-[#0F6CBD]/40 transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>Popular</span>
                  </span>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 text-[#0F6CBD] group-hover:bg-[#0F6CBD] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-4 shadow-sm">
                    <DynamicIcon name={service.iconName || 'Stethoscope'} className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-bold text-base text-[#12263F] group-hover:text-[#0F6CBD] transition-colors mb-2">
                    {language === 'en' ? service.titleEn : service.titleHi}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 font-inter leading-relaxed line-clamp-3 mb-6">
                    {language === 'en' ? service.shortDescEn : service.shortDescHi}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-slate-600 hover:text-[#0F6CBD] flex items-center space-x-1 transition-colors"
                  >
                    <span>{language === 'en' ? 'Read More' : 'विवरण देखें'}</span>
                  </button>

                  <button
                    onClick={() => onBookService(service.titleEn)}
                    className="px-3 py-1.5 rounded-xl bg-[#0F6CBD]/10 hover:bg-[#0F6CBD] text-[#0F6CBD] hover:text-white text-xs font-bold transition-all flex items-center space-x-1 group/btn"
                  >
                    <span>{language === 'en' ? 'Book' : 'बुक करें'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
