import React from 'react';
import { Language, NavItem, ContentData, FAQItem, CountryData } from './types';
import { Building2, Globe, TrendingUp, Calculator, HelpCircle, Phone, Scale, Home as HomeIcon, Briefcase, MapPin } from 'lucide-react';

export const SUPPORTED_LANGUAGES: Language[] = ['ar', 'en', 'fr'];

export const DICTIONARY: Record<Language, Record<string, string>> = {
  ar: {
    siteName: 'Immobilier Info',
    tagline: 'دليلك الشامل للاستثمار العقاري العالمي',
    readMore: 'اقرأ المزيد',
    footerDesc: 'المنصة الرائدة للمعلومات العقارية. نحن نساعدك على اتخاذ قرارات استثمارية ذكية في جميع أنحاء العالم.',
    quickLinks: 'روابط سريعة',
    contactUs: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة',
    adLabel: 'إعلان',
    featuredArticles: 'مقالات مميزة',
    latestNews: 'آخر الأخبار',
    toolsTitle: 'أدوات عقارية ذكية',
    mortgageCalc: 'حاسبة التمويل العقاري',
    roiCalc: 'حاسبة عائد الاستثمار',
    calcButton: 'احسب',
    loanAmount: 'قيمة القرض',
    interestRate: 'نسبة الفائدة (%)',
    loanTerm: 'مدة القرض (سنوات)',
    monthlyPayment: 'الدفع الشهري',
    propertyPrice: 'سعر العقار',
    annualRent: 'الإيجار السنوي المتوقع',
    annualExpenses: 'المصاريف السنوية',
    roiResult: 'عائد الاستثمار السنوي',
    contactName: 'الاسم',
    contactEmail: 'البريد الإلكتروني',
    contactMessage: 'الرسالة',
    send: 'إرسال',
    searchPlaceholder: 'ابحث عن دولة أو مدينة...',
    welcome: 'مرحباً بك في Immobilier Info',
    overview: 'نظرة عامة',
    marketTrends: 'توجهات السوق',
    propertyTypes: 'أنواع العقارات',
    prices: 'تحليل الأسعار',
    legal: 'القوانين والضرائب',
    bestCities: 'أفضل المدن للاستثمار',
    investmentOps: 'فرص الاستثمار',
    forecast: 'توقعات المستقبل (5 سنوات)',
    conclusion: 'الخلاصة',
    avgPrice: 'متوسط سعر المتر',
    roi: 'العائد المتوقع',
    currency: 'العملة',
    taxes: 'الضرائب',
    residency: 'الإقامة والجنسية',
    aboutUs: 'من نحن',
    privacyPolicy: 'سياسة الخصوصية',
    termsConditions: 'الشروط والأحكام',
    mission: 'رسالتنا',
    vision: 'رؤيتنا',
    values: 'قيمنا',
    legalDisclaimer: 'إخلاء مسؤولية قانوني',
    lastUpdated: 'آخر تحديث'
  },
  en: {
    siteName: 'Immobilier Info',
    tagline: 'Your Comprehensive Guide to Global Real Estate Investment',
    readMore: 'Read More',
    footerDesc: 'The leading platform for real estate insights. We help you make smart investment decisions worldwide.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    rights: 'All rights reserved',
    adLabel: 'Advertisement',
    featuredArticles: 'Featured Articles',
    latestNews: 'Latest News',
    toolsTitle: 'Smart Real Estate Tools',
    mortgageCalc: 'Mortgage Calculator',
    roiCalc: 'ROI Calculator',
    calcButton: 'Calculate',
    loanAmount: 'Loan Amount',
    interestRate: 'Interest Rate (%)',
    loanTerm: 'Loan Term (Years)',
    monthlyPayment: 'Monthly Payment',
    propertyPrice: 'Property Price',
    annualRent: 'Expected Annual Rent',
    annualExpenses: 'Annual Expenses',
    roiResult: 'Annual ROI',
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    send: 'Send',
    searchPlaceholder: 'Search for a country or city...',
    welcome: 'Welcome to Immobilier Info',
    overview: 'Overview',
    marketTrends: 'Market Trends',
    propertyTypes: 'Property Types',
    prices: 'Price Analysis',
    legal: 'Laws & Taxes',
    bestCities: 'Best Cities',
    investmentOps: 'Investment Opportunities',
    forecast: 'Future Forecast (5 Years)',
    conclusion: 'Conclusion',
    avgPrice: 'Avg Price/sqm',
    roi: 'Expected ROI',
    currency: 'Currency',
    taxes: 'Taxes',
    residency: 'Residency & Citizenship',
    aboutUs: 'About Us',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    mission: 'Our Mission',
    vision: 'Our Vision',
    values: 'Our Values',
    legalDisclaimer: 'Legal Disclaimer',
    lastUpdated: 'Last Updated'
  },
  fr: {
    siteName: 'Immobilier Info',
    tagline: 'Votre guide complet pour l\'investissement immobilier mondial',
    readMore: 'Lire la suite',
    footerDesc: 'La plateforme leader pour les informations immobilières. Nous vous aidons à prendre des décisions d\'investissement intelligentes.',
    quickLinks: 'Liens rapides',
    contactUs: 'Contactez-nous',
    rights: 'Tous droits réservés',
    adLabel: 'Publicité',
    featuredArticles: 'Articles en vedette',
    latestNews: 'Dernières nouvelles',
    toolsTitle: 'Outils Immobiliers Intelligents',
    mortgageCalc: 'Calculatrice Hypothécaire',
    roiCalc: 'Calculateur ROI',
    calcButton: 'Calculer',
    loanAmount: 'Montant du prêt',
    interestRate: 'Taux d\'intérêt (%)',
    loanTerm: 'Durée du prêt (années)',
    monthlyPayment: 'Paiement mensuel',
    propertyPrice: 'Prix du bien',
    annualRent: 'Loyer annuel prévu',
    annualExpenses: 'Dépenses annuelles',
    roiResult: 'ROI Annuel',
    contactName: 'Nom',
    contactEmail: 'E-mail',
    contactMessage: 'Message',
    send: 'Envoyer',
    searchPlaceholder: 'Rechercher un pays ou une ville...',
    welcome: 'Bienvenue chez Immobilier Info',
    overview: 'Aperçu',
    marketTrends: 'Tendances du marché',
    propertyTypes: 'Types de propriétés',
    prices: 'Analyse des prix',
    legal: 'Lois et impôts',
    bestCities: 'Meilleures villes',
    investmentOps: 'Opportunités d\'investissement',
    forecast: 'Prévisions (5 ans)',
    conclusion: 'Conclusion',
    avgPrice: 'Prix moyen/m²',
    roi: 'ROI attendu',
    currency: 'Devise',
    taxes: 'Impôts',
    residency: 'Résidence et citoyenneté',
    aboutUs: 'À propos de nous',
    privacyPolicy: 'Politique de confidentialité',
    termsConditions: 'Termes et conditions',
    mission: 'Notre mission',
    vision: 'Notre vision',
    values: 'Nos valeurs',
    legalDisclaimer: 'Avis juridique',
    lastUpdated: 'Dernière mise à jour'
  }
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { ar: 'الرئيسية', en: 'Home', fr: 'Accueil' }, path: '/' },
  { id: 'countries', label: { ar: 'الدول', en: 'Countries', fr: 'Pays' }, path: '/countries' },
  { id: 'cities', label: { ar: 'المدن', en: 'Cities', fr: 'Villes' }, path: '/cities' },
  { id: 'blog', label: { ar: 'المدونة', en: 'Blog', fr: 'Blog' }, path: '/blog' },
  { id: 'tools', label: { ar: 'الأدوات', en: 'Tools', fr: 'Outils' }, path: '/tools' },
  { id: 'faq', label: { ar: 'الأسئلة الشائعة', en: 'FAQ', fr: 'FAQ' }, path: '/faq' },
  { id: 'contact', label: { ar: 'اتصل بنا', en: 'Contact', fr: 'Contact' }, path: '/contact' },
];

