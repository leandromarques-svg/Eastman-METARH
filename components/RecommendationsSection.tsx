import React from 'react';
import { Target, Clock, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { RECOMMENDATIONS_DATA } from '../constants';
import { Language } from '../types';

interface Props {
    language: Language;
}

const RecommendationsSection: React.FC<Props> = ({ language }) => {
    // Assuming the user only provided Portuguese content for now, we will render it directly.
    // In a real multi-language app, we would map this content in constants properly.
    // Currently, RECOMMENDATIONS_DATA is used regardless of language, but it's in PT.

    const { title, introduction, dimensions, conclusion } = RECOMMENDATIONS_DATA;

    const getTermColor = (term: string) => {
        switch (term) {
            case 'Curto Prazo': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Médio Prazo': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Longo Prazo': return 'bg-purple-100 text-purple-800 border-purple-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getTermIcon = (term: string) => {
        switch (term) {
            case 'Curto Prazo': return <AlertCircle size={16} />;
            case 'Médio Prazo': return <TrendingUp size={16} />;
            case 'Longo Prazo': return <Target size={16} />;
            default: return <Clock size={16} />;
        }
    }

    return (
        <div className="space-y-8 animate-fade-in pb-12">

            {/* Header / Intro */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-metarh-primary">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
                <div className="space-y-3">
                    {introduction.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            {/* Dimensions Loop */}
            {dimensions.map((dim, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Dimension Header */}
                    <div className="bg-slate-50 p-6 border-b border-gray-100">
                        <h3 className="text-xl font-bold text-metarh-dark mb-2">{dim.title}</h3>
                        <p className="text-gray-600 italic">
                            "{dim.description}"
                        </p>
                    </div>

                    {/* Recommendations Table / Grid */}
                    <div className="divide-y divide-gray-100">
                        {dim.recommendations.map((rec, rIdx) => (
                            <div key={rIdx} className="p-6 hover:bg-slate-50 transition-colors grid md:grid-cols-4 gap-6">

                                {/* Term / Timeline */}
                                <div className="md:col-span-1">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${getTermColor(rec.term)}`}>
                                        {getTermIcon(rec.term)}
                                        {rec.term}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-3 space-y-3">
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg flex items-start gap-2">
                                            {rec.action}
                                        </h4>
                                        {rec.detail && (
                                            <p className="text-gray-600 mt-1 text-sm">
                                                {rec.detail}
                                            </p>
                                        )}
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={16} />
                                            <div>
                                                <span className="font-bold text-sm text-gray-700 block mb-1">Justificativa e Impacto Financeiro (ROI):</span>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {rec.justification}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Conclusion */}
            <div className="bg-metarh-dark text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Conclusão</h3>
                    <div className="space-y-4">
                        {conclusion.map((paragraph, idx) => (
                            <p key={idx} className="text-white/90 leading-relaxed text-justify">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <span className="text-sm text-white/60">Relatório elaborado por Trilhando+</span>
                        <a
                            href="https://metarh.com.br/trilhando/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-metarh-lime text-metarh-dark font-bold px-6 py-2 rounded-full hover:bg-white transition-colors text-sm"
                        >
                            Conheça o Trilhando+
                        </a>
                    </div>
                </div>

                {/* Background Element */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-metarh-primary opacity-20 rounded-full blur-3xl"></div>
            </div>

        </div>
    );
};

export default RecommendationsSection;
