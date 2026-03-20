const REVIEWS_KEY = "gmTailorsReviews";
const VISIT_REQUESTS_KEY = "gmTailorsVisitRequests";
const LANGUAGE_KEY = "gmTailorsLanguage";
const ADMIN_PHONE = "9423706998";
const DEFAULT_LANGUAGE = "en";
const TRANSLATIONS = {
  en: {
    pageTitle: "GM Tailors",
    brand: {
      tagline: "Elegance in Every Stitch",
      logoAlt: "GM Tailors Logo",
    },
    nav: {
      home: "Home",
      about: "About",
      reviews: "Reviews",
      admin: "Admin",
    },
    language: {
      label: "Language",
    },
    hero: {
      eyebrow: "Bespoke tailoring from Kannad, Maharashtra",
      title: "Custom stitching with perfect fit and elegance.",
      text: "Custom suits, shirts, and pants shaped with precision, modern fit planning, and a stronger digital experience for GM Tailors.",
      primaryCta: "View Collections",
      secondaryCta: "Book a Visit",
      stats: {
        years: "Years of tailoring",
        artisans: "Skilled artisans",
        fittings: "Happy fittings",
      },
      signature: {
        label: "Signature",
        title: "Made-to-measure wedding and occasion wear",
        text: "Structured silhouettes, soft drape, premium finish.",
        alt: "GM Tailors showcase",
      },
      cards: {
        suit: {
          title: "Power Suits",
          text: "Sharp lapels. Balanced shoulders. Clean break.",
          alt: "Custom tailored suit",
        },
        shirt: {
          title: "Smart Shirts",
          text: "Daily comfort with a clean collar line.",
          alt: "Custom tailored shirt",
        },
      },
    },
    collections: {
      eyebrow: "Collections",
      title: "Built to feel premium before the first fitting.",
      text: "Explore the main categories and filter the showcase based on the kind of tailoring your customer wants.",
    },
    filters: {
      all: "All",
      formal: "Formal",
      everyday: "Everyday",
      occasion: "Occasion",
    },
    products: {
      suit: {
        kicker: "Formal",
        title: "Elegant Suits",
        text: "Structured jackets with modern trouser balance for events and office wear.",
        alt: "Tailored suit",
      },
      shirt: {
        kicker: "Everyday",
        title: "Custom Shirts",
        text: "Clean shoulder fit, breathable comfort, and collar shaping that lasts.",
        alt: "Tailored shirt",
      },
      pant: {
        kicker: "Essential",
        title: "Perfect-Fit Pants",
        text: "Proper waist placement, crisp taper, and a smoother break near the shoe.",
        alt: "Tailored pants",
      },
    },
    process: {
      eyebrow: "How It Works",
      title: "From cloth selection to final press.",
      step1: {
        title: "Consultation",
        text: "Discuss occasion, fit preference, and fabric direction.",
      },
      step2: {
        title: "Measurement",
        text: "Capture body profile and movement comfort points accurately.",
      },
      step3: {
        title: "Crafting",
        text: "Pattern cutting, stitching, shaping, and controlled finishing.",
      },
      step4: {
        title: "Final Fitting",
        text: "Adjust the fall, break, sleeve, and waist for the final look.",
      },
    },
    planner: {
      eyebrow: "Fit Planner",
      title: "Get a quick estimate before visiting the shop.",
      garmentLabel: "Garment",
      fitLabel: "Fit",
      timelineLabel: "Required In",
      options: {
        suit: "Suit",
        shirt: "Shirt",
        pant: "Pant",
      },
      fitOptions: {
        classic: "Classic Fit",
        slim: "Slim Fit",
        wedding: "Wedding / Premium",
      },
      timelineOptions: {
        standard: "Standard Timeline",
        priority: "Priority Tailoring",
      },
      fittingDays: {
        standard: "5-7 days",
        priority: "2-3 days",
      },
      result: "Estimated starting price: Rs. {price} | Trial and delivery window: {days}.",
    },
    appointment: {
      eyebrow: "Visit Request",
      title: "Prepare the next appointment faster.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      phoneLabel: "Phone",
      phonePlaceholder: "+91",
      needLabel: "Need",
      needOptions: {
        newSuit: "New Suit Consultation",
        alteration: "Alteration",
        wedding: "Wedding Outfit Planning",
      },
      dateLabel: "Preferred Visit Date",
      notesLabel: "Notes",
      notesPlaceholder: "Preferred time, fabric idea, urgency, special request",
      submit: "Send Request",
      validation: "Please enter your name and phone number.",
      success: "{name}, your visit request was sent successfully. It is now saved for the admin dashboard.",
      adminAlert: "Admin alert:",
      whatsapp: "WhatsApp {phone}",
      sms: "SMS {phone}",
    },
    feedback: {
      eyebrow: "Customer Voice",
      title: "Our feedbacks from our precious customer",
      text: "The homepage now stores reviews locally in the browser, and the dedicated reviews page can read and display them.",
      nameLabel: "Your Name",
      feedbackLabel: "Your Feedback",
      ratingLabel: "Rate Us",
      submit: "Submit Feedback",
      validation: "Please complete your name, feedback, and star rating.",
      thankYou: "Thank you for your feedback. Your review has been saved.",
      noReviews: "No reviews yet. Be the first to leave one.",
    },
    footer: {
      info: "Phone: +91-9423706998 | Speciality: Suits, Shirts, Pants | Open: 9 AM - 8 PM",
      contact: "Contact:",
      copyright: "© 2025 GM Tailors. All rights reserved.",
    },
  },
  hi: {
    pageTitle: "जीएम टेलर्स",
    brand: {
      tagline: "हर सिलाई में नज़ाकत",
      logoAlt: "जीएम टेलर्स लोगो",
    },
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      reviews: "रिव्यू",
      admin: "एडमिन",
    },
    language: {
      label: "भाषा",
    },
    hero: {
      eyebrow: "कन्नड़, महाराष्ट्र से बेहतरीन टेलरिंग",
      title: "परफेक्ट फिट और नज़ाकत के साथ कस्टम सिलाई।",
      text: "जीएम टेलर्स के लिए सटीक माप, आधुनिक फिट प्लानिंग और बेहतर डिजिटल अनुभव के साथ कस्टम सूट, शर्ट और पैंट तैयार किए जाते हैं।",
      primaryCta: "कलेक्शन देखें",
      secondaryCta: "विजिट बुक करें",
      stats: {
        years: "सालों का अनुभव",
        artisans: "कुशल कारीगर",
        fittings: "खुश ग्राहक फिटिंग्स",
      },
      signature: {
        label: "स्पेशल",
        title: "मेड-टू-मेज़र शादी और खास मौकों के कपड़े",
        text: "संतुलित सिल्हूट, मुलायम ड्रेप और प्रीमियम फिनिश।",
        alt: "जीएम टेलर्स प्रदर्शन",
      },
      cards: {
        suit: {
          title: "पावर सूट्स",
          text: "तेज़ लैपल्स, संतुलित शोल्डर, साफ़ फॉल।",
          alt: "कस्टम सिलवाया सूट",
        },
        shirt: {
          title: "स्मार्ट शर्ट्स",
          text: "रोज़ाना आराम के साथ साफ़ कॉलर लाइन।",
          alt: "कस्टम सिलवाई शर्ट",
        },
      },
    },
    collections: {
      eyebrow: "कलेक्शन",
      title: "पहली फिटिंग से पहले ही प्रीमियम एहसास।",
      text: "मुख्य कैटेगरी देखें और ग्राहक की ज़रूरत के हिसाब से शोकेस फ़िल्टर करें।",
    },
    filters: {
      all: "सभी",
      formal: "फॉर्मल",
      everyday: "रोज़मर्रा",
      occasion: "खास मौके",
    },
    products: {
      suit: {
        kicker: "फॉर्मल",
        title: "एलीगेंट सूट्स",
        text: "इवेंट और ऑफिस वियर के लिए आधुनिक ट्राउज़र बैलेंस के साथ स्ट्रक्चर्ड जैकेट्स।",
        alt: "सिला हुआ सूट",
      },
      shirt: {
        kicker: "रोज़मर्रा",
        title: "कस्टम शर्ट्स",
        text: "साफ़ शोल्डर फिट, आरामदायक कपड़ा और टिकाऊ कॉलर शेप।",
        alt: "सिली हुई शर्ट",
      },
      pant: {
        kicker: "ज़रूरी",
        title: "परफेक्ट-फिट पैंट्स",
        text: "सही कमर फिट, साफ़ टेपर और जूते के पास बेहतर फॉल।",
        alt: "सिली हुई पैंट",
      },
    },
    process: {
      eyebrow: "कैसे काम करता है",
      title: "कपड़े के चयन से अंतिम प्रेस तक।",
      step1: {
        title: "कंसल्टेशन",
        text: "मौका, फिट पसंद और कपड़े की दिशा पर चर्चा करें।",
      },
      step2: {
        title: "माप",
        text: "शरीर की प्रोफाइल और चलने-फिरने के आराम के पॉइंट्स सही से लें।",
      },
      step3: {
        title: "तैयारी",
        text: "पैटर्न कटिंग, सिलाई, शेपिंग और कंट्रोल्ड फिनिशिंग।",
      },
      step4: {
        title: "अंतिम फिटिंग",
        text: "अंतिम लुक के लिए फॉल, ब्रेक, स्लीव और कमर एडजस्ट करें।",
      },
    },
    planner: {
      eyebrow: "फिट प्लानर",
      title: "दुकान आने से पहले जल्दी से अनुमान पाएं।",
      garmentLabel: "कपड़ा",
      fitLabel: "फिट",
      timelineLabel: "कब तक चाहिए",
      options: {
        suit: "सूट",
        shirt: "शर्ट",
        pant: "पैंट",
      },
      fitOptions: {
        classic: "क्लासिक फिट",
        slim: "स्लिम फिट",
        wedding: "शादी / प्रीमियम",
      },
      timelineOptions: {
        standard: "सामान्य समय",
        priority: "प्रायोरिटी टेलरिंग",
      },
      fittingDays: {
        standard: "5-7 दिन",
        priority: "2-3 दिन",
      },
      result: "अनुमानित शुरुआती कीमत: Rs. {price} | ट्रायल और डिलीवरी समय: {days}।",
    },
    appointment: {
      eyebrow: "विजिट रिक्वेस्ट",
      title: "अगली अपॉइंटमेंट जल्दी तैयार करें।",
      nameLabel: "नाम",
      namePlaceholder: "आपका नाम",
      phoneLabel: "फ़ोन",
      phonePlaceholder: "+91",
      needLabel: "ज़रूरत",
      needOptions: {
        newSuit: "नए सूट की सलाह",
        alteration: "अल्टरशन",
        wedding: "शादी के कपड़ों की योजना",
      },
      dateLabel: "पसंदीदा विजिट तारीख",
      notesLabel: "नोट्स",
      notesPlaceholder: "पसंदीदा समय, कपड़े का आइडिया, जल्दी की ज़रूरत, खास अनुरोध",
      submit: "रिक्वेस्ट भेजें",
      validation: "कृपया अपना नाम और फ़ोन नंबर दर्ज करें।",
      success: "{name}, आपकी विजिट रिक्वेस्ट सफलतापूर्वक भेज दी गई है। यह अब एडमिन डैशबोर्ड में सेव है।",
      adminAlert: "एडमिन अलर्ट:",
      whatsapp: "व्हाट्सऐप {phone}",
      sms: "एसएमएस {phone}",
    },
    feedback: {
      eyebrow: "ग्राहक की राय",
      title: "हमारे प्रिय ग्राहकों के फीडबैक",
      text: "होमपेज अब रिव्यू को ब्राउज़र में लोकली सेव करता है, और अलग रिव्यू पेज उन्हें पढ़ और दिखा सकता है।",
      nameLabel: "आपका नाम",
      feedbackLabel: "आपका फीडबैक",
      ratingLabel: "हमें रेट करें",
      submit: "फीडबैक भेजें",
      validation: "कृपया अपना नाम, फीडबैक और स्टार रेटिंग पूरी करें।",
      thankYou: "आपके फीडबैक के लिए धन्यवाद। आपका रिव्यू सेव हो गया है।",
      noReviews: "अभी तक कोई रिव्यू नहीं है। सबसे पहले रिव्यू दें।",
    },
    footer: {
      info: "फ़ोन: +91-9423706998 | विशेषज्ञता: सूट, शर्ट, पैंट | समय: सुबह 9 बजे - रात 8 बजे",
      contact: "संपर्क:",
      copyright: "© 2025 जीएम टेलर्स। सर्वाधिकार सुरक्षित।",
    },
  },
  mr: {
    pageTitle: "जीएम टेलर्स",
    brand: {
      tagline: "प्रत्येक टाक्यात देखणेपणा",
      logoAlt: "जीएम टेलर्स लोगो",
    },
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      reviews: "अभिप्राय",
      admin: "अॅडमिन",
    },
    language: {
      label: "भाषा",
    },
    hero: {
      eyebrow: "कन्नड, महाराष्ट्र येथील खास टेलरिंग",
      title: "परफेक्ट फिट आणि देखणेपणासह कस्टम शिवणकाम.",
      text: "जीएम टेलर्ससाठी अचूक मोजमाप, आधुनिक फिट प्लॅनिंग आणि अधिक चांगल्या डिजिटल अनुभवासह कस्टम सूट, शर्ट आणि पँट तयार केल्या जातात.",
      primaryCta: "कलेक्शन पहा",
      secondaryCta: "भेट बुक करा",
      stats: {
        years: "टेलरिंगचा अनुभव",
        artisans: "कुशल कारागीर",
        fittings: "समाधानी फिटिंग्स",
      },
      signature: {
        label: "विशेष",
        title: "मेड-टू-मेजर लग्न आणि खास प्रसंगांचे कपडे",
        text: "संतुलित सिल्हूट, मऊ ड्रेप आणि प्रीमियम फिनिश.",
        alt: "जीएम टेलर्स प्रदर्शन",
      },
      cards: {
        suit: {
          title: "पॉवर सूट्स",
          text: "शार्प लॅपल्स, संतुलित शोल्डर्स, स्वच्छ फॉल.",
          alt: "कस्टम शिवलेला सूट",
        },
        shirt: {
          title: "स्मार्ट शर्ट्स",
          text: "दररोजच्या आरामासह स्वच्छ कॉलर लाईन.",
          alt: "कस्टम शिवलेला शर्ट",
        },
      },
    },
    collections: {
      eyebrow: "कलेक्शन",
      title: "पहिल्या फिटिंगपूर्वीच प्रीमियम अनुभव.",
      text: "मुख्य प्रकार पहा आणि ग्राहकाला हवे असलेल्या टेलरिंगनुसार शोकेस फिल्टर करा.",
    },
    filters: {
      all: "सर्व",
      formal: "फॉर्मल",
      everyday: "दैनंदिन",
      occasion: "विशेष प्रसंग",
    },
    products: {
      suit: {
        kicker: "फॉर्मल",
        title: "एलिगंट सूट्स",
        text: "इव्हेंट आणि ऑफिस वेअरसाठी आधुनिक ट्राउझर बॅलन्ससह स्ट्रक्चर्ड जॅकेट्स.",
        alt: "शिवलेला सूट",
      },
      shirt: {
        kicker: "दैनंदिन",
        title: "कस्टम शर्ट्स",
        text: "स्वच्छ शोल्डर फिट, आरामदायी कपडा आणि टिकाऊ कॉलर शेप.",
        alt: "शिवलेला शर्ट",
      },
      pant: {
        kicker: "आवश्यक",
        title: "परफेक्ट-फिट पँट्स",
        text: "योग्य कमर फिट, स्वच्छ टेपर आणि बुटाजवळ चांगला फॉल.",
        alt: "शिवलेली पँट",
      },
    },
    process: {
      eyebrow: "काम कसे होते",
      title: "कपड्यांच्या निवडीपासून अंतिम प्रेसपर्यंत.",
      step1: {
        title: "सल्लामसलत",
        text: "प्रसंग, फिटची आवड आणि फॅब्रिकबद्दल चर्चा करा.",
      },
      step2: {
        title: "मोजमाप",
        text: "शरीराची प्रोफाइल आणि हालचालीतील आरामाचे पॉइंट्स अचूक घ्या.",
      },
      step3: {
        title: "तयारी",
        text: "पॅटर्न कटिंग, शिवणकाम, शेपिंग आणि नियंत्रित फिनिशिंग.",
      },
      step4: {
        title: "अंतिम फिटिंग",
        text: "अंतिम लुकसाठी फॉल, ब्रेक, स्लीव्ह आणि कंबर अॅडजस्ट करा.",
      },
    },
    planner: {
      eyebrow: "फिट प्लॅनर",
      title: "दुकानात येण्यापूर्वी झटपट अंदाज मिळवा.",
      garmentLabel: "कपड्याचा प्रकार",
      fitLabel: "फिट",
      timelineLabel: "कधीपर्यंत हवे",
      options: {
        suit: "सूट",
        shirt: "शर्ट",
        pant: "पँट",
      },
      fitOptions: {
        classic: "क्लासिक फिट",
        slim: "स्लिम फिट",
        wedding: "लग्न / प्रीमियम",
      },
      timelineOptions: {
        standard: "सामान्य वेळ",
        priority: "प्रायोरिटी टेलरिंग",
      },
      fittingDays: {
        standard: "5-7 दिवस",
        priority: "2-3 दिवस",
      },
      result: "अंदाजे सुरुवातीची किंमत: Rs. {price} | ट्रायल आणि डिलिव्हरी वेळ: {days}.",
    },
    appointment: {
      eyebrow: "भेट विनंती",
      title: "पुढील अपॉइंटमेंट जलद तयार करा.",
      nameLabel: "नाव",
      namePlaceholder: "तुमचे नाव",
      phoneLabel: "फोन",
      phonePlaceholder: "+91",
      needLabel: "गरज",
      needOptions: {
        newSuit: "नवीन सूट सल्लामसलत",
        alteration: "अल्टरेशन",
        wedding: "लग्नाच्या कपड्यांचे नियोजन",
      },
      dateLabel: "पसंतीची भेट तारीख",
      notesLabel: "नोट्स",
      notesPlaceholder: "पसंतीची वेळ, फॅब्रिक आयडिया, तातडी, खास विनंती",
      submit: "विनंती पाठवा",
      validation: "कृपया तुमचे नाव आणि फोन नंबर भरा.",
      success: "{name}, तुमची भेट विनंती यशस्वीपणे पाठवली गेली आहे. ती आता अॅडमिन डॅशबोर्डमध्ये सेव्ह झाली आहे.",
      adminAlert: "अॅडमिन अलर्ट:",
      whatsapp: "व्हॉट्सअॅप {phone}",
      sms: "एसएमएस {phone}",
    },
    feedback: {
      eyebrow: "ग्राहकांचे मत",
      title: "आमच्या प्रिय ग्राहकांचे अभिप्राय",
      text: "होमपेज आता रिव्यू ब्राउझरमध्ये लोकली सेव्ह करते आणि वेगळे रिव्यू पेज ते वाचून दाखवू शकते.",
      nameLabel: "तुमचे नाव",
      feedbackLabel: "तुमचा अभिप्राय",
      ratingLabel: "आम्हाला रेट करा",
      submit: "अभिप्राय पाठवा",
      validation: "कृपया नाव, अभिप्राय आणि स्टार रेटिंग पूर्ण भरा.",
      thankYou: "तुमच्या अभिप्रायाबद्दल धन्यवाद. तुमचा रिव्यू सेव्ह झाला आहे.",
      noReviews: "अजून अभिप्राय नाहीत. पहिला अभिप्राय द्या.",
    },
    footer: {
      info: "फोन: +91-9423706998 | विशेषता: सूट, शर्ट, पँट | वेळ: सकाळी 9 ते रात्री 8",
      contact: "संपर्क:",
      copyright: "© 2025 जीएम टेलर्स. सर्व हक्क राखीव.",
    },
  },
};

