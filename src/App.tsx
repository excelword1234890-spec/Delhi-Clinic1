import React, { useState } from 'react';
import { Language, Service, Review, AppointmentData } from './types';
import { Navbar } from './components/Navbar';
import { QuickRibbon } from './components/QuickRibbon';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { DoctorSection } from './components/DoctorSection';
import { ReviewsSection } from './components/ReviewsSection';
import { StatsSection } from './components/StatsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ServiceModal } from './components/ServiceModal';
import { AppointmentPassModal } from './components/AppointmentPassModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { SymptomCheckerModal } from './components/SymptomCheckerModal';
import { TermsModal } from './components/TermsModal';

import { CLINIC_INFO } from './data/clinicData';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  // Modals state
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [preselectedServiceName, setPreselectedServiceName] = useState<string>('General Consultation');
  const [activeAppointment, setActiveAppointment] = useState<AppointmentData | null>(null);

  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [symptomCheckerOpen, setSymptomCheckerOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const [customReviews, setCustomReviews] = useState<Review[]>([]);

  // Smooth scroll to booking form
  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedServiceName(serviceName);
    }
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAppointmentCreated = (appt: AppointmentData) => {
    setActiveAppointment(appt);
  };

  const handleAddReview = (newReview: Review) => {
    setCustomReviews((prev) => [newReview, ...prev]);
  };

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
    "Hello Delhi Clinic, I want to book an appointment."
  )}`;

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#12263F] font-inter flex flex-col selection:bg-[#0F6CBD] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onBookClick={() => scrollToBooking()}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          language={language}
          onBookClick={() => scrollToBooking()}
          onSymptomCheckerClick={() => setSymptomCheckerOpen(true)}
        />

        {/* Quick OPD & Contact Ribbon */}
        <QuickRibbon language={language} />

        {/* About Section */}
        <AboutSection language={language} />

        {/* Why Choose Us */}
        <WhyChooseUs language={language} />

        {/* Services Section */}
        <ServicesSection
          language={language}
          onSelectService={(service) => setSelectedService(service)}
          onBookService={(serviceName) => scrollToBooking(serviceName)}
        />

        {/* Doctor Section */}
        <DoctorSection
          language={language}
          onBookClick={() => scrollToBooking('General Consultation')}
        />

        {/* Reviews Section */}
        <ReviewsSection
          language={language}
          onWriteReviewClick={() => setWriteReviewOpen(true)}
          customReviews={customReviews}
        />

        {/* Stats Section */}
        <StatsSection language={language} />

        {/* Online Appointment Booking */}
        <AppointmentSection
          language={language}
          preselectedService={preselectedServiceName}
          onAppointmentCreated={handleAppointmentCreated}
        />

        {/* Gallery Section */}
        <GallerySection language={language} />

        {/* FAQ Section */}
        <FaqSection language={language} />

        {/* Contact Section */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onBookClick={() => scrollToBooking()}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 sm:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#2CB67D] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-transform"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-[#0F6CBD] text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:scale-110 transition-transform"
          aria-label="Call Doctor"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Modals */}
      <ServiceModal
        service={selectedService}
        language={language}
        onClose={() => setSelectedService(null)}
        onBookThisService={(serviceName) => scrollToBooking(serviceName)}
      />

      <AppointmentPassModal
        appointment={activeAppointment}
        language={language}
        onClose={() => setActiveAppointment(null)}
      />

      <WriteReviewModal
        isOpen={writeReviewOpen}
        language={language}
        onClose={() => setWriteReviewOpen(false)}
        onSubmitReview={handleAddReview}
      />

      <SymptomCheckerModal
        isOpen={symptomCheckerOpen}
        language={language}
        onClose={() => setSymptomCheckerOpen(false)}
        onBookService={(serviceName) => scrollToBooking(serviceName)}
      />

      <TermsModal
        isOpen={termsOpen}
        language={language}
        onClose={() => setTermsOpen(false)}
      />
    </div>
  );
}