export const STATIC_PAGES = {
  about: {
    description: {
      ar: 'Immobilier Info هي منصتك الموثوقة لاستكشاف أسواق العقارات العالمية. نحن نجمع بين البيانات الدقيقة، والتحليلات المتعمقة، والأدوات الذكية لمساعدتك في اتخاذ قرارات استثمارية مستنيرة في أي مكان في العالم.',
      en: 'Immobilier Info is your trusted platform for exploring global real estate markets. We combine accurate data, in-depth analytics, and smart tools to help you make informed investment decisions anywhere in the world.',
      fr: 'Immobilier Info est votre plateforme de confiance pour explorer les marchés immobiliers mondiaux. Nous combinons des données précises, des analyses approfondies et des outils intelligents pour vous aider à prendre des décisions d\'investissement éclairées partout dans le monde.'
    },
    mission: {
      ar: 'تمكين المستثمرين الأفراد والشركات من الوصول إلى معلومات شفافة وموثوقة حول الفرص العقارية العالمية.',
      en: 'To empower individual and corporate investors with transparent and reliable information about global real estate opportunities.',
      fr: 'Donner aux investisseurs individuels et corporatifs accès à des informations transparentes et fiables sur les opportunités immobilières mondiales.'
    },
    vision: {
      ar: 'أن نكون المرجع الأول عالمياً لكل من يبحث عن شراء أو استثمار عقار خارج حدوده.',
      en: 'To be the number one global reference for anyone looking to buy or invest in real estate across borders.',
      fr: 'Être la référence mondiale numéro un pour quiconque cherche à acheter ou investir dans l\'immobilier au-delà des frontières.'
    }
  },
  privacy: {
    intro: {
      ar: 'نحن في Immobilier Info نولي أهمية قصوى لخصوصية زوارنا. توضح هذه الوثيقة أنواع المعلومات التي نجمعها وكيفية استخدامها.',
      en: 'At Immobilier Info, we prioritize the privacy of our visitors. This document outlines the types of information we collect and how it is used.',
      fr: 'Chez Immobilier Info, nous accordons une priorité absolue à la confidentialité de nos visiteurs. Ce document décrit les types d\'informations que nous collectons et comment elles sont utilisées.'
    },
    sections: [
      {
        title: { ar: 'ملفات تعريف الارتباط (Cookies)', en: 'Cookies', fr: 'Cookies' },
        content: {
          ar: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل الزيارات. نستخدم أيضاً Google AdSense الذي قد يستخدم ملفات تعريف الارتباط لعرض إعلانات تناسب اهتماماتك.',
          en: 'We use cookies to enhance user experience and analyze traffic. We also use Google AdSense, which may use cookies to serve ads based on your interests.',
          fr: 'Nous utilisons des cookies pour améliorer l\'expérience utilisateur et analyser le trafic. Nous utilisons également Google AdSense, qui peut utiliser des cookies pour diffuser des annonces en fonction de vos centres d\'intérêt.'
        }
      },
      {
        title: { ar: 'البيانات التي نجمعها', en: 'Data We Collect', fr: 'Données que nous collectons' },
        content: {
          ar: 'عند استخدامك لنموذج "اتصل بنا"، قد نجمع اسمك وبريدك الإلكتروني للرد على استفسارك. لا نشارك هذه البيانات مع أطراف ثالثة.',
          en: 'When you use our "Contact Us" form, we may collect your name and email to respond to your inquiry. We do not share this data with third parties.',
          fr: 'Lorsque vous utilisez notre formulaire "Contactez-nous", nous pouvons collecter votre nom et votre e-mail pour répondre à votre demande. Nous ne partageons pas ces données avec des tiers.'
        }
      }
    ]
  },
  terms: {
    intro: {
      ar: 'مرحباً بك في موقع Immobilier Info. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام الموقع. باستعراضك لهذا الموقع، فإنك توافق على الالتزام الكامل بهذه الشروط.',
      en: 'Welcome to Immobilier Info. Please read these Terms and Conditions carefully before using the website. By accessing this site, you agree to be fully bound by these terms.',
      fr: 'Bienvenue sur Immobilier Info. Veuillez lire attentivement ces Termes et Conditions avant d\'utiliser le site. En accédant à ce site, vous acceptez d\'être pleinement lié par ces termes.'
    },
    sections: [
      {
        title: { ar: '1. إخلاء المسؤولية القانونية', en: '1. Legal Disclaimer', fr: '1. Avis de non-responsabilité juridique' },
        content: {
          ar: 'المعلومات الواردة في هذا الموقع هي لأغراض إعلامية عامة فقط. نحن لسنا وكالة عقارية أو وسيطاً مالياً، ولا نقدم أي مشورة استثمارية أو قانونية أو ضريبية. يجب على المستخدمين إجراء أبحاثهم الخاصة واستشارة محترفين مؤهلين قبل اتخاذ أي قرار استثماري. نحن لا نتحمل أي مسؤولية عن أي خسائر قد تنجم عن الاعتماد على المعلومات المنشورة.',
          en: 'The information provided on this website is for general informational purposes only. We are not a real estate agency or financial broker, and we do not provide investment, legal, or tax advice. Users must conduct their own due diligence and consult qualified professionals before making any investment decisions. We accept no liability for any losses resulting from reliance on the published information.',
          fr: 'Les informations fournies sur ce site sont à titre informatif général uniquement. Nous ne sommes pas une agence immobilière ni un courtier financier, et nous ne fournissons pas de conseils d\'investissement, juridiques ou fiscaux. Les utilisateurs doivent effectuer leurs propres recherches et consulter des professionnels qualifiés avant de prendre toute décision d\'investissement. Nous déclinons toute responsabilité pour toute perte résultant de la confiance accordée aux informations publiées.'
        }
      },
      {
        title: { ar: '2. دقة المعلومات', en: '2. Accuracy of Information', fr: '2. Exactitude des informations' },
        content: {
          ar: 'نسعى جاهدين لضمان دقة المعلومات وحداثتها، ولكن سوق العقارات متغير باستمرار (الأسعار، القوانين، الضرائب). لا نقدم أي ضمانات، صريحة أو ضمنية، بشأن دقة أو اكتمال أو موثوقية المعلومات الواردة في الموقع. الأسعار المذكورة هي تقديرات وقد تختلف عن الواقع.',
          en: 'We strive to ensure the accuracy and currency of information, but the real estate market is constantly changing (prices, laws, taxes). We make no warranties, express or implied, regarding the accuracy, completeness, or reliability of the information on the website. Prices mentioned are estimates and may differ from reality.',
          fr: 'Nous nous efforçons d\'assurer l\'exactitude et l\'actualité des informations, mais le marché immobilier est en constante évolution (prix, lois, impôts). Nous ne donnons aucune garantie, expresse ou implicite, concernant l\'exactitude, l\'exhaustivité ou la fiabilité des informations présentes sur le site. Les prix mentionnés sont des estimations et peuvent différer de la réalité.'
        }
      },
      {
        title: { ar: '3. حقوق الملكية الفكرية', en: '3. Intellectual Property Rights', fr: '3. Droits de propriété intellectuelle' },
        content: {
          ar: 'جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص، التصاميم، الشعارات، الصور، والرسومات البيانية، هي ملك حصري لـ Immobilier Info ومحمية بموجب قوانين حقوق النشر. يُمنع منعاً باتاً نسخ أو توزيع أو تعديل أو إعادة نشر أي جزء من الموقع لأغراض تجارية دون الحصول على إذن كتابي مسبق.',
          en: 'All content on this website, including text, designs, logos, images, and charts, is the exclusive property of Immobilier Info and is protected by copyright laws. Copying, distributing, modifying, or republishing any part of the website for commercial purposes without prior written permission is strictly prohibited.',
          fr: 'Tout le contenu de ce site Web, y compris les textes, les conceptions, les logos, les images et les graphiques, est la propriété exclusive d\'Immobilier Info et est protégé par les lois sur le droit d\'auteur. Il est strictement interdit de copier, distribuer, modifier ou republier toute partie du site à des fins commerciales sans autorisation écrite préalable.'
        }
      },
      {
        title: { ar: '4. الروابط الخارجية والإعلانات', en: '4. External Links and Advertisements', fr: '4. Liens externes et publicités' },
        content: {
          ar: 'قد يحتوي موقعنا على روابط لمواقع خارجية أو إعلانات (مثل Google AdSense). نحن لا نتحكم في محتوى هذه المواقع ولا نتحمل أي مسؤولية عنها. وجود هذه الروابط لا يعني مصادقتنا عليها. استخدامك لهذه الروابط يكون على مسؤوليتك الخاصة.',
          en: 'Our website may contain links to external sites or advertisements (such as Google AdSense). We do not control the content of these sites and accept no responsibility for them. The inclusion of these links does not imply our endorsement. Your use of these links is at your own risk.',
          fr: 'Notre site Web peut contenir des liens vers des sites externes ou des publicités (comme Google AdSense). Nous ne contrôlons pas le contenu de ces sites et n\'assumons aucune responsabilité à leur égard. L\'inclusion de ces liens n\'implique pas notre approbation. Votre utilisation de ces liens est à vos propres risques.'
        }
      },
      {
        title: { ar: '5. التعديلات على الشروط', en: '5. Modifications to Terms', fr: '5. Modifications des conditions' },
        content: {
          ar: 'نحتفظ بالحق في تعديل أو تحديث هذه الشروط والأحكام في أي وقت دون إشعار مسبق. يُنصح بمراجعة هذه الصفحة بشكل دوري للاطلاع على أي تغييرات. استمرارك في استخدام الموقع بعد التعديلات يعني قبولك لها.',
          en: 'We reserve the right to modify or update these Terms and Conditions at any time without prior notice. It is recommended to review this page periodically for any changes. Your continued use of the site after modifications constitutes your acceptance of them.',
          fr: 'Nous nous réservons le droit de modifier ou de mettre à jour ces Termes et Conditions à tout moment sans préavis. Il est recommandé de consulter cette page périodiquement pour tout changement. Votre utilisation continue du site après les modifications constitue votre acceptation de celles-ci.'
        }
      },
      {
        title: { ar: '6. القانون الواجب التطبيق', en: '6. Governing Law', fr: '6. Loi applicable' },
        content: {
          ar: 'تخضع هذه الشروط والأحكام لقوانين المملكة المغربية. في حال وجود أي نزاع، يكون الاختصاص القضائي للمحاكم المختصة في المغرب.',
          en: 'These Terms and Conditions are governed by the laws of the Kingdom of Morocco. In the event of any dispute, jurisdiction lies with the competent courts in Morocco.',
          fr: 'Ces Termes et Conditions sont régis par les lois du Royaume du Maroc. En cas de litige, la compétence relève des tribunaux compétents au Maroc.'
        }
      }
    ]
  }
};