let currentLanguage = DEFAULT_LANGUAGE;

initAdminPage();
initHomePage();

function initAdminPage() {
  const loginForm = document.getElementById("loginForm");
  const loginSection = document.getElementById("loginSection");
  const dashboardSection = document.getElementById("dashboardSection");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginMessage = document.getElementById("loginMessage");

  if (!loginSection || !dashboardSection) {
    return;
  }

  const ownerUsername = "admin";
  const ownerPassword = "1234";

  if (localStorage.getItem("isLoggedIn") === "true") {
    showDashboard();
  } else {
    showLoginForm();
  }

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")?.value.trim();
    const password = document.getElementById("password")?.value.trim();

    if (username === ownerUsername && password === ownerPassword) {
      localStorage.setItem("isLoggedIn", "true");
      showDashboard();
      return;
    }

    if (loginMessage) {
      loginMessage.textContent = "Invalid credentials. Try again.";
    }
  });

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "admin.html";
  });

  function showDashboard() {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
  }

  function showLoginForm() {
    loginSection.style.display = "block";
    dashboardSection.style.display = "none";
  }
}

function initHomePage() {
  initAmbientAudio();
  initLanguageSwitcher();
  initStarRating();
  initFeedbackForm();
  initReviewPreview();
  initCounterAnimation();
  initFilters();
  initEstimator();
  initAppointmentForm();
  initRevealAnimations();
  initTiltEffects();
  initHeroScene();
}

