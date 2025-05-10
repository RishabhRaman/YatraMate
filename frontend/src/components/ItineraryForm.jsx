import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ItineraryForm.css';

const translations = {
  english: {
    title: "Create Your Itinerary",
    destination: "Destination",
    startDate: "Start Date",
    endDate: "End Date",
    travelType: "Travel Type",
    numberOfTravelers: "Number of Travelers",
    interests: "Interests",
    budget: "Budget (₹)",
    preferredLanguage: "Preferred Language",
    transportMode: "Preferred Mode of Transport",
    flight: "Flight",
    train: "Train",
    bus: "Bus",
    generateButton: "Generate Itinerary",
    generatingButton: "Generating Itinerary...",
    resultTitle: "Your Generated Itinerary",
    solo: "Solo",
    couple: "Couple",
    family: "Family",
    group: "Group",
    culture: "Culture",
    food: "Food",
    nature: "Nature",
    adventure: "Adventure",
    shopping: "Shopping",
    enterBudget: "Enter your budget",
    required: "Required",
    endDateError: "End date must be after start date",
    minBudgetError: "Minimum budget should be ₹5,000"
  },
  hindi: {
    title: "अपनी यात्रा योजना बनाएं",
    destination: "गंतव्य",
    startDate: "प्रारंभ तिथि",
    endDate: "समाप्ति तिथि",
    travelType: "यात्रा का प्रकार",
    numberOfTravelers: "यात्रियों की संख्या",
    interests: "रुचियां",
    budget: "बजट (₹)",
    preferredLanguage: "पसंदीदा भाषा",
    transportMode: "पसंदीदा परिवहन का साधन",
    flight: "हवाई जहाज",
    train: "रेलगाड़ी",
    bus: "बस",
    generateButton: "यात्रा योजना बनाएं",
    generatingButton: "यात्रा योजना बन रही है...",
    resultTitle: "आपकी यात्रा योजना",
    solo: "अकेले",
    couple: "जोड़े",
    family: "परिवार",
    group: "समूह",
    culture: "संस्कृति",
    food: "भोजन",
    nature: "प्रकृति",
    adventure: "साहसिक",
    shopping: "खरीदारी",
    enterBudget: "अपना बजट दर्ज करें",
    required: "आवश्यक",
    endDateError: "समाप्ति तिथि प्रारंभ तिथि के बाद होनी चाहिए",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना चाहिए"
  },
  bengali: {
    title: "আপনার ভ্রমণ পরিকল্পনা তৈরি করুন",
    destination: "গন্তব্য",
    startDate: "শੁরুর তারিখ",
    endDate: "শেষের তারিখ",
    travelType: "ভ্রমণের ধরন",
    numberOfTravelers: "ভ্রমণকারীর সংখ্যা",
    interests: "আগ্রহ",
    budget: "বাজেট (₹)",
    preferredLanguage: "পছন্দের ভাষা",
    generateButton: "পরিকল্পনা তৈরি করুন",
    generatingButton: "পরিকল্পনা তৈরি করা হৈছে...",
    resultTitle: "তমারী বনা঵েলী যੋজনা",
    solo: "একাকী",
    couple: "দম্পতি",
    family: "পরিবার",
    group: "দল",
    culture: "সংস্কৃতি",
    food: "খોরাক",
    nature: "প્রকૃতি",
    adventure: "সাহস",
    shopping: "শોপিং",
    enterBudget: "তমারো বজেট দাখল করો",
    required: "প্রয়োজনীয়",
    endDateError: "শেষের তারিখ শੁরੂআতু তারিখের পিছত হ'ব লাগে",
    minBudgetError: "ন্যূনতম বজট ₹5,000 হ'ব লাগে"
  },
  telugu: {
    title: "మీ ప్రయాణ ప్రణాళికను సృష్టించండి",
    destination: "గమ్యం",
    startDate: "ప్రారంభ తేదీ",
    endDate: "ముగింపు తేదీ",
    travelType: "ప్రయాణ రకం",
    numberOfTravelers: "ప్రయాణికుల సంఖ్య",
    interests: "ఆసక్తులు",
    budget: "బడ్జెట్ (₹)",
    preferredLanguage: "ఇష్టమైన భాష",
    generateButton: "ప్రణాళికను సృష్టించండి",
    generatingButton: "ప్రణాళిక సృష్టించబడుతೋంది...",
    resultTitle: "మీ సృష్టించిన ప్రణాళిక",
    solo: "ఒంటరిగా",
    couple: "జంట",
    family: "కుటుంబం",
    group: "సమూహం",
    culture: "సంస్కృతి",
    food: "ఆహారం",
    nature: "ప్రకૃతి",
    adventure: "సాహస",
    shopping: "షాపింగ్",
    enterBudget: "మీ బడ్జెట్ నమೂదిసి",
    required: "అవసరం",
    endDateError: "ముగింపు తేదీ ప్రారంభ తేదీ తర్వాత ఉండాలి",
    minBudgetError: "న్యూనతమ బడ్జెట్ ₹5,000 హాయించాలి"
  },
  marathi: {
    title: "आपली प्रवास योजना तयार करा",
    destination: "गंतव्य",
    startDate: "प्रारंभ तारीख",
    endDate: "समाप्ती तारीख",
    travelType: "प्रवासाचा प्रकार",
    numberOfTravelers: "प्रवाशांची संख्या",
    interests: "आवडी",
    budget: "बजेट (₹)",
    preferredLanguage: "पसंतीची भाषा",
    generateButton: "योजना तयार करा",
    generatingButton: "योजना तयार केली जात आहे...",
    resultTitle: "आपली तयार केलेली योजना",
    solo: "एकटा",
    couple: "जोडपे",
    family: "कुटुंब",
    group: "गट",
    culture: "संस्कृती",
    food: "अन्न",
    nature: "निसर्ग",
    adventure: "साहस",
    shopping: "शॉपिंग",
    enterBudget: "आपला बजेट टाका",
    required: "आवश्यक",
    endDateError: "समाप्ती तारीख प्रारंभ तारीखेपेक्षा नंतर असणे आवश्यक आहे",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना आवश्यक आहे"
  },
  tamil: {
    title: "உங்கள் பயண திட்டத்தை உருவாக்கவும்",
    destination: "இடம்",
    startDate: "தொடக்க தேதி",
    endDate: "முடிவு தேதி",
    travelType: "பயண வகை",
    numberOfTravelers: "பயணிகளின் எண்ணிக்கை",
    interests: "ஆர்வங்கள்",
    budget: "பட்ஜெட் (₹)",
    preferredLanguage: "விருப்பமான மொழி",
    generateButton: "திட்டத்தை உருவாக்கவும்",
    generatingButton: "திட்டம் உருவாக்கப்படுகிறது...",
    resultTitle: "உங்கள் உருவாக்கிய திட்டம்",
    solo: "தனியாக",
    couple: "தம்பதிகள்",
    family: "குடும்பம்",
    group: "குழு",
    culture: "கலாச்சாரம்",
    food: "உணவு",
    nature: "இயற்கை",
    adventure: "ஸாகசம்",
    shopping: "கடைவீதி",
    enterBudget: "உங்கள் பட்ஜெட்டை உள்ளிடவும்",
    required: "தேவை",
    endDateError: "முடிவு தேதி தொடக்க தேதிக்குப் பிறகு இருக்க வேண்டும்",
    minBudgetError: "ந்யூந்தம் பட்ஜெட் ₹5,000 ஹாயின்சால் வேண்டும்"
  },
  urdu: {
    title: "اپنی سفر کی منصوبہ بندی بنائیں",
    destination: "منزل",
    startDate: "شروع کی تاریخ",
    endDate: "آخری تاریخ",
    travelType: "سفر کی قسم",
    numberOfTravelers: "مسافروں کی تعداد",
    interests: "دلچسپیاں",
    budget: "بجٹ (₹)",
    preferredLanguage: "ترجیحی زبان",
    generateButton: "منصوبہ بنائیں",
    generatingButton: "منصوبہ بنایا جا رہا ہے...",
    resultTitle: "آپ کا بنایا ہوا منصوبہ",
    solo: "اکیلا",
    couple: "جوڑا",
    family: "خاندان",
    group: "گروپ",
    culture: "ثقافت",
    food: "کھانا",
    nature: "فطرت",
    adventure: "مہم جوئی",
    shopping: "خریداری",
    enterBudget: "اپنا بجٹ درج کریں",
    required: "ضروری",
    endDateError: "آخری تاریخ شروع کی تاریخ کے بعد ہونی چاہیدہ",
    minBudgetError: "نوعیت کی تعداد پہلے ہونا چاہیدہ"
  },
  gujarati: {
    title: "તમારી મુસાફરીની યોજના બનાવો",
    destination: "ગંતવ્ય",
    startDate: "શੁરੂઆતની તારીખ",
    endDate: "સમાપ્તિની તારીખ",
    travelType: "મુસાફરીનો પ્રકાર",
    numberOfTravelers: "મુસાફરોની સંખ્યા",
    interests: "રુચિઓ",
    budget: "બજેટ (₹)",
    preferredLanguage: "પસંદગીની ભાષા",
    generateButton: "યોજના બનાવો",
    generatingButton: "યોજના બનાવી રહ્યા છીએ...",
    resultTitle: "તમારી બનાવેલી યોજના",
    solo: "એકલા",
    couple: "જોડી",
    family: "પરિવાર",
    group: "જૂથ",
    culture: "સંસ્કૃતિ",
    food: "ખોરાક",
    nature: "પ્રકૃતિ",
    adventure: "સાહસ",
    shopping: "શોપિંગ",
    enterBudget: "તમારો બજેટ દાખલ કરો",
    required: "જરૂરી",
    endDateError: "સમાપ્તિની તારીખ શੁરੂઆતની તારીખ પછી હોવી જોઈએ",
    minBudgetError: "ન્યુનતમ બજટ ₹5,000 હોવો જોઈએ"
  },
  kannada: {
    title: "ನಿಮ್ಮ ಪ్ರವಾಸ ಯೋಜನೆಯನ್ನು ರಚಿಸಿ",
    destination: "ಗಮ್ಯಸ್ಥಾನ",
    startDate: "ಆರಂಭ ದಿನಾಂಕ",
    endDate: "ಅಂತಿಮ ದಿನಾಂಕ",
    travelType: "ಪ్ರವಾಸದ ವಿಧ",
    numberOfTravelers: "ಪ్ರವಾಸಿಗರ ಸಂಖ್ಯೆ",
    interests: "ಆಸಕ್ತಿಗಳು",
    budget: "ಬಜೆಟ್ (₹)",
    preferredLanguage: "ಆದ್ಯತೆಯ ಭಾಷೆ",
    generateButton: "ಯೋಜನೆ ರಚಿಸಿ",
    generatingButton: "ಯೋಜನೆ ರಚಿಸಲಾಗುತ್ತಿದೆ...",
    resultTitle: "ನಿಮ್ಮ ರಚಿಸಿದ ಯೋಜನೆ",
    solo: "ಏಕಾಂಗಿ",
    couple: "ಜೋಡಿ",
    family: "ಕುಟುಂಬ",
    group: "ಗುಂಪು",
    culture: "ಸಂಸ್ಕೃತಿ",
    food: "ಆಹಾರ",
    nature: "ಪ್ರಕತಿ",
    adventure: "ಸಾಹಸ",
    shopping: "ಶಾಪಿಂಗ್",
    enterBudget: "ನಿಮ್ಮ ಬಜೆಟ್ ನಮೂದಿಸಿ",
    required: "ಅಗತ್ಯ",
    endDateError: "ಅಂತಿಮ ದಿನಾಂಕ ಆರಂಭ ದಿನಾಂಕದ ನಂತರ ಇರಬೇಕು",
    minBudgetError: "ನ್ಯુನತಮ ಬಡೆ ₹5,000 ಹೋಗಿದೆ"
  },
  odia: {
    title: "ଆପଣଙ୍କର ଭ୍ରমণ ଯୋଜନା ତିଆରି କରନ୍ତୁ",
    destination: "ଗନ୍ତବ୍ୟ",
    startDate: "ଆରମ୍ଭ ତାରିଖ",
    endDate: "ଶେଷ ତାରିଖ",
    travelType: "ଭ୍ରমণ ପ୍ରକାର",
    numberOfTravelers: "ଭ୍ରমণକାରୀଙ୍କ ସଂଖ୍ୟା",
    interests: "ଆଗ୍ରହ",
    budget: "ବଜେଟ୍ (₹)",
    preferredLanguage: "ପସନ୍ଦର ଭାଷା",
    generateButton: "ଯୋଜନା ତିଆରି କରନ୍ତୁ",
    generatingButton: "ଯୋଜନା ତିଆରି କରାଯାଉଛି...",
    resultTitle: "ଆପଣଙ୍କର ତିଆରି କରାଯାଇଥିବା ଯୋଜନା",
    solo: "ଏକାକୀ",
    couple: "ଯୋଡ଼ି",
    family: "ପରିବାର",
    group: "ଦଳ",
    culture: "ସଂସ୍କୃତି",
    food: "ଖାଦ୍ୟ",
    nature: "ପ୍ରକૃତି",
    adventure: "ସାହସ",
    shopping: "ସପିଂ",
    enterBudget: "ଆପଣଙ୍କର ବଜେଟ୍ ଲେଖନ୍ତୁ",
    required: "ଆବଶ୍ୟକ",
    endDateError: "ଶେଷ ତାରିଖ ଆରମ୍ଭ ତାରିଖ ପରେ ହେବା ଉଚିତ",
    minBudgetError: "ନ୍ଯୁନତମ ବଜେଟ୍ ₹5,000 ହୋଇବା ଉଚିତ"
  },
  malayalam: {
    title: "നിങ്ങളുടെ യാത്രാ പദ്ധതി സൃഷ്ടിക്കുക",
    destination: "ലക്ഷ്യസ്ഥാനം",
    startDate: "ആരംഭ തീയതി",
    endDate: "അവസാന തീയതി",
    travelType: "യാത്രയുടെ തരം",
    numberOfTravelers: "യാത്രക്കാരുടെ എണ്ണം",
    interests: "താല്പര്യങ്ങൾ",
    budget: "ബജറ്റ് (₹)",
    preferredLanguage: "ഇഷ്ടപ്പെട്ട ഭാഷ",
    generateButton: "പദ്ധതി സൃഷ്ടിക്കുക",
    generatingButton: "പദ്ധതി സൃഷ്ടിക്കുന്നു...",
    resultTitle: "നിങ്ങളുടെ സൃഷ്ടിച്ച പദ്ധതി",
    solo: "ഒറ്റയ്ക്ക്",
    couple: "ജോഡി",
    family: "കുടുംബം",
    group: "ഗ്രൂപ്പ്",
    culture: "സംസ്കാരം",
    food: "ഭക്ഷണം",
    nature: "പ്രകൃതി",
    adventure: "സാഹസം",
    shopping: "ഷോപ്പിംഗ്",
    enterBudget: "നിങ്ങളുടെ ബജറ്റ് നൽകുക",
    required: "ആവശ്യമാണ്",
    endDateError: "അവസാന തീയതി ആരംഭ തീയതിക്ക് ശേഷം ആയിരിക്കണം",
    minBudgetError: "ന്യൂനതമ ബജറ്റ് ₹5,000 ഹോയ്ക്കണം"
  },
  punjabi: {
    title: "ਆਪਣੀ ਯਾਤਰਾ ਯੋਜਨਾ ਬਣਾਓ",
    destination: "ਮੰਜ਼ਿਲ",
    startDate: "ਸ਼ੁਰੂਆਤੀ ਤਾਰੀਖ",
    endDate: "ਅੰਤਮ ਤਾਰੀਖ",
    travelType: "ਯਾਤਰਾ ਦੀ ਕਿਸਮ",
    numberOfTravelers: "ਯਾਤਰੀਆਂ ਦੀ ਗਿਣਤੀ",
    interests: "ਰੁਚੀਆਂ",
    budget: "ਬਜਟ (₹)",
    preferredLanguage: "ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ",
    generateButton: "ਯੋਜਨਾ ਬਣਾਓ",
    generatingButton: "ਯੋਜਨਾ ਬਣਾਈ ਜਾ ਰਹੀ ਹੈ...",
    resultTitle: "ਤੁਹਾਡੀ ਬਣਾਈ ਯੋਜਨਾ",
    solo: "ਇਕੱਲੇ",
    couple: "ਜੋੜਾ",
    family: "ਪਰਿਵਾਰ",
    group: "ਗਰੁੱਪ",
    culture: "ਸਭਿਆਚਾਰ",
    food: "ਭੋਜਨ",
    nature: "ਕੁਦਰਤ",
    adventure: "ਸਾਹਸ",
    shopping: "ਸ਼ਾਪਿੰਗ",
    enterBudget: "ਆਪਣਾ ਬਜਟ ਦਰਜ ਕਰੋ",
    required: "ਲੋੜੀਂਦਾ",
    endDateError: "ਅੰਤਮ ਤਾਰੀਖ ਸ਼ੁਰੂਆਤੀ ਤਾਰੀਖ ਤੋਂ ਬਾਅਦ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ",
    minBudgetError: "ਨ੍ਯੁਨਤਮ ਬਜਟ ₹5,000 ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ"
  },
  sanskrit: {
    title: "भवतः यात्रायोजनां सृजतु",
    destination: "गन्तव्यम्",
    startDate: "आरम्भदिनाङ्कः",
    endDate: "अन्तिमदिनाङ्कः",
    travelType: "यात्राप्रकारः",
    numberOfTravelers: "यात्रिणां संख्या",
    interests: "रुचयः",
    budget: "व्ययः (₹)",
    preferredLanguage: "पसन्दीदाभाषा",
    generateButton: "योजनां सृजतु",
    generatingButton: "योजना सृज्यते...",
    resultTitle: "भवतः सृजिता योजना",
    solo: "एकाकी",
    couple: "दम्पती",
    family: "परिवारः",
    group: "समूहः",
    culture: "संस्कृतिः",
    food: "भोजनम्",
    nature: "प्रकृतिः",
    adventure: "साहसम्",
    shopping: "क्रयविक्रयम्",
    enterBudget: "भवतः व्ययं प्रविशतु",
    required: "आवश्यकम्",
    endDateError: "अन्तिमदिनाङ्कः आरम्भदिनाङ्कात् परं भवितव्यम्",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना आवश्यक आहे"
  },
  assamese: {
    title: "আপোনাৰ ভ্ৰমণ পৰিকল্পনা সৃষ্টি কৰক",
    destination: "গন্তব্য",
    startDate: "আৰম্ভণি তাৰিখ",
    endDate: "শেষ তাৰিখ",
    travelType: "ভ্ৰমণৰ প্ৰকাৰ",
    numberOfTravelers: "ভ্ৰমণকাৰীৰ সংখ্যা",
    interests: "আগ্ৰহ",
    budget: "বাজেট (₹)",
    preferredLanguage: "পছন্দৰ ভাষা",
    generateButton: "পৰিকল্পনা সৃষ্টি কৰক",
    generatingButton: "পৰিকল্পনা সৃষ্টি কৰা হৈছে...",
    resultTitle: "আপোনাৰ সৃষ্টি কৰা পৰিকল্পনা",
    solo: "একক",
    couple: "দম্পতি",
    family: "পরিবার",
    group: "দল",
    culture: "সংস্কৃতি",
    food: "খাদ্য",
    nature: "প્ৰকৃতি",
    adventure: "সাহসিক",
    shopping: "ক্ৰয়-বিক্ৰয়",
    enterBudget: "আপোনাৰ বাজেট লিখক",
    required: "প্ৰয়োজনীয়",
    endDateError: "শেষ তাৰিখ আৰম্ভণি তাৰিখৰ পিছত হ'ব লাগে",
    minBudgetError: "ন্যূনতম বজট ₹5,000 হ'ব লাগে"
  },
  maithili: {
    title: "अहाँक यात्रा योजना बनाउ",
    destination: "गन्तव्य",
    startDate: "शुरू तिथि",
    endDate: "अन्तिम तिथि",
    travelType: "यात्रा प्रकार",
    numberOfTravelers: "यात्री संख्या",
    interests: "रुचि",
    budget: "बजेट (₹)",
    preferredLanguage: "पसन्द भाषा",
    generateButton: "योजना बनाउ",
    generatingButton: "योजना बनाएल जाइत अछि...",
    resultTitle: "अहाँक बनाएल योजना",
    solo: "एकला",
    couple: "जोड़ी",
    family: "परिवार",
    group: "समूह",
    culture: "संस्कृति",
    food: "खाना",
    nature: "प्रकृति",
    adventure: "साहस",
    shopping: "खरीदारी",
    enterBudget: "अहाँक बजेट भरू",
    required: "जरूरी",
    endDateError: "अन्तिम तिथि शुरू तिथि सँ पछा होनाइ चाही",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना चाहिए"
  },
  santali: {
    title: "ᱟᱢᱟᱜ ᱥᱟᱸᱜᱷᱟᱨ ᱥᱩᱵᱤᱫᱷᱟ ᱵᱮᱱᱟᱣ ᱢᱮ",
    destination: "ᱜᱚᱱᱛᱚᱵᱽ",
    startDate: "ᱮᱛᱚᱦᱚᱵ ᱢᱟᱦᱟᱸ",
    endDate: "ᱢᱩᱪᱟᱹᱫ ᱢᱟᱦᱟᱸ",
    travelType: "ᱥᱟᱸᱜᱷᱟᱨ ᱞᱮᱠᱟᱱ",
    numberOfTravelers: "ᱥᱟᱸᱜᱷᱟᱨᱤᱭᱟᱹ ᱮᱞ",
    interests: "ᱵᱟᱛᱟᱣ",
    budget: "ᱵᱟᱡᱮᱴ (₹)",
    preferredLanguage: "ᱯᱨᱤᱭ ᱯᱟᱹᱨᱥᱤ",
    generateButton: "ᱥᱩᱵᱤᱫᱷᱟ ᱵᱮᱱᱟᱣ ᱢᱮ",
    generatingButton: "ᱥᱩᱵᱤᱫᱷᱟ ᱵᱮᱱᱟᱣᱚᱜ ᱠᱟᱱᱟ...",
    resultTitle: "ᱟᱢᱟᱜ ᱵᱮᱱᱟᱣ ᱥᱩᱵᱤᱫᱷᱟ",
    solo: "ᱮᱠᱟᱞ",
    couple: "ᱡᱩᱨᱤ",
    family: "ᱜᱷᱟᱨᱚᱸᱡᱽ",
    group: "ᱜᱩᱴ",
    culture: "ᱞᱟᱠᱪᱟᱨ",
    food: "ᱡᱚᱢᱟᱜ",
    nature: "ᱫᱷᱟᱹᱨᱛᱤ",
    adventure: "ᱥᱟᱦᱟᱥ",
    shopping: "ᱠᱤᱱᱤᱢ",
    enterBudget: "ᱟᱢᱟᱜ ᱵᱟᱡᱮᱴ ᱟᱫᱮᱨ ᱢᱮ",
    required: "ᱞᱟᱹᱠᱛᱤ",
    endDateError: "ᱢᱩᱪᱟᱹᱫ ᱢᱟᱦᱟᱸ ᱮᱛᱚᱦᱚᱵ ᱢᱟᱦᱟᱸ ᱛᱟᱭᱚᱢ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना चाहिए"
  },
  kashmiri: {
    title: "تہٕند سفر پلان بنیو",
    destination: "منزل",
    startDate: "شروعاتی تاریخ",
    endDate: "آخری تاریخ",
    travelType: "سفر قسم",
    numberOfTravelers: "مسافرن ہند گنتی",
    interests: "دلچسپیاں",
    budget: "بجٹ (₹)",
    preferredLanguage: "پسندیدہ زبان",
    generateButton: "پلان بنیو",
    generatingButton: "پلان بنیو پۄتھ رہے...",
    resultTitle: "تہٕند بنیو پلان",
    solo: "اکیلا",
    couple: "جوڑا",
    family: "خاندان",
    group: "گروپ",
    culture: "ثقافت",
    food: "خوراک",
    nature: "فطرت",
    adventure: "مہم جوئی",
    shopping: "خریداری",
    enterBudget: "تہٕند بجٹ درج کرو",
    required: "ضروری",
    endDateError: "آخری تاریخ شروع کی تاریخ کے بعد ہونی چاہیدہ",
    minBudgetError: "نوعیت کی تعداد پہلے ہونا چاہیدہ"
  },
  nepali: {
    title: "आफ्नो यात्रा योजना सिर्जना गर्नुहोस्",
    destination: "गन्तव्य",
    startDate: "सुरु मिति",
    endDate: "अन्तिम मिति",
    travelType: "यात्रा प्रकार",
    numberOfTravelers: "यात्रीहरूको संख्या",
    interests: "रुचिहरू",
    budget: "बजेट (₹)",
    preferredLanguage: "मनपर्ने भाषा",
    generateButton: "योजना सिर्जना गर्नुहोस्",
    generatingButton: "योजना सिर्जना गरिँदैछ...",
    resultTitle: "आफ्नो सिर्जना गरिएको योजना",
    solo: "एक्लै",
    couple: "जोडी",
    family: "परिवार",
    group: "समूह",
    culture: "संस्कृति",
    food: "खाना",
    nature: "प्रकृति",
    adventure: "साहस",
    shopping: "किनमेल",
    enterBudget: "आफ्नो बजेट लेख्नुहोस्",
    required: "आवश्यक",
    endDateError: "अन्तिम मिति सुरु मिति पछि हुनुपर्छ",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना आवश्यक आहे"
  },
  sindhi: {
    title: "پنهنجي سفر جو منصوبو ٺاهيو",
    destination: "منزل",
    startDate: "شروعاتي تاريخ",
    endDate: "آخري تاريخ",
    travelType: "سفر جو قسم",
    numberOfTravelers: "مسافري جو تعداد",
    interests: "دلچسپيون",
    budget: "بجٽ (₹)",
    preferredLanguage: "پسنديده ٻولي",
    generateButton: "منصوبو ٺاهيو",
    generatingButton: "منصوبو ٺهي رهيو آهي...",
    resultTitle: "پنهنجو ٺاهيل منصوبو",
    solo: "اڪيلو",
    couple: "جوڙو",
    family: "خاندان",
    group: "گروپ",
    culture: "ثقافت",
    food: "کاڌو",
    nature: "فطرت",
    adventure: "مهامت",
    shopping: "خريداري",
    enterBudget: "پنهنجو بجٽ داخل ڪريو",
    required: "ضروري",
    endDateError: "آخري تاريخ شروعاتي تاريخ کان پوءِ هجڻ گهرجي",
    minBudgetError: "نوعیت کی تعداد پہلے ہونا چاہیدہ"
  },
  dogri: {
    title: "अपनी यात्रा योजना बनाओ",
    destination: "गंतव्य",
    startDate: "शुरू तिथि",
    endDate: "अंतिम तिथि",
    travelType: "यात्रा प्रकार",
    numberOfTravelers: "यात्रियों की संख्या",
    interests: "रुचियां",
    budget: "बजट (₹)",
    preferredLanguage: "पसंदीदा भाषा",
    generateButton: "योजना बनाओ",
    generatingButton: "योजना बन रही है...",
    resultTitle: "आपकी बनाई योजना",
    solo: "अकेले",
    couple: "जोड़े",
    family: "परिवार",
    group: "समूह",
    culture: "संस्कृति",
    food: "भोजन",
    nature: "प्रकृति",
    adventure: "साहस",
    shopping: "खरीदारी",
    enterBudget: "अपना बजट दर्ज करें",
    required: "आवश्यक",
    endDateError: "अंतिम तिथि शुरू तिथि के बाद होनी चाहिए",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना आवश्यक आहे"
  },
  konkani: {
    title: "तुमची प्रवास योजना तयार करात",
    destination: "गंतव्य",
    startDate: "सुरवातीची तारीख",
    endDate: "अखेरची तारीख",
    travelType: "प्रवासाचो प्रकार",
    numberOfTravelers: "प्रवाशांची संख्या",
    interests: "आवडी",
    budget: "बजेट (₹)",
    preferredLanguage: "पसंतीची भास",
    generateButton: "योजना तयार करात",
    generatingButton: "योजना तयार जाता...",
    resultTitle: "तुमची तयार केल्ली योजना",
    solo: "एकटो",
    couple: "जोडी",
    family: "कुटुंब",
    group: "गट",
    culture: "संस्कृती",
    food: "जेवण",
    nature: "निसर्ग",
    adventure: "साहस",
    shopping: "खरेदी",
    enterBudget: "तुमचो बजेट भरात",
    required: "गरजेचें",
    endDateError: "अखेरची तारीख सुरवातीची तारीखे उपरांत जावंक जाय",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना आवश्यक आहे"
  },
  manipuri: {
    title: "নিংগৈদা লম্বীগীদমকী লৈরাকপা",
    destination: "লম্বীগীদম",
    startDate: "থোক্লবা তাংখাই",
    endDate: "মখোই তাংখাই",
    travelType: "লম্বীগীদম লै",
    numberOfTravelers: "লম্বীগীদম মেথৈবী",
    interests: "মমাং",
    budget: "বাজেট (₹)",
    preferredLanguage: "মমাং লোল",
    generateButton: "লৈরাকপা",
    generatingButton: "লৈরাকপা থোক্লবা...",
    resultTitle: "নিংগৈদা লৈরাকপা",
    solo: "মাপাল",
    couple: "মেথৈ",
    family: "ইমা-পা",
    group: "মেথৈ",
    culture: "সনামহী",
    food: "চা",
    nature: "সনাম",
    adventure: "সাহস",
    shopping: "লৈরাক",
    enterBudget: "নিংগৈদা বাজেট লৈ",
    required: "মখোই",
    endDateError: "মখोই তাংখাই থোক্লবা তাংখাইগী মখोঈ",
    minBudgetError: "ন্যূনতম বজট ₹5,000 হ'ব লাগে"
  },
  bodo: {
    title: "नोंथांनि सफारि योजना बानाय",
    destination: "गोनांथि",
    startDate: "सुरुबारि तारिख",
    endDate: "मोनसेबारि तारिख",
    travelType: "सफारिनि रोखोम",
    numberOfTravelers: "सफारि गिरिफ्राइनि सानखा",
    interests: "मोजां",
    budget: "बजेट (₹)",
    preferredLanguage: "मोजां खोन्दो",
    generateButton: "योजना बानाय",
    generatingButton: "योजना बानाय जागासिनो दं...",
    resultTitle: "नोंथांनि बानायजाखांनाय योजना",
    solo: "गोजोन",
    couple: "जोरा",
    family: "बार",
    group: "दल",
    culture: "सांस्कृतिक",
    food: "जाम",
    nature: "सोरखर",
    adventure: "साहस",
    shopping: "खरिद",
    enterBudget: "नोंथांनि बजेट लिर",
    required: "गोनां",
    endDateError: "मोनसेबारि तारिख सुरुबारि तारिखनिफ्राय मोनसेबा जागोन",
    minBudgetError: "न्यूनतम बजट ₹5,000 होना आवश्यक आहे"
  },
  spanish: {
    title: "Crea tu Itinerario",
    destination: "Destino",
    startDate: "Fecha de Inicio",
    endDate: "Fecha de Fin",
    travelType: "Tipo de Viaje",
    numberOfTravelers: "Número de Viajeros",
    interests: "Intereses",
    budget: "Presupuesto (₹)",
    preferredLanguage: "Idioma Preferido",
    generateButton: "Generar Itinerario",
    generatingButton: "Generando Itinerario...",
    resultTitle: "Tu Itinerario Generado",
    solo: "Solo",
    couple: "Pareja",
    family: "Familia",
    group: "Grupo",
    culture: "Cultura",
    food: "Comida",
    nature: "Naturaleza",
    adventure: "Aventura",
    shopping: "Compras",
    enterBudget: "Ingresa tu presupuesto",
    required: "Requerido",
    endDateError: "La fecha de fin debe ser posterior a la fecha de inicio",
    minBudgetError: "El presupuesto mínimo debe ser ₹5,000"
  }
};

