import React, { useState, createContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { 
  Menu, X, Globe, MapPin, Building2, BookOpen, Calculator, HelpCircle, Mail, 
  Facebook, Twitter, Instagram, Linkedin, Search, Phone, Briefcase, TrendingUp,
  Scale, Home as HomeIcon, Landmark, Info, Shield, FileText
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Language } from './types';
import { SUPPORTED_LANGUAGES, DICTIONARY, NAV_ITEMS, MOCK_ARTICLES, FAQS, COUNTRIES_DATA, STATIC_PAGES } from './constants';
import AdUnit from './components/AdUnit';
import Tools from './components/Tools';
import ChatBot from './components/ChatBot';

// Context definition
interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isRTL: boolean;
}

export const AppContext = createContext<AppContextType>({
  lang: 'en',
  setLang: () => {},
  isRTL: false,
});

// --- SUB-COMPONENTS ---

const Header = () => {
  const { lang, setLang, isRTL } = React.useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-marina-600 text-white p-2 rounded-lg group-hover:bg-marina-800 transition">
              <Building2 size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-marina-900 leading-none">Immobilier</span>
              <span className="text-sm font-medium text-gray-500 leading-none tracking-wider">Info</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-gray-600 hover:text-marina-600 font-medium transition"
              >
                {item.label[lang]}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-marina-600 p-2">
                <Globe size={20} />
                <span className="uppercase font-bold">{lang}</span>
              </button>
              <div className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block w-24 border border-gray-100`}>
                {SUPPORTED_LANGUAGES.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 ${lang === l ? 'font-bold text-marina-600' : 'text-gray-700'}`}
                  >
                    {l === 'ar' ? 'العربية' : l === 'en' ? 'English' : 'Français'}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 font-medium px-2 py-1 hover:bg-marina-50 rounded"
                >
                  {item.label[lang]}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const Footer = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];

  return (
    <footer className="bg-marina-900 text-white pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="text-marina-300" />
              <span className="text-xl font-bold">Immobilier Info</span>
            </div>
            <p className="text-marina-100 text-sm leading-relaxed mb-4">
              {t.footerDesc}
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-marina-200 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-marina-200 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-marina-200 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-marina-200 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map(item => (
                <li key={item.id}>
                  <Link to={item.path} className="text-marina-200 hover:text-white text-sm transition">
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-marina-200 hover:text-white text-sm transition">{t.aboutUs}</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-marina-200 hover:text-white text-sm transition">{t.privacyPolicy}</Link>
              </li>
              <li>
                <Link to="/terms" className="text-marina-200 hover:text-white text-sm transition">{t.termsConditions}</Link>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-4">{t.contactUs}</h3>
             <ul className="space-y-3 text-sm text-marina-200">
               <li className="flex items-center gap-2">
                 <MapPin size={16} />
                 <span>Maroc</span>
               </li>
               <li className="flex items-center gap-2">
                 <Mail size={16} />
                 <span>mdelhaddar@gmail.com</span>
               </li>
               <li className="flex items-center gap-2">
                 <Phone size={16} />
                 <span dir="ltr">+212 710544715</span>
               </li>
             </ul>
          </div>
        </div>
        <div className="border-t border-marina-800 pt-6 text-center text-sm text-marina-400">
          © {new Date().getFullYear()} Immobilier Info. {t.rights}.
        </div>
      </div>
    </footer>
  );
};

// --- PAGES ---

const Home = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];

  return (
    <div>
      {/* Hero */}
      <section className="bg-marina-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-marina-900 to-marina-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.welcome}</h1>
          <p className="text-xl text-marina-100 max-w-2xl mx-auto mb-8">{t.tagline}</p>
          <div className="max-w-md mx-auto relative">
             <input 
               type="text" 
               placeholder={t.searchPlaceholder}
               className="w-full py-3 px-5 rounded-full text-gray-800 focus:outline-none shadow-lg pl-10 rtl:pl-5 rtl:pr-10"
             />
             <Search className="absolute top-3 left-3 rtl:left-auto rtl:right-3 text-gray-400" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        
        {/* Quick Links to Major Countries */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">{NAV_ITEMS[1].label[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {COUNTRIES_DATA.slice(0, 8).map(c => (
            <Link key={c.id} to={`/country/${c.id}`} className="bg-white group rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition">
              {/* Resized image container from h-32 to h-48 */}
              <div className="h-48 overflow-hidden">
                <img src={c.image} alt={c.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 truncate">{c.name[lang]}</h3>
                <div className="bg-marina-50 text-marina-600 p-1 rounded-full shrink-0">
                  <TrendingUp size={16} />
                </div>
              </div>
            </Link>
          ))}
          <Link to="/countries" className="bg-gray-50 p-6 rounded-lg border border-dashed flex flex-col items-center justify-center text-center text-gray-400 h-full min-h-[200px] hover:bg-gray-100 hover:text-marina-600 transition">
            <Globe className="mb-2" />
            <span>View All Countries</span>
          </Link>
        </div>

        <AdUnit format="horizontal" />
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">{t.featuredArticles}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_ARTICLES.slice(0, 3).map(article => (
            <div key={article.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
              {/* Resized article image from h-48 to h-64 */}
              <img src={article.image} alt="Article" className="w-full h-64 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs font-bold text-marina-600 uppercase mb-2">{article.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title[lang]}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{article.excerpt[lang]}</p>
                <Link to={`/blog/${article.id}`} className="text-marina-600 font-medium hover:underline self-start">
                  {t.readMore} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ArticleDetail = () => {
  const { lang } = React.useContext(AppContext);
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const article = MOCK_ARTICLES.find(a => a.id === id);

  if (!article) return <div className="p-12 text-center">Article not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border p-6 md:p-10">
        <span className="text-marina-600 font-bold uppercase tracking-wider text-sm">{article.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">{article.title[lang]}</h1>
        <img src={article.image} alt={article.title[lang]} className="w-full h-[500px] object-cover rounded-lg mb-8" />
        <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
          {article.content[lang]}
        </div>
        <AdUnit format="horizontal" />
      </div>
    </div>
  );
};

// --- NEW COUNTRY PAGE COMPONENT ---
const CountryPage = () => {
  const { id } = useParams();
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];
  
  const country = COUNTRIES_DATA.find(c => c.id === id);

  if (!country) return <div className="container mx-auto py-20 text-center">Country data not found.</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Country Header - Increased height to 500px */}
      <div className="relative h-[500px]">
        <img src={country.image} className="w-full h-full object-cover" alt={country.name[lang]} />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
           <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center px-4">{country.name[lang]}</h1>
           <p className="text-xl opacity-90">{t.tagline}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-marina-500">
              <div className="flex items-center gap-3 mb-4 text-marina-800">
                <Globe className="w-6 h-6" />
                <h2 className="text-2xl font-bold">{t.overview}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{country.overview[lang]}</p>
            </div>

            <AdUnit format="horizontal" />

            {/* Market Trends */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-marina-800">
                <TrendingUp className="w-6 h-6" />
                <h2 className="text-2xl font-bold">{t.marketTrends}</h2>
              </div>
              <p className="text-gray-700 mb-6">{country.marketTrends[lang]}</p>
              
              {/* Property Types Grid */}
              <h3 className="font-bold text-lg mb-4 text-gray-900 border-b pb-2">{t.propertyTypes}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-blue-50 p-4 rounded-lg">
                    <HomeIcon className="text-blue-600 mb-2" />
                    <h4 className="font-bold mb-2">Residential</h4>
                    <p className="text-sm text-gray-600">{country.propertyTypes.residential[lang]}</p>
                 </div>
                 <div className="bg-green-50 p-4 rounded-lg">
                    <Briefcase className="text-green-600 mb-2" />
                    <h4 className="font-bold mb-2">Commercial</h4>
                    <p className="text-sm text-gray-600">{country.propertyTypes.commercial[lang]}</p>
                 </div>
                 <div className="bg-purple-50 p-4 rounded-lg">
                    <MapPin className="text-purple-600 mb-2" />
                    <h4 className="font-bold mb-2">Tourism</h4>
                    <p className="text-sm text-gray-600">{country.propertyTypes.tourism[lang]}</p>
                 </div>
              </div>
            </div>

            {/* Prices & Economics */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-marina-800">
                <Calculator className="w-6 h-6" />
                <h2 className="text-2xl font-bold">{t.prices}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border rounded-xl p-6 text-center bg-gray-50">
                   <div className="text-gray-500 mb-2 text-sm">{t.avgPrice} - Capital</div>
                   <div className="text-3xl font-bold text-marina-700">
                     {country.prices.avgCapital} <span className="text-sm font-normal text-gray-400">{country.prices.currency}/m²</span>
                   </div>
                </div>
                <div className="border rounded-xl p-6 text-center bg-gray-50">
                   <div className="text-gray-500 mb-2 text-sm">{t.avgPrice} - Major Cities</div>
                   <div className="text-3xl font-bold text-marina-600">
                     {country.prices.avgMajorCities} <span className="text-sm font-normal text-gray-400">{country.prices.currency}/m²</span>
                   </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-bold mb-3">Factors Affecting Prices:</h3>
                <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  {country.prices.factors[lang].map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal & Taxes */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-yellow-500">
               <div className="flex items-center gap-3 mb-6 text-yellow-700">
                <Scale className="w-6 h-6" />
                <h2 className="text-2xl font-bold">{t.legal}</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Ownership Rules</h3>
                  <p className="text-gray-700">{country.legal.ownershipRules[lang]}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{t.taxes}</h3>
                  <p className="text-gray-700">{country.legal.taxes[lang]}</p>
                </div>
                {country.legal.residencyBonus[lang] && (
                  <div className="bg-yellow-50 p-4 rounded-md">
                     <h3 className="font-bold text-yellow-800 mb-2">{t.residency}</h3>
                     <p className="text-sm text-yellow-900">{country.legal.residencyBonus[lang]}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Best Cities */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-marina-800">
                <Building2 className="w-6 h-6" />
                <h2 className="text-2xl font-bold">{t.bestCities}</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {country.bestCities.map((city, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-4 border-b pb-4 last:border-0">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800 mb-2">{city.name[lang]}</h3>
                      <p className="text-gray-600 text-sm mb-3">{city.description[lang]}</p>
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        Avg: {city.avgPricePerMeter} {country.prices.currency}/m²
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion & Forecast */}
            <div className="bg-marina-900 text-white p-8 rounded-lg shadow-lg">
               <h2 className="text-2xl font-bold mb-4">{t.conclusion}</h2>
               <p className="leading-relaxed opacity-90 mb-6">{country.conclusion[lang]}</p>
               
               <div className="bg-white/10 p-4 rounded-lg">
                 <h3 className="font-bold mb-2 flex items-center gap-2">
                   <TrendingUp className="w-4 h-4" /> {t.forecast}
                 </h3>
                 <p className="text-sm">{country.forecast[lang]}</p>
               </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-24">
               <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">{t.investmentOps}</h3>
               
               <div className="mb-6">
                 <span className="block text-sm text-gray-500 mb-1">{t.roi}</span>
                 <span className="text-3xl font-bold text-green-600">{country.investment.expectedROI}</span>
               </div>
               
               <div className="mb-6">
                 <span className="block text-sm text-gray-500 mb-1">{t.currency}</span>
                 <span className="font-mono bg-gray-100 px-2 py-1 rounded">{country.prices.currency}</span>
               </div>

               <p className="text-sm text-gray-600 italic mb-6">
                 "{country.investment.suitability[lang]}"
               </p>

               <Link to="/contact" className="block w-full bg-marina-600 text-white text-center py-3 rounded-lg font-bold hover:bg-marina-700 transition">
                 {t.contactUs}
               </Link>
            </div>
            
            <AdUnit format="square" className="mx-auto" />
          </div>

        </div>
      </div>
    </div>
  );
};

const Countries = () => {
  const { lang } = React.useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{NAV_ITEMS[1].label[lang]}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COUNTRIES_DATA.map(c => (
          <Link key={c.id} to={`/country/${c.id}`} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition group overflow-hidden border">
             {/* Resized list image from h-48 to h-64 */}
             <div className="h-64 overflow-hidden relative">
               <img src={c.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={c.name[lang]} />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                 <h3 className="text-white font-bold text-xl">{c.name[lang]}</h3>
               </div>
             </div>
             <div className="p-4">
               <p className="text-gray-600 text-sm line-clamp-3">{c.overview[lang]}</p>
               <div className="mt-4 flex items-center text-marina-600 font-bold text-sm">
                 Explore Market <TrendingUp className="w-4 h-4 ml-1 rtl:mr-1 rtl:ml-0" />
               </div>
             </div>
          </Link>
        ))}
      </div>
      <AdUnit format="horizontal" />
    </div>
  );
};

const Blog = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{NAV_ITEMS.find(n => n.id === 'blog')?.label[lang]}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_ARTICLES.map(article => (
          <div key={article.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
            <img src={article.image} alt="Article" className="w-full h-64 object-cover" />
            <div className="p-5 flex-1 flex flex-col">
              <span className="text-xs font-bold text-marina-600 uppercase mb-2">{article.category}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title[lang]}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">{article.excerpt[lang]}</p>
              <Link to={`/blog/${article.id}`} className="text-marina-600 font-medium hover:underline self-start">
                {t.readMore} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
      <AdUnit format="horizontal" />
    </div>
  );
};

const Cities = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];

  // Flatten cities
  const allCities = COUNTRIES_DATA.flatMap(country => 
    country.bestCities.map(city => ({
      ...city,
      countryName: country.name[lang],
      countryId: country.id,
      currency: country.prices.currency
    }))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{NAV_ITEMS.find(n => n.id === 'cities')?.label[lang] || 'Cities'}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCities.map((city, idx) => (
          <Link key={idx} to={`/country/${city.countryId}`} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition">
             <div className="flex justify-between items-start mb-4">
               <div>
                 <h3 className="font-bold text-xl text-gray-800">{city.name[lang]}</h3>
                 <span className="text-sm text-marina-600 font-medium">{city.countryName}</span>
               </div>
               <Building2 className="text-gray-300" />
             </div>
             <p className="text-gray-600 text-sm mb-4 h-12 line-clamp-2">{city.description[lang]}</p>
             <div className="pt-4 border-t flex justify-between items-center">
               <span className="text-xs text-gray-500">{t.avgPrice}</span>
               <span className="font-bold text-gray-900">{city.avgPricePerMeter} {city.currency}/m²</span>
             </div>
          </Link>
        ))}
      </div>
      <AdUnit format="horizontal" />
    </div>
  );
};

const FAQ = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];

  return (
    <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-8">{t.quickLinks} - {NAV_ITEMS[5].label[lang]}</h1>
       <div className="space-y-4 max-w-3xl mx-auto">
         {FAQS.map((faq, idx) => (
           <div key={idx} className="bg-white border rounded-lg p-6 shadow-sm">
             <h3 className="font-bold text-lg text-marina-900 mb-2 flex items-start gap-2">
               <HelpCircle className="w-5 h-5 mt-1 shrink-0 text-marina-500" />
               {faq.question[lang]}
             </h3>
             <p className="text-gray-600 pl-7 rtl:pl-0 rtl:pr-7">{faq.answer[lang]}</p>
           </div>
         ))}
       </div>
       <AdUnit format="horizontal" />
    </div>
  );
};

