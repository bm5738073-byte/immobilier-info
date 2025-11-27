export type Language = 'ar' | 'en' | 'fr';

export interface Translation {
  [key: string]: string;
}

export interface ContentData {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, React.ReactNode>;
  image: string;
  category: 'guide' | 'news' | 'comparison';
  date: string;
}

export interface NavItem {
  id: string;
  label: Record<Language, string>;
  path: string;
}

export interface FAQItem {
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

// New Types for Detailed Country Guides
export interface CityInfo {
  name: Record<Language, string>;
  description: Record<Language, string>;
  avgPricePerMeter: number; // in USD
}

export interface CountryData {
  id: string; // slug e.g. 'turkey'
  name: Record<Language, string>;
  image: string;
  overview: Record<Language, string>;
  marketTrends: Record<Language, string>;
  propertyTypes: {
    residential: Record<Language, string>;
    commercial: Record<Language, string>;
    tourism: Record<Language, string>;
  };
  prices: {
    avgCapital: number; // Price per sqm in capital
    avgMajorCities: number;
    factors: Record<Language, string[]>;
    currency: string;
  };
  legal: {
    ownershipRules: Record<Language, string>;
    taxes: Record<Language, string>;
    residencyBonus: Record<Language, string | null>; // e.g., Golden Visa info
  };
  bestCities: CityInfo[];
  investment: {
    suitability: Record<Language, string>;
    expectedROI: string; // e.g. "5-8%"
    bestSectors: Record<Language, string>;
  };
  forecast: Record<Language, string>; // 5-year forecast
  conclusion: Record<Language, string>;
}
