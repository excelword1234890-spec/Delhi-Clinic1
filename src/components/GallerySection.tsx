import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem, Language } from '../types';
import { Camera, Maximize2, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Photos', labelHi: 'सभी फोटो' },
    { id: 'reception', labelEn: 'Reception', labelHi: 'रिसेप्शन' },
    { id: 'consultation', labelEn: 'Consultation Room', labelHi: 'परामर्श कक्ष' },
    { id: 'treatment', labelEn: 'Treatment Room', labelHi: 'उपचार कक्ष' },
    { id: 'equipment', labelEn: 'Medical Equipment', labelHi: 'उपकरण' },
    { id: 'environment', labelEn: 'Sanitized Space', labelHi: 'सैनिटाइज्ड जगह' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="gallery" className="py-20 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#0F6CBD]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-[#2CB67D]" />
            <span>{language === 'en' ? 'Clinic Atmosphere' : 'क्लीनिक परिसर'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F]">
            {language === 'en' ? (
              <>
                Our Modern <span className="text-[#0F6CBD]">Clinic Gallery</span>
              </>
            ) : (
              <>
                हमारी आधुनिक <span className="text-[#0F6CBD]">क्लीनिक गैलरी</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 font-inter text-base">
            {language === 'en'
              ? 'Take a virtual tour of our clean, welcoming, and high-tech medical clinic in New Delhi.'
              : 'नई दिल्ली स्थित हमारे स्वच्छ, स्वागतयोग्य और हाई-टेक क्लीनिक का वर्चुअल टूर करें।'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0F6CBD] text-white shadow-md shadow-[#0F6CBD]/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {language === 'en' ? cat.labelEn : cat.labelHi}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                <img
                  src={item.imageUrl}
                  alt={language === 'en' ? item.titleEn : item.titleHi}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12263F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="font-poppins font-bold text-base">
                      {language === 'en' ? item.titleEn : item.titleHi}
                    </p>
                    <p className="text-xs text-slate-200 line-clamp-1">
                      {language === 'en' ? item.descriptionEn : item.descriptionHi}
                    </p>
                  </div>
                  <div className="ml-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative"
              >
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.titleEn}
                  className="w-full h-[380px] sm:h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />

                <div className="p-6 bg-white space-y-2">
                  <h3 className="font-poppins font-bold text-xl text-[#12263F]">
                    {language === 'en' ? activeImage.titleEn : activeImage.titleHi}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {language === 'en' ? activeImage.descriptionEn : activeImage.descriptionHi}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
