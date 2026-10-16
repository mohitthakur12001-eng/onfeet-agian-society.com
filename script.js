
"use strict";

/* =========================================
   ON FEET AGAIN - WEBSITE JAVASCRIPT
   Languages: English, Hindi, Punjabi
   ========================================= */

const WHATSAPP_NUMBER = "917876922271";

/* ---------- STAFF DIRECTORY ---------- */

const staffMembers = [
  {
    name: "Mr. Gurjit Singh",
    role: {
      en: "Center Incharge",
      hi: "केंद्र प्रभारी",
      pa: "ਸੈਂਟਰ ਇੰਚਾਰਜ"
    },
    qualification: {
      en: "Center administration and coordination",
      hi: "केंद्र प्रबंधन और समन्वय",
      pa: "ਸੈਂਟਰ ਪ੍ਰਬੰਧਨ ਅਤੇ ਤਾਲਮੇਲ"
    }
  },
  {
    name: "Mr. Sourav Syal",
    role: {
      en: "Managing Director",
      hi: "प्रबंध निदेशक",
      pa: "ਮੈਨੇਜਿੰਗ ਡਾਇਰੈਕਟਰ"
    },
    qualification: {
      en: "Management and administration",
      hi: "प्रबंधन और प्रशासन",
      pa: "ਪ੍ਰਬੰਧਨ ਅਤੇ ਪ੍ਰਸ਼ਾਸਨ"
    }
  },
  {
    name: "Dr. Tushar",
    role: {
      en: "Psychiatrist",
      hi: "मनोचिकित्सक",
      pa: "ਮਨੋਚਿਕਿਤਸਕ"
    },
    qualification: {
      en: "Psychiatric care",
      hi: "मनोचिकित्सकीय देखभाल",
      pa: "ਮਨੋਚਿਕਿਤਸਕ ਦੇਖਭਾਲ"
    }
  },
  {
    name: "Dr. Vijay Kumar Joshi",
    role: {
      en: "Medical Doctor",
      hi: "चिकित्सक",
      pa: "ਮੈਡੀਕਲ ਡਾਕਟਰ"
    },
    qualification: {
      en: "MBBS",
      hi: "एमबीबीएस",
      pa: "MBBS"
    }
  },
  {
    name: "Mr. Mohit Thakur",
    role: {
      en: "Psychologist & Counsellor",
      hi: "मनोवैज्ञानिक एवं काउंसलर",
      pa: "ਮਨੋਵਿਗਿਆਨੀ ਅਤੇ ਕੌਂਸਲਰ"
    },
    qualification: {
      en: "Master's in Psychology | 2 years' experience",
      hi: "मनोविज्ञान में मास्टर डिग्री | 2 वर्ष का अनुभव",
      pa: "ਮਨੋਵਿਗਿਆਨ ਵਿੱਚ ਮਾਸਟਰ ਡਿਗਰੀ | 2 ਸਾਲ ਦਾ ਤਜਰਬਾ"
    },
    experience: {
      en: "2 Years' Experience",
      hi: "2 वर्ष का अनुभव",
      pa: "2 ਸਾਲ ਦਾ ਤਜਰਬਾ"
    }
  },
  {
    name: "Mrs. Jyoti Sharma",
    role: {
      en: "Social Worker",
      hi: "सामाजिक कार्यकर्ता",
      pa: "ਸਮਾਜਿਕ ਕਾਰਕੁਨ"
    },
    qualification: {
      en: "Master's in Sociology",
      hi: "समाजशास्त्र में मास्टर डिग्री",
      pa: "ਸਮਾਜ ਸ਼ਾਸਤਰ ਵਿੱਚ ਮਾਸਟਰ ਡਿਗਰੀ"
    }
  },
  {
    name: "Miss Priyanka Rani",
    role: {
      en: "Staff Nurse",
      hi: "स्टाफ नर्स",
      pa: "ਸਟਾਫ ਨਰਸ"
    },
    qualification: {
      en: "GNM",
      hi: "जीएनएम",
      pa: "GNM"
    }
  },
  {
    name: "Miss Ritu",
    role: {
      en: "Staff Nurse",
      hi: "स्टाफ नर्स",
      pa: "ਸਟਾਫ ਨਰਸ"
    },
    qualification: {
      en: "B.Sc. Nursing",
      hi: "बी.एससी. नर्सिंग",
      pa: "B.Sc. ਨਰਸਿੰਗ"
    }
  },
  {
    name: "Mr. Harry",
    role: {
      en: "Pharmacist",
      hi: "फार्मासिस्ट",
      pa: "ਫਾਰਮਾਸਿਸਟ"
    },
    qualification: {
      en: "B.Pharmacy",
      hi: "बी.फार्मेसी",
      pa: "B.Pharmacy"
    }
  },
  {
    name: "Mr. Sourab Sharma",
    role: {
      en: "Yoga Trainer",
      hi: "योग प्रशिक्षक",
      pa: "ਯੋਗਾ ਟ੍ਰੇਨਰ"
    },
    qualification: {
      en: "Yoga and wellness activities",
      hi: "योग और स्वास्थ्य गतिविधियाँ",
      pa: "ਯੋਗਾ ਅਤੇ ਤੰਦਰੁਸਤੀ ਗਤੀਵਿਧੀਆਂ"
    }
  },
  {
    name: "Miss Kriti",
    role: {
      en: "Vocational Trainer",
      hi: "व्यावसायिक प्रशिक्षक",
      pa: "ਵੋਕੇਸ਼ਨਲ ਟ੍ਰੇਨਰ"
    },
    qualification: {
      en: "Vocational skills and activities",
      hi: "व्यावसायिक कौशल और गतिविधियाँ",
      pa: "ਵੋਕੇਸ਼ਨਲ ਹੁਨਰ ਅਤੇ ਗਤੀਵਿਧੀਆਂ"
    }
  },
  {
    name: "Mr. Satnam Singh",
    role: {
      en: "Recovery Support Person",
      hi: "रिकवरी सहायता कर्मी",
      pa: "ਰਿਕਵਰੀ ਸਹਾਇਤਾ ਕਰਮਚਾਰੀ"
    },
    qualification: {
      en: "Recovery support and daily guidance",
      hi: "रिकवरी सहायता और दैनिक मार्गदर्शन",
      pa: "ਰਿਕਵਰੀ ਸਹਾਇਤਾ ਅਤੇ ਰੋਜ਼ਾਨਾ ਮਾਰਗਦਰਸ਼ਨ"
    }
  }
];