function initAmbientAudio() {
  const audio = document.getElementById("ambientAudio");
  const status = document.getElementById("audioStatus");

  if (!audio) {
    return;
  }

  audio.volume = 0.35;

  const hideStatus = () => {
    status?.classList.add("hidden");
  };

  const showStatus = () => {
    status?.classList.remove("hidden");
  };

  const tryPlay = () => {
    const attempt = audio.play();
    if (!attempt || typeof attempt.then !== "function") {
      hideStatus();
      return;
    }

    attempt
      .then(() => {
        hideStatus();
      })
      .catch(() => {
        showStatus();
      });
  };

  const resumeOnInteraction = () => {
    tryPlay();
  };

  ["click", "touchstart", "keydown"].forEach((eventName) => {
    document.addEventListener(eventName, resumeOnInteraction, { passive: true });
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && audio.paused) {
      tryPlay();
    }
  });

  audio.addEventListener("playing", hideStatus);
  audio.addEventListener("error", showStatus);

  tryPlay();
}

function initLanguageSwitcher() {
  const selector = document.getElementById("languageSelect");
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  const initialLanguage = TRANSLATIONS[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;

  currentLanguage = initialLanguage;

  if (selector) {
    selector.value = initialLanguage;
    selector.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  }

  setLanguage(initialLanguage);
}

function initStarRating() {
  const ratingInput = document.getElementById("rating");
  const stars = Array.from(document.querySelectorAll(".star-rating span"));

  if (!ratingInput || stars.length === 0) {
    return;
  }

  const paintStars = (rating) => {
    stars.forEach((star) => {
      const value = Number(star.dataset.value);
      star.classList.toggle("is-active", value <= rating);
    });
  };

  stars.forEach((star) => {
    star.addEventListener("mouseenter", () => {
      paintStars(Number(star.dataset.value));
    });

    star.addEventListener("click", () => {
      ratingInput.value = star.dataset.value || "0";
      paintStars(Number(ratingInput.value));
    });
  });

  const container = stars[0]?.parentElement;
  container?.addEventListener("mouseleave", () => {
    paintStars(Number(ratingInput.value));
  });
}

function initFeedbackForm() {
  const feedbackForm = document.getElementById("feedbackForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  if (!feedbackForm || !thankYouMessage) {
    return;
  }

  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const feedback = document.getElementById("feedback")?.value.trim();
    const rating = Number(document.getElementById("rating")?.value || 0);

    if (!name || !feedback || rating < 1) {
      thankYouMessage.textContent = t("feedback.validation");
      thankYouMessage.classList.remove("hidden");
      return;
    }

    const reviews = getStoredReviews();
    reviews.unshift({
      name,
      feedback,
      rating,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    });

    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews.slice(0, 12)));
    thankYouMessage.textContent = t("feedback.thankYou");
    thankYouMessage.classList.remove("hidden");
    feedbackForm.reset();
    const ratingInput = document.getElementById("rating");
    if (ratingInput) {
      ratingInput.value = "0";
    }
    document.querySelectorAll(".star-rating span").forEach((star) => {
      star.classList.remove("is-active");
    });
    initReviewPreview();
  });
}