export const MOCK_ARTICLES: ContentData[] = [
  {
    id: 'turkey-real-estate-guide',
    category: 'guide',
    date: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2060',
    title: {
      ar: 'شراء عقار في تركيا: الدليل الشامل 2024',
      en: 'Buying Property in Turkey: The Complete Guide 2024',
      fr: 'Acheter une propriété en Turquie : Le guide complet 2024'
    },
    excerpt: {
      ar: 'كل ما تحتاج معرفته عن القوانين، الأسعار، وأفضل المناطق للاستثمار في إسطنبول وأنطاليا.',
      en: 'Everything you need to know about laws, prices, and the best areas to invest in Istanbul and Antalya.',
      fr: 'Tout ce que vous devez savoir sur les lois, les prix et les meilleurs endroits pour investir à Istanbul et Antalya.'
    },
    content: {
      ar: (
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            أصبحت تركيا في السنوات الأخيرة واحدة من أهم الوجهات العالمية للاستثمار العقاري، مدفوعة باقتصاد قوي، وبنية تحتية متطورة، وبرنامج "الجنسية التركية عبر الاستثمار" الذي جذب آلاف المستثمرين من حول العالم. في هذا الدليل الشامل لعام 2024، نضع بين يديك كل التفاصيل التي تحتاجها قبل اتخاذ قرار الشراء.
          </p>
          
          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">لماذا الاستثمار العقاري في تركيا؟</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>الموقع الاستراتيجي:</strong> جسر يربط بين أوروبا وآسيا.</li>
            <li><strong>الجنسية التركية:</strong> فرصة الحصول على جواز سفر قوي مقابل استثمار عقاري بقيمة 400,000 دولار أمريكي.</li>
            <li><strong>العوائد الاستثمارية:</strong> ارتفاع سنوي في قيمة العقارات (Capital Appreciation) وعوائد إيجارية مجزية، خاصة في المناطق السياحية.</li>
            <li><strong>جودة الحياة:</strong> تكلفة معيشة منخفضة مقارنة بأوروبا مع خدمات طبية وتعليمية عالية الجودة.</li>
          </ul>

          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">خطوات شراء عقار في تركيا للأجانب</h3>
          <ol className="list-decimal list-inside space-y-3 mr-4">
             <li><strong>اختيار العقار:</strong> قم بزيارة العقارات شخصياً أو عبر جولات افتراضية. تأكد من أن العقار مناسب لشروط الجنسية إذا كان هذا هدفك.</li>
             <li><strong>استخراج الرقم الضريبي:</strong> إجراء بسيط يتم في دائرة الضرائب في دقائق.</li>
             <li><strong>فتح حساب بنكي:</strong> لتحويل قيمة العقار رسمياً.</li>
             <li><strong>توقيع العقد ودفع العربون:</strong> يتم توقيع عقد بيع مبدئي يحدد السعر وطريقة الدفع.</li>
             <li><strong>استخراج تقرير التقييم العقاري:</strong> شرط إلزامي يوضح القيمة الحقيقية للعقار.</li>
             <li><strong>نقل الملكية (الطابو):</strong> يتم في دائرة السجل العقاري (Tapu Dairesi) بحضور المشتري أو وكيله.</li>
          </ol>

          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">أفضل المدن لشراء العقارات في تركيا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
               <h4 className="font-bold text-lg mb-2">إسطنبول (Istanbul)</h4>
               <p>العاصمة الاقتصادية، مثالية للاستثمار طويل الأمد وإعادة البيع. مناطق مثل باشاك شهير ومسلك تعد الأكثر رواجاً.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
               <h4 className="font-bold text-lg mb-2">أنطاليا (Antalya)</h4>
               <p>وجهة السياحة الأولى، مثالية للتأجير السياحي وشراء منازل العطلات. الأسعار هنا أقل من إسطنبول.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">الضرائب والرسوم</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
             <li><strong>ضريبة نقل الملكية (Tapu Harcı):</strong> 4% من قيمة العقار (غالباً تقسم مناصفة بين البائع والمشتري).</li>
             <li><strong>ضريبة القيمة المضافة (KDV):</strong> تتراوح بين 1% و 18% (يعفى منها الأجانب في حالات معينة).</li>
             <li><strong>رسوم الوكيل العقاري:</strong> عادة 2% من سعر العقار + ضريبة.</li>
          </ul>
        </div>
      ),
      en: (
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>Turkey has solidified its position as a top global destination for real estate investment, driven by a robust economy, advanced infrastructure, and the "Turkish Citizenship by Investment" program. In this 2024 guide, we provide everything you need to know.</p>
          
          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">Why Invest in Turkey?</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Strategic Location:</strong> A bridge between Europe and Asia.</li>
            <li><strong>Turkish Citizenship:</strong> Obtain a powerful passport for a $400,000 investment.</li>
            <li><strong>ROI:</strong> Strong capital appreciation and rental yields, especially in tourism hubs.</li>
            <li><strong>Quality of Life:</strong> Low cost of living with high-quality healthcare and education.</li>
          </ul>

          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">Steps to Buy Property</h3>
          <ol className="list-decimal list-inside space-y-3 ml-4">
             <li><strong>Property Selection:</strong> Visit properties personally or virtually.</li>
             <li><strong>Tax Number:</strong> Obtain a tax ID number (Vergi Numarası).</li>
             <li><strong>Bank Account:</strong> Open a Turkish bank account for transfers.</li>
             <li><strong>Contract & Deposit:</strong> Sign the sales agreement and pay a deposit.</li>
             <li><strong>Appraisal Report:</strong> Mandatory report showing real value.</li>
             <li><strong>Title Deed Transfer (Tapu):</strong> Completed at the Land Registry Office.</li>
          </ol>

          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">Best Cities to Buy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
               <h4 className="font-bold text-lg mb-2">Istanbul</h4>
               <p>The economic hub, perfect for long-term investment and resale. Areas like Basaksehir and Maslak are popular.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
               <h4 className="font-bold text-lg mb-2">Antalya</h4>
               <p>Tourism capital, ideal for holiday homes and short-term rentals. Lower prices than Istanbul.</p>
            </div>
          </div>
        </div>
      ),
      fr: (
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
           <p>La Turquie s'est imposée comme l'une des principales destinations mondiales pour l'investissement immobilier, portée par une économie robuste et le programme de "Citoyenneté Turque par l'Investissement".</p>
          
          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">Pourquoi investir en Turquie ?</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Emplacement stratégique :</strong> Un pont entre l'Europe et l'Asie.</li>
            <li><strong>Citoyenneté turque :</strong> Passeport pour un investissement de 400 000 $.</li>
            <li><strong>ROI :</strong> Forte appréciation du capital et rendements locatifs.</li>
          </ul>

          <h3 className="text-2xl font-bold text-marina-800 border-b pb-2">Étapes pour acheter</h3>
          <ol className="list-decimal list-inside space-y-3 ml-4">
             <li><strong>Sélection de la propriété :</strong> Visitez les biens.</li>
             <li><strong>Numéro fiscal :</strong> Obtenez un numéro d'identification fiscale.</li>
             <li><strong>Compte bancaire :</strong> Ouvrez un compte turc.</li>
             <li><strong>Contrat et acompte :</strong> Signez le contrat de vente.</li>
             <li><strong>Rapport d'évaluation :</strong> Obligatoire pour le titre de propriété.</li>
             <li><strong>Transfert de titre (Tapu) :</strong> Au bureau du registre foncier.</li>
          </ol>
        </div>
      )
    }
  },
  {
    id: 'dubai-investment-guide',
    category: 'guide',
    date: '2024-06-01',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2070',
    title: { ar: 'دليل الاستثمار العقاري في دبي 2024', en: 'Dubai Real Estate Investment Guide 2024', fr: 'Guide de l\'investissement immobilier à Dubaï 2024' },
    excerpt: { ar: 'اكتشف فرص الاستثمار في دبي، العوائد المعفاة من الضرائب، وأنواع التأشيرات الذهبية.', en: 'Discover investment opportunities in Dubai, tax-free returns, and Golden Visa types.', fr: 'Découvrez les opportunités d\'investissement à Dubaï, les rendements non imposables et les types de Golden Visa.' },
    content: { 
      ar: <div>المحتوى قيد الإعداد... تفاصيل كاملة عن دبي قريباً.</div>, 
      en: <div>Content coming soon... Full Dubai details shortly.</div>, 
      fr: <div>Contenu à venir... Détails complets sur Dubaï bientôt.</div> 
    }
  },
  {
    id: 'france-buying-process',
    category: 'guide',
    date: '2024-06-10',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073',
    title: { ar: 'كيف تشتري عقاراً في فرنسا: دليل قانوني', en: 'How to Buy Property in France: Legal Guide', fr: 'Comment acheter une propriété en France : Guide juridique' },
    excerpt: { ar: 'دليل خطوة بخطوة للإجراءات القانونية، رسوم كاتب العدل، والتمويل العقاري في فرنسا.', en: 'Step-by-step guide to legal procedures, notary fees, and mortgage financing in France.', fr: 'Guide étape par étape des procédures juridiques, des frais de notaire et du financement hypothécaire en France.' },
    content: { ar: <div>...</div>, en: <div>...</div>, fr: <div>...</div> }
  },
  {
    id: 'saudi-vision-2030-real-estate',
    category: 'news',
    date: '2024-06-20',
    image: 'https://images.unsplash.com/photo-1559653777-1c11fe96d60b?q=80&w=2070',
    title: { ar: 'طفرة العقارات في السعودية ورؤية 2030', en: 'Saudi Real Estate Boom & Vision 2030', fr: 'Boom immobilier saoudien & Vision 2030' },
    excerpt: { ar: 'تحليل للنمو الهائل في الرياض ونيوم، والفرص الجديدة للمستثمرين الأجانب.', en: 'Analysis of massive growth in Riyadh and NEOM, and new opportunities for foreign investors.', fr: 'Analyse de la croissance massive à Riyad et NEOM, et nouvelles opportunités pour les investisseurs étrangers.' },
    content: { ar: <div>...</div>, en: <div>...</div>, fr: <div>...</div> }
  },
  {
    id: 'spain-coastal-investment',
    category: 'guide',
    date: '2024-06-25',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070',
    title: { ar: 'الاستثمار في عقارات الساحل الإسباني', en: 'Investing in Spanish Coastal Property', fr: 'Investir dans l\'immobilier côtier espagnol' },
    excerpt: { ar: 'لماذا تعتبر إسبانيا الوجهة الأولى لمنازل العطلات؟ تحليل للمناطق والأسعار.', en: 'Why Spain remains the top destination for holiday homes? Analysis of regions and prices.', fr: 'Pourquoi l\'Espagne reste la première destination pour les maisons de vacances ? Analyse des régions et des prix.' },
    content: { ar: <div>...</div>, en: <div>...</div>, fr: <div>...</div> }
  },
  {
    id: 'usa-market-entry',
    category: 'guide',
    date: '2024-07-05',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070',
    title: { ar: 'دليل المستثمر الدولي للسوق الأمريكي', en: 'International Investor\'s Guide to US Market', fr: 'Guide de l\'investisseur international sur le marché américain' },
    excerpt: { ar: 'كيفية الدخول لأكبر سوق عقاري في العالم، الضرائب، وتأسيس الشركات.', en: 'How to enter the world\'s largest real estate market, taxes, and LLC formation.', fr: 'Comment entrer sur le plus grand marché immobilier du monde, impôts et création de LLC.' },
    content: { ar: <div>...</div>, en: <div>...</div>, fr: <div>...</div> }
  },
  {
    id: 'global-yield-comparison-2024',
    category: 'comparison',
    date: '2024-07-15',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070',
    title: { ar: 'مقارنة العوائد الإيجارية العالمية 2024', en: 'Global Rental Yield Comparison 2024', fr: 'Comparaison mondiale des rendements locatifs 2024' },
    excerpt: { ar: 'أين يجب أن تضع أموالك؟ مقارنة بين دبي، لندن، برلين، ونيويورك.', en: 'Where should you put your money? Comparison between Dubai, London, Berlin, and New York.', fr: 'Où placer votre argent ? Comparaison entre Dubaï, Londres, Berlin et New York.' },
    content: { ar: <div>...</div>, en: <div>...</div>, fr: <div>...</div> }
  }
];

export const FAQS: FAQItem[] = [
  {
    question: { ar: 'هل يمكن للأجانب شراء عقار في إيطاليا؟', en: 'Can foreigners buy property in Italy?', fr: 'Les étrangers peuvent-ils acheter une propriété en Italie ?' },
    answer: { ar: 'نعم، إيطاليا تسمح للأجانب بشراء العقارات دون قيود كبيرة، بشرط المعاملة بالمثل مع دولة المشتري.', en: 'Yes, Italy allows foreigners to buy property without major restrictions, subject to reciprocity treaties.', fr: 'Oui, l\'Italie permet aux étrangers d\'acheter des biens immobiliers sans restrictions majeures, sous réserve de réciprocité.' }
  },
  {
    question: { ar: 'ما هي الضرائب العقارية في فرنسا؟', en: 'What are property taxes in France?', fr: 'Quels sont les impôts fonciers en France ?' },
    answer: { ar: 'تشمل الضرائب رسوم كاتب العدل (حوالي 7-8٪) وضريبة الأملاك السنوية.', en: 'Taxes include notary fees (approx 7-8%) and annual property tax (Taxe Foncière).', fr: 'Les taxes comprennent les frais de notaire (environ 7-8%) et la taxe foncière annuelle.' }
  }
];

export const COUNTRIES_DATA: CountryData[] = [
  {
    id: 'turkey',
    name: { ar: 'تركيا', en: 'Turkey', fr: 'Turquie' },
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071',
    overview: { ar: 'تعد تركيا نقطة الالتقاء بين الشرق والغرب، وتتميز بسوق عقاري نشط مدعوم ببرنامج الجنسية عبر الاستثمار.', en: 'Turkey is the meeting point of East and West, featuring an active real estate market supported by the Citizenship by Investment program.', fr: 'La Turquie est le point de rencontre de l\'Est et de l\'Ouest, avec un marché immobilier actif soutenu par le programme de citoyenneté par investissement.' },
    marketTrends: { ar: 'يتجه السوق نحو العقارات الصديقة للبيئة والمجمعات السكنية المتكاملة في إسطنبول.', en: 'Market shifting towards eco-friendly properties and integrated compounds in Istanbul.', fr: 'Le marché s\'oriente vers des propriétés écologiques et des complexes intégrés à Istanbul.' },
    propertyTypes: { residential: { ar: 'شقق في مجمعات فاخرة، فلل مطلة على البوسفور.', en: 'Apartments in luxury compounds, Bosphorus villas.', fr: 'Appartements dans des complexes de luxe, villas sur le Bosphore.' }, commercial: { ar: 'مكاتب في مسلك وليفنت.', en: 'Offices in Maslak and Levent.', fr: 'Bureaux à Maslak et Levent.' }, tourism: { ar: 'فنادق وشقق فندقية في أنطاليا.', en: 'Hotels and hotel apartments in Antalya.', fr: 'Hôtels et appartements hôteliers à Antalya.' } },
    prices: { avgCapital: 2500, avgMajorCities: 1800, factors: { ar: ['التضخم', 'البنية التحتية', 'السياحة'], en: ['Inflation', 'Infrastructure', 'Tourism'], fr: ['Inflation', 'Infrastructure', 'Tourisme'] }, currency: 'USD/TRY' },
    legal: { ownershipRules: { ar: 'تملك حر للأجانب (باستثناء مناطق عسكرية وبعض الجنسيات).', en: 'Freehold for foreigners (except military zones and some nationalities).', fr: 'Pleine propriété pour les étrangers (sauf zones militaires et certaines nationalités).' }, taxes: { ar: 'ضريبة نقل الملكية 4%.', en: '4% Title deed transfer tax.', fr: 'Taxe de transfert de titre de propriété de 4%.' }, residencyBonus: { ar: 'جنسية تركية مقابل استثمار 400,000$.', en: 'Turkish Citizenship for $400k investment.', fr: 'Citoyenneté turque pour 400k$ d\'investissement.' } },
    bestCities: [ { name: { ar: 'إسطنبول', en: 'Istanbul', fr: 'Istanbul' }, description: { ar: 'العاصمة الاقتصادية والمركز الثقافي.', en: 'Economic capital and cultural hub.', fr: 'Capitale économique et centre culturel.' }, avgPricePerMeter: 3000 }, { name: { ar: 'أنطاليا', en: 'Antalya', fr: 'Antalya' }, description: { ar: 'عاصمة السياحة والشواطئ.', en: 'Tourism and beach capital.', fr: 'Capitale du tourisme et des plages.' }, avgPricePerMeter: 1800 } ],
    investment: { suitability: { ar: 'ممتازة للجنسية والعوائد طويلة الأمد.', en: 'Excellent for citizenship and long-term yields.', fr: 'Excellent pour la citoyenneté et les rendements à long terme.' }, expectedROI: '5-8%', bestSectors: { ar: 'سكني في إسطنبول، سياحي في أنطاليا.', en: 'Residential in Istanbul, Tourism in Antalya.', fr: 'Résidentiel à Istanbul, Tourisme à Antalya.' } },
    forecast: { ar: 'استقرار الأسعار بالدولار مع استمرار الطلب الأجنبي.', en: 'Dollar prices stabilizing with continued foreign demand.', fr: 'Stabilisation des prix en dollars avec une demande étrangère continue.' },
    conclusion: { ar: 'خيار استراتيجي لمن يبحث عن جنسية ثانية واستثمار عقاري نشط.', en: 'Strategic choice for those seeking second citizenship and active real estate investment.', fr: 'Choix stratégique pour ceux qui cherchent une seconde citoyenneté et un investissement immobilier actif.' }
  },
  {
    id: 'uae',
    name: { ar: 'الإمارات', en: 'UAE', fr: 'EAU' },
    image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2070',
    overview: { ar: 'مركز عالمي للأعمال والسياحة، يوفر بيئة استثمارية آمنة ومعفاة من الضرائب.', en: 'Global hub for business and tourism, offering a safe, tax-free investment environment.', fr: 'Pôle mondial des affaires et du tourisme, offrant un environnement d\'investissement sûr et sans impôt.' },
    marketTrends: { ar: 'طلب هائل على العقارات الفاخرة والمنازل المطلة على الماء.', en: 'Massive demand for luxury properties and waterfront homes.', fr: 'Demande massive pour les propriétés de luxe et les maisons au bord de l\'eau.' },
    propertyTypes: { residential: { ar: 'أبراج شاهقة، فلل في جزر صناعية.', en: 'High-rise towers, villas on man-made islands.', fr: 'Tours de grande hauteur, villas sur îles artificielles.' }, commercial: { ar: 'مكاتب في المناطق الحرة.', en: 'Offices in Free Zones.', fr: 'Bureaux dans les zones franches.' }, tourism: { ar: 'شقق فندقية فاخرة.', en: 'Luxury hotel apartments.', fr: 'Appartements hôteliers de luxe.' } },
    prices: { avgCapital: 4500, avgMajorCities: 3500, factors: { ar: ['أسعار النفط', 'الاستقرار الجيوسياسي', 'الإقامة الذهبية'], en: ['Oil prices', 'Geopolitical Stability', 'Golden Visa'], fr: ['Prix du pétrole', 'Stabilité géopolitique', 'Visa doré'] }, currency: 'AED' },
    legal: { ownershipRules: { ar: 'تملك حر للأجانب في مناطق محددة (Freehold Zones).', en: 'Freehold for foreigners in designated zones.', fr: 'Pleine propriété pour les étrangers dans des zones désignées.' }, taxes: { ar: 'لا ضرائب دخل أو أرباح رأسمالية.', en: 'No income or capital gains tax.', fr: 'Pas d\'impôt sur le revenu ou sur les plus-values.' }, residencyBonus: { ar: 'إقامة ذهبية لمدة 10 سنوات.', en: '10-year Golden Visa.', fr: 'Visa doré de 10 ans.' } },
    bestCities: [ { name: { ar: 'دبي', en: 'Dubai', fr: 'Dubaï' }, description: { ar: 'الوجهة العالمية للاستثمار والرفاهية.', en: 'Global destination for investment and luxury.', fr: 'Destination mondiale pour l\'investissement et le luxe.' }, avgPricePerMeter: 4500 }, { name: { ar: 'أبوظبي', en: 'Abu Dhabi', fr: 'Abu Dhabi' }, description: { ar: 'العاصمة الثقافية والسياسية.', en: 'Cultural and political capital.', fr: 'Capitale culturelle et politique.' }, avgPricePerMeter: 3800 } ],
    investment: { suitability: { ar: 'الأفضل عالمياً للعوائد الإيجارية المعفاة من الضرائب.', en: 'Best globally for tax-free rental yields.', fr: 'Meilleur mondialement pour les rendements locatifs non imposables.' }, expectedROI: '6-9%', bestSectors: { ar: 'تأجير قصير المدى وعقارات فاخرة.', en: 'Short-term rentals and luxury properties.', fr: 'Locations à court terme et propriétés de luxe.' } },
    forecast: { ar: 'نمو مستمر مدفوع بتدفق الأثرياء والشركات العالمية.', en: 'Continued growth driven by influx of HNWI and global companies.', fr: 'Croissance continue tirée par l\'afflux de HNWI et d\'entreprises mondiales.' },
    conclusion: { ar: 'استثمار آمن، مربح، وملاذ للثروات.', en: 'Safe, profitable investment, and a wealth haven.', fr: 'Investissement sûr, rentable et refuge de richesse.' }
  },
  {
    id: 'france',
    name: { ar: 'فرنسا', en: 'France', fr: 'France' },
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073',
    overview: { ar: 'سوق عقاري ناضج ومستقر، يجذب المستثمرين الباحثين عن الأمان والأناقة.', en: 'Mature and stable real estate market, attracting investors seeking safety and elegance.', fr: 'Marché immobilier mature et stable, attirant les investisseurs en quête de sécurité et d\'élégance.' },
    marketTrends: { ar: 'التركيز على تجديد العقارات وكفاءة الطاقة قبل الأولمبياد.', en: 'Focus on renovation and energy efficiency ahead of Olympics.', fr: 'Accent sur la rénovation et l\'efficacité énergétique avant les JO.' },
    propertyTypes: { residential: { ar: 'شقق هوسمانية تاريخية، منازل ريفية.', en: 'Historical Haussmann apartments, country homes.', fr: 'Appartements haussmanniens historiques, maisons de campagne.' }, commercial: { ar: 'متاجر فاخرة في باريس.', en: 'Luxury retail in Paris.', fr: 'Commerce de luxe à Paris.' }, tourism: { ar: 'شاليهات تزلج وعقارات الريفيرا.', en: 'Ski chalets and Riviera properties.', fr: 'Chalets de ski et propriétés de la Riviera.' } },
    prices: { avgCapital: 10500, avgMajorCities: 4500, factors: { ar: ['الموقع', 'الطاقة', 'التاريخ'], en: ['Location', 'Energy rating', 'History'], fr: ['Emplacement', 'Classe énergétique', 'Histoire'] }, currency: 'EUR' },
    legal: { ownershipRules: { ar: 'مفتوح للجميع دون قيود على الجنسية.', en: 'Open to everyone without nationality restrictions.', fr: 'Ouvert à tous sans restrictions de nationalité.' }, taxes: { ar: 'رسوم كاتب العدل 7-8%، ضريبة عقارية سنوية.', en: 'Notary fees 7-8%, annual property tax.', fr: 'Frais de notaire 7-8%, taxe foncière annuelle.' }, residencyBonus: { ar: 'فيزا زائر طويلة الأمد (لا تمنح حق العمل).', en: 'Long-stay Visitor Visa (no work rights).', fr: 'Visa visiteur long séjour (sans droit de travail).' } },
    bestCities: [ { name: { ar: 'باريس', en: 'Paris', fr: 'Paris' }, description: { ar: 'استثمار آمن وقيمة ثابتة.', en: 'Safe investment and stable value.', fr: 'Investissement sûr et valeur stable.' }, avgPricePerMeter: 10500 }, { name: { ar: 'نيس', en: 'Nice', fr: 'Nice' }, description: { ar: 'قلب الريفيرا الفرنسية.', en: 'Heart of the French Riviera.', fr: 'Cœur de la Côte d\'Azur.' }, avgPricePerMeter: 5200 } ],
    investment: { suitability: { ar: 'مثالية لحفظ الثروة والاستمتاع بنمط حياة فاخر.', en: 'Perfect for wealth preservation and luxury lifestyle.', fr: 'Parfait pour la préservation du patrimoine et le style de vie de luxe.' }, expectedROI: '3-4%', bestSectors: { ar: 'ستديوهات باريس للإيجار الطلابي/السياحي.', en: 'Paris studios for student/tourist rental.', fr: 'Studios à Paris pour location étudiante/touristique.' } },
    forecast: { ar: 'نمو مستدام مع استقرار في المناطق الفاخرة.', en: 'Sustainable growth with stability in luxury areas.', fr: 'Croissance durable avec stabilité dans les zones de luxe.' },
    conclusion: { ar: 'الخيار الكلاسيكي الآمن للمستثمر المحافظ.', en: 'The classic safe choice for the conservative investor.', fr: 'Le choix classique sûr pour l\'investisseur conservateur.' }
  },
  { id: 'germany', name: { ar: 'ألمانيا', en: 'Germany', fr: 'Allemagne' }, image: 'https://images.unsplash.com/photo-1473615695634-d284624d7322?q=80&w=2070', overview: { ar: 'أقوى اقتصاد أوروبي...', en: 'Strongest European economy...', fr: 'Plus forte économie européenne...' }, marketTrends: { ar: 'نقص في المعروض...', en: 'Supply shortage...', fr: 'Pénurie d\'offre...' }, propertyTypes: { residential: { ar: 'شقق تاريخية...', en: 'Historical...', fr: 'Appartements...' }, commercial: { ar: 'مكاتب...', en: 'Offices...', fr: 'Bureaux...' }, tourism: { ar: 'بيوت عطلات.', en: 'Holiday homes.', fr: 'Maisons de vacances.' } }, prices: { avgCapital: 6800, avgMajorCities: 5500, factors: { ar: ['الفائدة', 'الطاقة'], en: ['Interest rates', 'Energy'], fr: ['Taux d\'intérêt', 'Énergie'] }, currency: 'EUR' }, legal: { ownershipRules: { ar: 'مفتوح للجميع.', en: 'Open to everyone.', fr: 'Ouvert à tous.' }, taxes: { ar: 'تكاليف شراء مرتفعة...', en: 'High purchase costs...', fr: 'Frais d\'achat élevés...' }, residencyBonus: { ar: 'غير متاح.', en: 'Not available.', fr: 'Non disponible.' } }, bestCities: [ { name: { ar: 'برلين', en: 'Berlin', fr: 'Berlin' }, description: { ar: 'العاصمة.', en: 'The Capital.', fr: 'La Capitale.' }, avgPricePerMeter: 6800 }, { name: { ar: 'ميونخ', en: 'Munich', fr: 'Munich' }, description: { ar: 'المركز الاقتصادي.', en: 'Economic hub.', fr: 'Pôle économique.' }, avgPricePerMeter: 9500 } ], investment: { suitability: { ar: 'دخل إيجار مستقر.', en: 'Stable rental income.', fr: 'Revenu locatif stable.' }, expectedROI: '2.5-4%', bestSectors: { ar: 'سكني في المدن الكبرى.', en: 'Residential in big cities.', fr: 'Résidentiel dans les grandes villes.' } }, forecast: { ar: 'توقعات بتعافي السوق بحلول 2025...', en: 'Market expected to recover...', fr: 'Le marché devrait se redresser...' }, conclusion: { ar: 'استثمار طويل الأمد.', en: 'Long-term investment.', fr: 'Investissement à long terme.' } },
  { id: 'saudi-arabia', name: { ar: 'السعودية', en: 'Saudi Arabia', fr: 'Arabie Saoudite' }, image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2070', overview: { ar: 'المملكة تشهد تحولاً تاريخياً...', en: 'The Kingdom is undergoing...', fr: 'Le Royaume connaît...' }, marketTrends: { ar: 'طفرة في الرياض...', en: 'Boom in Riyadh...', fr: 'Essor à Riyad...' }, propertyTypes: { residential: { ar: 'فلل حديثة...', en: 'Modern villas...', fr: 'Villas modernes...' }, commercial: { ar: 'مكاتب في الرياض...', en: 'Offices in Riyadh...', fr: 'Bureaux à Riyad...' }, tourism: { ar: 'منتجعات فاخرة...', en: 'Luxury resorts...', fr: 'Stations de luxe...' } }, prices: { avgCapital: 2200, avgMajorCities: 1600, factors: { ar: ['رؤية 2030', 'النمو السكاني', 'الاستثمار الأجنبي'], en: ['Vision 2030', 'Population Growth', 'Foreign Investment'], fr: ['Vision 2030', 'Croissance démographique', 'Investissement étranger'] }, currency: 'SAR' }, legal: { ownershipRules: { ar: 'قوانين جديدة...', en: 'New laws...', fr: 'Nouvelles lois...' }, taxes: { ar: 'ضريبة 5%...', en: '5% Tax...', fr: 'Taxe 5%...' }, residencyBonus: { ar: 'الإقامة المميزة العقارية.', en: 'Premium Residency (Real Estate).', fr: 'Résidence Premium (Immobilier).' } }, bestCities: [ { name: { ar: 'الرياض', en: 'Riyadh', fr: 'Riyad' }, description: { ar: 'مركز الأعمال المستقبلي...', en: 'Future business hub...', fr: 'Futur centre d\'affaires...' }, avgPricePerMeter: 2200 }, { name: { ar: 'جدة', en: 'Jeddah', fr: 'Djeddah' }, description: { ar: 'بوابة البحر الأحمر...', en: 'Gateway to the Red Sea...', fr: 'Porte de la mer Rouge...' }, avgPricePerMeter: 1800 } ], investment: { suitability: { ar: 'مثالية للنمو الرأسمالي...', en: 'Perfect for long-term...', fr: 'Parfait pour l\'appréciation...' }, expectedROI: '6-8%', bestSectors: { ar: 'السكني في شمال الرياض.', en: 'Residential in North Riyadh.', fr: 'Résidentiel au nord de Riyad.' } }, forecast: { ar: 'ارتفاع قوي في الأسعار...', en: 'Strong price appreciation...', fr: 'Forte appréciation des prix...' }, conclusion: { ar: 'سوق واعد جداً...', en: 'Very promising market...', fr: 'Marché très prometteur...' } },
  { id: 'egypt', name: { ar: 'مصر', en: 'Egypt', fr: 'Égypte' }, image: 'https://images.unsplash.com/photo-1539650116455-251c93c58763?q=80&w=2070', overview: { ar: 'أكبر سوق عقاري في شمال أفريقيا...', en: 'Largest real estate market...', fr: 'Plus grand marché immobilier...' }, marketTrends: { ar: 'الطلب ينتقل بقوة...', en: 'Demand shifting strongly...', fr: 'La demande se déplace...' }, propertyTypes: { residential: { ar: 'شقق في كمبوندات...', en: 'Compound apartments...', fr: 'Appartements en résidence...' }, commercial: { ar: 'مولات...', en: 'Malls...', fr: 'Centres commerciaux...' }, tourism: { ar: 'وحدات فندقية...', en: 'Hotel units...', fr: 'Unités hôtelières...' } }, prices: { avgCapital: 1200, avgMajorCities: 800, factors: { ar: ['سعر الصرف', 'تكلفة البناء', 'الطلب المحلي'], en: ['Exchange Rate', 'Construction Cost', 'Local Demand'], fr: ['Taux de change', 'Coût de construction', 'Demande locale'] }, currency: 'EGP' }, legal: { ownershipRules: { ar: 'مسموح للأجانب...', en: 'Allowed for foreigners...', fr: 'Autorisé aux étrangers...' }, taxes: { ar: 'ضريبة تصرفات 2.5%.', en: '2.5% Disposition Tax.', fr: 'Taxe de disposition de 2,5%.' }, residencyBonus: { ar: 'الجنسية مقابل استثمار...', en: 'Citizenship by investment...', fr: 'Citoyenneté par investissement...' } }, bestCities: [ { name: { ar: 'العاصمة الإدارية', en: 'New Capital', fr: 'Nouvelle Capitale' }, description: { ar: 'مستقبل مصر...', en: 'Egypt\'s future...', fr: 'L\'avenir de l\'Égypte...' }, avgPricePerMeter: 1300 }, { name: { ar: 'الساحل الشمالي', en: 'North Coast', fr: 'Côte Nord' }, description: { ar: 'وجهة سياحية...', en: 'Luxury tourist destination.', fr: 'Destination touristique...' }, avgPricePerMeter: 1500 } ], investment: { suitability: { ar: 'تحوط ممتاز ضد التضخم.', en: 'Excellent hedge against inflation.', fr: 'Excellente couverture contre l\'inflation.' }, expectedROI: '10-15%', bestSectors: { ar: 'التجاري والإداري.', en: 'Commercial and Administrative.', fr: 'Commercial et Administratif.' } }, forecast: { ar: 'نمو مستمر في الأسعار.', en: 'Continued price growth.', fr: 'Croissance continue des prix.' }, conclusion: { ar: 'سوق ضخم بفرص كبيرة...', en: 'Massive market...', fr: 'Marché massif...' } },
  { id: 'spain', name: { ar: 'إسبانيا', en: 'Spain', fr: 'Espagne' }, image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070', overview: { ar: 'وجهة العطلات الأولى...', en: 'Europe\'s top holiday destination...', fr: 'Première destination...' }, marketTrends: { ar: 'طلب قوي مستمر...', en: 'Strong demand...', fr: 'Forte demande...' }, propertyTypes: { residential: { ar: 'شقق شاطئية...', en: 'Beach apartments...', fr: 'Appartements de plage...' }, commercial: { ar: 'فنادق...', en: 'Hotels...', fr: 'Hôtels...' }, tourism: { ar: 'إيجار عطلات (Airbnb).', en: 'Holiday rentals (Airbnb).', fr: 'Locations de vacances (Airbnb).' } }, prices: { avgCapital: 4000, avgMajorCities: 2800, factors: { ar: ['السياحة', 'المناخ', 'الموقع'], en: ['Tourism', 'Climate', 'Location'], fr: ['Tourisme', 'Climat', 'Emplacement'] }, currency: 'EUR' }, legal: { ownershipRules: { ar: 'مسموح للأجانب.', en: 'Allowed for foreigners.', fr: 'Autorisé aux étrangers.' }, taxes: { ar: 'ضريبة نقل 6-10%.', en: 'Transfer tax 6-10%.', fr: 'Taxe de transfert 6-10%.' }, residencyBonus: { ar: 'الفيزا الذهبية (قيد المراجعة).', en: 'Golden Visa (Under review).', fr: 'Visa doré (En cours de révision).' } }, bestCities: [ { name: { ar: 'مدريد', en: 'Madrid', fr: 'Madrid' }, description: { ar: 'العاصمة الحيوية.', en: 'Vibrant capital.', fr: 'Capitale dynamique.' }, avgPricePerMeter: 4200 }, { name: { ar: 'برشلونة', en: 'Barcelona', fr: 'Barcelone' }, description: { ar: 'تصميم وسياحة.', en: 'Design and tourism.', fr: 'Design et tourisme.' }, avgPricePerMeter: 4000 } ], investment: { suitability: { ar: 'نمط حياة + عائد إيجار.', en: 'Lifestyle + Rental Yield.', fr: 'Style de vie + Rendement locatif.' }, expectedROI: '4-6%', bestSectors: { ar: 'عقارات ساحلية.', en: 'Coastal properties.', fr: 'Propriétés côtières.' } }, forecast: { ar: 'نمو معتدل.', en: 'Moderate growth.', fr: 'Croissance modérée.' }, conclusion: { ar: 'أفضل توازن...', en: 'Best balance...', fr: 'Meilleur équilibre...' } },
  { id: 'usa', name: { ar: 'أمريكا', en: 'USA', fr: 'États-Unis' }, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070', overview: { ar: 'أكبر وأكثر الأسواق تنوعاً...', en: 'Largest and most diverse...', fr: 'Marché le plus grand...' }, marketTrends: { ar: 'ارتفاع الفائدة...', en: 'High rates...', fr: 'Les taux élevés...' }, propertyTypes: { residential: { ar: 'منازل مستقلة...', en: 'Single-family homes...', fr: 'Maisons individuelles...' }, commercial: { ar: 'مراكز بيانات...', en: 'Data centers...', fr: 'Centres de données...' }, tourism: { ar: 'عقارات فلوريدا...', en: 'Florida properties.', fr: 'Propriétés en Floride.' } }, prices: { avgCapital: 12000, avgMajorCities: 5000, factors: { ar: ['الفائدة', 'الوظائف', 'الهجرة'], en: ['Interest Rates', 'Jobs', 'Migration'], fr: ['Taux d\'intérêt', 'Emplois', 'Migration'] }, currency: 'USD' }, legal: { ownershipRules: { ar: 'مفتوح بالكامل...', en: 'Fully open...', fr: 'Entièrement ouvert...' }, taxes: { ar: 'ضرائب ممتلكات...', en: 'Annual property tax...', fr: 'Impôt foncier...' }, residencyBonus: { ar: 'لا يوجد.', en: 'None.', fr: 'Aucun.' } }, bestCities: [ { name: { ar: 'ميامي', en: 'Miami', fr: 'Miami' }, description: { ar: 'مركز المال...', en: 'Finance hub.', fr: 'Pôle financier.' }, avgPricePerMeter: 6500 }, { name: { ar: 'نيويورك', en: 'New York', fr: 'New York' }, description: { ar: 'عاصمة العالم.', en: 'Capital of the world.', fr: 'Capitale du monde.' }, avgPricePerMeter: 14000 } ], investment: { suitability: { ar: 'تنوع واستقرار.', en: 'Diversity and stability.', fr: 'Diversité et stabilité.' }, expectedROI: '4-8%', bestSectors: { ar: 'سكن متعدد العوائل.', en: 'Multifamily.', fr: 'Multifamilial.' } }, forecast: { ar: 'انتعاش مع انخفاض الفائدة.', en: 'Rebound as rates drop.', fr: 'Rebond avec la baisse des taux.' }, conclusion: { ar: 'السوق الذي لا يغيب عنه المستثمر.', en: 'The market smart investor never ignores.', fr: 'Le marché qu\'un investisseur intelligent n\'ignore jamais.' } },
  { id: 'uk', name: { ar: 'بريطانيا', en: 'UK', fr: 'Royaume-Uni' }, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070', overview: { ar: 'لندن تظل المركز المالي...', en: 'London remains...', fr: 'Londres reste...' }, marketTrends: { ar: 'تجديد المناطق...', en: 'Urban regeneration...', fr: 'Régénération urbaine...' }, propertyTypes: { residential: { ar: 'منازل فيكتورية...', en: 'Victorian homes...', fr: 'Maisons victoriennes...' }, commercial: { ar: 'مكاتب السيتي.', en: 'City offices.', fr: 'Bureaux de la City.' }, tourism: { ar: 'ريف إنجليزي.', en: 'English countryside.', fr: 'Campagne anglaise.' } }, prices: { avgCapital: 13000, avgMajorCities: 4000, factors: { ar: ['الفائدة', 'الضرائب'], en: ['Interest rates', 'Taxes'], fr: ['Taux d\'intérêt', 'Impôts'] }, currency: 'GBP' }, legal: { ownershipRules: { ar: 'مسموح للجميع.', en: 'Open to everyone.', fr: 'Ouvert à tous.' }, taxes: { ar: 'ضريبة الدمغة...', en: 'Stamp Duty...', fr: 'Droit de timbre...' }, residencyBonus: { ar: 'لا يوجد.', en: 'None.', fr: 'Aucun.' } }, bestCities: [ { name: { ar: 'لندن', en: 'London', fr: 'Londres' }, description: { ar: 'ملاذ آمن.', en: 'Safe haven.', fr: 'Refuge sûr.' }, avgPricePerMeter: 13000 }, { name: { ar: 'مانشستر', en: 'Manchester', fr: 'Manchester' }, description: { ar: 'نمو سريع.', en: 'Rapid growth.', fr: 'Croissance rapide.' }, avgPricePerMeter: 3500 } ], investment: { suitability: { ar: 'أمان طويل الأمد.', en: 'Long-term security.', fr: 'Sécurité à long terme.' }, expectedROI: '3-5%', bestSectors: { ar: 'إيجار في مدن الشمال.', en: 'Rentals in Northern cities.', fr: 'Locations dans les villes du nord.' } }, forecast: { ar: 'تعافي تدريجي.', en: 'Gradual recovery.', fr: 'Reprise progressive.' }, conclusion: { ar: 'لندن لا تفقد بريقها أبداً.', en: 'London never loses its shine.', fr: 'Londres ne perd jamais son éclat.' } },
  { id: 'canada', name: { ar: 'كندا', en: 'Canada', fr: 'Canada' }, image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1965', overview: { ar: 'سوق عقاري قوي...', en: 'Strong market...', fr: 'Marché fort...' }, marketTrends: { ar: 'ارتفاع الإيجارات...', en: 'Rising rents...', fr: 'Hausse des loyers...' }, propertyTypes: { residential: { ar: 'منازل منفصلة...', en: 'Detached homes...', fr: 'Maisons individuelles...' }, commercial: { ar: 'مراكز لوجستية.', en: 'Logistics centers.', fr: 'Centres logistiques.' }, tourism: { ar: 'شاليهات ويسلر.', en: 'Whistler chalets.', fr: 'Chalets à Whistler.' } }, prices: { avgCapital: 8500, avgMajorCities: 5000, factors: { ar: ['الهجرة', 'الفائدة'], en: ['Immigration', 'Interest Rates'], fr: ['Immigration', 'Taux d\'intérêt'] }, currency: 'CAD' }, legal: { ownershipRules: { ar: 'حظر مؤقت...', en: 'Temporary ban...', fr: 'Interdiction temporaire...' }, taxes: { ar: 'ضرائب نقل...', en: 'Transfer taxes...', fr: 'Taxes de transfert...' }, residencyBonus: { ar: 'لا يوجد.', en: 'None.', fr: 'Aucun.' } }, bestCities: [ { name: { ar: 'تورونتو', en: 'Toronto', fr: 'Toronto' }, description: { ar: 'المركز المالي.', en: 'Financial hub.', fr: 'Centre financier.' }, avgPricePerMeter: 9000 }, { name: { ar: 'فانكوفر', en: 'Vancouver', fr: 'Vancouver' }, description: { ar: 'بوابة آسيا.', en: 'Gateway to Asia.', fr: 'Porte de l\'Asie.' }, avgPricePerMeter: 10000 } ], investment: { suitability: { ar: 'جيد للمدى الطويل...', en: 'Good long-term...', fr: 'Bon à long terme...' }, expectedROI: '3-5%', bestSectors: { ar: 'سكن متعدد العوائل.', en: 'Multi-family.', fr: 'Multifamilial.' } }, forecast: { ar: 'نمو مستمر...', en: 'Continued growth...', fr: 'Croissance continue...' }, conclusion: { ar: 'سوق صلب جداً.', en: 'Very solid market.', fr: 'Marché très solide.' } },
  { id: 'australia', name: { ar: 'أستراليا', en: 'Australia', fr: 'Australie' }, image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030', overview: { ar: 'نمط حياة ممتاز...', en: 'Excellent lifestyle...', fr: 'Excellent style de vie...' }, marketTrends: { ar: 'أزمة إيجارات...', en: 'Rental crisis...', fr: 'Crise locative...' }, propertyTypes: { residential: { ar: 'منازل شاطئية...', en: 'Beach houses...', fr: 'Maisons de plage...' }, commercial: { ar: 'مكاتب سيدني.', en: 'Sydney offices.', fr: 'Bureaux de Sydney.' }, tourism: { ar: 'ساحل الذهب.', en: 'Gold Coast.', fr: 'Gold Coast.' } }, prices: { avgCapital: 11000, avgMajorCities: 7000, factors: { ar: ['النمو السكاني', 'العرض المحدود'], en: ['Population growth', 'Limited supply'], fr: ['Croissance démographique', 'Offre limitée'] }, currency: 'AUD' }, legal: { ownershipRules: { ar: 'موافقة FIRB...', en: 'FIRB approval needed...', fr: 'Approbation FIRB requise...' }, taxes: { ar: 'رسوم دمغة...', en: 'High stamp duty...', fr: 'Surtaxe élevée...' }, residencyBonus: { ar: 'لا يوجد.', en: 'None.', fr: 'Aucun.' } }, bestCities: [ { name: { ar: 'سيدني', en: 'Sydney', fr: 'Sydney' }, description: { ar: 'المدينة العالمية.', en: 'The global city.', fr: 'La ville mondiale.' }, avgPricePerMeter: 12000 }, { name: { ar: 'بريزبان', en: 'Brisbane', fr: 'Brisbane' }, description: { ar: 'مدينة الأولمبياد القادمة.', en: 'Future Olympics city.', fr: 'Ville des futurs JO.' }, avgPricePerMeter: 6000 } ], investment: { suitability: { ar: 'استقرار وأمان.', en: 'Stability and safety.', fr: 'Stabilité et sécurité.' }, expectedROI: '3-4%', bestSectors: { ar: 'شقق جديدة.', en: 'New apartments.', fr: 'Nouveaux appartements.' } }, forecast: { ar: 'ارتفاع الأسعار.', en: 'Prices rising.', fr: 'Hausse des prix.' }, conclusion: { ar: 'استثمار آمن طويل الأمد.', en: 'Safe long-term investment.', fr: 'Investissement sûr à long terme.' } },
  { id: 'japan', name: { ar: 'اليابان', en: 'Japan', fr: 'Japon' }, image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070', overview: { ar: 'سوق آمن ومستقر...', en: 'Safe, stable market...', fr: 'Marché sûr et stable...' }, marketTrends: { ar: 'ارتفاع أسعار الشقق...', en: 'Rising prices...', fr: 'Hausse des prix...' }, propertyTypes: { residential: { ar: 'شقق صغيرة...', en: 'Small apartments...', fr: 'Petits appartements...' }, commercial: { ar: 'فنادق...', en: 'Hotels...', fr: 'Hôtels...' }, tourism: { ar: 'بيوت تقليدية...', en: 'Traditional...', fr: 'Traditionnel...' } }, prices: { avgCapital: 9000, avgMajorCities: 5000, factors: { ar: ['سعر الين', 'الفائدة المنخفضة'], en: ['Yen rate', 'Low interest'], fr: ['Taux du Yen', 'Taux bas'] }, currency: 'JPY' }, legal: { ownershipRules: { ar: 'تملك حر كامل...', en: 'Full freehold...', fr: 'Pleine propriété...' }, taxes: { ar: 'ضرائب شراء وتملك...', en: 'Moderate taxes.', fr: 'Taxes modérées.' }, residencyBonus: { ar: 'لا يوجد.', en: 'None.', fr: 'Aucun.' } }, bestCities: [ { name: { ar: 'طوكيو', en: 'Tokyo', fr: 'Tokyo' }, description: { ar: 'أكبر مدينة...', en: 'World\'s largest city.', fr: 'La plus grande ville...' }, avgPricePerMeter: 10000 }, { name: { ar: 'أوساكا', en: 'Osaka', fr: 'Osaka' }, description: { ar: 'مركز تجاري...', en: 'Commercial hub.', fr: 'Pôle commercial...' }, avgPricePerMeter: 6000 } ], investment: { suitability: { ar: 'تنويع المحفظة.', en: 'Portfolio diversification.', fr: 'Diversification du portefeuille.' }, expectedROI: '3-4.5%', bestSectors: { ar: 'سكني في وسط طوكيو.', en: 'Residential in Central Tokyo.', fr: 'Résidentiel au centre de Tokyo.' } }, forecast: { ar: 'استقرار مع نمو طفيف.', en: 'Stability with slight growth.', fr: 'Stabilité avec légère croissance.' }, conclusion: { ar: 'سوق فريد ومفتوح.', en: 'Unique and open market.', fr: 'Marché unique et ouvert.' } },
  { id: 'morocco', name: { ar: 'المغرب', en: 'Morocco', fr: 'Maroc' }, image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070', overview: { ar: 'بوابة أفريقيا...', en: 'Gateway to Africa...', fr: 'Porte de l\'Afrique...' }, marketTrends: { ar: 'طلب متزايد...', en: 'Growing demand...', fr: 'Demande croissante...' }, propertyTypes: { residential: { ar: 'رياض، شقق.', en: 'Riads, apartments.', fr: 'Riads, appartements.' }, commercial: { ar: 'مكاتب الدار البيضاء.', en: 'Casablanca offices.', fr: 'Bureaux à Casablanca.' }, tourism: { ar: 'فنادق.', en: 'Hotels.', fr: 'Hôtels.' } }, prices: { avgCapital: 1500, avgMajorCities: 1000, factors: { ar: ['السياحة', 'الجفاف'], en: ['Tourism', 'Drought'], fr: ['Tourisme', 'Sécheresse'] }, currency: 'MAD' }, legal: { ownershipRules: { ar: 'مفتوح للأجانب...', en: 'Open...', fr: 'Ouvert...' }, taxes: { ar: 'منخفضة.', en: 'Low.', fr: 'Faible.' }, residencyBonus: { ar: 'سهولة الإقامة.', en: 'Easy residency.', fr: 'Résidence facile.' } }, bestCities: [ { name: { ar: 'مراكش', en: 'Marrakech', fr: 'Marrakech' }, description: { ar: 'السياحة.', en: 'Tourism.', fr: 'Tourisme.' }, avgPricePerMeter: 1200 }, { name: { ar: 'الدار البيضاء', en: 'Casablanca', fr: 'Casablanca' }, description: { ar: 'الأعمال.', en: 'Business.', fr: 'Affaires.' }, avgPricePerMeter: 1800 } ], investment: { suitability: { ar: 'سياحة وتقاعد.', en: 'Tourism and retirement.', fr: 'Tourisme et retraite.' }, expectedROI: '5-7%', bestSectors: { ar: 'الرياض السياحي.', en: 'Tourist Riads.', fr: 'Riads touristiques.' } }, forecast: { ar: 'نمو.', en: 'Growth.', fr: 'Croissance.' }, conclusion: { ar: 'سوق صاعد.', en: 'Emerging market.', fr: 'Marché émergent.' } },
  { id: 'qatar', name: { ar: 'قطر', en: 'Qatar', fr: 'Qatar' }, image: 'https://images.unsplash.com/photo-1575389667793-27293b6e7922?q=80&w=2070', overview: { ar: 'بنية تحتية عالمية...', en: 'World-class infrastructure...', fr: 'Infrastructure de classe mondiale...' }, marketTrends: { ar: 'تصحيح بعد كأس العالم...', en: 'Correction post-World Cup...', fr: 'Correction après la Coupe du Monde...' }, propertyTypes: { residential: { ar: 'شقق فاخرة.', en: 'Luxury apartments.', fr: 'Appartements de luxe.' }, commercial: { ar: 'مكاتب.', en: 'Offices.', fr: 'Bureaux.' }, tourism: { ar: 'فنادق.', en: 'Hotels.', fr: 'Hôtels.' } }, prices: { avgCapital: 3500, avgMajorCities: 3000, factors: { ar: ['الغاز', 'الفعاليات'], en: ['Gas', 'Events'], fr: ['Gaz', 'Événements'] }, currency: 'QAR' }, legal: { ownershipRules: { ar: 'تملك حر في مناطق محددة.', en: 'Freehold in specific zones.', fr: 'Pleine propriété...' }, taxes: { ar: 'منخفضة.', en: 'Low.', fr: 'Faible.' }, residencyBonus: { ar: 'إقامة عقارية.', en: 'Real Estate Residency.', fr: 'Résidence immobilière.' } }, bestCities: [ { name: { ar: 'الدوحة', en: 'Doha', fr: 'Doha' }, description: { ar: 'العاصمة.', en: 'Capital.', fr: 'Capitale.' }, avgPricePerMeter: 3500 }, { name: { ar: 'لوسيل', en: 'Lusail', fr: 'Lusail' }, description: { ar: 'مدينة المستقبل.', en: 'Future city.', fr: 'Ville du futur.' }, avgPricePerMeter: 3800 } ], investment: { suitability: { ar: 'جودة ودخل.', en: 'Quality and income.', fr: 'Qualité et revenu.' }, expectedROI: '5-6%', bestSectors: { ar: 'سكني فاخر.', en: 'Luxury residential.', fr: 'Résidentiel de luxe.' } }, forecast: { ar: 'استقرار.', en: 'Stable.', fr: 'Stable.' }, conclusion: { ar: 'فخامة واستقرار.', en: 'Luxury and stability.', fr: 'Luxe et stabilité.' } }
];