import React, { useState } from 'react';
import { REVIEWS_DATA, CLINIC_INFO } from '../data/clinicData';
import { Review, Language } from '../types';
import { Star, MessageSquarePlus, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReviewsSectionProps {
  language: Language;
  onWriteReviewClick: () => void;
  customReviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  language,
  onWriteReviewClick,
  customReviews,
}) => {
  const allReviews = [...customReviews, ...REVIEWS_DATA];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % allReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  };

  const currentReview = allReviews[currentIndex];

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-3.5 py-1 rounded-full text-xs font-bold text-amber-800 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.7★ Google Rating ({allReviews.length} Verified Reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F]">
            {language === 'en' ? (
              <>
                What Our <span className="text-[#0F6CBD]">Patients Say</span>
              </>
            ) : (
              <>
                हमारे <span className="text-[#0F6CBD]">मरीज क्या कहते हैं</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 font-inter text-base">
            {language === 'en'
              ? 'Real experiences from patients who entrusted their health and recovery to Delhi Clinic.'
              : 'उन रोगियों के वास्तविक अनुभव जिन्होंने दिल्ली क्लीनिक पर भरोसा किया।'}
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#F7F9FC] border border-slate-200 shadow-xl relative"
            >
              <Quote className="w-16 h-16 text-[#0F6CBD]/10 absolute top-6 right-8 pointer-events-none" />

              <div className="space-y-6">
                {/* Rating Stars & Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentReview.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-bold text-[#0F6CBD] bg-[#0F6CBD]/10 px-3 py-1 rounded-full">
                    {currentReview.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-lg sm:text-xl font-inter text-[#12263F] leading-relaxed italic">
                  "{language === 'en' ? currentReview.commentEn : currentReview.commentHi}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0F6CBD] to-[#2CB67D] text-white flex items-center justify-center font-bold font-poppins">
                      {currentReview.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h4 className="font-poppins font-bold text-sm text-[#12263F]">
                          {currentReview.author}
                        </h4>
                        {currentReview.verified && (
                          <span className="text-emerald-600" title="Verified Patient">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500">{currentReview.date}</p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-slate-400 hidden sm:inline-block">
                    Verified Google Patient Review
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={prevReview}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#0F6CBD] hover:border-[#0F6CBD] transition-all shadow-sm"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#0F6CBD] hover:border-[#0F6CBD] transition-all shadow-sm"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-slate-500 font-semibold ml-2">
                {currentIndex + 1} of {allReviews.length}
              </span>
            </div>

            {/* Write a Review Button */}
            <button
              onClick={onWriteReviewClick}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#0F6CBD] bg-[#0F6CBD]/10 hover:bg-[#0F6CBD]/20 border border-[#0F6CBD]/20 transition-all"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{language === 'en' ? 'Leave a Review' : 'अपनी समीक्षा लिखें'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
