import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { Phone, Calendar, MapPin, Globe, Menu, X, Shield, Clock, Heart } from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelEn: 'Home', labelHi: 'मुख्य पृष्ठ' },
    { href: '#about', labelEn: 'About', labelHi: 'हमारे बारे में' },
    { href: '#why-us', labelEn: 'Why Choose Us', labelHi: 'क्यों चुनें' },
    { href: '#services', labelEn: 'Services', labelHi: 'सेवाएं' },
    { href: '#doctor', labelEn: 'Doctor', labelHi: 'डॉक्टर' },
    { href: '#reviews', labelEn: 'Reviews', labelHi: 'समीक्षाएं' },
    { href: '#gallery', labelEn: 'Gallery', labelHi: 'गैलरी' },
    { href: '#faq', labelEn: 'FAQ', labelHi: 'सवाल-जवाब' },
    { href: '#contact', labelEn: 'Contact', labelHi: 'संपर्क' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#12263F] text-white text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6 text-gray-300">
            <span className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#2CB67D]" />
              <span>Near CRPF Camp, Jharoda Kalan, New Delhi</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0F6CBD]" />
              <span>{language === 'en' ? CLINIC_INFO.hoursEn : CLINIC_INFO.hoursHi}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-[#2CB67D] font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>{language === 'en' ? "Women-Owned Clinic" : "महिला संचालित क्लीनिक"}</span>
            </div>
            <div className="h-3 w-px bg-white/20"></div>
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-all text-xs text-white"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#2CB67D]" />
              <span className="font-semibold">{language === 'en' ? 'हिंदी (Hindi)' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-lg py-3 border-b border-[#0F6CBD]/10'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F6CBD] to-[#2CB67D] flex items-center justify-center text-white shadow-md shadow-[#0F6CBD]/20 group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 fill-white/20" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-poppins font-bold text-lg sm:text-xl text-[#12263F] tracking-tight">
                  {CLINIC_INFO.nameEn}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#0F6CBD]/10 text-[#0F6CBD] font-semibold hidden md:inline-block">
                  {CLINIC_INFO.nameHi}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                {language === 'en' ? CLINIC_INFO.taglineEn : CLINIC_INFO.taglineHi}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-[#0F6CBD] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {language === 'en' ? link.labelEn : link.labelHi}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#0F6CBD] bg-[#0F6CBD]/10 hover:bg-[#0F6CBD]/20 transition-all border border-[#0F6CBD]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={onBookClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D] hover:opacity-95 shadow-md shadow-[#0F6CBD]/25 hover:shadow-lg transition-all animate-pulse-glow"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'en' ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}</span>
            </button>
          </div>

          {/* Mobile Right Bar: Language Switcher & Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="text-xs font-semibold bg-slate-100 text-[#0F6CBD] px-2.5 py-1.5 rounded-lg flex items-center space-x-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'हिंदी' : 'ENG'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0F6CBD] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl py-4 px-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0F6CBD] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {language === 'en' ? link.labelEn : link.labelHi}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F6CBD] bg-[#0F6CBD]/10 border border-[#0F6CBD]/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D] shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'en' ? 'Book Appointment Now' : 'तुरंत अपॉइंटमेंट बुक करें'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
