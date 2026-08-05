import React, { useState } from 'react';
import { Review, Language } from '../types';
import { SERVICES_DATA } from '../data/clinicData';
import { Star, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WriteReviewModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onSubmitReview: (newReview: Review) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  language,
  onClose,
  onSubmitReview,
}) => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [tag, setTag] = useState(SERVICES_DATA[0].titleEn);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      rating,
      date: 'Just now',
      commentEn: comment.trim(),
      commentHi: comment.trim(),
      tag,
      verified: true,
    };

    onSubmitReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAuthor('');
      setComment('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-xl font-poppins font-bold text-[#12263F] mb-1">
            {language === 'en' ? 'Write Patient Review' : 'अपनी समीक्षा लिखें'}
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            {language === 'en' ? 'Share your experience at Delhi Clinic' : 'दिल्ली क्लीनिक के अपने अनुभव साझा करें'}
          </p>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#2CB67D] mx-auto" />
              <p className="font-poppins font-bold text-base text-[#12263F]">
                {language === 'en' ? 'Thank You for Your Review!' : 'समीक्षा के लिए धन्यवाद!'}
              </p>
              <p className="text-xs text-slate-500">
                {language === 'en' ? 'Your feedback has been added.' : 'आपकी प्रतिक्रिया जोड़ दी गई है।'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {language === 'en' ? 'Your Name *' : 'आपका नाम *'}
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder={language === 'en' ? 'e.g. Meenakshi Verma' : 'उदा. मीनाक्षी वर्मा'}
                  className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {language === 'en' ? 'Rating *' : 'रेटिंग *'}
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {language === 'en' ? 'Service Received' : 'प्राप्त सेवा'}
                </label>
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-xl text-xs font-medium focus:outline-none"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.titleEn}>
                      {language === 'en' ? srv.titleEn : srv.titleHi}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {language === 'en' ? 'Your Review *' : 'आपकी समीक्षा *'}
                </label>
                <textarea
                  rows={3}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={
                    language === 'en'
                      ? 'Describe doctor friendliness, clinic hygiene, or treatment outcome...'
                      : 'अपनी प्रतिक्रिया लिखें...'
                  }
                  className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D] text-white text-xs font-bold shadow-md hover:opacity-95 transition-all"
              >
                {language === 'en' ? 'Submit Review' : 'समीक्षा जमा करें'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
