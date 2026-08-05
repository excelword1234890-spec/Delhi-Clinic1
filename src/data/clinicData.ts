import { Service, Review, GalleryItem, FAQItem } from '../types';
import heroImg from '../assets/images/delhi_clinic_hero_1785953972893.jpg';
import doctorImg from '../assets/images/delhi_clinic_doctor_1785953983893.jpg';

export const CLINIC_INFO = {
  nameEn: "Delhi Clinic",
  nameHi: "दिल्ली क्लीनिक",
  taglineEn: "Trusted Healthcare for Every Family",
  taglineHi: "हर परिवार के लिए विश्वसनीय स्वास्थ्य सेवा",
  rating: 4.7,
  totalReviews: 24,
  phone: "+91 98689 66923",
  phoneRaw: "919868966923",
  email: "contact@delhiclinic.in",
  hoursEn: "Monday – Sunday: 8:00 AM – 9:00 PM",
  hoursHi: "सोमवार - रविवार: सुबह 8:00 - रात 9:00 बजे",
  address: {
    line1: "RZ Plot No. 1 & 2, Near CRPF Camp",
    line2: "Vinoba Enclave Extension, Block A1, Naveen Palace",
    area: "Jharoda Kalan, New Delhi – 110072",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=RZ+Plot+No+1+and+2+Near+CRPF+Camp+Vinoba+Enclave+Extension+Jharoda+Kalan+New+Delhi+110072"
  },
  highlights: [
    { icon: "Star", textEn: "4.7★ Rating", textHi: "4.7★ रेटिंग" },
    { icon: "UserCheck", textEn: "Experienced Doctor", textHi: "अनुभवी डॉक्टर" },
    { icon: "Building2", textEn: "Modern Clinic", textHi: "आधुनिक क्लीनिक" },
    { icon: "HeartHandshake", textEn: "Trusted Healthcare", textHi: "विश्वसनीय देखभाल" },
    { icon: "ShieldCheck", textEn: "Women-Owned Clinic", textHi: "महिला संचालित क्लीनिक" }
  ],
  heroImage: heroImg,
  doctorImage: doctorImg
};

export const DOCTOR_PROFILE = {
  nameEn: "Dr. Delhi Clinic Senior Medical Specialist",
  nameHi: "डॉ. दिल्ली क्लीनिक वरिष्ठ चिकित्सा विशेषज्ञ",
  titleEn: "Senior Physician & Women's Health Specialist",
  titleHi: "वरिष्ठ चिकित्सक एवं महिला स्वास्थ्य विशेषज्ञ",
  qualificationsEn: "M.B.B.S., D.G.O. (Gynecology & Obstetrics), Senior Consultant",
  qualificationsHi: "एम.बी.बी.एस., डी.जी.ओ. (स्त्री रोग विशेषज्ञ), वरिष्ठ सलाहकार",
  experienceYears: 10,
  specializationsEn: [
    "General Medicine & Primary Care",
    "PCOD & PCOS Specialized Treatment",
    "Pregnancy & Women's Health Care",
    "Diabetes & Blood Pressure Management",
    "Preventive Health & Diagnostics"
  ],
  specializationsHi: [
    "सामान्य चिकित्सा एवं प्राथमिक देखभाल",
    "PCOD एवं PCOS विशेष उपचार",
    "गर्भावस्था एवं महिला स्वास्थ्य देखभाल",
    "मधुमेह एवं उच्च रक्तचाप नियंत्रण",
    "निवारक स्वास्थ्य एवं जांच"
  ],
  languagesEn: ["English", "Hindi (हिंदी)"],
  languagesHi: ["अंग्रेजी", "हिंदी"],
  aboutEn: "Dedicated medical practitioner with over a decade of clinical excellence. Specialized in providing compassionate, patient-centered care for families and tailored treatment for women's reproductive health, hormonal conditions like PCOD/PCOS, and metabolic disorders.",
  aboutHi: "एक दशक से अधिक के नैदानिक अनुभव के साथ समर्पित चिकित्सक। परिवारों के लिए सहानुभूतिपूर्ण, रोगी-केंद्रित देखभाल और महिला प्रजनन स्वास्थ्य, PCOD/PCOS जैसे हार्मोनल विकारों और चयापचय विकारों के लिए विशेष उपचार में विशेषज्ञता।"
};

