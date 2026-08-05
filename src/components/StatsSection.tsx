import React from 'react';
import { Language } from '../types';
import { Users, Award, Star, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsSectionProps {
  language: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ language }) => {
  const stats = [
    {
      value: "5,000+",
      labelEn: "Happy Patients Treated",
      labelHi: "संतुष्ट रोगियों का इलाज",
      icon: Users,
      color: "from-[#0F6CBD] to-blue-600"
    },
    {
      value: "10+",
      labelEn: "Years Clinical Experience",
      labelHi: "वर्षों का नैदानिक अनुभव",
      icon: Award,
      color: "from-[#2CB67D] to-emerald-600"
    },
    {
      value: "24+",
      labelEn: "Verified Google Reviews",
      labelHi: "सत्यापित गूगल समीक्षाएं",
      icon: CheckCircle,
      color: "from-amber-500 to-orange-500"
    },
    {
      value: "4.7★",
      labelEn: "Patient Satisfaction Score",
      labelHi: "रोगी संतुष्टि स्कोर",
      icon: Star,
      color: "from-indigo-600 to-[#0F6CBD]"
    }
  ];

  return (
    <section className="py-16 bg-[#12263F] text-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center space-y-3"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-white/10 flex items-center justify-center text-[#2CB67D]">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-white">
                  {stat.value}
                </div>

                <p className="text-xs sm:text-sm font-inter text-slate-300 font-medium">
                  {language === 'en' ? stat.labelEn : stat.labelHi}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