/* ---------- WEBSITE TRANSLATIONS ---------- */

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navTeam: "Our Team",
    navContact: "Contact",

    heroEyebrow: "A NEW BEGINNING STARTS HERE",
    heroTitle: "Your Journey to Recovery Begins Today",
    heroText:
      "Compassionate care, professional counselling and support to help individuals move towards a healthier, substance-free life.",
    heroButton: "Get Help Today",
    servicesButton: "Explore Services",

    trust1: "Compassionate Care",
    trust2: "Professional Support",
    trust3: "A Path to Recovery",

    aboutKicker: "ABOUT OUR CENTER",
    aboutTitle: "Support, Care and a Fresh Start",
    aboutText:
      "On Feet Again Rehabilitation Drug and Counseling Center works to support people and families affected by substance use. We believe recovery is a journey that deserves dignity, understanding and individualised support.",
    aboutPoint1: "Respectful and supportive environment",
    aboutPoint2: "Counselling and recovery guidance",
    aboutPoint3: "Family awareness and support",
    aboutPoint4: "Focus on healthy routines and rehabilitation",
    aboutLink: "Talk to our team →",
    aboutNote: "Every step forward matters.",

    servicesKicker: "WHAT WE OFFER",
    servicesTitle: "Our Support Services",
    servicesIntro:
      "Recovery support tailored to individual needs and goals.",

    service1Title: "De-addiction Support",
    service1Text:
      "Structured support for people seeking help with substance use.",

    service2Title: "Psychological Counselling",
    service2Text:
      "Individual counselling to support emotional wellbeing and recovery.",

    service3Title: "Family Counselling",
    service3Text:
      "Guidance to help families understand recovery and offer support.",

    service4Title: "Medical Coordination",
    service4Text:
      "Appropriate medical assessment and referral when required.",

    service5Title: "Yoga and Wellness",
    service5Text:
      "Wellness activities to encourage healthier daily routines.",

    service6Title: "Rehabilitation Guidance",
    service6Text:
      "Support with life skills, personal goals and reintegration.",

    bannerKicker: "HOPE • COURAGE • RECOVERY",
    bannerTitle: "Every New Day Is Another Chance",
    bannerText:
      "Asking for help is a courageous first step. You do not have to take the journey alone.",
    bannerButton: "Contact Our Team",

    teamKicker: "THE PEOPLE BEHIND YOUR CARE",
    teamTitle: "Meet Our Team",
    teamIntro:
      "A multidisciplinary team working towards care and recovery.",

    contactKicker: "GET IN TOUCH",
    contactTitle: "Take the First Step",
    contactText:
      "Contact our team to ask about the center, available services or the next steps for support.",

    addressLabel: "Address",
    phoneLabel: "Phone",
    languageLabel: "Languages",
    callButton: "Call Now",
    mapLink: "Find us on Google Maps ↗",

    formTitle: "Send an Enquiry",
    formIntro:
      "Fill in the details below to prepare a WhatsApp message.",
    nameLabel: "Full Name",
    visitorPhoneLabel: "Your Phone Number",
    enquiryLabel: "How can we help?",
    chooseOption: "Choose an option",
    option1: "Treatment and rehabilitation",
    option2: "Counselling",
    option3: "Family guidance",
    option4: "General enquiry",
    messageLabel: "Message",
    submitButton: "Continue to WhatsApp",
    formNote:
      "Your message will open in WhatsApp for you to review and send.",
    namePlaceholder: "Enter your name",
    phonePlaceholder: "Enter your phone number",
    messagePlaceholder: "Write your message (optional)",

    validationName: "Please enter your name.",
    validationPhone: "Please enter a valid phone number.",
    validationEnquiry: "Please select an enquiry type.",
    whatsappStatus:
      "WhatsApp is opening. Please review your message and send it there.",

    footerText: "Supporting hope, dignity and recovery."
  },

  hi: {
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navServices: "सेवाएँ",
    navTeam: "हमारी टीम",
    navContact: "संपर्क करें",

    heroEyebrow: "एक नई शुरुआत यहाँ से",
    heroTitle: "रिकवरी की आपकी यात्रा आज से शुरू होती है",
    heroText:
      "स्वस्थ और नशामुक्त जीवन की दिशा में आगे बढ़ने के लिए सहयोगपूर्ण देखभाल, पेशेवर काउंसलिंग और सहायता।",
    heroButton: "आज ही सहायता लें",
    servicesButton: "सेवाएँ देखें",

    trust1: "सहयोगपूर्ण देखभाल",
    trust2: "पेशेवर सहायता",
    trust3: "रिकवरी की ओर कदम",

    aboutKicker: "हमारे केंद्र के बारे में",
    aboutTitle: "सहायता, देखभाल और नई शुरुआत",
    aboutText:
      "On Feet Again Rehabilitation Drug and Counseling Center नशे की समस्या से प्रभावित व्यक्तियों और परिवारों को सहायता प्रदान करने के लिए कार्य करता है। हम मानते हैं कि रिकवरी की यात्रा सम्मान, समझ और व्यक्तिगत सहयोग की हकदार है।",
    aboutPoint1: "सम्मानपूर्ण और सहयोगपूर्ण वातावरण",
    aboutPoint2: "काउंसलिंग और रिकवरी मार्गदर्शन",
    aboutPoint3: "परिवार के लिए जागरूकता और सहायता",
    aboutPoint4: "स्वस्थ दिनचर्या और पुनर्वास पर ध्यान",
    aboutLink: "हमारी टीम से बात करें →",
    aboutNote: "हर आगे बढ़ता कदम महत्वपूर्ण है।",

    servicesKicker: "हमारी सेवाएँ",
    servicesTitle: "हमारी सहायता सेवाएँ",
    servicesIntro:
      "व्यक्ति की आवश्यकताओं और लक्ष्यों के अनुसार रिकवरी सहायता।",

    service1Title: "नशामुक्ति सहायता",
    service1Text:
      "नशे की समस्या में सहायता चाहने वाले व्यक्तियों के लिए व्यवस्थित सहयोग।",

    service2Title: "मनोवैज्ञानिक काउंसलिंग",
    service2Text:
      "भावनात्मक स्वास्थ्य और रिकवरी में सहायता के लिए व्यक्तिगत काउंसलिंग।",

    service3Title: "परिवार परामर्श",
    service3Text:
      "परिवारों को रिकवरी समझने और उचित सहयोग देने के लिए मार्गदर्शन।",

    service4Title: "चिकित्सकीय समन्वय",
    service4Text:
      "आवश्यकता पड़ने पर उचित चिकित्सा मूल्यांकन और रेफरल।",

    service5Title: "योग और स्वास्थ्य",
    service5Text:
      "स्वस्थ दैनिक दिनचर्या को प्रोत्साहित करने वाली गतिविधियाँ।",

    service6Title: "पुनर्वास मार्गदर्शन",
    service6Text:
      "जीवन कौशल, व्यक्तिगत लक्ष्यों और समाज में दोबारा जुड़ने में सहायता।",

    bannerKicker: "आशा • साहस • रिकवरी",
    bannerTitle: "हर नया दिन एक नया अवसर है",
    bannerText:
      "सहायता माँगना साहसिक पहला कदम है। आपको यह यात्रा अकेले तय करने की आवश्यकता नहीं है।",
    bannerButton: "हमारी टीम से संपर्क करें",

    teamKicker: "आपकी देखभाल करने वाली टीम",
    teamTitle: "हमारी टीम से मिलें",
    teamIntro:
      "देखभाल और रिकवरी के लिए कार्य करने वाली विभिन्न विशेषज्ञताओं की टीम।",

    contactKicker: "हमसे संपर्क करें",
    contactTitle: "पहला कदम बढ़ाएँ",
    contactText:
      "केंद्र, उपलब्ध सेवाओं या सहायता के अगले कदमों के बारे में जानने के लिए हमारी टीम से संपर्क करें।",

    addressLabel: "पता",
    phoneLabel: "फोन",
    languageLabel: "भाषाएँ",
    callButton: "अभी कॉल करें",
    mapLink: "Google Maps पर देखें ↗",

    formTitle: "पूछताछ भेजें",
    formIntro:
      "WhatsApp संदेश तैयार करने के लिए नीचे जानकारी भरें।",
    nameLabel: "पूरा नाम",
    visitorPhoneLabel: "आपका फोन नंबर",
    enquiryLabel: "हम आपकी कैसे सहायता करें?",
    chooseOption: "विकल्प चुनें",
    option1: "उपचार और पुनर्वास",
    option2: "काउंसलिंग",
    option3: "परिवार के लिए मार्गदर्शन",
    option4: "सामान्य पूछताछ",
    messageLabel: "संदेश",
    submitButton: "WhatsApp पर आगे बढ़ें",
    formNote:
      "आपका संदेश WhatsApp में खुलेगा, जहाँ आप उसे देखकर भेज सकते हैं।",
    namePlaceholder: "अपना नाम लिखें",
    phonePlaceholder: "अपना फोन नंबर लिखें",
    messagePlaceholder: "अपना संदेश लिखें (वैकल्पिक)",

    validationName: "कृपया अपना नाम लिखें।",
    validationPhone: "कृपया सही फोन नंबर लिखें।",
    validationEnquiry: "कृपया पूछताछ का प्रकार चुनें।",
    whatsappStatus:
      "WhatsApp खुल रहा है। कृपया अपना संदेश देखकर वहाँ भेजें।",

    footerText: "आशा, सम्मान और रिकवरी के लिए सहयोग।"
  },

  pa: {
    navHome: "ਮੁੱਖ ਪੰਨਾ",
    navAbout: "ਸਾਡੇ ਬਾਰੇ",
    navServices: "ਸੇਵਾਵਾਂ",
    navTeam: "ਸਾਡੀ ਟੀਮ",
    navContact: "ਸੰਪਰਕ",

    heroEyebrow: "ਇੱਕ ਨਵੀਂ ਸ਼ੁਰੂਆਤ ਇੱਥੋਂ",
    heroTitle: "ਤੁਹਾਡੀ ਰਿਕਵਰੀ ਦੀ ਯਾਤਰਾ ਅੱਜ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ",
    heroText:
      "ਸਿਹਤਮੰਦ ਅਤੇ ਨਸ਼ਾ-ਮੁਕਤ ਜੀਵਨ ਵੱਲ ਵਧਣ ਲਈ ਸਹਿਯੋਗੀ ਦੇਖਭਾਲ, ਪੇਸ਼ੇਵਰ ਕੌਂਸਲਿੰਗ ਅਤੇ ਮਦਦ।",
    heroButton: "ਅੱਜ ਹੀ ਮਦਦ ਲਵੋ",
    servicesButton: "ਸੇਵਾਵਾਂ ਵੇਖੋ",

    trust1: "ਸਹਿਯੋਗੀ ਦੇਖਭਾਲ",
    trust2: "ਪੇਸ਼ੇਵਰ ਸਹਾਇਤਾ",
    trust3: "ਰਿਕਵਰੀ ਵੱਲ ਕਦਮ",

    aboutKicker: "ਸਾਡੇ ਸੈਂਟਰ ਬਾਰੇ",
    aboutTitle: "ਸਹਾਇਤਾ, ਦੇਖਭਾਲ ਅਤੇ ਨਵੀਂ ਸ਼ੁਰੂਆਤ",
    aboutText:
      "On Feet Again Rehabilitation Drug and Counseling Center ਨਸ਼ੇ ਦੀ ਸਮੱਸਿਆ ਨਾਲ ਪ੍ਰਭਾਵਿਤ ਵਿਅਕਤੀਆਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਦੀ ਸਹਾਇਤਾ ਲਈ ਕੰਮ ਕਰਦਾ ਹੈ। ਅਸੀਂ ਮੰਨਦੇ ਹਾਂ ਕਿ ਰਿਕਵਰੀ ਦੀ ਯਾਤਰਾ ਵਿੱਚ ਸਤਿਕਾਰ, ਸਮਝ ਅਤੇ ਵਿਅਕਤੀਗਤ ਸਹਾਇਤਾ ਮਹੱਤਵਪੂਰਨ ਹਨ।",
    aboutPoint1: "ਸਤਿਕਾਰਯੋਗ ਅਤੇ ਸਹਿਯੋਗੀ ਮਾਹੌਲ",
    aboutPoint2: "ਕੌਂਸਲਿੰਗ ਅਤੇ ਰਿਕਵਰੀ ਲਈ ਮਾਰਗਦਰਸ਼ਨ",
    aboutPoint3: "ਪਰਿਵਾਰ ਲਈ ਜਾਗਰੂਕਤਾ ਅਤੇ ਸਹਾਇਤਾ",
    aboutPoint4: "ਸਿਹਤਮੰਦ ਰੁਟੀਨ ਅਤੇ ਪੁਨਰਵਾਸ ਉੱਤੇ ਧਿਆਨ",
    aboutLink: "ਸਾਡੀ ਟੀਮ ਨਾਲ ਗੱਲ ਕਰੋ →",
    aboutNote: "ਅੱਗੇ ਵਧਾਇਆ ਹਰ ਕਦਮ ਮਹੱਤਵਪੂਰਨ ਹੈ।",

    servicesKicker: "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ",
    servicesTitle: "ਸਾਡੀਆਂ ਸਹਾਇਤਾ ਸੇਵਾਵਾਂ",
    servicesIntro:
      "ਵਿਅਕਤੀ ਦੀਆਂ ਲੋੜਾਂ ਅਤੇ ਟੀਚਿਆਂ ਅਨੁਸਾਰ ਰਿਕਵਰੀ ਸਹਾਇਤਾ।",

    service1Title: "ਨਸ਼ਾ ਛੁਡਾਉਣ ਲਈ ਸਹਾਇਤਾ",
    service1Text:
      "ਨਸ਼ੇ ਦੀ ਸਮੱਸਿਆ ਲਈ ਮਦਦ ਲੱਭ ਰਹੇ ਲੋਕਾਂ ਵਾਸਤੇ ਯੋਜਨਾਬੱਧ ਸਹਾਇਤਾ।",

    service2Title: "ਮਨੋਵਿਗਿਆਨਕ ਕੌਂਸਲਿੰਗ",
    service2Text:
      "ਭਾਵਨਾਤਮਕ ਸਿਹਤ ਅਤੇ ਰਿਕਵਰੀ ਲਈ ਵਿਅਕਤੀਗਤ ਕੌਂਸਲਿੰਗ।",

    service3Title: "ਪਰਿਵਾਰਕ ਕੌਂਸਲਿੰਗ",
    service3Text:
      "ਪਰਿਵਾਰਾਂ ਨੂੰ ਰਿਕਵਰੀ ਸਮਝਣ ਅਤੇ ਸਹਿਯੋਗ ਦੇਣ ਲਈ ਮਾਰਗਦਰਸ਼ਨ।",

    service4Title: "ਮੈਡੀਕਲ ਤਾਲਮੇਲ",
    service4Text:
      "ਲੋੜ ਪੈਣ 'ਤੇ ਢੁਕਵੀਂ ਮੈਡੀਕਲ ਜਾਂਚ ਅਤੇ ਰੈਫਰਲ।",

    service5Title: "ਯੋਗਾ ਅਤੇ ਤੰਦਰੁਸਤੀ",
    service5Text:
      "ਸਿਹਤਮੰਦ ਰੋਜ਼ਾਨਾ ਰੁਟੀਨ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਵਾਲੀਆਂ ਗਤੀਵਿਧੀਆਂ।",

    service6Title: "ਪੁਨਰਵਾਸ ਲਈ ਮਾਰਗਦਰਸ਼ਨ",
    service6Text:
      "ਜੀਵਨ ਦੇ ਹੁਨਰਾਂ, ਨਿੱਜੀ ਟੀਚਿਆਂ ਅਤੇ ਸਮਾਜ ਵਿੱਚ ਮੁੜ ਜੁੜਨ ਲਈ ਸਹਾਇਤਾ।",

    bannerKicker: "ਉਮੀਦ • ਹਿੰਮਤ • ਰਿਕਵਰੀ",
    bannerTitle: "ਹਰ ਨਵਾਂ ਦਿਨ ਇੱਕ ਹੋਰ ਮੌਕਾ ਹੈ",
    bannerText:
      "ਮਦਦ ਮੰਗਣਾ ਹਿੰਮਤ ਵਾਲਾ ਪਹਿਲਾ ਕਦਮ ਹੈ। ਤੁਹਾਨੂੰ ਇਹ ਯਾਤਰਾ ਇਕੱਲੇ ਤੈਅ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ।",
    bannerButton: "ਸਾਡੀ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",

    teamKicker: "ਤੁਹਾਡੀ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲੀ ਟੀਮ",
    teamTitle: "ਸਾਡੀ ਟੀਮ ਨੂੰ ਮਿਲੋ",
    teamIntro:
      "ਦੇਖਭਾਲ ਅਤੇ ਰਿਕਵਰੀ ਲਈ ਕੰਮ ਕਰਨ ਵਾਲੀ ਵੱਖ-ਵੱਖ ਮਾਹਿਰਾਂ ਦੀ ਟੀਮ।",

    contactKicker: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    contactTitle: "ਪਹਿਲਾ ਕਦਮ ਚੁੱਕੋ",
    contactText:
      "ਸੈਂਟਰ, ਉਪਲਬਧ ਸੇਵਾਵਾਂ ਜਾਂ ਮਦਦ ਦੇ ਅਗਲੇ ਕਦਮਾਂ ਬਾਰੇ ਜਾਣਨ ਲਈ ਸਾਡੀ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",

    addressLabel: "ਪਤਾ",
    phoneLabel: "ਫ਼ੋਨ",
    languageLabel: "ਭਾਸ਼ਾਵਾਂ",
    callButton: "ਹੁਣੇ ਕਾਲ ਕਰੋ",
    mapLink: "Google Maps 'ਤੇ ਵੇਖੋ ↗",

    formTitle: "ਪੁੱਛਗਿੱਛ ਭੇਜੋ",
    formIntro:
      "WhatsApp ਸੁਨੇਹਾ ਤਿਆਰ ਕਰਨ ਲਈ ਹੇਠਾਂ ਜਾਣਕਾਰੀ ਭਰੋ।",
    nameLabel: "ਪੂਰਾ ਨਾਮ",
    visitorPhoneLabel: "ਤੁਹਾਡਾ ਫ਼ੋਨ ਨੰਬਰ",
    enquiryLabel: "ਅਸੀਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰੀਏ?",
    chooseOption: "ਇੱਕ ਵਿਕਲਪ ਚੁਣੋ",
    option1: "ਇਲਾਜ ਅਤੇ ਪੁਨਰਵਾਸ",
    option2: "ਕੌਂਸਲਿੰਗ",
    option3: "ਪਰਿਵਾਰਕ ਮਾਰਗਦਰਸ਼ਨ",
    option4: "ਆਮ ਪੁੱਛਗਿੱਛ",
    messageLabel: "ਸੁਨੇਹਾ",
    submitButton: "WhatsApp 'ਤੇ ਅੱਗੇ ਵਧੋ",
    formNote:
      "ਤੁਹਾਡਾ ਸੁਨੇਹਾ WhatsApp ਵਿੱਚ ਖੁੱਲ੍ਹੇਗਾ, ਜਿੱਥੇ ਤੁਸੀਂ ਇਸ ਨੂੰ ਵੇਖ ਕੇ ਭੇਜ ਸਕਦੇ ਹੋ।",
    namePlaceholder: "ਆਪਣਾ ਨਾਮ ਲਿਖੋ",
    phonePlaceholder: "ਆਪਣਾ ਫ਼ੋਨ ਨੰਬਰ ਲਿਖੋ",
    messagePlaceholder: "ਆਪਣਾ ਸੁਨੇਹਾ ਲਿਖੋ (ਵਿਕਲਪਿਕ)",

    validationName: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਲਿਖੋ।",
    validationPhone: "ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਫ਼ੋਨ ਨੰਬਰ ਲਿਖੋ।",
    validationEnquiry: "ਕਿਰਪਾ ਕਰਕੇ ਪੁੱਛਗਿੱਛ ਦੀ ਕਿਸਮ ਚੁਣੋ।",
    whatsappStatus:
      "WhatsApp ਖੁੱਲ੍ਹ ਰਿਹਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਸੁਨੇਹਾ ਵੇਖ ਕੇ ਉੱਥੇ ਭੇਜੋ।",

    footerText: "ਉਮੀਦ, ਸਤਿਕਾਰ ਅਤੇ ਰਿਕਵਰੀ ਲਈ ਸਹਾਇਤਾ।"
  }
};