export const SERVICES_DATA: Service[] = [
  {
    id: "general-consultation",
    titleEn: "General Consultation",
    titleHi: "सामान्य परामर्श",
    category: "general",
    iconName: "Stethoscope",
    popular: true,
    shortDescEn: "Comprehensive physical evaluation, symptom diagnosis, and personalized medical guidance for all age groups.",
    shortDescHi: "सभी आयु वर्गों के लिए व्यापक शारीरिक परीक्षण, लक्षण निदान और व्यक्तिगत चिकित्सा मार्गदर्शन।",
    fullDescEn: "Our primary consultation provides thorough assessment for common illnesses, bodily discomforts, preventive advice, and baseline diagnostic recommendations.",
    fullDescHi: "हमारा प्राथमिक परामर्श आम बीमारियों, शारीरिक असुविधाओं, निवारक सलाह और बुनियादी नैदानिक सिफारिशों के लिए संपूर्ण मूल्यांकन प्रदान करता है।"
  },
  {
    id: "womens-health",
    titleEn: "Women's Health",
    titleHi: "महिला स्वास्थ्य",
    category: "women",
    iconName: "HeartPulse",
    popular: true,
    shortDescEn: "Holistic healthcare for women at every stage of life, from adolescent care to reproductive wellness.",
    shortDescHi: "किशोरावस्था से लेकर प्रजनन कल्याण तक, जीवन के हर चरण में महिलाओं के लिए समग्र स्वास्थ्य देखभाल।",
    fullDescEn: "Empathetic and confidential medical consultations tailored for women, addressing hormonal imbalances, menstrual health, nutritional wellness, and preventive screenings.",
    fullDescHi: "महिलाओं के लिए सहानुभूतिपूर्ण और गोपनीय चिकित्सा परामर्श, जिसमें हार्मोनल असंतुलन, मासिक धर्म स्वास्थ्य और पोषण कल्याण शामिल है।"
  },
  {
    id: "pcod-treatment",
    titleEn: "PCOD Treatment",
    titleHi: "PCOD उपचार",
    category: "women",
    iconName: "Sparkles",
    popular: true,
    shortDescEn: "Specialized clinical therapy and lifestyle protocols to effectively manage Polycystic Ovarian Disease.",
    shortDescHi: "पॉलीसिस्टिक ओवेरियन डिजीज को प्रभावी ढंग से प्रबंधित करने के लिए विशेष नैदानिक चिकित्सा और जीवनशैली प्रोटोकॉल।",
    fullDescEn: "Structured medical management focusing on cycle regularity, symptom relief, metabolic stabilization, and targeted dietary guidance for PCOD patients.",
    fullDescHi: "PCOD रोगियों के लिए चक्र की नियमितता, लक्षणों में राहत, चयापचय स्थिरीकरण और लक्षित आहार मार्गदर्शन पर केंद्रित संरचित चिकित्सा प्रबंधन।"
  },
  {
    id: "pcos-management",
    titleEn: "PCOS Management",
    titleHi: "PCOS प्रबंधन",
    category: "women",
    iconName: "Activity",
    popular: true,
    shortDescEn: "Advanced hormonal balancing, weight control, insulin management, and ovulation guidance for PCOS.",
    shortDescHi: "PCOS के लिए उन्नत हार्मोनल संतुलन, वजन नियंत्रण, इंसुलिन प्रबंधन और ओव्यूलेशन मार्गदर्शन।",
    fullDescEn: "Evidence-based therapy combining endocrinal evaluation, lifestyle modifications, and medications to reverse long-term symptoms of PCOS.",
    fullDescHi: "PCOS के दीर्घकालिक लक्षणों को नियंत्रित करने के लिए एंडोक्राइन मूल्यांकन, जीवनशैली में बदलाव और दवाओं का संयोजन।"
  },
  {
    id: "pregnancy-consultation",
    titleEn: "Pregnancy Consultation",
    titleHi: "गर्भावस्था परामर्श",
    category: "women",
    iconName: "Baby",
    popular: true,
    shortDescEn: "Antenatal care, prenatal guidance, fetal tracking recommendations, and maternal health monitoring.",
    shortDescHi: "प्रसवपूर्व देखभाल, भ्रूण ट्रैकिंग सिफारिशें और मातृ स्वास्थ्य निगरानी।",
    fullDescEn: "Compassionate mother and baby guidance including routine health checks, trimester advice, maternal nutrition planning, and vitals tracking.",
    fullDescHi: "नियमित स्वास्थ्य जांच, त्रैमासिक सलाह, मातृ पोषण योजना और महत्वपूर्ण संकेत ट्रैकिंग सहित करुणामय माँ और बच्चे का मार्गदर्शन।"
  },
  {
    id: "child-healthcare",
    titleEn: "Child Healthcare",
    titleHi: "बाल स्वास्थ्य सेवा",
    category: "general",
    iconName: "Smile",
    shortDescEn: "Pediatric growth assessment, childhood fever care, nutritional advice, and infection management.",
    shortDescHi: "बाल विकास मूल्यांकन, बचपन के बुखार की देखभाल, पोषण संबंधी सलाह और संक्रमण प्रबंधन।",
    fullDescEn: "Gentle medical care for infants and young children ensuring healthy milestones, quick recovery from seasonal infections, and proper immunization schedules.",
    fullDescHi: "शिशुओं और छोटे बच्चों के लिए सौम्य चिकित्सा देखभाल, स्वस्थ विकास मील के पत्थर, मौसमी संक्रमणों से त्वरित रिकवरी सुनिश्चित करना।"
  },
  {
    id: "diabetes-management",
    titleEn: "Diabetes Management",
    titleHi: "मधुमेह प्रबंधन",
    category: "chronic",
    iconName: "Syringe",
    popular: true,
    shortDescEn: "Continuous glucose tracking, HbA1c screening, medication dosage adjusting, and diabetic foot care advice.",
    shortDescHi: "निरंतर ग्लूकोज ट्रैकिंग, एचबीए1सी स्क्रीनिंग, दवा खुराक समायोजन और मधुमेह पैर देखभाल सलाह।",
    fullDescEn: "Comprehensive diabetic care preventing complications through personalized insulin/tablet titration, lifestyle counseling, and glycemic monitoring.",
    fullDescHi: "व्यक्तिगत इंसुलिन/गोली खुराक और जीवनशैली परामर्श के माध्यम से जटिलताओं को रोकने वाली व्यापक मधुमेह देखभाल।"
  },
  {
    id: "blood-pressure-care",
    titleEn: "Blood Pressure Care",
    titleHi: "रक्तचाप देखभाल",
    category: "chronic",
    iconName: "Heart",
    shortDescEn: "Hypertension diagnosis, cardiovascular risk assessment, stress management, and medication titration.",
    shortDescHi: "उच्च रक्तचाप का निदान, हृदय संबंधी जोखिम मूल्यांकन, तनाव प्रबंधन और दवा समायोजन।",
    fullDescEn: "Proactive BP tracking and treatment plans to protect heart, kidney, and vascular health with regular follow-ups.",
    fullDescHi: "नियमित फॉलो-अप के साथ दिल, गुर्दे और संवहनी स्वास्थ्य की रक्षा के लिए सक्रिय बीपी ट्रैकिंग और उपचार योजनाएं।"
  },
  {
    id: "thyroid-treatment",
    titleEn: "Thyroid Treatment",
    titleHi: "थायरॉइड का इलाज",
    category: "chronic",
    iconName: "Zap",
    shortDescEn: "Diagnosis & management for Hypothyroidism and Hyperthyroidism through hormonal blood work analysis.",
    shortDescHi: "हार्मोनल रक्त परीक्षण विश्लेषण के माध्यम से हाइपोथायरायडिज्म और हाइपरथायरायडिज्म का निदान और प्रबंधन।",
    fullDescEn: "Effective thyroid dosage balancing to alleviate fatigue, unexpected weight changes, mood swings, and metabolic imbalance.",
    fullDescHi: "थकान, अप्रत्याशित वजन में बदलाव और चयापचय संबंधी असंतुलन को दूर करने के लिए प्रभावी थायराइड खुराक संतुलन।"
  },
  {
    id: "fever-treatment",
    titleEn: "Fever Treatment",
    titleHi: "बुखार का इलाज",
    category: "general",
    iconName: "Thermometer",
    shortDescEn: "Rapid diagnosis for viral fever, dengue, typhoid, malaria, and immediate symptomatic relief.",
    shortDescHi: "वायरल बुखार, डेंगू, टाइफाइड, मलेरिया के लिए त्वरित निदान और तत्काल रोगसूचक राहत।",
    fullDescEn: "Prompt fever evaluation, CBC testing coordination, hydration therapy guidance, and safe antipyretic medication.",
    fullDescHi: "त्वरित बुखार मूल्यांकन, सीबीसी परीक्षण समन्वय, जलयोजन थेरेपी मार्गदर्शन और सुरक्षित एंटीपायरेटिक दवा।"
  },
  {
    id: "blood-tests",
    titleEn: "Blood Tests & Pathology",
    titleHi: "रक्त परीक्षण एवं पैथोलॉजी",
    category: "diagnostic",
    iconName: "TestTube",
    shortDescEn: "Hassle-free blood sample collection for CBC, Lipid Profile, LFT, KFT, Thyroid, and Vitamin panels.",
    shortDescHi: "सीबीसी, लिपिड प्रोफाइल, एलएफटी, केएफटी, थायराइड और विटामिन पैनल के लिए आसान रक्त नमूना संग्रह।",
    fullDescEn: "Accurate diagnostic blood testing in collaboration with certified top-tier labs with fast report delivery.",
    fullDescHi: "तेजी से रिपोर्ट वितरण के साथ प्रमाणित शीर्ष स्तरीय प्रयोगशालाओं के सहयोग से सटीक नैदानिक रक्त परीक्षण।"
  },
  {
    id: "health-checkup",
    titleEn: "Full Body Health Checkup",
    titleHi: "फुल बॉडी हेल्थ चेकअप",
    category: "preventive",
    iconName: "Activity",
    shortDescEn: "Preventive health screening packages tailored for males, females, senior citizens, and working adults.",
    shortDescHi: "पुरुषों, महिलाओं, वरिष्ठ नागरिकों और कामकाजी वयस्कों के लिए तैयार किए गए निवारक स्वास्थ्य जांच पैकेज।",
    fullDescEn: "Comprehensive baseline wellness packages detecting early signs of chronic illness, metabolic risks, and organ function indicators.",
    fullDescHi: "पुरानी बीमारी के शुरुआती लक्षणों और चयापचय संबंधी जोखिमों का पता लगाने वाले व्यापक कल्याण पैकेज।"
  },
  {
    id: "vaccination",
    titleEn: "Vaccination & Immunization",
    titleHi: "टीकाकरण एवं इम्यूनाइजेशन",
    category: "preventive",
    iconName: "ShieldAlert",
    shortDescEn: "Routine adult and child immunizations including Flu shots, Hepatitis, HPV, and Tetanus boosters.",
    shortDescHi: "फ्लू शॉट्स, हेपेटाइटिस, एचपीवी और टेटनस बूस्टर सहित नियमित वयस्क और बाल टीकाकरण।",
    fullDescEn: "Safe vaccine administration according to recommended national health schedules, preserving long-term immunity.",
    fullDescHi: "अनुशंसित राष्ट्रीय स्वास्थ्य अनुसूची के अनुसार सुरक्षित टीका प्रशासन, दीर्घकालिक प्रतिरक्षा का संरक्षण।"
  },
  {
    id: "preventive-care",
    titleEn: "Preventive Care",
    titleHi: "निवारक देखभाल",
    category: "preventive",
    iconName: "Shield",
    shortDescEn: "Lifestyle counseling, dietary planning, stress management, and wellness optimization.",
    shortDescHi: "जीवनशैली परामर्श, आहार योजना, तनाव प्रबंधन और कल्याण अनुकूलन।",
    fullDescEn: "Proactive healthcare strategies focusing on disease prevention, longevity, immunity building, and daily wellness habits.",
    fullDescHi: "रोग की रोकथाम, दीर्घायु, प्रतिरक्षा निर्माण और दैनिक कल्याण की आदतों पर ध्यान केंद्रित करने वाली सक्रिय स्वास्थ्य रणनीतियाँ।"
  },
  {
    id: "minor-illness",
    titleEn: "Minor Illness Treatment",
    titleHi: "लघु बीमारी का इलाज",
    category: "general",
    iconName: "Bandage",
    shortDescEn: "Treatment for cough, cold, stomach infections, allergies, minor skin rashes, and body aches.",
    shortDescHi: "खांसी, जुकाम, पेट में संक्रमण, एलर्जी, त्वचा पर चकत्ते और शरीर में दर्द का इलाज।",
    fullDescEn: "Quick diagnostic relief for day-to-day ailments, seasonal allergies, mild digestive disturbances, and muscle strains.",
    fullDescHi: "दैनिक बीमारियों, मौसमी एलर्जी, हल्के पाचन विकारों और मांसपेशियों में खिंचाव के लिए त्वरित नैदानिक राहत।"
  },
  {
    id: "medical-advice",
    titleEn: "Medical Advice & Second Opinion",
    titleHi: "चिकित्सा सलाह एवं सेकंड ओपिनियन",
    category: "general",
    iconName: "FileText",
    shortDescEn: "Expert clinical second opinions, lab report interpretation, and long-term care roadmap.",
    shortDescHi: "विशेषज्ञ नैदानिक सेकंड ओपिनियन, लैब रिपोर्ट व्याख्या और दीर्घकालिक देखभाल रोडमैप।",
    fullDescEn: "Detailed review of existing medical records and prescription clarity to help patients make informed health decisions.",
    fullDescHi: "रोगियों को सूचित स्वास्थ्य निर्णय लेने में मदद करने के लिए मौजूदा मेडिकल रिकॉर्ड और नुस्खे की स्पष्टता की समीक्षा।"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "1",
    author: "Anjali Sharma",
    rating: 5,
    date: "2 weeks ago",
    commentEn: "Excellent doctor with caring nature. She listened patiently to all my issues and gave the most accurate diagnosis for my health problem.",
    commentHi: "देखभाल करने वाले स्वभाव के साथ उत्कृष्ट डॉक्टर। उन्होंने मेरी सभी समस्याओं को धैर्यपूर्वक सुना और सबसे सटीक इलाज दिया।",
    tag: "General Consultation",
    verified: true
  },
  {
    id: "2",
    author: "Rajesh Kumar",
    rating: 5,
    date: "1 month ago",
    commentEn: "Very nice doctor and treatment. The clinic is super clean, well maintained and staff is very helpful. Highly recommended near CRPF camp Jharoda.",
    commentHi: "बहुत अच्छे डॉक्टर और इलाज। क्लीनिक बहुत साफ-सुथरा है और स्टाफ बहुत मददगार है। झरोदा कलां में बेस्ट क्लीनिक।",
    tag: "Family Medicine",
    verified: true
  },
  {
    id: "3",
    author: "Sunita Devi",
    rating: 5,
    date: "3 weeks ago",
    commentEn: "Had a really good experience. Doctor explained everything in simple words and didn't prescribe unnecessary medicines.",
    commentHi: "वास्तव में बहुत अच्छा अनुभव रहा। डॉक्टर ने सरल शब्दों में सब कुछ समझाया और अनावश्यक दवाएं नहीं दीं।",
    tag: "Health Checkup",
    verified: true
  },
  {
    id: "4",
    author: "Meenakshi Verma",
    rating: 5,
    date: "2 months ago",
    commentEn: "Best clinic for PCOD & PCOS treatment. Within 3 months of doctor's guidance and treatment plan, my symptoms improved significantly!",
    commentHi: "PCOD और PCOS के इलाज के लिए सबसे अच्छा क्लीनिक। 3 महीने के मार्गदर्शन में मेरे लक्षणों में बहुत सुधार हुआ!",
    tag: "PCOD / PCOS Care",
    verified: true
  },
  {
    id: "5",
    author: "Vikram Singh",
    rating: 5,
    date: "1 month ago",
    commentEn: "Professional, knowledgeable and friendly. Took my mother for blood pressure and diabetes checkup. Doctor gave proper time and attention.",
    commentHi: "पेशेवर, जानकार और दोस्ताना। अपनी माँ को बीपी और शुगर चेकअप के लिए ले गया था। डॉक्टर ने पूरा समय दिया।",
    tag: "Diabetes & BP Care",
    verified: true
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    titleEn: "Experienced Doctor",
    titleHi: "अनुभवी डॉक्टर",
    descEn: "10+ years of dedicated clinical experience with high diagnostic accuracy.",
    descHi: "उच्च नैदानिक सटीकता के साथ 10+ वर्षों का समर्पित अनुभव।",
    iconName: "UserCheck"
  },
  {
    titleEn: "Trusted Treatment",
    titleHi: "विश्वसनीय उपचार",
    descEn: "Evidence-based clinical guidelines with zero unnecessary tests.",
    descHi: "बिना किसी अनावश्यक जांच के साक्ष्य-आधारित नैदानिक दिशा-निर्देश।",
    iconName: "ShieldCheck"
  },
  {
    titleEn: "Modern Consultation",
    titleHi: "आधुनिक परामर्श",
    descEn: "Digital health tracking, electronic prescriptions, and modern clinic setup.",
    descHi: "डिजिटल स्वास्थ्य ट्रैकिंग, इलेक्ट्रॉनिक नुस्खे और आधुनिक क्लीनिक।",
    iconName: "Laptop"
  },
  {
    titleEn: "Women-Friendly Care",
    titleHi: "महिला-अनुकूल देखभाल",
    descEn: "Safe, compassionate, and private environment for women's wellness.",
    descHi: "महिला कल्याण के लिए सुरक्षित, करुणामय और निजी वातावरण।",
    iconName: "Heart"
  },
  {
    titleEn: "Affordable Healthcare",
    titleHi: "किफायती स्वास्थ्य सेवा",
    descEn: "Transparent pricing and pocket-friendly consultation fees for every family.",
    descHi: "प्रत्येक परिवार के लिए पारदर्शी मूल्य निर्धारण और किफायती परामर्श शुल्क।",
    iconName: "Coins"
  },
  {
    titleEn: "Family Medicine",
    titleHi: "पारिवारिक चिकित्सा",
    descEn: "Complete medical care for all generations under one roof.",
    descHi: "एक ही छत के नीचे सभी पीढ़ियों के लिए संपूर्ण चिकित्सा देखभाल।",
    iconName: "Users"
  },
  {
    titleEn: "Accurate Diagnosis",
    titleHi: "सटीक निदान",
    descEn: "Thorough symptom analysis and certified pathological testing.",
    descHi: "विस्तृत लक्षण विश्लेषण और प्रमाणित पैथोलॉजिकल परीक्षण।",
    iconName: "Target"
  },
  {
    titleEn: "Personalized Treatment",
    titleHi: "व्यक्तिगत उपचार",
    descEn: "Tailored recovery plans focused on lifestyle and sustainable healing.",
    descHi: "जीवनशैली और टिकाऊ उपचार पर केंद्रित कस्टमाइज्ड रिकवरी प्लान।",
    iconName: "Sparkle"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    titleEn: "Reception & Waiting Lounge",
    titleHi: "रिसेप्शन एवं प्रतीक्षालय",
    category: "reception",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Air-conditioned, comfortable and hygienic waiting lounge for patients.",
    descriptionHi: "मरीजों के लिए वातानुकूलित, आरामदायक और स्वच्छ प्रतीक्षा लाउंज।"
  },
  {
    id: "g2",
    titleEn: "Doctor Consultation Room",
    titleHi: "डॉक्टर परामर्श कक्ष",
    category: "consultation",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Private and sterile consultation room equipped for comprehensive patient examination.",
    descriptionHi: "मरीज की जांच के लिए निजी और निष्फल परामर्श कक्ष।"
  },
  {
    id: "g3",
    titleEn: "Treatment & Observation Room",
    titleHi: "उपचार एवं अवलोकन कक्ष",
    category: "treatment",
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Equipped with patient monitoring beds and emergency care essentials.",
    descriptionHi: "रोगी निगरानी बेड और आपातकालीन देखभाल अनिवार्यताओं से लैस।"
  },
  {
    id: "g4",
    titleEn: "Diagnostic & Blood Sample Bay",
    titleHi: "निदान एवं रक्त नमूना केंद्र",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Hygienic blood drawing counter with certified cold chain storage.",
    descriptionHi: "प्रमाणित कोल्ड चेन स्टोरेज के साथ स्वच्छ रक्त नमूना काउंटर।"
  },
  {
    id: "g5",
    titleEn: "Clean & Sanitized Environment",
    titleHi: "साफ एवं सैनिटाइज्ड वातावरण",
    category: "environment",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Strict disinfection protocols maintained round the clock.",
    descriptionHi: "चौबीसों घंटे सख्त कीटाणुशोधन प्रोटोकॉल का पालन।"
  },
  {
    id: "g6",
    titleEn: "Modern Vital Checking Tools",
    titleHi: "आधुनिक वाइटल्स जांच उपकरण",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Digital blood pressure, pulse oximetry and glucose monitoring devices.",
    descriptionHi: "डिजिटल रक्तचाप, पल्स ऑक्सीमेट्री और ग्लूकोज मॉनिटरिंग उपकरण।"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq1",
    questionEn: "What are the opening hours of Delhi Clinic?",
    questionHi: "दिल्ली क्लीनिक का समय क्या है?",
    answerEn: "Delhi Clinic is open Monday through Sunday from 8:00 AM to 9:00 PM. We offer morning and evening consultation slots.",
    answerHi: "दिल्ली क्लीनिक सोमवार से रविवार सुबह 8:00 बजे से रात 9:00 बजे तक खुला रहता है।",
    category: "general"
  },
  {
    id: "faq2",
    questionEn: "How do I book an appointment at Delhi Clinic?",
    questionHi: "दिल्ली क्लीनिक में अपॉइंटमेंट कैसे बुक करें?",
    answerEn: "You can book directly through our online booking form on this website, call us at +91 98689 66923, or send a message on WhatsApp for instant confirmation.",
    answerHi: "आप हमारी वेबसाइट के फॉर्म द्वारा, +91 98689 66923 पर कॉल करके या व्हाट्सएप पर मैसेज भेजकर अपॉइंटमेंट बुक कर सकते हैं।",
    category: "booking"
  },
  {
    id: "faq3",
    questionEn: "Does the clinic offer specialized treatment for PCOD and PCOS?",
    questionHi: "क्या क्लीनिक में PCOD और PCOS का इलाज उपलब्ध है?",
    answerEn: "Yes, Delhi Clinic specializes in PCOD/PCOS management through customized medical therapy, hormonal balancing, dietary counseling, and metabolic support.",
    answerHi: "हां, दिल्ली क्लीनिक कस्टमाइज्ड मेडिकल थेरेपी, हार्मोनल संतुलन और आहार परामर्श के माध्यम से PCOD/PCOS प्रबंधन में माहिर है।",
    category: "services"
  },
  {
    id: "faq4",
    questionEn: "Can I get blood sample collection and lab tests done here?",
    questionHi: "क्या यहां रक्त के नमूने और जांच की सुविधा है?",
    answerEn: "Yes, we facilitate sample collection for routine blood tests (CBC, Sugar, Thyroid, Lipid, LFT, KFT, Vitamins) with accurate digital report delivery.",
    answerHi: "हां, हम नियमित रक्त जांच (सीबीसी, शुगर, थायराइड, लिपिड आदि) के लिए नमूने एकत्र करते हैं और डिजिटल रिपोर्ट प्रदान करते हैं।",
    category: "tests"
  },
  {
    id: "faq5",
    questionEn: "What payment options are accepted at Delhi Clinic?",
    questionHi: "दिल्ली क्लीनिक में भुगतान के कौन से विकल्प स्वीकार किए जाते हैं?",
    answerEn: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and major debit/credit cards for your convenience.",
    answerHi: "हम आपकी सुविधा के लिए नकद, यूपीआई (गूगल पे, फोनपे, पेटीएम) और कार्ड स्वीकार करते हैं।",
    category: "payment"
  },
  {
    id: "faq6",
    questionEn: "Where is Delhi Clinic located in New Delhi?",
    questionHi: "दिल्ली क्लीनिक नई दिल्ली में कहां स्थित है?",
    answerEn: "We are located at RZ Plot No. 1 & 2, Near CRPF Camp, Vinoba Enclave Extension, Block A1, Naveen Palace, Jharoda Kalan, New Delhi – 110072.",
    answerHi: "हम आरजेड प्लॉट नंबर 1 और 2, सीआरपीएफ कैंप के पास, विनोबा एन्क्लेव एक्सटेंशन, ब्लॉक ए1, नवीन पैलेस, झरोदा कलां, नई दिल्ली - 110072 पर स्थित हैं।",
    category: "location"
  }
];
