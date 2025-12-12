import React from 'react';
import { Lightbulb } from 'lucide-react';
import { DICTIONARY } from '../constants';
import { Language } from '../types';

interface Props {
  language: Language;
}

const InsightsSection: React.FC<Props> = ({ language }) => {
  const dict = DICTIONARY[language];
  const { insightsSection } = dict;

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* Introduction - Using Brand Lime instead of Yellow */}
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-metarh-lime break-inside-avoid">
        <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="text-lime-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">{insightsSection.title}</h2>
        </div>
        {insightsSection.subtitle && (
          <p className="text-gray-600">
            {insightsSection.subtitle}
          </p>
        )}
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insightsSection.items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-100 text-lime-700 font-bold flex items-center justify-center text-sm border border-lime-200 group-hover:bg-metarh-lime group-hover:text-metarh-dark transition-colors">
                        {index + 1}
                    </span>
                    <div>
                        <h3 className="font-bold text-lg text-metarh-dark mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">
                            {item.text}
                        </p>
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* Trilhando CTA - Image Only Banner */}
      <div className="mt-12">
        <a 
            href="https://metarh.com.br/trilhando/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full transition-transform hover:scale-[1.01] hover:shadow-lg rounded-2xl overflow-hidden"
        >
            <img 
                src="https://metarh.com.br/wp-content/uploads/2025/11/Vitrine-de-compartilhameto-Trilhando.png" 
                alt="Trilhando + Vitrine" 
                className="w-full h-auto object-cover"
            />
        </a>
      </div>

    </div>
  );
};

export default InsightsSection;