const Contact = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border">
        <h1 className="text-3xl font-bold mb-6 text-center">{t.contactUs}</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.contactName}</label>
            <input type="text" className="w-full border rounded p-2 focus:ring-2 focus:ring-marina-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.contactEmail}</label>
            <input type="email" className="w-full border rounded p-2 focus:ring-2 focus:ring-marina-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.contactMessage}</label>
            <textarea rows={4} className="w-full border rounded p-2 focus:ring-2 focus:ring-marina-500 outline-none"></textarea>
          </div>
          <button className="w-full bg-marina-600 text-white py-2 rounded font-bold hover:bg-marina-700 transition">
            {t.send}
          </button>
        </form>
      </div>
    </div>
  );
};

const About = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];
  const content = STATIC_PAGES.about;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-marina-900 mb-6">{t.aboutUs}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{content.description[lang]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="bg-marina-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-marina-600">
              <TrendingUp size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.mission}</h3>
            <p className="text-gray-600 text-sm">{content.mission[lang]}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
             <div className="bg-marina-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-marina-600">
              <Globe size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.vision}</h3>
             <p className="text-gray-600 text-sm">{content.vision[lang]}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
             <div className="bg-marina-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-marina-600">
              <Scale size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.values}</h3>
             <p className="text-gray-600 text-sm">{content.mission[lang]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];
  const content = STATIC_PAGES.privacy;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
        <h1 className="text-3xl font-bold text-marina-900 mb-6 flex items-center gap-2">
          <Shield className="w-8 h-8 text-marina-600" />
          {t.privacyPolicy}
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed border-b pb-6">
          {content.intro[lang]}
        </p>
        
        <div className="space-y-8">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold text-gray-800 mb-3">{section.title[lang]}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content[lang]}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t text-sm text-gray-500">
          {t.lastUpdated}: 2024
        </div>
      </div>
    </div>
  );
};

const TermsConditions = () => {
  const { lang } = React.useContext(AppContext);
  const t = DICTIONARY[lang];
  const content = STATIC_PAGES.terms;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
        <h1 className="text-3xl font-bold text-marina-900 mb-6 flex items-center gap-2">
          <FileText className="w-8 h-8 text-marina-600" />
          {t.termsConditions}
        </h1>
        <div className="bg-yellow-50 p-4 rounded-md mb-8 border border-yellow-100 text-yellow-800 text-sm">
           <strong>{t.legalDisclaimer}:</strong> {content.sections[0].content[lang]}
        </div>
        <p className="text-gray-700 mb-8 leading-relaxed">
          {content.intro[lang]}
        </p>
        
        <div className="space-y-8">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold text-gray-800 mb-3">{section.title[lang]}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN LAYOUT & ROUTER ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  // Effect to handle text direction
  useEffect(() => {
    const isRtl = lang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <AppContext.Provider value={{ lang, setLang, isRTL: lang === 'ar' }}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/country/:id" element={<CountryPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<ArticleDetail />} />
              <Route path="/tools" element={<div className="container mx-auto px-4 py-8"><Tools /></div>} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
            </Routes>
          </main>

          <Footer />
          <ChatBot />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