/* ---------- LANGUAGE MANAGEMENT ---------- */

const languageSelect = document.getElementById("languageSelect");

function getCurrentLanguage() {
  return translations[languageSelect?.value]
    ? languageSelect.value
    : "en";
}

function renderStaff(language) {
  const staffList = document.getElementById("staffList");

  if (!staffList) return;

  const fragment = document.createDocumentFragment();

  staffMembers.forEach((member) => {
    const card = document.createElement("article");
    card.className = "team-card";

    const avatar = document.createElement("div");
    avatar.className = "team-avatar";

    const initials = member.name
      .replace(/^(Mr\.|Mrs\.|Miss|Dr\.)\s*/i, "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();

    avatar.textContent = initials || "OFA";
    avatar.setAttribute("aria-hidden", "true");

    const name = document.createElement("h3");
    name.textContent = member.name;

    const role = document.createElement("p");
    role.className = "team-role";
    role.textContent = member.role[language] || member.role.en;

    const qualification = document.createElement("p");
    qualification.className = "team-qualification";
    qualification.textContent =
      member.qualification[language] || member.qualification.en;

    card.append(avatar, name, role, qualification);

    if (member.experience) {
      const experience = document.createElement("span");
      experience.className = "team-experience";
      experience.textContent =
        member.experience[language] || member.experience.en;

      card.appendChild(experience);
    }

    fragment.appendChild(card);
  });

  staffList.replaceChildren(fragment);
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (!Object.prototype.hasOwnProperty.call(dictionary, key)) {
      return;
    }

    const translatedText = dictionary[key];

    if (element instanceof HTMLOptionElement) {
      element.textContent = translatedText;
    } else {
      element.textContent = translatedText;
    }
  });

  const placeholderMap = {
    fullName: "namePlaceholder",
    visitorPhone: "phonePlaceholder",
    message: "messagePlaceholder"
  };

  Object.entries(placeholderMap).forEach(([elementId, translationKey]) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.placeholder = dictionary[translationKey];
    }
  });

  if (languageSelect) {
    languageSelect.value = selectedLanguage;
  }

  renderStaff(selectedLanguage);

  try {
    localStorage.setItem("ofa-language", selectedLanguage);
  } catch (error) {
    // The website still works if browser storage is unavailable.
  }
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}

