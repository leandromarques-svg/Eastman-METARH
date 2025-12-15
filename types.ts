import React from 'react';

export type Language = 'pt' | 'en' | 'es';

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
  category?: string;
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'purple' | 'pink' | 'lime';
}

export interface SectionData {
  id: 'general' | 'sp' | 'maua' | 'women';
  title: string;
  respondents: number;
  description: string;
  genderData: ChartDataPoint[];
  raceData: ChartDataPoint[];
  lgbtData: number;
  pcdData: number;
  ageData: ChartDataPoint[];
  highlights: string[];
  challenges: string[];
  jobData: ChartDataPoint[];
  sexualOrientationData: ChartDataPoint[];
  obesityData: ChartDataPoint[];
  religionData: ChartDataPoint[];
}

export interface LikertBreakdown {
  dt: number; // Discordo Totalmente
  d: number;  // Discordo
  n: number;  // Neutro
  c: number;  // Concordo
  ct: number; // Concordo Totalmente
}

export interface SurveyQuestion {
  id: string;
  text: string;
  positive: number; // % favorável
  neutral: number;
  negative: number;
  spScore: number; // Comparativo SP Favorável
  mauaScore: number; // Comparativo Mauá Favorável

  // New breakdown structure for detailed view
  breakdown: {
    general: LikertBreakdown;
    sp: LikertBreakdown;
    maua: LikertBreakdown;
  };

  considerations: {
    general: string;
    sp: string;
    maua: string;
  };
}

export interface SurveyCategory {
  id: string;
  title: string;
  description: string;
  color: string; // Hex code
  icon: 'users' | 'heart' | 'book' | 'target'; // Icon key
  questions: SurveyQuestion[];
}

export interface TranslationDictionary {
  header: {
    client: string;
  };
  hero: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    respondents_bold: string;
  };
  tabs: {
    overview: string;
    detailed: string;
    insights: string;
    recommendations: string;
  };
  filters: {
    general: string;
    sp: string;
    maua: string;
    women: string;
  };
  metrics: {
    lgbt: string;
    lgbt_desc: string;
    pcd: string;
    pcd_desc: string;
    gender: string;
    gender_desc: string;
    age: string;
    age_desc: string;
  };
  charts: {
    gender_title: string;
    race_title: string;
    highlights: string;
    challenges: string;
  };
  survey: {
    title: string;
    intro: string;
    general_view: string;
    positive: string;
    neutral: string;
    negative: string;
    comparative: string;
    considerations: string;
    about_dimension: string;
    responses: string;
    options: {
      dt: string;
      d: string;
      n: string;
      c: string;
      ct: string;
    }
  };
  insightsSection: {
    title: string;
    subtitle: string;
    items: Array<{ title: string, text: string }>;
    cta: {
      title: string;
      text: string;
      button: string;
    }
  };
  footer: {
    rights: string;
  }
}