const ItineraryForm = ({ onSubmit }) => {
  const MOCK_MODE = true; // Set to true to bypass the API call
  
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelType: 'solo',
    numberOfTravelers: 1,
    interests: {
      culture: false,
      food: false,
      nature: false,
      adventure: false,
      shopping: false
    },
    budget: '',
    preferredLanguage: 'english',
    transportMode: 'flight'
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const t = translations[currentLanguage];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.destination.trim()) {
      newErrors.destination = t.required;
    }
    if (!formData.startDate) {
      newErrors.startDate = t.required;
    }
    if (!formData.endDate) {
      newErrors.endDate = t.required;
    }
    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = t.endDateError;
    }
    if (!formData.budget.trim()) {
      newErrors.budget = t.required;
    } else {
      const numericBudget = parseInt(formData.budget.replace(/,/g, ''), 10);
      if (numericBudget < 5000) {
        newErrors.budget = t.minBudgetError;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: checked
        }
      }));
    } else if (name === 'budget') {
      const numericValue = value.replace(/[^0-9]/g, '');
      const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else if (name === 'preferredLanguage') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      setCurrentLanguage(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const formatInterests = () => {
    return Object.entries(formData.interests)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(', ');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        // If MOCK_MODE is enabled, skip the actual API call
        if (MOCK_MODE) {
          console.log("MOCK MODE: Using mock itinerary instead of API call");
          
          // Calculate the number of days for the trip
          const startDate = new Date(formData.startDate);
          const endDate = new Date(formData.endDate);
          const tripDurationMs = endDate - startDate;
          const tripDurationDays = Math.ceil(tripDurationMs / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end days
          
          // Helper function to get a date string for a specific day
          const getDateForDay = (dayOffset) => {
            const date = new Date(startDate);
            date.setDate(date.getDate() + dayOffset);
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          };
          
          // Get transport-specific details
          let transportDetails = '';
          let arrivalInfo = '';
          let departureInfo = '';
          
          switch (formData.transportMode) {
            case 'flight':
              transportDetails = `## Flight Details
- **Airline**: ${['IndiGo', 'Air India', 'Vistara', 'SpiceJet'][Math.floor(Math.random() * 4)]}
- **Departure**: ${getDateForDay(-1)} at ${['07:35', '10:45', '14:20', '19:55'][Math.floor(Math.random() * 4)]}
- **Arrival at ${formData.destination}**: ${getDateForDay(0)} at ${['09:25', '12:30', '16:10', '21:40'][Math.floor(Math.random() * 4)]}
- **Return Flight**: ${getDateForDay(tripDurationDays - 1)} at ${['15:40', '18:55', '21:30', '10:15'][Math.floor(Math.random() * 4)]}
- **Estimated Cost**: ₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.3).toLocaleString()} per person (round trip)
- **Baggage Allowance**: 15kg check-in + 7kg cabin luggage

`;
              arrivalInfo = `* Arrive at ${formData.destination} Airport
  * Take airport transfer to accommodation (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()})`;
              departureInfo = `* Airport transfer from accommodation (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()})
  * Return flight to home city`;
              break;
              
            case 'train':
              transportDetails = `## Train Details
- **Train**: ${['Rajdhani Express', 'Shatabdi Express', 'Duronto Express', 'Vande Bharat Express'][Math.floor(Math.random() * 4)]}
- **Departure Station**: Your city main station
- **Departure**: ${getDateForDay(-1)} at ${['06:15', '14:30', '19:45', '23:55'][Math.floor(Math.random() * 4)]}
- **Arrival at ${formData.destination}**: ${getDateForDay(0)} at ${['10:45', '18:20', '08:15', '12:35'][Math.floor(Math.random() * 4)]}
- **Return Train**: ${getDateForDay(tripDurationDays - 1)} at ${['16:30', '18:15', '21:45', '10:30'][Math.floor(Math.random() * 4)]}
- **Class**: ${['AC First Class', 'AC 2-Tier', 'AC 3-Tier', 'Executive Chair Car'][Math.floor(Math.random() * 4)]}
- **Estimated Cost**: ₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.15).toLocaleString()} per person (round trip)

`;
              arrivalInfo = `* Arrive at ${formData.destination} Railway Station
  * Take station transfer to accommodation (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.01).toLocaleString()})`;
              departureInfo = `* Transfer to railway station (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.01).toLocaleString()})
  * Return train to home city`;
              break;
              
            case 'bus':
              transportDetails = `## Bus Details
- **Bus Operator**: ${['KSRTC', 'UPSRTC', 'MSRTC', 'GSRTC'][Math.floor(Math.random() * 4)]}
- **Type**: ${['Volvo AC Sleeper', 'Luxury AC Seater', 'Semi-Sleeper AC', 'Mercedes AC Seater'][Math.floor(Math.random() * 4)]}
- **Departure**: ${getDateForDay(-1)} at ${['21:30', '22:45', '23:00', '20:15'][Math.floor(Math.random() * 4)]}
- **Arrival at ${formData.destination}**: ${getDateForDay(0)} at ${['06:15', '07:30', '08:45', '05:50'][Math.floor(Math.random() * 4)]}
- **Return Bus**: ${getDateForDay(tripDurationDays - 1)} at ${['20:30', '21:15', '22:00', '19:45'][Math.floor(Math.random() * 4)]}
- **Estimated Cost**: ₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.10).toLocaleString()} per person (round trip)
- **Amenities**: Charging points, Water bottle, Blanket

`;
              arrivalInfo = `* Arrive at ${formData.destination} Bus Terminal
  * Take auto/taxi to accommodation (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.008).toLocaleString()})`;
              departureInfo = `* Transfer to bus terminal (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.008).toLocaleString()})
  * Return bus to home city`;
              break;
              
            default:
              // Default to flight if no valid transport mode
              transportDetails = '';
              arrivalInfo = `* Arrive at ${formData.destination} Airport/Station`;
              departureInfo = `* Depart from ${formData.destination}`;
          }
          
          // Create initial sections of the mock itinerary
          let mockItinerary = `# ${formData.destination.toUpperCase()} TRAVEL ITINERARY
## Overview
Your personalized ${formData.travelType} trip to ${formData.destination} from ${formData.startDate} to ${formData.endDate}
Number of travelers: ${formData.numberOfTravelers}
Budget: ₹${formData.budget}
Transport mode: ${t[formData.transportMode]}

${transportDetails}`;

          // Generate itinerary for each day
          for (let day = 0; day < tripDurationDays; day++) {
            const dayDate = getDateForDay(day);
            
            if (day === 0) {
              // First day (Arrival)
              mockItinerary += `## Day 1: Arrival in ${formData.destination} (${dayDate})
- **Morning (8:00 AM - 12:00 PM)**
  ${arrivalInfo}
  * Check-in at your accommodation (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.15).toLocaleString()} for entire stay)
  * Enjoy a welcome breakfast at a local café (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.01).toLocaleString()} per person)

- **Afternoon (12:00 PM - 5:00 PM)**
  * Take a walking tour of the central district (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()} per person)
  * Visit the main historical square and take photos
  * Stop for refreshments at a charming local spot (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.005).toLocaleString()} per person)

- **Evening (5:00 PM - 10:00 PM)**
  * Enjoy dinner at a popular restaurant featuring local cuisine (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.03).toLocaleString()} per person)
  * Take a leisurely stroll around the illuminated landmarks
  * Return to accommodation and rest

`;
            } else if (day === tripDurationDays - 1) {
              // Last day (Departure)
              mockItinerary += `## Day ${day + 1}: Departure from ${formData.destination} (${dayDate})
- **Morning (8:00 AM - 12:00 PM)**
  * Breakfast at accommodation
  * Last-minute souvenir shopping${formData.interests.culture ? `
  * Visit to one last cultural site (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.015).toLocaleString()} entrance fee per person)` : `
  * Relax at a local café and people-watch`}

- **Afternoon**
  * Lunch at a restaurant near your departure point (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()} per person)
  * Check-out from accommodation
  ${departureInfo}

`;
            } else {
              // Middle days - create varied activities
              const dayType = day % 3; // Create 3 different types of day templates
              
              if (dayType === 0) {
                // Historical/Cultural day
                mockItinerary += `## Day ${day + 1}: Exploring ${formData.destination}'s Heritage (${dayDate})
- **Morning (8:00 AM - 12:00 PM)**
  * Breakfast at accommodation
  * Visit the most famous historical site in ${formData.destination} (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()} entrance fee per person)
  * Guided tour of the site (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()} per person)

- **Afternoon (12:00 PM - 5:00 PM)**
  * Lunch at a renowned restaurant (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()} per person)
  * Visit the main museum or art gallery (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.015).toLocaleString()} entrance fee per person)
  * Explore the cultural district and local crafts

- **Evening (5:00 PM - 10:00 PM)**
  * Attend a cultural performance or show (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.04).toLocaleString()} per person)
  * Dinner at an authentic local eatery (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.025).toLocaleString()} per person)
  * Night photography session of the city skyline

`;
              } else if (dayType === 1) {
                // Nature/Adventure day
                mockItinerary += `## Day ${day + 1}: Nature and Adventure (${dayDate})
- **Morning (7:30 AM - 12:00 PM)**
  * Early breakfast at accommodation
  * Day trip to nearby natural attraction (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.05).toLocaleString()} for transportation and entry)
  * ${formData.interests.adventure ? `Adventure activity such as hiking, zip-lining, or water sports (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.06).toLocaleString()} per person)` : `Nature walk with local guide (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.03).toLocaleString()} per person)`}

- **Afternoon (12:00 PM - 5:00 PM)**
  * Picnic lunch amidst nature (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()} per person)
  * ${formData.interests.nature ? `Explore local flora and fauna with a naturalist (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.03).toLocaleString()} per person)` : `Visit to a scenic viewpoint for photography`}
  * Relaxation time at a famous park or garden

- **Evening (5:00 PM - 10:00 PM)**
  * Return to city center
  * Dinner at a restaurant with scenic views (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.04).toLocaleString()} per person)
  * Evening relaxation or spa treatment (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.03).toLocaleString()} per person)

`;
              } else {
                // Local Experiences day
                mockItinerary += `## Day ${day + 1}: Local Experiences (${dayDate})
- **Morning (8:30 AM - 12:00 PM)**
  * Breakfast at a trendy café (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.015).toLocaleString()} per person)
  * ${formData.interests.shopping ? `Shopping at local boutiques and artisan markets` : `Visit to local market and shopping district`}
  * Meet with local artisans and learn about traditional crafts (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.01).toLocaleString()} for workshop)

- **Afternoon (12:00 PM - 5:00 PM)**
  * ${formData.interests.food ? `Cooking class featuring local cuisine (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.04).toLocaleString()} per person)
  * Lunch featuring your own creations` : `Lunch at a picturesque spot (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.02).toLocaleString()} per person)
  * Visit to secondary attractions and historical sites (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.025).toLocaleString()} for tickets)`}
  * Free time to explore neighborhood gems

- **Evening (5:00 PM - 10:00 PM)**
  * ${formData.interests.shopping ? `Visit to night market or bazaar for souvenirs` : `Sunset viewing from a scenic spot`}
  * Dinner at a ${day % 2 === 0 ? 'highly-rated' : 'local favorite'} restaurant (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.05).toLocaleString()} per person)
  * ${formData.interests.culture ? `Evening cultural entertainment (₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.03).toLocaleString()} per person)` : `Nightcap at a popular local spot`}

`;
              }
            }
          }

          // Add practical information
          mockItinerary += `## Practical Information
- **Transportation Options:**
  * Public Transit: ₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.05).toLocaleString()} for entire stay
  * Taxi/Ride-sharing: ₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.08).toLocaleString()} estimated for entire trip
  * Rental options available: ₹${(parseInt(formData.budget.replace(/,/g, '')) * 0.12).toLocaleString()} per day

- **Accommodation Details:**
  * Recommended areas: City Center, Cultural District, or Riverside
  * Estimated costs already included in budget
  * Options range from boutique hotels to local guesthouses

- **Weather Considerations:**
  * Pack appropriate clothing for the season
  * Check local forecast before departure
  * Consider rain gear depending on seasonal patterns

- **Local Customs:**
  * Learn basic local phrases
  * Respect cultural norms when visiting religious sites
  * Tipping customs: 10-15% in restaurants

Enjoy your trip to ${formData.destination}! This itinerary has been customized based on your preferences and budget constraints. All activities and attractions have been selected to give you an authentic and memorable experience.`;

          // Set the mock itinerary and call onSubmit
          setItinerary(mockItinerary);
          onSubmit(mockItinerary);
          setIsLoading(false);
          return; // Skip the API call
        }

        // Rest of the existing code for the API call
        const selectedInterests = formatInterests();
        const numericBudget = formData.budget.replace(/,/g, '');
        const prompt = `Generate a detailed travel itinerary for:
          Destination: ${formData.destination}
          Dates: ${formData.startDate} to ${formData.endDate}
          Travel Type: ${formData.travelType}
          Number of Travelers: ${formData.numberOfTravelers}
          Interests: ${selectedInterests}
          Budget: ₹${numericBudget}
          Preferred Language: ${formData.preferredLanguage}
          
          Please provide a day-by-day itinerary with recommended activities, restaurants, and attractions that match the interests and budget. Include estimated costs and timing for each activity.`;

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: prompt }]
          }),
        });

        // Attempt to read the response as text first to help debug non-JSON responses
        const responseText = await response.text();

        if (!response.ok) {
          console.error('Raw error response:', responseText); // Log raw response for debugging
          // Try to parse as JSON if it might contain an error message, otherwise use the text
          let errorData;
          try {
            errorData = JSON.parse(responseText);
          } catch (e) {
            throw new Error(`Server returned non-JSON error: ${responseText.substring(0, 100)}...`); // Show snippet of HTML
          }
          throw new Error(errorData.error || 'Failed to generate itinerary');
        }

        const data = JSON.parse(responseText); // Parse the text as JSON if response.ok

        if (!data.choices?.[0]?.message?.content) {
          throw new Error('Invalid response format from AI service');
        }

        const itineraryResponse = data.choices[0].message.content;

        if (!itineraryResponse.trim()) {
          throw new Error('Generated itinerary is empty');
        }

        setItinerary(itineraryResponse);
        onSubmit(itineraryResponse);
      } catch (error) {
        console.error('Error generating itinerary:', error.message || error);
        setErrors({ 
          submit: `Failed to generate itinerary: ${error.message}. Please try again.` 
        });
        setItinerary(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Add this new function to parse the itinerary content
  const parseItinerary = (content) => {
    if (!content) return null;
    
    // Split the content by sections (headers starting with #)
    const sections = content.split(/(?=^#{1,2} )/gm);
    
    // Extract title and overview
    const title = sections[0]?.trim() || '';
    const overview = sections[1]?.trim() || '';
    
    // Extract day sections (they usually start with ## Day)
    const daySections = sections.filter(section => section.startsWith('## Day'));
    
    // Extract practical information
    const practicalInfo = sections.find(section => section.includes('Practical Information'));
    
    return {
      title,
      overview,
      days: daySections,
      practicalInfo
    };
  };

  return (
    <div className="itinerary-container">
      <form className="itinerary-form" onSubmit={handleSubmit}>
        <h2>{t.title}</h2>
        <div className="form-group">
          <label htmlFor="destination">{t.destination}</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
          {errors.destination && <span className="error">{errors.destination}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="startDate">{t.startDate}</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          {errors.startDate && <span className="error">{errors.startDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="endDate">{t.endDate}</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="travelType">{t.travelType}</label>
          <select
            id="travelType"
            name="travelType"
            value={formData.travelType}
            onChange={handleChange}
            required
          >
            <option value="solo">{t.solo}</option>
            <option value="couple">{t.couple}</option>
            <option value="family">{t.family}</option>
            <option value="group">{t.group}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfTravelers">{t.numberOfTravelers}</label>
          <input
            type="number"
            id="numberOfTravelers"
            name="numberOfTravelers"
            min="1"
            value={formData.numberOfTravelers}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <fieldset>
            <legend>{t.interests}</legend>
            <div className="interests-checkboxes">
              {Object.entries(formData.interests).map(([interest, checked]) => (
                <div key={interest} className="interest-checkbox">
                  <input
                    type="checkbox"
                    id={`interest-${interest}`}
                    name={interest}
                    checked={checked}
                    onChange={handleChange}
                  />
                  <label htmlFor={`interest-${interest}`}>
                    {t[interest]}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="form-group">
          <label htmlFor="budget">{t.budget}</label>
          <div className="budget-input-container">
            <span className="currency-symbol">₹</span>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder={t.enterBudget}
              required
            />
          </div>
          {errors.budget && <span className="error">{errors.budget}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="preferredLanguage">{t.preferredLanguage}</label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleChange}
            required
          >
            <option value="english">English</option>
            <option value="hindi">हिंदी (Hindi)</option>
            <option value="bengali">বাংলা (Bengali)</option>
            <option value="telugu">తెలుగు (Telugu)</option>
            <option value="marathi">मराठी (Marathi)</option>
            <option value="tamil">தமிழ் (Tamil)</option>
            <option value="urdu">اردو (Urdu)</option>
            <option value="gujarati">ગુજરાતી (Gujarati)</option>
            <option value="kannada">ಕನ್ನಡ (Kannada)</option>
            <option value="odia">ଓଡ଼ିଆ (Odia)</option>
            <option value="malayalam">മലയാളം (Malayalam)</option>
            <option value="punjabi">ਪੰਜਾਬੀ (Punjabi)</option>
            <option value="sanskrit">संस्कृतम् (Sanskrit)</option>
            <option value="assamese">অসমীয়া (Assamese)</option>
            <option value="maithili">मैथिली (Maithili)</option>
            <option value="santali">ᱥᱟᱱᱛᱟᱲᱤ (Santali)</option>
            <option value="kashmiri">کٲشُر (Kashmiri)</option>
            <option value="nepali">नेपाली (Nepali)</option>
            <option value="sindhi">سنڌي (Sindhi)</option>
            <option value="dogri">डोगरी (Dogri)</option>
            <option value="konkani">कोंकणी (Konkani)</option>
            <option value="manipuri">মৈতৈলোন্ (Manipuri)</option>
            <option value="bodo">बड़ो (Bodo)</option>
            <option value="spanish">Español (Spanish)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="transportMode">{t.transportMode}</label>
          <select
            id="transportMode"
            name="transportMode"
            value={formData.transportMode}
            onChange={handleChange}
            required
          >
            <option value="flight">{t.flight}</option>
            <option value="train">{t.train}</option>
            <option value="bus">{t.bus}</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? t.generatingButton : t.generateButton}
        </button>
        {errors.submit && <span className="error">{errors.submit}</span>}
      </form>

      {itinerary && (
        <div className="itinerary-result">
          <h3>{t.resultTitle}</h3>
          
          {/* New enhanced UI display */}
          <div className="itinerary-enhanced">
            {(() => {
              const parsedItinerary = parseItinerary(itinerary);
              if (!parsedItinerary) return <div className="itinerary-content">{itinerary}</div>;
              
              return (
                <>
                  {/* Title and Overview */}
                  <div className="itinerary-header">
                    <h2>{parsedItinerary.title.replace('# ', '')}</h2>
                    {parsedItinerary.overview && (
                      <div className="itinerary-overview">
                        {parsedItinerary.overview.replace('## Overview', '').split('\n').map((line, i) => 
                          line.trim() && <p key={`overview-${i}`}>{line}</p>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline */}
                  <div className="itinerary-timeline">
                    {parsedItinerary.days.map((day, index) => {
                      const dayTitle = day.split('\n')[0].replace('## ', '');
                      return (
                        <div key={`day-${index}`} className="timeline-item">
                          <div className="timeline-marker">{index + 1}</div>
                          <div className="timeline-line"></div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Day Cards */}
                  <div className="itinerary-days">
                    {parsedItinerary.days.map((day, index) => {
                      const lines = day.split('\n');
                      const dayTitle = lines[0].replace('## ', '');
                      const dayContent = lines.slice(1);
                      
                      // Group content by time period (Morning, Afternoon, Evening)
                      const periods = [];
                      let currentPeriod = null;
                      let currentPeriodContent = [];
                      
                      dayContent.forEach(line => {
                        if (line.trim() === '') return;
                        
                        // Check if this is a new time period
                        if (line.includes('**Morning') || line.includes('**Afternoon') || line.includes('**Evening')) {
                          // Save previous period if it exists
                          if (currentPeriod) {
                            periods.push({ title: currentPeriod, content: currentPeriodContent });
                            currentPeriodContent = [];
                          }
                          currentPeriod = line.replace(/\*/g, '').trim();
                        } else {
                          currentPeriodContent.push(line);
                        }
                      });
                      
                      // Add the last period
                      if (currentPeriod) {
                        periods.push({ title: currentPeriod, content: currentPeriodContent });
                      }
                      
                      return (
                        <div key={`day-card-${index}`} className="day-card">
                          <h3 className="day-title">{dayTitle}</h3>
                          
                          {periods.map((period, pidx) => (
                            <div key={`period-${pidx}`} className="time-period">
                              <h4>{period.title}</h4>
                              <ul>
                                {period.content.map((item, iidx) => (
                                  <li key={`item-${iidx}`}>{item.replace(/^\s*\*\s*/, '')}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Practical Information */}
                  {parsedItinerary.practicalInfo && (
                    <div className="practical-info-card">
                      <h3>Practical Information</h3>
                      <div className="practical-info-content">
                        {parsedItinerary.practicalInfo.replace('## Practical Information', '')
                          .split(/(?=- \*\*)/g)
                          .filter(section => section.trim())
                          .map((section, index) => {
                            const [title, ...content] = section.split('\n');
                            return (
                              <div key={`info-${index}`} className="info-section">
                                <h4>{title.replace(/- \*\*|\*\*:/g, '').trim()}</h4>
                                <ul>
                                  {content.filter(line => line.trim()).map((line, lidx) => (
                                    <li key={`line-${lidx}`}>{line.replace(/^\s*\*\s*/, '')}</li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                  
                  {/* Footer */}
                  <div className="itinerary-footer">
                    {itinerary.split('\n')
                      .slice(-2)
                      .map((line, i) => line.trim() && <p key={`footer-${i}`}>{line}</p>)}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

ItineraryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ItineraryForm; 