/* ---------- MOBILE NAVIGATION ---------- */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function closeMobileMenu() {
  if (!menuToggle || !mainNav) return;

  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.textContent = "☰";
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      closeMobileMenu();
    }
  });
}

/* ---------- HERO IMAGE SLIDESHOW ---------- */

const heroSlides = Array.from(document.querySelectorAll(".hero-bg"));
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const heroDots = document.getElementById("heroDots");

let currentSlide = 0;
let heroTimer = null;

const SLIDE_INTERVAL = 5000;

function renderHeroDots() {
  if (!heroDots) return;

  const fragment = document.createDocumentFragment();

  heroSlides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.type = "button";
    dot.className = "hero-dot";
    dot.setAttribute("aria-label", `Show background ${index + 1}`);

    dot.addEventListener("click", () => {
      showSlide(index);
      resetHeroTimer();
    });

    fragment.appendChild(dot);
  });

  heroDots.replaceChildren(fragment);
}

function showSlide(index) {
  if (heroSlides.length === 0) return;

  currentSlide = (index + heroSlides.length) % heroSlides.length;

  heroSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentSlide;

    slide.classList.toggle("active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  if (heroDots) {
    Array.from(heroDots.children).forEach((dot, dotIndex) => {
      const isActive = dotIndex === currentSlide;

      dot.classList.toggle("active", isActive);

      if (isActive) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  }
}

function nextHeroSlide() {
  showSlide(currentSlide + 1);
}

function previousHeroSlide() {
  showSlide(currentSlide - 1);
}

function resetHeroTimer() {
  if (heroTimer !== null) {
    window.clearInterval(heroTimer);
    heroTimer = null;
  }

  if (heroSlides.length > 1) {
    heroTimer = window.setInterval(nextHeroSlide, SLIDE_INTERVAL);
  }
}

if (prevSlide) {
  prevSlide.addEventListener("click", () => {
    previousHeroSlide();
    resetHeroTimer();
  });
}

if (nextSlide) {
  nextSlide.addEventListener("click", () => {
    nextHeroSlide();
    resetHeroTimer();
  });
}

renderHeroDots();
showSlide(0);
resetHeroTimer();

/* ---------- WHATSAPP ENQUIRY FORM ---------- */

const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const language = getCurrentLanguage();
    const dictionary = translations[language];

    const fullName = document.getElementById("fullName");
    const visitorPhone = document.getElementById("visitorPhone");
    const enquiryType = document.getElementById("enquiryType");
    const message = document.getElementById("message");

    if (!fullName || !visitorPhone || !enquiryType || !message) {
      return;
    }

    const name = fullName.value.trim();
    const phone = visitorPhone.value.trim();
    const enquiry = enquiryType.value;
    const messageText = message.value.trim();

    if (!name) {
      fullName.focus();

      if (formStatus) {
        formStatus.textContent = dictionary.validationName;
      }

      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      visitorPhone.focus();

      if (formStatus) {
        formStatus.textContent = dictionary.validationPhone;
      }

      return;
    }

    if (!enquiry) {
      enquiryType.focus();

      if (formStatus) {
        formStatus.textContent = dictionary.validationEnquiry;
      }

      return;
    }

    const selectedOption =
      enquiryType.options[enquiryType.selectedIndex];

    const enquiryLabel = selectedOption
      ? selectedOption.textContent.trim()
      : enquiry;

    const messageParts = [
      "New Website Enquiry",
      "On Feet Again Rehabilitation Drug and Counseling Center",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Enquiry: ${enquiryLabel}`,
      `Message: ${messageText || "Not provided"}`
    ];

    const whatsappMessage = messageParts.join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    if (formStatus) {
      formStatus.textContent = dictionary.whatsappStatus;
    }

    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    // Some browsers block new tabs. Provide a clickable fallback.
    if (!whatsappWindow && formStatus) {
      formStatus.replaceChildren();

      const statusText = document.createElement("span");
      statusText.textContent = dictionary.whatsappStatus + " ";

      const fallbackLink = document.createElement("a");
      fallbackLink.href = whatsappUrl;
      fallbackLink.target = "_blank";
      fallbackLink.rel = "noopener noreferrer";
      fallbackLink.textContent = "Open WhatsApp";

      formStatus.append(statusText, fallbackLink);
    }
  });
}

/* ---------- CURRENT YEAR ---------- */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

/* ---------- INITIALISE WEBSITE ---------- */

let savedLanguage = "en";

try {
  const storedLanguage = localStorage.getItem("ofa-language");

  if (storedLanguage && translations[storedLanguage]) {
    savedLanguage = storedLanguage;
  }
} catch (error) {
  // English is used if local storage is unavailable.
}

setLanguage(savedLanguage);

/* ===== RECOVERY STORY FORM ===== */

(() => {
  const form = document.getElementById("recoveredStoryForm");
  if (!form) return;

  const languageSelect = document.getElementById("storyLanguage");
  const nameInput = document.getElementById("recoveredName");
  const districtInput = document.getElementById("recoveredDistrict");
  const durationSelect = document.getElementById("recoveryDuration");
  const experienceInput = document.getElementById("recoveryExperience");
  const consentInput = document.getElementById("storyConsent");
  const status = document.getElementById("recoveryFormStatus");

  const text = {
    en: {
      title: "Your Recovery Journey",
      intro: "Share your experience in the language you prefer.",
      name: "Name",
      namePlaceholder: "Enter your name",
      district: "District",
      districtPlaceholder: "Enter your district",
      duration: "Time since recovery",
      choose: "Select duration",
      durations: [
        "Less than 3 months",
        "3–6 months",
        "6–12 months",
        "1–2 years",
        "More than 2 years"
      ],
      experience: "Your Recovery Experience",
      experiencePlaceholder: "Share your experience...",
      consent: "I am sharing this story voluntarily. I understand it will be reviewed before publication and consent to being contacted about this submission.",
      submit: "Submit My Story",
      privacy: "Your story will be sent to the center for review. It will not automatically appear on the public website. Avoid including phone numbers or medical details.",
      validation: "Please complete all required fields and accept the consent statement.",
      whatsapp: "Continue to WhatsApp to send your story to the center.",
      open: "Open WhatsApp",
      heading: "Recovery Story Submission",
      center: "On Feet Again Rehabilitation Drug and Counseling Center",
      notProvided: "Not provided"
    },
    hi: {
      title: "आपकी रिकवरी की यात्रा",
      intro: "अपना अनुभव अपनी पसंद की भाषा में साझा करें।",
      name: "नाम",
      namePlaceholder: "अपना नाम लिखें",
      district: "जिला",
      districtPlaceholder: "अपना जिला लिखें",
      duration: "रिकवरी हुए कितना समय हुआ",
      choose: "समय चुनें",
      durations: [
        "3 महीने से कम",
        "3–6 महीने",
        "6–12 महीने",
        "1–2 साल",
        "2 साल से अधिक"
      ],
      experience: "आपका रिकवरी अनुभव",
      experiencePlaceholder: "अपना अनुभव लिखें...",
      consent: "मैं अपनी इच्छा से यह कहानी साझा कर रहा/रही हूँ। मुझे पता है कि प्रकाशित होने से पहले इसकी समीक्षा होगी और इस सबमिशन के बारे में मुझसे संपर्क किया जा सकता है।",
      submit: "अपनी कहानी भेजें",
      privacy: "आपकी कहानी समीक्षा के लिए केंद्र को भेजी जाएगी। यह अपने आप सार्वजनिक वेबसाइट पर नहीं दिखेगी। फोन नंबर या मेडिकल जानकारी न लिखें।",
      validation: "कृपया सभी जरूरी जानकारी भरें और सहमति दें।",
      whatsapp: "अपनी कहानी केंद्र को भेजने के लिए WhatsApp पर आगे बढ़ें।",
      open: "WhatsApp खोलें",
      heading: "रिकवरी कहानी का विवरण",
      center: "On Feet Again Rehabilitation Drug and Counseling Center",
      notProvided: "नहीं दिया गया"
    },
    pa: {
      title: "ਤੁਹਾਡੀ ਰਿਕਵਰੀ ਦੀ ਯਾਤਰਾ",
      intro: "ਆਪਣਾ ਤਜਰਬਾ ਆਪਣੀ ਪਸੰਦ ਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਾਂਝਾ ਕਰੋ।",
      name: "ਨਾਮ",
      namePlaceholder: "ਆਪਣਾ ਨਾਮ ਲਿਖੋ",
      district: "ਜ਼ਿਲ੍ਹਾ",
      districtPlaceholder: "ਆਪਣਾ ਜ਼ਿਲ੍ਹਾ ਲਿਖੋ",
      duration: "ਰਿਕਵਰੀ ਹੋਏ ਕਿੰਨਾ ਸਮਾਂ ਹੋਇਆ",
      choose: "ਸਮਾਂ ਚੁਣੋ",
      durations: [
        "3 ਮਹੀਨਿਆਂ ਤੋਂ ਘੱਟ",
        "3–6 ਮਹੀਨੇ",
        "6–12 ਮਹੀਨੇ",
        "1–2 ਸਾਲ",
        "2 ਸਾਲ ਤੋਂ ਵੱਧ"
      ],
      experience: "ਤੁਹਾਡਾ ਰਿਕਵਰੀ ਤਜਰਬਾ",
      experiencePlaceholder: "ਆਪਣਾ ਤਜਰਬਾ ਲਿਖੋ...",
      consent: "ਮੈਂ ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਇਹ ਕਹਾਣੀ ਸਾਂਝੀ ਕਰ ਰਿਹਾ/ਰਹੀ ਹਾਂ। ਮੈਨੂੰ ਪਤਾ ਹੈ ਕਿ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਸ ਦੀ ਸਮੀਖਿਆ ਹੋਵੇਗੀ ਅਤੇ ਇਸ ਬਾਰੇ ਮੇਰੇ ਨਾਲ ਸੰਪਰਕ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।",
      submit: "ਆਪਣੀ ਕਹਾਣੀ ਭੇਜੋ",
      privacy: "ਤੁਹਾਡੀ ਕਹਾਣੀ ਸਮੀਖਿਆ ਲਈ ਸੈਂਟਰ ਨੂੰ ਭੇਜੀ ਜਾਵੇਗੀ। ਇਹ ਆਪਣੇ ਆਪ ਜਨਤਕ ਵੈੱਬਸਾਈਟ 'ਤੇ ਨਹੀਂ ਦਿਖੇਗੀ। ਫ਼ੋਨ ਨੰਬਰ ਜਾਂ ਮੈਡੀਕਲ ਜਾਣਕਾਰੀ ਨਾ ਲਿਖੋ।",
      validation: "ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੀ ਲੋੜੀਂਦੀ ਜਾਣਕਾਰੀ ਭਰੋ ਅਤੇ ਸਹਿਮਤੀ ਦਿਓ।",
      whatsapp: "ਆਪਣੀ ਕਹਾਣੀ ਸੈਂਟਰ ਨੂੰ ਭੇਜਣ ਲਈ WhatsApp 'ਤੇ ਅੱਗੇ ਵਧੋ।",
      open: "WhatsApp ਖੋਲ੍ਹੋ",
      heading: "ਰਿਕਵਰੀ ਕਹਾਣੀ ਦੀ ਜਾਣਕਾਰੀ",
      center: "On Feet Again Rehabilitation Drug and Counseling Center",
      notProvided: "ਜਾਣਕਾਰੀ ਨਹੀਂ ਦਿੱਤੀ"
    }
  };

  function applyStoryLanguage() {
    const lang = text[languageSelect.value] ? languageSelect.value : "en";
    const t = text[lang];

    document.getElementById("recoveryFormTitle").textContent = t.title;
    document.querySelector(".recovery-intro").textContent = t.intro;
    document.getElementById("storyNameLabel").textContent = t.name;
    document.getElementById("storyDistrictLabel").textContent = t.district;
    document.getElementById("storyDurationLabel").textContent = t.duration;
    document.getElementById("storyExperienceLabel").textContent = t.experience;
    document.getElementById("storyConsentLabel").textContent = t.consent;
    document.getElementById("storySubmitButton").textContent = t.submit;
    document.getElementById("storyPrivacyNote").textContent = t.privacy;

    nameInput.placeholder = t.namePlaceholder;
    districtInput.placeholder = t.districtPlaceholder;
    experienceInput.placeholder = t.experiencePlaceholder;

    const previousDuration = durationSelect.selectedIndex;
    durationSelect.replaceChildren();

    const firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = t.choose;
    durationSelect.appendChild(firstOption);

    const values = [
      "Less than 3 months",
      "3–6 months",
      "6–12 months",
      "1–2 years",
      "More than 2 years"
    ];

    values.forEach((value, index) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = t.durations[index];
      durationSelect.appendChild(option);
    });

    durationSelect.selectedIndex = Math.min(
      previousDuration,
      durationSelect.options.length - 1
    );
  }

  languageSelect.addEventListener("change", applyStoryLanguage);
  applyStoryLanguage();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity() || !consentInput.checked) {
      status.textContent = text[languageSelect.value].validation;
      return;
    }

    const lang = languageSelect.value;
    const t = text[lang];

    const name = nameInput.value.trim();
    const district = districtInput.value.trim();
    const duration = durationSelect.options[durationSelect.selectedIndex].text;
    const experience = experienceInput.value.trim();

    if (!name || !district || !durationSelect.value || experience.length < 10) {
      status.textContent = t.validation;
      return;
    }

    const message = [
      t.heading,
      t.center,
      "",
      `${t.name}: ${name}`,
      `${t.district}: ${district}`,
      `${t.duration}: ${duration}`,
      `${t.experience}:`,
      experience,
      "",
      "Language: " + lang,
      "Consent: Given for review and follow-up."
    ].join("\n");

    const whatsappUrl =
      "https://wa.me/917876922271?text=" + encodeURIComponent(message);

    status.replaceChildren();

    const statusText = document.createElement("p");
    statusText.textContent = t.whatsapp;

    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = t.open;

    status.append(statusText, link);
    link.focus();
  });
})();

