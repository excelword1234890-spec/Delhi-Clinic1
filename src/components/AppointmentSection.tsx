import React, { useState, useEffect } from 'react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { Language, AppointmentData } from '../types';
import { Calendar, Clock, User, Phone, Mail, Stethoscope, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AppointmentSectionProps {
  language: Language;
  preselectedService?: string;
  onAppointmentCreated: (appt: AppointmentData) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  language,
  preselectedService,
  onAppointmentCreated,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceName, setServiceName] = useState(preselectedService || SERVICES_DATA[0].titleEn);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 AM - 11:00 AM');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedService) {
      setServiceName(preselectedService);
    }
  }, [preselectedService]);

  // Set default date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  const timeSlots = [
    { id: 't1', labelEn: 'Morning (08:00 AM - 11:00 AM)', labelHi: 'सुबह (08:00 - 11:00 बजे)' },
    { id: 't2', labelEn: 'Mid-Day (11:00 AM - 02:00 PM)', labelHi: 'दोपहर (11:00 - 02:00 बजे)' },
    { id: 't3', labelEn: 'Afternoon (02:00 PM - 05:00 PM)', labelHi: 'अपराह्न (02:00 - 05:00 बजे)' },
    { id: 't4', labelEn: 'Evening (05:00 PM - 09:00 PM)', labelHi: 'शाम (05:00 - 09:00 बजे)' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = language === 'en' ? 'Full name is required' : 'पूरा नाम आवश्यक है';
    }

    if (!phone.trim() || phone.trim().length < 10) {
      newErrors.phone =
        language === 'en'
          ? 'Valid 10-digit phone number is required'
          : 'वैध 10-अंकीय फोन नंबर आवश्यक है';
    }

    if (!date) {
      newErrors.date = language === 'en' ? 'Preferred date is required' : 'तारीख आवश्यक है';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const newAppointment: AppointmentData = {
      id: `DC-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      serviceId: serviceName,
      serviceName,
      date,
      timeSlot,
      message: message.trim(),
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Confirmed',
    };

    onAppointmentCreated(newAppointment);

    // Reset optional fields
    setMessage('');
  };

  return (
    <section id="booking" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0F6CBD]/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#2CB67D]" />
              <span>{language === 'en' ? 'Online Consultation' : 'ऑनलाइन परामर्श'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#12263F] leading-tight">
              {language === 'en' ? (
                <>
                  Book Your <span className="text-[#0F6CBD]">Medical Appointment</span>
                </>
              ) : (
                <>
                  अपनी <span className="text-[#0F6CBD]">अपॉइंटमेंट बुक करें</span>
                </>
              )}
            </h2>

            <p className="text-slate-600 font-inter text-base leading-relaxed">
              {language === 'en'
                ? 'Reserve your preferred time slot with our senior medical specialist. Instant digital confirmation and zero waiting times.'
                : 'वरिष्ठ चिकित्सा विशेषज्ञ के साथ अपना पसंदीदा समय आरक्षित करें। त्वरित पुष्टि।'}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#F7F9FC] border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#2CB67D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-poppins font-bold text-sm text-[#12263F]">
                    {language === 'en' ? 'Instant Confirmation Pass' : 'त्वरित पुष्टि पास'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === 'en'
                      ? 'Receive your appointment pass instantly with doctor location coordinates.'
                      : 'डॉक्टर स्थान निर्देशांक के साथ अपना पास तुरंत प्राप्त करें।'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#F7F9FC] border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#0F6CBD] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-poppins font-bold text-sm text-[#12263F]">
                    {language === 'en' ? '100% Confidential & Private' : '100% गोपनीय और निजी'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === 'en'
                      ? 'Your personal health information is completely protected.'
                      : 'आपकी व्यक्तिगत स्वास्थ्य जानकारी पूरी तरह से सुरक्षित है।'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#12263F] text-white flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-300">
                  {language === 'en' ? 'Need Help Booking?' : 'बुकिंग में मदद चाहिए?'}
                </p>
                <p className="text-sm font-bold text-white">{CLINIC_INFO.phone}</p>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="px-4 py-2 rounded-xl bg-[#2CB67D] hover:bg-[#259b6a] text-white text-xs font-bold transition-all"
              >
                {language === 'en' ? 'Call Directly' : 'डायरेक्ट कॉल'}
              </a>
            </div>
          </div>

          {/* Right Booking Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F9FC] border border-slate-200 shadow-xl relative">
              <h3 className="text-xl font-poppins font-bold text-[#12263F] mb-6 flex items-center space-x-2">
                <Stethoscope className="w-5 h-5 text-[#0F6CBD]" />
                <span>{language === 'en' ? 'Patient Appointment Details' : 'रोगी अपॉइंटमेंट विवरण'}</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Grid 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {language === 'en' ? 'Full Name *' : 'पूरा नाम *'}
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={language === 'en' ? 'e.g. Anjali Sharma' : 'उदा. अंजली शर्मा'}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${
                          errors.fullName ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30`}
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {language === 'en' ? 'Phone Number *' : 'फोन नंबर *'}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98689 66923"
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${
                          errors.phone ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {language === 'en' ? 'Email Address (Optional)' : 'ईमेल पता (वैकल्पिक)'}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="patient@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                      />
                    </div>
                  </div>

                  {/* Medical Service Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {language === 'en' ? 'Select Medical Service *' : 'चिकित्सा सेवा चुनें *'}
                    </label>
                    <select
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-[#12263F] focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.titleEn}>
                          {language === 'en' ? srv.titleEn : srv.titleHi}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {language === 'en' ? 'Preferred Date *' : 'पसंदीदा तारीख *'}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="date"
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${
                          errors.date ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30`}
                      />
                    </div>
                    {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {language === 'en' ? 'Preferred Time Slot *' : 'पसंदीदा समय *'}
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-[#12263F] focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot.id} value={slot.labelEn}>
                          {language === 'en' ? slot.labelEn : slot.labelHi}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Symptoms Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {language === 'en' ? 'Brief Message / Health Concerns (Optional)' : 'स्वास्थ्य संबंधी जानकारी (वैकल्पिक)'}
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === 'en'
                          ? 'Describe any symptoms, PCOD history, or general health concerns...'
                          : 'अपने लक्षणों या स्वास्थ्य संबंधी चिंताओं का वर्णन करें...'
                      }
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/30"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#0F6CBD] to-[#2CB67D] hover:opacity-95 shadow-xl shadow-[#0F6CBD]/20 hover:shadow-2xl transition-all cursor-pointer"
                >
                  {language === 'en' ? 'Confirm & Generate Appointment Pass' : 'अपॉइंटमेंट पास बनाएं'}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
