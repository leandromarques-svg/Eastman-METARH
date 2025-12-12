import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Heart, BookOpen, Target, Lightbulb, Info } from 'lucide-react';
import { getDetailedSurveyData, DICTIONARY } from '../constants';
import { Language, LikertBreakdown } from '../types';

interface Props {
  language: Language;
}

const DetailedSurvey: React.FC<Props> = ({ language }) => {
  const [openCategory, setOpenCategory] = useState<string | null>('percepcao_diversidade');
  const [insightMode, setInsightMode] = useState<'general' | 'sp' | 'maua'>('general');
  
  const surveyData = getDetailedSurveyData(language);
  const dict = DICTIONARY[language];

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users': return <Users size={24} className="text-white" />;
      case 'heart': return <Heart size={24} className="text-white" />;
      case 'book': return <BookOpen size={24} className="text-white" />;
      case 'target': return <Target size={24} className="text-white" />;
      default: return <Users size={24} className="text-white" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Intro */}
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-metarh-lime break-inside-avoid">
        <h2 className="text-2xl font-bold text-metarh-dark mb-2">{dict.survey.title}</h2>
        <p className="text-gray-600">
          {dict.survey.intro}
        </p>
      </div>

      <div className="space-y-4">
        {surveyData.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden break-inside-avoid">
            
            {/* Header Accordion */}
            <button 
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors duration-200 no-print"
            >
              <div className="flex items-center gap-4 text-left">
                <div 
                  className="p-3 rounded-lg shadow-sm"
                  style={{ backgroundColor: category.color }}
                >
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
                </div>
              </div>
              {openCategory === category.id ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

             {/* Print Header */}
             <div className="hidden print:flex items-center gap-4 p-6 border-b border-gray-100">
                <div className="p-3 rounded-lg" style={{ backgroundColor: category.color }}>
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
             </div>

            {/* Content */}
            <div className={`${openCategory === category.id ? 'block' : 'hidden'} print:block print-expand p-6 space-y-10 bg-slate-50/50`}>
              
              {/* Category Description */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4 break-inside-avoid">
                <div className="flex-shrink-0 mt-1 text-metarh-primary">
                  <Info size={24} style={{ color: category.color }} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-2" style={{ color: category.color }}>
                    {dict.survey.about_dimension}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {category.description}
                  </p>
                </div>
              </div>

              {category.questions.map((q) => (
                <div key={q.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm break-inside-avoid">
                  <div className="flex flex-col gap-6">
                    
                    {/* Question Title */}
                    <h4 className="font-semibold text-lg text-slate-800 leading-snug">
                       {q.text}
                    </h4>

                    <div className="flex flex-col gap-6">
                      
                      {/* Insight Controls moved up for context */}
                      <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{dict.survey.general_view}</span>
                          <div className="flex bg-slate-100 rounded-lg p-1 no-print">
                            <button 
                              onClick={() => setInsightMode('general')}
                              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                                insightMode === 'general' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                              }`}
                            >
                              Geral
                            </button>
                            <button 
                              onClick={() => setInsightMode('sp')}
                              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                                insightMode === 'sp' ? 'bg-white text-metarh-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'
                              }`}
                            >
                              SP
                            </button>
                            <button 
                              onClick={() => setInsightMode('maua')}
                              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                                insightMode === 'maua' ? 'bg-white text-lime-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                              }`}
                            >
                              Mauá
                            </button>
                          </div>
                      </div>

                      {/* Stacked Bar Chart */}
                      <LikertStackedBar 
                        data={q.breakdown[insightMode]} 
                        dict={dict} 
                      />

                      {/* Insight Box */}
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 break-inside-avoid transition-all duration-300">
                        <div className="flex items-center gap-2 text-metarh-dark mb-2">
                            <Lightbulb size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">{dict.survey.considerations} ({insightMode === 'general' ? 'Geral' : insightMode === 'sp' ? 'SP' : 'Mauá'})</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed italic no-print animate-fade-in">
                            "{q.considerations[insightMode]}"
                        </p>
                        {/* Print only: Show all considerations */}
                        <div className="hidden print:block space-y-2 mt-2">
                             <p className="text-xs font-bold text-gray-500">Geral:</p>
                             <p className="text-sm text-slate-700 leading-relaxed italic mb-2">"{q.considerations.general}"</p>
                             <p className="text-xs font-bold text-gray-500">SP:</p>
                             <p className="text-sm text-slate-700 leading-relaxed italic mb-2">"{q.considerations.sp}"</p>
                             <p className="text-xs font-bold text-gray-500">Mauá:</p>
                             <p className="text-sm text-slate-700 leading-relaxed italic">"{q.considerations.maua}"</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LikertStackedBar = ({ data, dict }: { data: LikertBreakdown, dict: any }) => {
    // Determine the dominant segment to highlight in text
    const entries = [
        { key: 'dt', val: data.dt, label: dict.survey.options.dt, color: 'bg-red-600' },
        { key: 'd', val: data.d, label: dict.survey.options.d, color: 'bg-red-300' },
        { key: 'n', val: data.n, label: dict.survey.options.n, color: 'bg-slate-300' },
        { key: 'c', val: data.c, label: dict.survey.options.c, color: 'bg-lime-400' },
        { key: 'ct', val: data.ct, label: dict.survey.options.ct, color: 'bg-green-600' }
    ];

    return (
        <div className="w-full">
            {/* The Bar */}
            <div className="flex h-8 w-full rounded-lg overflow-hidden mb-4 shadow-inner bg-slate-100">
                {entries.map((item) => (
                    item.val > 0 && (
                        <div 
                            key={item.key}
                            style={{ width: `${item.val}%` }}
                            className={`${item.color} h-full transition-all duration-700 ease-in-out relative group`}
                        >
                            {/* Tooltip on hover */}
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10 shadow-lg">
                                <span className="font-bold">{item.val}%</span>
                                <span className="text-[10px] opacity-80">{item.label}</span>
                                <div className="w-2 h-2 bg-gray-800 rotate-45 -mb-1 absolute -bottom-1"></div>
                            </div>
                        </div>
                    )
                ))}
            </div>

            {/* The Legend / Values Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
                {entries.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-sm flex-shrink-0 ${item.color}`}></span>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700">{item.val}%</span>
                            <span className="text-gray-500 leading-tight text-[10px]">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailedSurvey;