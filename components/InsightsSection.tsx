import React from 'react';
import { Lightbulb, Users, Heart, Building2, Target } from 'lucide-react';
import { DICTIONARY } from '../constants';
import { Language } from '../types';

interface Props {
  language: Language;
}

const InsightsSection: React.FC<Props> = ({ language }) => {
  const dict = DICTIONARY[language];
  const { insightsSection } = dict;

  // Organizando insights por dimensões
  const dimensionInsights = [
    {
      dimension: language === 'pt' ? 'Percepção de Diversidade' : language === 'en' ? 'Diversity Perception' : 'Percepción de Diversidad',
      icon: <Users className="text-metarh-primary" size={24} />,
      color: 'purple',
      insights: [
        {
          title: language === 'pt' ? "Dicotomia Cultural: SP vs. Mauá" : language === 'en' ? "Cultural Dichotomy: SP vs. Mauá" : "Dicotomía Cultural: SP vs. Mauá",
          text: language === 'pt'
            ? "Existe uma diferença marcante na percepção de inclusão entre as unidades. A Fábrica (Mauá) apresenta índices consistentemente mais altos de pertencimento, segurança psicológica e confiança na liderança (frequentemente acima de 90%), enquanto o Escritório (SP) mostra maior ceticismo e neutralidade, sugerindo a necessidade de estratégias distintas de engajamento para cada público."
            : language === 'en'
              ? "There is a marked difference in the perception of inclusion between units. The Factory (Mauá) shows consistently higher rates of belonging, psychological safety, and trust in leadership (often above 90%), while the Office (SP) shows greater skepticism and neutrality, suggesting the need for distinct engagement strategies for each audience."
              : "Existe una marcada diferencia en la percepción de inclusión entre las unidades. La Fábrica (Mauá) presenta índices consistentemente más altos de pertenencia, seguridad psicológica y confianza en el liderazgo (frecuentemente por encima del 90%), mientras que la Oficina (SP) muestra mayor escepticismo y neutralidad, sugiriendo la necesidad de estrategias distintas de compromiso para cada público."
        }
      ]
    },
    {
      dimension: language === 'pt' ? 'Inclusão' : language === 'en' ? 'Inclusion' : 'Inclusión',
      icon: <Heart className="text-metarh-pink" size={24} />,
      color: 'pink',
      insights: [
        {
          title: language === 'pt' ? "Liderança como Pilar de Sustentação" : language === 'en' ? "Leadership as a Pillar" : "Liderazgo como Pilar de Sustentación",
          text: language === 'pt'
            ? "A liderança direta é o ativo mais forte da organização, com 93.6% de aprovação geral. Mesmo em áreas onde a percepção da empresa é mais crítica, os líderes diretos continuam sendo vistos como inclusivos e respeitosos, atuando como um 'buffer' positivo para a cultura organizacional."
            : language === 'en'
              ? "Direct leadership is the organization's strongest asset, with 93.6% general approval. Even in areas where the company's perception is more critical, direct leaders continue to be seen as inclusive and respectful, acting as a positive 'buffer' for the organizational culture."
              : "El liderazgo directo es el activo más fuerte de la organización, con 93.6% de aprobación general. Incluso en áreas donde la percepción de la empresa es más crítica, los líderes directos continúan siendo vistos como inclusivos y respetuosos, actuando como un 'amortiguador' positivo para la cultura organizacional."
        },
        {
          title: language === 'pt' ? "Desafio da Representatividade Racial" : language === 'en' ? "Racial Representativeness Challenge" : "Desafío de Representatividad Racial",
          text: language === 'pt'
            ? "Enquanto a fábrica apresenta maior diversidade racial (39% negros e pardos), o escritório ainda é predominantemente branco (72%). A percepção de prioridade na contratação racial é moderada (54%), indicando a necessidade de letramento e ações intencionais, especialmente para cargos administrativos."
            : language === 'en'
              ? "While the factory shows greater racial diversity (39% Black/Brown), the office is predominantly White (72%). The perception of racial hiring priority is moderate (54%), indicating the need for literacy and intentional actions, especially for administrative roles."
              : "Mientras que la fábrica presenta mayor diversidad racial (39% negros/pardos), la oficina es predominantemente blanca (72%). La percepción de prioridad en la contratación racial es moderada (54%), indicando la necesidad de alfabetización y acciones intencionales, especialmente para cargos administrativos."
        }
      ]
    },
    {
      dimension: language === 'pt' ? 'Cultura Organizacional' : language === 'en' ? 'Organizational Culture' : 'Cultura Organizacional',
      icon: <Building2 className="text-metarh-lime" size={24} />,
      color: 'lime',
      insights: [
        {
          title: language === 'pt' ? "Políticas e Práticas Alinhadas" : language === 'en' ? "Aligned Policies and Practices" : "Políticas y Prácticas Alineadas",
          text: language === 'pt'
            ? "82.3% dos colaboradores conhecem a política de inclusão da Eastman, demonstrando boa disseminação. No entanto, existe um gap entre conhecer a política (73% em SP) e perceber sua prática efetiva (59.5% em SP), indicando oportunidade de fortalecimento da execução no escritório."
            : language === 'en'
              ? "82.3% of employees know Eastman's inclusion policy, demonstrating good dissemination. However, there is a gap between knowing the policy (73% in SP) and perceiving its effective practice (59.5% in SP), indicating an opportunity to strengthen execution in the office."
              : "82.3% de los colaboradores conocen la política de inclusión de Eastman, demostrando buena diseminación. Sin embargo, existe una brecha entre conocer la política (73% en SP) y percibir su práctica efectiva (59.5% en SP), indicando oportunidad de fortalecer la ejecución en la oficina."
        }
      ]
    },
    {
      dimension: language === 'pt' ? 'Representatividade' : language === 'en' ? 'Representativeness' : 'Representatividad',
      icon: <Target className="text-metarh-dark" size={24} />,
      color: 'dark',
      insights: [
        {
          title: language === 'pt' ? "Oportunidades em Contratação Inclusiva" : language === 'en' ? "Opportunities in Inclusive Hiring" : "Oportunidades en Contratación Inclusiva",
          text: language === 'pt'
            ? "A percepção de esforço intencional na contratação de grupos diversos varia significativamente. Enquanto a contratação racial (54.8%) e geracional (53.2%) são vistas de forma moderadamente positiva, a contratação de PCDs (20.3%) e LGBTQIAPN+ (45.8%) apresentam baixa percepção, especialmente no escritório SP, sinalizando necessidade de ações afirmativas mais visíveis."
            : language === 'en'
              ? "The perception of intentional effort in hiring diverse groups varies significantly. While racial (54.8%) and generational (53.2%) hiring are seen moderately positively, PWD (20.3%) and LGBTQIAPN+ (45.8%) hiring show low perception, especially in the SP office, signaling the need for more visible affirmative actions."
              : "La percepción de esfuerzo intencional en la contratación de grupos diversos varía significativamente. Mientras que la contratación racial (54.8%) y generacional (53.2%) son vistas de forma moderadamente positiva, la contratación de PCDs (20.3%) y LGBTQIAPN+ (45.8%) presentan baja percepción, especialmente en la oficina SP, señalando necesidad de acciones afirmativas más visibles."
        }
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">

      {/* Introduction */}
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-metarh-lime break-inside-avoid">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="text-lime-600" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">{insightsSection.title}</h2>
        </div>
        <p className="text-gray-600">
          {language === 'pt'
            ? 'Principais aprendizados organizados por dimensão de análise'
            : language === 'en'
              ? 'Key learnings organized by analysis dimension'
              : 'Principales aprendizajes organizados por dimensión de análisis'}
        </p>
      </div>

      {/* Insights por Dimensão */}
      {dimensionInsights.map((dimension, dimIndex) => (
        <div key={dimIndex} className="space-y-4">
          {/* Dimension Header */}
          <div className="flex items-center gap-3 pb-2 border-b-2 border-gray-200">
            {dimension.icon}
            <h3 className="text-xl font-bold text-metarh-dark">{dimension.dimension}</h3>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 gap-4">
            {dimension.insights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full ${dimension.color === 'purple' ? 'bg-purple-100 text-purple-700 border-purple-200' :
                    dimension.color === 'pink' ? 'bg-pink-100 text-pink-700 border-pink-200' :
                      dimension.color === 'lime' ? 'bg-lime-100 text-lime-700 border-lime-200' :
                        'bg-slate-100 text-slate-700 border-slate-200'
                    } font-bold flex items-center justify-center text-sm border group-hover:scale-110 transition-transform`}>
                    {dimIndex + 1}.{index + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-lg text-metarh-dark mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

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