function initReviewPreview() {
  const reviewPreview = document.getElementById("reviewPreview");

  if (!reviewPreview) {
    return;
  }

  const reviews = getStoredReviews().slice(0, 2);
  if (reviews.length === 0) {
    reviewPreview.innerHTML = `<div class="review-card">${escapeHtml(t("feedback.noReviews"))}</div>`;
    return;
  }

  reviewPreview.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <strong>${escapeHtml(review.name)}</strong>
          <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
          <p>${escapeHtml(review.feedback)}</p>
          <small>${escapeHtml(review.date)}</small>
        </article>
      `,
    )
    .join("");
}

function initCounterAnimation() {
  const counters = document.querySelectorAll("[data-counter]");

  if (counters.length === 0 || typeof IntersectionObserver === "undefined") {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.counted === "true") {
        return;
      }

      const target = Number(entry.target.dataset.counter || 0);
      const duration = 1200;
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        entry.target.textContent = Math.floor(progress * target).toLocaleString("en-IN");
        if (progress < 1) {
          requestAnimationFrame(step);
          return;
        }

        entry.target.textContent = target.toLocaleString("en-IN");
        entry.target.dataset.counted = "true";
      };

      requestAnimationFrame(step);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
}

function initFilters() {
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const items = Array.from(document.querySelectorAll(".product-item"));

  if (buttons.length === 0 || items.length === 0) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      items.forEach((item) => {
        const categories = (item.dataset.category || "").split(" ");
        const match = filter === "all" || categories.includes(filter);
        item.classList.toggle("is-hidden", !match);
      });
    });
  });
}

function initEstimator() {
  const garmentType = document.getElementById("garmentType");
  const fitType = document.getElementById("fitType");
  const timeline = document.getElementById("timeline");
  const result = document.getElementById("estimatorResult");

  if (!garmentType || !fitType || !timeline || !result) {
    return;
  }

  const garmentBase = { suit: 1200, shirt: 450, pant: 650 };
  const fitMultiplier = { classic: 1, slim: 1.12, wedding: 1.4 };

  const updateResult = () => {
    const basePrice = garmentBase[garmentType.value] || 0;
    const multiplier = fitMultiplier[fitType.value] || 1;
    const rushCharge = timeline.value === "priority" ? 700 : 0;
    const price = Math.round(basePrice * multiplier + rushCharge);
    const fittingDays = t(`planner.fittingDays.${timeline.value}`);
    result.textContent = formatText(t("planner.result"), {
      price: price.toLocaleString("en-IN"),
      days: fittingDays,
    });
  };

  [garmentType, fitType, timeline].forEach((field) => {
    field.addEventListener("change", updateResult);
  });

  updateResult();
}

function initAppointmentForm() {
  const form = document.getElementById("appointmentForm");
  const message = document.getElementById("appointmentMessage");

  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("visitorName")?.value.trim();
    const phone = document.getElementById("visitorPhone")?.value.trim();
    const need = document.getElementById("visitType")?.value;
    const preferredDate = document.getElementById("visitDate")?.value || "";
    const notes = document.getElementById("visitNotes")?.value.trim() || "";

    if (!name || !phone) {
      message.textContent = t("appointment.validation");
      message.classList.remove("hidden");
      return;
    }

    const request = {
      id: createId("visit"),
      customer: name,
      phone,
      need,
      preferredDate,
      notes,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    const requests = getStoredVisitRequests();
    requests.unshift(request);
    localStorage.setItem(VISIT_REQUESTS_KEY, JSON.stringify(requests.slice(0, 100)));

    const whatsappLink = createWhatsAppLink(request);
    const smsLink = createSmsLink(request);
    message.innerHTML = `
      ${escapeHtml(formatText(t("appointment.success"), { name }))}
      <br />
      ${escapeHtml(t("appointment.adminAlert"))}
      <a href="${whatsappLink}" target="_blank" rel="noreferrer">${escapeHtml(formatText(t("appointment.whatsapp"), { phone: ADMIN_PHONE }))}</a>
      |
      <a href="${smsLink}">${escapeHtml(formatText(t("appointment.sms"), { phone: ADMIN_PHONE }))}</a>
    `;
    message.classList.remove("hidden");
    form.reset();

    window.open(whatsappLink, "_blank", "noopener");
  });
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (revealItems.length === 0) {
    return;
  }

  if (typeof IntersectionObserver === "undefined") {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
}

function initTiltEffects() {
  const tiltItems = document.querySelectorAll("[data-tilt]");

  tiltItems.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18;
      item.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateZ(10px)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "";
    });
  });
}

function initHeroScene() {
  const heroScene = document.getElementById("heroScene");

  if (!heroScene) {
    return;
  }

  heroScene.addEventListener("mousemove", (event) => {
    const rect = heroScene.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * -12;
    heroScene.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
  });

  heroScene.addEventListener("mouseleave", () => {
    heroScene.style.transform = "";
  });
}

function getStoredReviews() {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]");
  } catch (error) {
    return [];
  }
}

function getStoredVisitRequests() {
  try {
    const value = JSON.parse(localStorage.getItem(VISIT_REQUESTS_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function createWhatsAppLink(request) {
  const text = [
    "New GM Tailors visit request",
    `Customer: ${request.customer}`,
    `Phone: ${request.phone}`,
    `Need: ${request.need}`,
    `Preferred date: ${request.preferredDate || "Not provided"}`,
    `Notes: ${request.notes || "None"}`,
  ].join("\n");

  return `https://wa.me/91${ADMIN_PHONE}?text=${encodeURIComponent(text)}`;
}

