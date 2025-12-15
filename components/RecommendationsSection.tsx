import React, { useState } from 'react';
import { Target, Clock, TrendingUp, CheckCircle2, AlertCircle, Rocket, BarChart3, Users, PiggyBank } from 'lucide-react';
import { getRecommendationsData } from '../constants';
import { Language } from '../types';

interface Props {
    language: Language;
}

const RecommendationsSection: React.FC<Props> = ({ language }) => {
    const data = getRecommendationsData(language);
    const { title, introduction, dimensions, conclusion } = data;

    // Get unique terms from the first dimension to build filter buttons dynamically
    const uniqueTerms = dimensions[0]?.recommendations.map(r => r.term) || [];
    const allLabel = language === 'en' ? 'All' : 'Todos';
    const distinctTerms = [allLabel, ...uniqueTerms];

    // State for selected filter
    const [selectedTerm, setSelectedTerm] = useState<string>(allLabel);

    const getTermColor = (term: string) => {
        const t = term.toLowerCase();
        if (t.includes('curto') || t.includes('short') || t.includes('corto')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        if (t.includes('médio') || t.includes('medium') || t.includes('mediano')) return 'bg-blue-100 text-blue-800 border-blue-200';
        if (t.includes('longo') || t.includes('long') || t.includes('largo')) return 'bg-purple-100 text-purple-800 border-purple-200';
        return 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getTermIcon = (term: string) => {
        const t = term.toLowerCase();
        if (t.includes('curto') || t.includes('short') || t.includes('corto')) return <AlertCircle size={16} />;
        if (t.includes('médio') || t.includes('medium') || t.includes('mediano')) return <TrendingUp size={16} />;
        if (t.includes('longo') || t.includes('long') || t.includes('largo')) return <Target size={16} />;
        return <Clock size={16} />;
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

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
                {distinctTerms.map((term) => (
                    <button
                        key={term}
                        onClick={() => setSelectedTerm(term)}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${selectedTerm === term
                                ? 'bg-metarh-primary text-white shadow-lg scale-105'
                                : 'bg-white text-gray-500 hover:bg-slate-50 border border-gray-200'
                            }`}
                    >
                        {term === allLabel && <Clock size={16} />}
                        {(term.includes('Curto') || term.includes('Short') || term.includes('Corto')) && <AlertCircle size={16} />}
                        {(term.includes('Médio') || term.includes('Medium') || term.includes('Mediano')) && <TrendingUp size={16} />}
                        {(term.includes('Longo') || term.includes('Long') || term.includes('Largo')) && <Target size={16} />}
                        {term}
                    </button>
                ))}
            </div>

            {/* Dimensions Loop */}
            {dimensions.map((dim, idx) => {
                const filteredRecs = dim.recommendations.filter(rec => selectedTerm === allLabel || rec.term === selectedTerm);

                if (filteredRecs.length === 0) return null;

                return (
                    <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
                        {/* Dimension Header */}
                        <div className="bg-slate-50 p-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-metarh-dark mb-2">{dim.title}</h3>
                            <p className="text-gray-600 italic">
                                "{dim.description}"
                            </p>
                        </div>

                        {/* Recommendations Table / Grid */}
                        <div className="divide-y divide-gray-100">
                            {filteredRecs.map((rec, rIdx) => (
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
                );
            })}

            {/* Conclusion */}
            <div className="bg-metarh-dark text-white p-12 rounded-xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8">Conclusão</h3>
                    <div className="space-y-6">
                        {conclusion.map((paragraph, idx) => {
                            // Check for bullet points to render with icons and bold text
                            if (paragraph.startsWith('●')) {
                                const cleanText = paragraph.replace('●', '').trim();
                                const [boldPart, rest] = cleanText.split(':');
                                const lowerBold = boldPart.toLowerCase();

                                let Icon = CheckCircle2;
                                if (lowerBold.includes('vantagem') || lowerBold.includes('advantage') || lowerBold.includes('ventaja')) Icon = Rocket;
                                if (lowerBold.includes('custo') || lowerBold.includes('cost')) Icon = PiggyBank;
                                if (lowerBold.includes('performance') || lowerBold.includes('desempenho') || lowerBold.includes('productividad')) Icon = BarChart3;

                                return (
                                    <div key={idx} className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                                        <Icon className="text-metarh-lime shrink-0 mt-1" size={24} />
                                        <p className="text-white/90 leading-relaxed text-justify">
                                            <strong className="text-metarh-lime block text-lg mb-1">{boldPart}:</strong>
                                            {rest}
                                        </p>
                                    </div>
                                );
                            }

                            return (
                                <p key={idx} className="text-white/90 leading-relaxed text-justify text-lg">
                                    {paragraph}
                                </p>
                            );
                        })}
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