function createSmsLink(request) {
  const body = [
    "New GM Tailors visit request",
    `Customer: ${request.customer}`,
    `Phone: ${request.phone}`,
    `Need: ${request.need}`,
    `Preferred date: ${request.preferredDate || "Not provided"}`,
  ].join("\n");

  return `sms:+91${ADMIN_PHONE}?body=${encodeURIComponent(body)}`;
}

function createId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function setLanguage(language) {
  currentLanguage = TRANSLATIONS[language] ? language : DEFAULT_LANGUAGE;
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = t(element.dataset.i18nPlaceholder);
    if (value) {
      element.placeholder = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = t(element.dataset.i18nAlt);
    if (value) {
      element.alt = value;
    }
  });

  const selector = document.getElementById("languageSelect");
  if (selector && selector.value !== currentLanguage) {
    selector.value = currentLanguage;
  }

  const thankYouMessage = document.getElementById("thankYouMessage");
  if (thankYouMessage && !thankYouMessage.classList.contains("hidden")) {
    thankYouMessage.textContent = t("feedback.thankYou");
  }

  document.getElementById("timeline")?.dispatchEvent(new Event("change"));
  initReviewPreview();
}

function t(path) {
  const value = getTranslationValue(TRANSLATIONS[currentLanguage], path);
  if (value !== undefined) {
    return value;
  }

  const fallback = getTranslationValue(TRANSLATIONS[DEFAULT_LANGUAGE], path);
  return fallback !== undefined ? fallback : path;
}

function getTranslationValue(source, path) {
  return path.split(".").reduce((result, key) => {
    if (result && typeof result === "object" && key in result) {
      return result[key];
    }
    return undefined;
  }, source);
}

function formatText(template, values) {
  return Object.entries(values).reduce((result, [key, value]) => {
    return result.replaceAll(`{${key}}`, value);
  }, template);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
