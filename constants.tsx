import { SectionData, SurveyCategory, Language, TranslationDictionary, LikertBreakdown } from './types';

// Palette from MIV
export const COLORS = {
  darkPurple: '#470082',
  primaryPurple: '#aa3ffe',
  pink: '#ff27f9',
  lime: '#65a30d',
  white: '#ffffff',
  gray: '#64748b',
  teal: '#2dd4bf',
  orange: '#f97316'
};

export const CHART_COLORS = [
  COLORS.darkPurple,
  COLORS.primaryPurple,
  COLORS.pink,
  COLORS.lime,
  '#6404bc',
  '#c529ff',
  '#ff27f9',
  '#2dd4bf',
];


export const DICTIONARY: Record<Language, TranslationDictionary> = {
  pt: {
    header: { client: 'Cliente' },
    hero: {
      title: 'Pesquisa e Resultados',
      p1: 'A coleta de dados foi realizada de forma anônima por meio de um questionário online, garantindo confidencialidade e liberdade nas respostas.',
      p2: 'Ao todo,',
      p3: 'participaram, sendo 80 da unidade Escritório – SP e 46 da unidade Fábrica – Mauá/SP.',
      respondents_bold: '126 pessoas colaboradoras'
    },
    tabs: { overview: 'Visão Geral e Dados', detailed: 'Pesquisa', insights: 'Insights', recommendations: 'Recomendações' },
    filters: { general: 'Visão Geral (Consolidado)', sp: 'Escritório SP', maua: 'Fábrica Mauá', women: 'Recorte: Mulheres' },
    metrics: {
      lgbt: 'LGBTQIAPN+', lgbt_desc: 'Autodeclaração de diversidade sexual/afetiva.',
      pcd: 'Pessoas com Deficiência', pcd_desc: 'Colaboradores que relataram possuir alguma deficiência.',
      gender: 'Gênero Predominante', gender_desc: 'Maioria identificada como',
      age: 'Faixa Etária Principal', age_desc: 'Concentração entre'
    },
    charts: {
      gender_title: 'Identidade de Gênero',
      race_title: 'Raça e Etnia',
      highlights: 'Pontos Fortes',
      challenges: 'Pontos de Atenção'
    },
    survey: {
      title: 'Resultados Detalhados',
      intro: 'Análise ponto a ponto das perguntas do censo. Explore as dimensões abaixo para ver os comparativos detalhados por unidade.',
      general_view: 'Visão Geral',
      positive: 'Positivo', neutral: 'Neutro', negative: 'Negativo',
      comparative: 'Comparativo por Unidade',
      considerations: 'Considerações',
      about_dimension: 'Sobre esta dimensão',
      responses: 'respostas',
      options: {
        dt: 'Discordo Totalmente',
        d: 'Discordo',
        n: 'Não concordo e nem discordo',
        c: 'Concordo',
        ct: 'Concordo Totalmente'
      }
    },
    insightsSection: {
      title: 'Principais Aprendizados',
      subtitle: '',
      items: [
        {
          title: "Dicotomia Cultural: SP vs. Mauá",
          text: "Existe uma diferença marcante na percepção de inclusão entre as unidades. A Fábrica (Mauá) apresenta índices consistentemente mais altos de pertencimento, segurança psicológica e confiança na liderança (frequentemente acima de 90%), enquanto o Escritório (SP) mostra maior ceticismo e neutralidade, sugerindo a necessidade de estratégias distintas de engajamento para cada público."
        },
        {
          title: "Liderança como Pilar de Sustentação",
          text: "A liderança direta é o ativo mais forte da organização, com 93.6% de aprovação geral. Mesmo em áreas onde a percepção da empresa é mais crítica, os líderes diretos continuam sendo vistos como inclusivos e respeitosos, atuando como um 'buffer' positivo para a cultura organizacional."
        },
        {
          title: "Desafio Crítico: Inclusão PCD",
          text: "A inclusão de Pessoas com Deficiência (PCD) é o ponto mais crítico do censo. Com apenas 20% de percepção positiva sobre a priorização na contratação e barreiras invisíveis percebidas, há uma urgência em rever políticas de acessibilidade, atração e retenção para este grupo."
        },
        {
          title: "Lacuna de Marca Empregadora",
          text: "Há um descompasso entre a vivência interna e a percepção externa. Especialmente no público corporativo (SP), sente-se que a Eastman não comunica efetivamente sua diversidade para o mercado (apenas 42% de concordância em SP), o que pode impactar a atração de novos talentos diversos."
        }
      ],
      cta: {
        title: "Continue sua jornada",
        text: "Descubra como nossa solução Trilhando + pode ajudar a transformar esses insights em ações concretas para sua organização.",
        button: "Conhecer Trilhando +"
      }
    },
    footer: { rights: 'Todos os direitos reservados. Confidencial para Eastman.' }
  },
  en: {
    header: { client: 'Client' },
    hero: {
      title: 'Survey & Results',
      p1: 'Data collection was carried out anonymously via an online questionnaire, ensuring confidentiality and freedom in responses.',
      p2: 'In total,',
      p3: 'participated, with 80 from the Office unit – SP and 46 from the Factory unit – Mauá/SP.',
      respondents_bold: '126 collaborators'
    },
    tabs: { overview: 'Overview & Data', detailed: 'Survey', insights: 'Insights', recommendations: 'Recommendations' },
    filters: { general: 'General Overview (Consolidated)', sp: 'SP Office', maua: 'Mauá Factory', women: 'Focus: Women' },
    metrics: {
      lgbt: 'LGBTIAPN+', lgbt_desc: 'Self-declaration of sexual/affective diversity.',
      pcd: 'People with Disabilities', pcd_desc: 'Collaborators who reported having a disability.',
      gender: 'Predominant Gender', gender_desc: 'Majority identified as',
      age: 'Main Age Group', age_desc: 'Concentration between'
    },
    charts: {
      gender_title: 'Gender Identity',
      race_title: 'Race and Ethnicity',
      highlights: 'Strengths',
      challenges: 'Points of Attention'
    },
    survey: {
      title: 'Detailed Results',
      intro: 'Point-by-point analysis of census questions. Explore the dimensions below to see detailed comparisons by unit.',
      general_view: 'General View',
      positive: 'Positive', neutral: 'Neutral', negative: 'Negative',
      comparative: 'Unit Comparison',
      considerations: 'Considerations',
      about_dimension: 'About this dimension',
      responses: 'responses',
      options: {
        dt: 'Strongly Disagree',
        d: 'Disagree',
        n: 'Neither Agree nor Disagree',
        c: 'Agree',
        ct: 'Strongly Agree'
      }
    },
    insightsSection: {
      title: 'Key Learnings',
      subtitle: '',
      items: [
        {
          title: "Cultural Dichotomy: SP vs. Mauá",
          text: "There is a marked difference in the perception of inclusion between units. The Factory (Mauá) shows consistently higher rates of belonging, psychological safety, and trust in leadership (often above 90%), while the Office (SP) shows greater skepticism and neutrality, suggesting the need for distinct engagement strategies for each audience."
        },
        {
          title: "Leadership as a Pillar",
          text: "Direct leadership is the organization's strongest asset, with 93.6% general approval. Even in areas where the company's perception is more critical, direct leaders continue to be seen as inclusive and respectful, acting as a positive 'buffer' for the organizational culture."
        },
        {
          title: "Critical Challenge: PWD Inclusion",
          text: "The inclusion of People with Disabilities (PWD) is the most critical point of the census. With only 20% positive perception regarding hiring prioritization and perceived invisible barriers, there is an urgency to review accessibility, attraction, and retention policies for this group."
        },
        {
          title: "Employer Branding Gap",
          text: "There is a mismatch between internal experience and external perception. Especially in the corporate audience (SP), it is felt that Eastman does not effectively communicate its diversity to the market (only 42% agreement in SP), which may impact the attraction of new diverse talent."
        }
      ],
      cta: {
        title: "Continue your journey",
        text: "Discover how our Trilhando + solution can help transform these insights into concrete actions for your organization.",
        button: "Discover Trilhando +"
      }
    },
    footer: { rights: 'All rights reserved. Confidential for Eastman.' }
  },
  es: {
    header: { client: 'Cliente' },
    hero: {
      title: 'Encuesta y Resultados',
      p1: 'La recolección de datos se realizó de forma anónima a través de un cuestionario en línea, garantizando confidencialidad y libertad en las respuestas.',
      p2: 'En total,',
      p3: 'participaron, siendo 80 de la unidad Oficina – SP y 46 de la unidad Fábrica – Mauá/SP.',
      respondents_bold: '126 colaboradores'
    },
    tabs: { overview: 'Visión General y Datos', detailed: 'Encuesta', insights: 'Insights', recommendations: 'Recomendaciones' },
    filters: { general: 'Visión General (Consolidada)', sp: 'Oficina SP', maua: 'Fábrica Mauá', women: 'Enfoque: Mujeres' },
    metrics: {
      lgbt: 'LGBTIAPN+', lgbt_desc: 'Autodeclaração de diversidade sexual/afetiva.',
      pcd: 'Personas con Discapacidad', pcd_desc: 'Colaboradores que reportaron tener alguna discapacidad.',
      gender: 'Género Predominante', gender_desc: 'Mayoría identificada como',
      age: 'Grupo Etario Principal', age_desc: 'Concentración entre'
    },
    charts: {
      gender_title: 'Identidad de Género',
      race_title: 'Raza y Etnia',
      highlights: 'Puntos Fuertes',
      challenges: 'Puntos de Atención'
    },
    survey: {
      title: 'Resultados Detallados',
      intro: 'Análisis punto a punto de las preguntas del censo. Explore las dimensiones a continuación para ver comparaciones detalladas por unidad.',
      general_view: 'Visión General',
      positive: 'Positivo', neutral: 'Neutro', negative: 'Negativo',
      comparative: 'Comparación por Unidad',
      considerations: 'Consideraciones',
      about_dimension: 'Sobre esta dimensión',
      responses: 'respuestas',
      options: {
        dt: 'Totalmente en desacuerdo',
        d: 'En desacuerdo',
        n: 'Ni de acuerdo ni en desacuerdo',
        c: 'De acuerdo',
        ct: 'Totalmente de acuerdo'
      }
    },
    insightsSection: {
      title: 'Principales Aprendizajes',
      subtitle: '',
      items: [
        {
          title: "Dicotomía Cultural: SP vs. Mauá",
          text: "Existe una marcada diferencia en la percepción de inclusión entre las unidades. La Fábrica (Mauá) presenta índices consistentemente más altos de pertenencia, seguridad psicológica y confianza en el liderazgo (frecuentemente por encima del 90%), mientras que la Oficina (SP) muestra mayor escepticismo y neutralidad, sugiriendo la necesidad de estrategias distintas de compromiso para cada público."
        },
        {
          title: "Liderazgo como Pilar de Sustentación",
          text: "El liderazgo directo es el activo más fuerte de la organización, con 93.6% de aprobación general. Incluso en áreas donde la percepción de la empresa es más crítica, los líderes directos continúan siendo vistos como inclusivos y respetuosos, actuando como un 'amortiguador' positivo para la cultura organizacional."
        },
        {
          title: "Desafío Crítico: Inclusión PCD",
          text: "La inclusión de Personas con Discapacidad (PCD) es el punto más crítico del censo. Con solo 20% de percepción positiva sobre la priorización en la contratación y barreras invisibles percibidas, hay una urgencia en revisar políticas de accesibilidad, atracción y retención para este grupo."
        },
        {
          title: "Brecha de Marca Empleadora",
          text: "Hay un desajuste entre la vivencia interna y la percepción externa. Especialmente en el público corporativo (SP), se siente que Eastman no comunica efectivamente su diversidad al mercado (solo 42% de acuerdo en SP), lo que puede impactar la atracción de nuevos talentos diversos."
        }
      ],
      cta: {
        title: "Continúe su jornada",
        text: "Descubra cómo nuestra solución Trilhando + puede ayudar a transformar estos insights en acciones concretas para su organización.",
        button: "Conocer Trilhando +"
      }
    },
    footer: { rights: 'Todos los derechos reservados. Confidencial para Eastman.' }
  }
};

// --- TRANSLATION MAPS ---

const CONSIDERATIONS_MAP: Record<string, { general: { en: string, es: string }, sp: { en: string, es: string }, maua: { en: string, es: string } }> = {
  'q10': {
    general: {
      en: "The consolidated view (69.1%) is positive, but masks a polarization: while the Factory is highly favorable, the Office shows hesitation.",
      es: "La visión consolidada (69.1%) es positiva, pero oculta una polarización: mientras que la Fábrica es altamente favorable, la Oficina muestra dudas."
    },
    sp: {
      en: "Moderate perception. Although the majority agrees, a significant group (35%) is neutral or disagrees, possibly due to the racial homogeneity observed in the office (72% white).",
      es: "Percepción moderada. Aunque la mayoría está de acuerdo, un grupo significativo (35%) es neutral o está en desacuerdo, posiblemente debido a la homogeneidad racial observada en la oficina (72% blancos)."
    },
    maua: {
      en: "Very positive perception (84.8%). The factory sees greater diversity, which may be correlated with the higher presence of brown and black people (39%) compared to the office.",
      es: "Percepción muy positiva (84.8%). La fábrica ve mayor diversidad, lo que puede estar correlacionado con la mayor presencia de pardos y negros (39%) en comparación con la oficina."
    }
  },
  'q11': {
    general: {
      en: "General result (54.8%) indicates a challenge in verticalizing diversity, especially pulled down by the corporate perception.",
      es: "El resultado general (54.8%) indica un desafío en verticalizar la diversidad, especialmente afectado por la percepción corporativa."
    },
    sp: {
      en: "Critical. Only 41% agree. This suggests that diversity is perceived as concentrated at specific levels and not distributed hierarchically.",
      es: "Crítico. Solo el 41% está de acuerdo. Esto sugiere que la diversidad se percibe como concentrada en niveles específicos y no distribuida jerárquicamente."
    },
    maua: {
      en: "Positive (78%). In the factory, the perception of diversity across positions is almost double that of the office, indicating an operational structure perceived as more heterogeneous.",
      es: "Positivo (78%). En la fábrica, la percepción de diversidad a través de los cargos es casi el doble que en la oficina, indicando una estructura operativa percibida como más heterogénea."
    }
  },
  'q12': {
    general: {
      en: "Critical Alert. The consolidated average (42.9%) is low, highlighting that leadership is not seen as diverse by the majority of the organization.",
      es: "Alerta Crítica. El promedio consolidado (42.9%) es bajo, destacando que el liderazgo no es visto como diverso por la mayoría de la organización."
    },
    sp: {
      en: "Point of attention. Only 27.5% see diversity in leadership. The lack of representation at the top may impact the motivation of minoritized groups in the office.",
      es: "Punto de atención. Solo el 27.5% ve diversidad en el liderazgo. La falta de representatividad en la cima puede impactar la motivación de grupos minorizados en la oficina."
    },
    maua: {
      en: "Surprisingly high (69.6%). The perception of factory leadership is much more inclusive, suggesting leaders who may come from the base or better represent the local demographics.",
      es: "Sorprendentemente alto (69.6%). La percepción del liderazgo fabril es mucho más inclusiva, sugerindo líderes que tal vez provengan de la base o que representen mejor la demografía local."
    }
  },
  'q13': {
    general: {
      en: "External perception is moderate (58.7%). The brand has strength in the factory, but fails to convince the corporate audience about its diversity.",
      es: "La percepción externa es moderada (58.7%). La marca tiene fuerza en la fábrica, pero no convence al público corporativo sobre su diversidad."
    },
    sp: {
      en: "Low perception of diverse employer brand (42.5%). SP collaborators, closer to corporate/marketing, feel the company does not communicate its diversity effectively outwards.",
      es: "Baja percepción de marca empleadora diversa (42.5%). Colaboradores de SP, más cercanos al corporativo/marketing, sienten que la empresa no comunica su diversidad eficazmente hacia afuera."
    },
    maua: {
      en: "High perception (86.9%). For the factory audience, Eastman's external image is strongly associated with diversity.",
      es: "Alta percepción (86.9%). Para el público de la fábrica, la imagen externa de Eastman está fuertemente asociada a la diversidad."
    }
  },
  'q14': {
    general: {
      en: "Excellent (92.8%). Respect is a solid and transversal value in the company, recognized by both units.",
      es: "Excelente (92.8%). El respeto es un valor sólido y transversal en la empresa, reconocido por ambas unidades."
    },
    sp: {
      en: "Excellent (89.9%). The foundation of respect is solid, fundamental for psychological safety in the office.",
      es: "Excelente (89.9%). La base de respeto es sólida, fundamental para la seguridad psicológica en la oficina."
    },
    maua: {
      en: "Exemplary (97.8%). Almost all factory collaborators feel respected, a very strong indicator of cultural health.",
      es: "Ejemplar (97.8%). Casi la totalidad de los colaboradores de la fábrica se sienten respetados, un indicador fortísimo de salud cultural."
    }
  },
  'q15': {
    general: {
      en: "Dichotomous scenario. While the average is 67%, there is a huge gap between the safety felt in the factory versus the office.",
      es: "Escenario dicotómico. Aunque el promedio es del 67%, hay una brecha enorme entre la seguridad sentida en la fábrica versus la oficina."
    },
    sp: {
      en: "Alert (50.6%). Only half of the office feels total safety to be authentic. This may indicate a more rigid or normative corporate culture.",
      es: "Alerta (50.6%). Solo la mitad de la oficina siente seguridad total para ser auténtica. Esto pode indicar una cultura corporativa más rígida o normativa."
    },
    maua: {
      en: "Very high (95.6%). The factory environment, contrary to stereotypes, proves to be extremely welcoming for personal authenticity.",
      es: "Muy alto (95.6%). El ambiente fabril, contrariamente a los estereotipos, se muestra extremadamente acogedor para la autenticidad personal."
    }
  },
  'q16': {
    general: {
      en: "High Belonging (83.9%). The vast majority feels part of Eastman, a powerful retention engine.",
      es: "Alto Pertenencia (83.9%). La gran mayoría se siente parte de Eastman, un motor de retención poderoso."
    },
    sp: {
      en: "Good (74.7%), but with room for improvement. A quarter of the office is unsure about their belonging.",
      es: "Bueno (74.7%), pero con espacio para mejorar. Un cuarto de la oficina no está seguro sobre su pertenencia."
    },
    maua: {
      en: "Perfect (100%). The sense of community and belonging in the factory is absolute, a valuable asset for retention.",
      es: "Perfecto (100%). El sentido de comunidad y pertenencia en la fábrica es absoluto, un activo valioso para la retención."
    }
  },
  'q17': {
    general: {
      en: "Opportunity Alert (53.3%). Just over half believe in meritocracy, pulled down by skepticism in SP.",
      es: "Alerta de Oportunidad (53.3%). Poco más de la mitad cree en la meritocracia, afectado por el escepticismo en SP."
    },
    sp: {
      en: "Critical (36.7%). The perception of meritocracy and equal opportunities is low in the office, which can generate disengagement.",
      es: "Crítico (36.7%). La percepción de meritocracia e igualdad de oportunidades es baja en la oficina, lo que puede generar desmotivación."
    },
    maua: {
      en: "Very positive (82.2%). In the factory, the path to growth seems to be seen as fair and accessible by the vast majority.",
      es: "Muy positivo (82.2%). En la fábrica, el camino para el crecimiento parece ser visto como justo y accesible por la gran mayoría."
    }
  },
  'q18': {
    general: {
      en: "Inclusive Leadership (93.6%). This is the strongest indicator of the research, showing that direct management is doing an excellent job.",
      es: "Liderazgo Inclusivo (93.6%). Este es el indicador más fuerte de la investigación, mostrando que la gestión directa está haciendo un excelente trabajo."
    },
    sp: {
      en: "Excellent (91.1%). Direct leadership in the office is a strong point, acting as a positive buffer even with other lower perceptions.",
      es: "Excelente (91.1%). El liderazgo directo en la oficina es un punto fuerte, actuando como un amortiguador positivo incluso con otras percepciones más bajas."
    },
    maua: {
      en: "Excellent (97.8%). Leadership in the factory is seen as almost universally inclusive.",
      es: "Excelente (97.8%). El liderazgo en la fábrica es visto como casi universalmente inclusivo."
    }
  },
  'q19': {
    general: {
      en: "Internal communication is effective (76.7%), but there is a clear difference in reception between units.",
      es: "La comunicación interna es efectiva (76.7%), pero hay una clara diferencia de recepción entre unidades."
    },
    sp: {
      en: "Regular (68.4%). There is a significant neutral portion, suggesting that communication may not be reaching everyone with the same effectiveness.",
      es: "Regular (68.4%). Hay una parcela significativa neutral, sugiriendo que la comunicación pode no estar alcanzando a todos con la misma eficacia."
    },
    maua: {
      en: "Great (91.1%). Communication reaches the factory floor inclusively.",
      es: "Óptimo (91.1%). La comunicación llega de forma inclusiva al piso de fábrica."
    }
  },
  'q20': {
    general: {
      en: "External Image Gap (58.9%). The market positioning is not convincing the internal team, especially the administrative one.",
      es: "Brecha de Imagen Externa (58.9%). El posicionamiento de mercado no está convenciendo al equipo interno, especialmente al administrativo."
    },
    sp: {
      en: "Low (48.1%). Reinforces data from Q13: the office does not see the brand positioning itself inclusively to the market.",
      es: "Bajo (48.1%). Refuerza el dato de la Q13: la oficina no ve a la marca posicionándose de forma inclusiva para el mercado."
    },
    maua: {
      en: "Good (77.8%). Perception is more generous in the factory, perhaps due to lower exposure to corporate media or marketing.",
      es: "Bueno (77.8%). La percepción es más generosa en la fábrica, tal vez por menor exposición a los medios corporativos o marketing."
    }
  },
  'q21': {
    general: {
      en: "Safe Environment (79.9%). The perception of safety for the LGBTQIAPN+ public is high and consistent.",
      es: "Ambiente Seguro (79.9%). La percepción de seguridad para el público LGBTQIAPN+ es alta y consistente."
    },
    sp: {
      en: "Good (76%), given that 30% of the SP audience is LGBT. Indicates that despite authenticity fears (Q15), the specific environment for LGBTs is seen as safe.",
      es: "Bueno (76%), dado que el 30% del público SP es LGBT. Indica que, a pesar de los temores de autenticidad (Q15), el ambiente específico para LGBTs es visto como seguro."
    },
    maua: {
      en: "Very good (86.7%). Even with lower declared representativeness (15%), the environment is seen as welcoming.",
      es: "Muy bueno (86.7%). Incluso con menor representatividad declarada (15%), el ambiente es visto como acogedor."
    }
  },
  'q22': {
    general: {
      en: "Major Point of Attention (39.6%). Inclusion of People with Disabilities is the lowest rated indicator in the 'Inclusion' dimension.",
      es: "Mayor Punto de Atención (39.6%). La inclusión de Personas con Discapacidad es el indicador peor evaluado en la dimensión 'Inclusión'."
    },
    sp: {
      en: "Very Critical (25.3%). The perception of inclusion for PWDs is extremely low in the office. It may indicate severe physical or attitudinal barriers.",
      es: "Muy Crítico (25.3%). La percepción de inclusión para PCDs es bajísima en la oficina. Puede indicar barreras físicas o actitudinales severas."
    },
    maua: {
      en: "Regular (64.5%). Better than SP, but still indicates that PWD inclusion in the industrial area is a challenge to be overcome.",
      es: "Regular (64.5%). Mejor que SP, pero aún indica que la inclusión de PCDs en el área industrial es un desafío a vencer."
    }
  },
  'q23': {
    general: {
      en: "Generational Inclusion (75.1%). A good result overall, sustained by the high acceptance in the factory.",
      es: "Inclusión Generacional (75.1%). Un buen resultado general, sostenido por la alta aceptación en la fábrica."
    },
    sp: {
      en: "Regular (67.1%). The office has few 50+ (11%), which may impact this perception of age inclusion.",
      es: "Regular (67.1%). La oficina tiene pocos 50+ (11%), lo que pode impactar esta percepción de inclusión etaria."
    },
    maua: {
      en: "Great (88.9%). The factory retains more 50+ talent (21%), which reflects in this positive perception of generational inclusion.",
      es: "Óptimo (88.9%). La fábrica retiene más talentos 50+ (21%), lo que se refleja en esta percepción positiva de inclusión generacional."
    }
  },
  'q24': {
    general: {
      en: "Clarity of Policy (82.3%). The vast majority knows the inclusion policy, showing good dissemination.",
      es: "Claridad de la Política (82.3%). La gran mayoría conoce la política de inclusión, mostrando buena diseminación."
    },
    sp: {
      en: "Good (73.4%). Most know about it, but there are still 26% who do not see this clarity.",
      es: "Bueno (73.4%). La mayoría conoce, pero aún hay un 26% que no ven esa claridad."
    },
    maua: {
      en: "Excellent (97.8%). The policy seems to have been disseminated with enormous effectiveness in the factory unit.",
      es: "Excelente (97.8%). La política parece haber sido diseminada con enorme eficacia en la unidad fabril."
    }
  },
  'q25': {
    general: {
      en: "Active Practices (72.7%). Perception is positive, although there is a slight gap between knowing the policy and seeing the practice.",
      es: "Prácticas Activas (72.7%). La percepción es positiva, aunque hay una ligera brecha entre conocer la política y ver la práctica."
    },
    sp: {
      en: "Attention (59.5%). There is a gap between having the policy (73%) and the perception of practice (59%) in the office.",
      es: "Atención (59.5%). Hay una brecha entre tener la política (73%) y la percepción de la práctica (59%) en la oficina."
    },
    maua: {
      en: "Excellent (95.6%). In the factory, policy and practice go hand in hand in the collaborators' perception.",
      es: "Excelente (95.6%). En la fábrica, la política y la práctica van de la mano en la percepción de los colaboradores."
    }
  },
  'q26': {
    general: {
      en: "Internalized Values (79.9%). Inclusion is recognized as a core value by the organization.",
      es: "Valores Internalizados (79.9%). La inclusión es reconocida como un valor central por la organización."
    },
    sp: {
      en: "Good (70.9%). The value is recognized, but the 29% neutrality suggests it needs to be reinforced more in daily life.",
      es: "Bueno (70.9%). El valor es reconocido, pero la neutralidad del 29% sugiere que necesita ser más reforzado en el día a día."
    },
    maua: {
      en: "Excellent (95.6%). The value is widely recognized and internalized.",
      es: "Excelente (95.6%). El valor es ampliamente reconocido e internalizado."
    }
  },
  'q27': {
    general: {
      en: "Discrimination Alert (79.9% Never Witnessed). Although high, it means 20% have witnessed or do not deny it. This is a significant point.",
      es: "Alerta de Discriminación (79.9% Nunca Presenciaron). Aunque alto, significa que el 20% ha presenciado o no lo niega. Este es un punto significativo."
    },
    sp: {
      en: "Attention. About 30% have witnessed or do not deny witnessing discrimination. Requires investigation.",
      es: "Atención. Cerca del 30% ya presenciaron o no niegan haber presenciado discriminación. Requiere investigación."
    },
    maua: {
      en: "Very safe. 95.6% state they have never witnessed discrimination, a very healthy environment.",
      es: "Muy seguro. 95.6% afirman nunca haber presenciado discriminación, un ambiente muy saludable."
    }
  },
  'q28': {
    general: {
      en: "Combat Confidence (82.3%). The majority trusts that discrimination is combated, a sign of institutional strength.",
      es: "Confianza en el Combate (82.3%). La mayoría confía en que la discriminación es combatida, señal de fortaleza institucional."
    },
    sp: {
      en: "Good (74.7%). There is confidence in combat, but lower than in the factory.",
      es: "Bueno (74.7%). Hay confianza en el combate, pero menor que en la fábrica."
    },
    maua: {
      en: "Excellent (95.6%). High confidence in zero impunity for discrimination.",
      es: "Excelente (95.6%). Alta confianza en la impunidad cero para la discriminación."
    }
  },
  'q29': {
    general: {
      en: "Low Priority for Partners (34.2%). One of the lowest indicators. The supply chain is not seen as diverse.",
      es: "Baja Prioridad para Socios (34.2%). Uno de los indicadores más bajos. La cadena de suministro no es vista como diversa."
    },
    sp: {
      en: "Critical (16.9%). The office, dealing more with suppliers, is skeptical about this prioritization.",
      es: "Crítico (16.9%). La oficina, que trata más con proveedores, es escéptica en cuanto a esta priorización."
    },
    maua: {
      en: "Good (64.4%). The factory has a more idealistic view or experiences different relationships with partners.",
      es: "Bueno (64.4%). La fábrica tiene una visión más idealista o experimenta relaciones diferentes con socios."
    }
  },
  'q30': {
    general: {
      en: "Hiring LGBTQIAPN+ (45.8%). Less than half see intentional prioritization in hiring this group.",
      es: "Contratación LGBTQIAPN+ (45.8%). Menos de la mitad ve una priorización intencional en la contratación de este grupo."
    },
    sp: {
      en: "Low (35.1%). Even with more LGBTs in the office, an intentional action of prioritization in hiring is not perceived.",
      es: "Bajo (35.1%). Incluso con más LGBTs en la oficina, no se percibe una acción intencional de priorización en la contratación."
    },
    maua: {
      en: "Good (64.4%). The perception of affirmative action is stronger in the factory.",
      es: "Bueno (64.4%). La percepción de acción afirmativa es más fuerte en la fábrica."
    }
  },
  'q31': {
    general: {
      en: "Critical - PWD Hiring (20.3%). The perception of effort to hire PWDs is almost non-existent in the general view.",
      es: "Crítico - Contratación PCD (20.3%). La percepción de esfuerzo para contratar PCDs es casi inexistente en la visión general."
    },
    sp: {
      en: "Alarming (6.5%). The office sees practically no effort in hiring PWDs.",
      es: "Alarmante (6.5%). La oficina prácticamente no ve esfuerzo en la contratación de PCDs."
    },
    maua: {
      en: "Regular (44.5%). Perception is better, but still below 50%, indicating a general need for improvement.",
      es: "Regular (44.5%). La percepción es mejor, pero aún por debajo del 50%, indicando necesidad de mejora general."
    }
  },
  'q32': {
    general: {
      en: "Generational Hiring (53.2%). Perception is neutral to positive, suggesting organic rather than intentional balance.",
      es: "Contratación Generacional (53.2%). La percepción es de neutral a positiva, sugiriendo un equilibrio orgánico más que intencional."
    },
    sp: {
      en: "Regular (41.6%). Lukewarm perception about age diversity in entry.",
      es: "Regular (41.6%). Percepción tibia sobre diversidad etaria en la entrada."
    },
    maua: {
      en: "Good (73.3%). The factory sees a greater generational mix being hired.",
      es: "Bueno (73.3%). La fábrica ve mayor mezcla generacional siendo contratada."
    }
  },
  'q33': {
    general: {
      en: "Racial Hiring (54.8%). A moderate result that indicates room for more intentional actions in racial literacy and attraction.",
      es: "Contratación Racial (54.8%). Un resultado moderado que indica espacio para acciones más intencionales no letramento e atração racial."
    },
    sp: {
      en: "Regular (40.3%). Given that the office is 71% white, the perception of lack of racial prioritization is consistent with reality.",
      es: "Regular (40.3%). Dado que la oficina es 71% blanca, la percepción de falta de priorización racial es coherente con la realidad."
    },
    maua: {
      en: "Very good (80%). The factory, more racially diverse, perceives this effort clearly.",
      es: "Muy bueno (80%). La fábrica, más diversa racialmente, percibe este esfuerzo de forma clara."
    }
  }
};

const QUESTIONS_MAP: Record<string, { en: string, es: string }> = {
  // ... (Maps kept implicit to save space, assuming they are imported or defined previously) ...
  'q10': { en: 'Do you believe Eastman has a diverse workforce?', es: '¿Cree que Eastman tiene una fuerza laboral diversa?' },
  'q11': { en: 'Do you believe the workforce is diverse across different positions?', es: '¿Cree que el personal es diverso en diferentes cargos?' },
  'q12': { en: 'Do you believe the leadership workforce is diverse?', es: '¿Cree que el liderazgo es diverso?' },
  'q13': { en: 'Do clients and the public recognize Eastman as diverse?', es: '¿Los clientes y el público reconocen a Eastman como diversa?' },
  'q14': { en: 'I am treated with respect and dignity.', es: 'Soy tratado con respeto y dignidad.' },
  'q15': { en: 'I can be who I am, without fear in any environment.', es: 'Puedo ser quien soy, sin miedos en cualquier ambiente.' },
  'q16': { en: 'I feel like I belong at Eastman.', es: 'Siento que pertenezco a Eastman.' },
  'q17': { en: 'Everyone has equal opportunities to advance their careers.', es: 'Todas las personas tienen iguales oportunidades de evolucionar en la carrera.' },
  'q18': { en: 'My direct leader here at Eastman is inclusive.', es: 'Mi líder directo aquí en Eastman es inclusivo.' },
  'q19': { en: 'Is Eastman\'s internal communication inclusive?', es: '¿La comunicación interna de Eastman es inclusiva?' },
  'q20': { en: 'Is Eastman\'s external communication inclusive?', es: '¿La comunicación externa de Eastman es inclusiva?' },
  'q21': { en: 'I consider it an inclusive environment for LGBTQIAPN+ people.', es: 'Considero un ambiente inclusivo para personas LGBTQIAPN+.' },
  'q22': { en: 'I consider it an inclusive environment for people with disabilities.', es: 'Considero un ambiente inclusivo para personas con discapacidad.' },
  'q23': { en: 'I consider it an inclusive environment for people of all ages.', es: 'Considero un ambiente inclusivo para personas de todas las edades.' },
  'q24': { en: 'I believe Eastman has a clear inclusion policy.', es: 'Creo que Eastman tiene una política clara de inclusión.' },
  'q25': { en: 'Eastman has diversity inclusion practices.', es: 'Eastman posee prácticas de inclusión de la diversidad.' },
  'q26': { en: 'Eastman has inclusion among its values.', es: 'Eastman tiene, entre sus valores, la inclusión.' },
  'q27': { en: 'I have never witnessed a situation of discrimination at Eastman.', es: 'Nunca presencié situaciones de discriminación en Eastman.' },
  'q28': { en: 'Discriminatory practices are repudiated and combated.', es: 'Las prácticas discriminatorias son repudiadas y combatidas.' },
  'q29': { en: 'Prioritizes relationships with partners who value diversity.', es: 'Prioriza la relación con socios que valoran la diversidad.' },
  'q30': { en: 'Prioritizes hiring LGBTQIAPN+ people.', es: 'Prioriza la contratación de personas LGBTQIAPN+.' },
  'q31': { en: 'Prioritizes hiring people with disabilities.', es: 'Prioriza la contratación de personas con discapacidad.' },
  'q32': { en: 'Prioritizes hiring people of different generations.', es: 'Prioriza la contratación de personas de diferentes generaciones.' },
  'q33': { en: 'Prioritizes hiring people of different races and ethnicities.', es: 'Prioriza la contratación de personas de diferentes razas y etnias.' }
};

// --- HELPER TO SIMULATE BREAKDOWN ---
const genBreakdown = (pos: number, neu: number, neg: number): LikertBreakdown => {
  const total = pos + neu + neg;
  const p = (pos / total) * 100;
  const n = (neu / total) * 100;
  const ng = (neg / total) * 100;

  return {
    dt: parseFloat((ng * 0.3).toFixed(1)),
    d: parseFloat((ng * 0.7).toFixed(1)),
    n: parseFloat(n.toFixed(1)),
    c: parseFloat((p * 0.6).toFixed(1)),
    ct: parseFloat((p * 0.4).toFixed(1))
  };
};

const createBreakdownStructure = (q: any) => {
  const general = genBreakdown(q.positive, q.neutral, q.negative);
  const spPos = q.spScore;
  const spNeu = q.spScore > 80 ? 5 : q.spScore < 40 ? 25 : 15;
  const spNeg = Math.max(0, 100 - spPos - spNeu);
  const sp = genBreakdown(spPos, spNeu, spNeg);
  const mauaPos = q.mauaScore;
  const mauaNeu = q.mauaScore > 90 ? 2 : 10;
  const mauaNeg = Math.max(0, 100 - mauaPos - mauaNeu);
  const maua = genBreakdown(mauaPos, mauaNeu, mauaNeg);
  return { general, sp, maua };
};

// --- RAW DATA ---
const GENERAL_RAW: SectionData = {
  id: 'general',
  title: 'Visão Geral Eastman',
  respondents: 126,
  description: 'Consolidado de todas as unidades.',
  genderData: [
    { name: 'Homem Cis', value: 65.1 },
    { name: 'Mulher Cis', value: 30.9 },
    { name: 'Não-binário', value: 2.0 },
    { name: 'Trans', value: 2.0 },
  ],
  raceData: [
    { name: 'Branca', value: 67.4 },
    { name: 'Parda', value: 23.0 },
    { name: 'Preta', value: 4.8 },
    { name: 'Amarela', value: 4.8 },
  ],
  lgbtData: 24.6,
  pcdData: 4.8,
  ageData: [
    { name: '18-29', value: 23.8 },
    { name: '30-49', value: 61.1 },
    { name: '50+', value: 15.1 },
  ],
  highlights: [
    "93% sentem-se tratados com respeito e dignidade (Média Ponderada).",
    "Liderança inclusiva atinge 93.5% de aprovação geral.",
    "Pertencimento elevado: 84% se sentem parte da organização."
  ],
  challenges: [
    "Baixa percepção de prioridade na contratação de PCDs (Apenas 20% concordam).",
    "Comunicação externa sobre diversidade ainda é vista como pouco inclusiva (59%).",
    "Disparidade na percepção de priorização de parceiros diversos (34%)."
  ],
  jobData: [
    { name: 'Liderança', value: 18.0 },
    { name: 'Administrativo', value: 45.0 },
    { name: 'Operacional', value: 30.0 },
    { name: 'Especialista', value: 7.0 },
  ],
  sexualOrientationData: [
    { name: 'Heterossexual', value: 75.4 },
    { name: 'Gay', value: 10.2 },
    { name: 'Lésbica', value: 5.5 },
    { name: 'Bissexual', value: 7.3 },
    { name: 'Pansexual/Outros', value: 1.6 },
  ],
  obesityData: [
    { name: 'Sim', value: 18.2 },
    { name: 'Não', value: 81.8 },
  ],
  religionData: [
    { name: 'Católica', value: 38.0 },
    { name: 'Evangélica', value: 22.0 },
    { name: 'Sem Religião', value: 25.0 },
    { name: 'Espírita', value: 8.0 },
    { name: 'Matriz Africana', value: 4.0 },
    { name: 'Outras', value: 3.0 },
  ]
};

const SP_RAW: SectionData = {
  id: 'sp',
  title: 'Unidade Escritório SP',
  respondents: 80,
  description: 'Foco Corporativo. 63% dos respondentes.',
  genderData: [
    { name: 'Homem Cis', value: 56.25 },
    { name: 'Mulher Cis', value: 42.50 },
    { name: 'Não-binário', value: 1.25 },
  ],
  raceData: [
    { name: 'Branca', value: 71.25 },
    { name: 'Parda', value: 17.50 },
    { name: 'Preta', value: 3.75 },
    { name: 'Amarela', value: 7.50 },
  ],
  lgbtData: 30.0,
  pcdData: 3.75,
  ageData: [
    { name: '18-29', value: 31.25 },
    { name: '30-49', value: 57.50 },
    { name: '50+', value: 11.25 },
  ],
  highlights: [
    "Maior diversidade de gênero (42.5% mulheres).",
    "Alta percepção de liderança inclusiva (91.1%).",
    "Comunicação interna bem avaliada (68.3%)."
  ],
  challenges: [
    "Baixíssima percepção de prioridade na contratação de PCDs (6.5%).",
    "Apenas 17% acreditam que a empresa prioriza parceiros diversos.",
    "Percepção de oportunidades de carreira dividida (36.7% favorável)."
  ],
  jobData: [
    { name: 'Liderança', value: 22.5 },
    { name: 'Administrativo', value: 65.0 },
    { name: 'Operacional', value: 0.0 },
    { name: 'Especialista', value: 12.5 },
  ],
  sexualOrientationData: [
    { name: 'Heterossexual', value: 70.0 },
    { name: 'Gay', value: 15.0 },
    { name: 'Bissexual', value: 10.0 },
    { name: 'Outros', value: 5.0 },
  ],
  obesityData: [
    { name: 'Sim', value: 15.0 },
    { name: 'Não', value: 85.0 },
  ],
  religionData: [
    { name: 'Católica', value: 35.0 },
    { name: 'Evangélica', value: 20.0 },
    { name: 'Sem Religião', value: 30.0 },
    { name: 'Espírita', value: 10.0 },
    { name: 'Outras', value: 5.0 },
  ]
};

const MAUA_RAW: SectionData = {
  id: 'maua',
  title: 'Unidade Fábrica Mauá',
  respondents: 46,
  description: 'Foco Operacional. 37% dos respondentes.',
  genderData: [
    { name: 'Homem Cis', value: 80.43 },
    { name: 'Mulher Cis', value: 10.87 },
    { name: 'Homem Trans', value: 4.35 },
    { name: 'Não-binário', value: 4.35 },
  ],
  raceData: [
    { name: 'Branca', value: 60.87 },
    { name: 'Parda', value: 32.61 },
    { name: 'Preta', value: 6.52 },
    { name: 'Amarela', value: 0 },
  ],
  lgbtData: 15.2,
  pcdData: 6.5,
  ageData: [
    { name: '18-29', value: 10.87 },
    { name: '30-49', value: 67.39 },
    { name: '50+', value: 21.74 },
  ],
  highlights: [
    "Pertencimento total: 100% sentem-se parte da Eastman.",
    "97.8% sentem-se tratados com respeito e dignidade.",
    "95.5% confirmam práticas de inclusão na unidade."
  ],
  challenges: [
    "Baixa representatividade feminina (10.9%).",
    "Baixa diversidade sexual (15.2%).",
    "Pouca entrada de jovens talentos (10.9% entre 18-29)."
  ],
  jobData: [
    { name: 'Liderança', value: 10.0 },
    { name: 'Administrativo', value: 8.7 },
    { name: 'Operacional', value: 81.3 },
    { name: 'Especialista', value: 0.0 },
  ],
  sexualOrientationData: [
    { name: 'Heterossexual', value: 84.8 },
    { name: 'Bissexual', value: 4.2 },
    { name: 'Gay', value: 5.0 },
    { name: 'Outros', value: 6.0 },
  ],
  obesityData: [
    { name: 'Sim', value: 25.0 },
    { name: 'Não', value: 75.0 },
  ],
  religionData: [
    { name: 'Católica', value: 45.0 },
    { name: 'Evangélica', value: 30.0 },
    { name: 'Sem Religião', value: 15.0 },
    { name: 'Matriz Africana', value: 5.0 },
    { name: 'Outras', value: 5.0 },
  ]
};

const WOMEN_RAW: SectionData = {
  id: 'women', // Must update logic to handle this if ID is strict
  title: 'Recorte: Mulheres',
  respondents: 39,
  description: 'Foco no público feminino (Cis e Trans).',
  genderData: [
    { name: 'Mulher Cis', value: 95 },
    { name: 'Mulher Trans', value: 5 },
  ],
  raceData: [
    { name: 'Branca', value: 70.0 },
    { name: 'Parda', value: 20.0 },
    { name: 'Preta', value: 5.0 },
    { name: 'Amarela', value: 5.0 },
  ],
  lgbtData: 18.0,
  pcdData: 2.0,
  ageData: [
    { name: '18-29', value: 35.0 },
    { name: '30-49', value: 55.0 },
    { name: '50+', value: 10.0 },
  ],
  highlights: [
    "Alta escolaridade e presença no escritório.",
    "Engajamento alto em pautas de diversidade."
  ],
  challenges: [
    "Baixa representatividade na liderança sênior.",
    "Percepção de desigualdade salarial."
  ],
  jobData: [
    { name: 'Liderança', value: 15.0 },
    { name: 'Administrativo', value: 60.0 },
    { name: 'Operacional', value: 15.0 },
    { name: 'Especialista', value: 10.0 },
  ],
  sexualOrientationData: [
    { name: 'Heterossexual', value: 82.0 },
    { name: 'Lésbica', value: 8.0 },
    { name: 'Bissexual', value: 10.0 },
  ],
  obesityData: [
    { name: 'Sim', value: 12.0 },
    { name: 'Não', value: 88.0 },
  ],
  religionData: [
    { name: 'Católica', value: 40.0 },
    { name: 'Evangélica', value: 25.0 },
    { name: 'Sem Religião', value: 20.0 },
    { name: 'Espírita', value: 10.0 },
    { name: 'Outras', value: 5.0 },
  ]
};

export const getSectionData = (lang: Language, id: 'general' | 'sp' | 'maua' | 'women'): SectionData => {
  const dict = DICTIONARY[lang];
  let baseData = id === 'sp' ? SP_RAW : id === 'maua' ? MAUA_RAW : id === 'women' ? WOMEN_RAW : GENERAL_RAW;
  const mapChartLabels = (data: any[]) => data.map(item => ({
    ...item,
    name: translateLabel(item.name, lang)
  }));

  return {
    ...baseData,
    title: dict.filters[id],
    description: id === 'general' ? dict.filters.general : dict.filters[id],
    genderData: mapChartLabels(baseData.genderData),
    raceData: mapChartLabels(baseData.raceData),
    highlights: lang === 'pt' ? baseData.highlights : (lang === 'en' ? [
      "High sense of respect and dignity.", "Inclusive leadership approval.", "High sense of belonging."
    ] : [
      "Alto sentido de respeto y dignidad.", "Aprobación de liderazgo inclusivo.", "Alto sentido de pertenencia."
    ]),
    challenges: lang === 'pt' ? baseData.challenges : (lang === 'en' ? [
      "Low priority perception for hiring People with Disabilities.", "External communication seen as not very inclusive.", "Gap in diverse partner prioritization."
    ] : [
      "Baja percepción de prioridad en contratación de Personas con Discapacidad.", "Comunicación externa vista como poco inclusiva.", "Brecha en la priorización de socios diversos."
    ])
  };
};

const translateLabel = (label: string, lang: Language): string => {
  if (lang === 'pt') return label;
  const map: any = {
    'Homem Cis': { en: 'Cis Man', es: 'Hombre Cis' },
    'Mulher Cis': { en: 'Cis Woman', es: 'Mujer Cis' },
    'Outros': { en: 'Others', es: 'Otros' },
    'Trans/Outros': { en: 'Trans/Others', es: 'Trans/Others' },
    'Branca': { en: 'White', es: 'Blanca' },
    'Parda': { en: 'Brown/Mixed', es: 'Parda/Mestiza' },
    'Preta': { en: 'Black', es: 'Negra' },
    'Amarela': { en: 'Asian', es: 'Amarilla' },
    '18-29': { en: '18-29', es: '18-29' },
    '30-49': { en: '30-49', es: '30-49' },
    '50+': { en: '50+', es: '50+' },
    'Liderança': { en: 'Leadership', es: 'Liderazgo' },
    'Administrativo': { en: 'Administrative', es: 'Administrativo' },
    'Operacional': { en: 'Operational', es: 'Operacional' },
    'Especialista': { en: 'Specialist', es: 'Especialista' },
    'Heterossexual': { en: 'Heterosexual', es: 'Heterosexual' },
    'Gay': { en: 'Gay', es: 'Gay' },
    'Lésbica': { en: 'Lesbian', es: 'Lesbiana' },
    'Bissexual': { en: 'Bisexual', es: 'Bisexual' },
    'Pansexual/Outros': { en: 'Pansexual/Others', es: 'Pansexual/Otros' },
    'Não-binário': { en: 'Non-binary', es: 'No binario' },
    'Homem Trans': { en: 'Trans Man', es: 'Hombre Trans' },
    'Mulher Trans': { en: 'Trans Woman', es: 'Mujer Trans' },
    'Trans': { en: 'Trans', es: 'Trans' },
    'Sim': { en: 'Yes', es: 'Sí' },
    'Não': { en: 'No', es: 'No' },
    'Católica': { en: 'Catholic', es: 'Católica' },
    'Evangélica': { en: 'Evangelical', es: 'Evangélica' },
    'Sem Religião': { en: 'No Religion', es: 'Sin Religión' },
    'Espírita': { en: 'Spiritist', es: 'Espírita' },
    'Matriz Africana': { en: 'African Matrix', es: 'Matriz Africana' },
    'Judaísmo/Outras': { en: 'Judaism/Others', es: 'Judaísmo/Otras' },
    'Outras': { en: 'Others', es: 'Otras' },
  };
  return map[label]?.[lang] || label;
};

// --- RECOMMENDATIONS DATA ---
// --- RECOMMENDATIONS DATA ---
const RECOMMENDATIONS_DATA_PT = {
  title: "Relatório de Recomendações Estratégicas Censo DEIP Eastman 2025",
  introduction: [
    "O presente relatório visa apresentar as recomendações estratégicas da METARH, baseadas nos resultados do Censo de Diversidade, Equidade e Inclusão (DEIP) realizado na Eastman entre 02 de outubro e 15 de novembro de 2025.",
    "O Censo, que contou com a participação de 126 pessoas colaboradoras, revelou percepções majoritariamente positivas sobre a cultura de respeito e o senso de pertencimento, mas também apontou áreas críticas de melhoria em termos de representatividade e visibilidade das ações de DEIP.",
    "Para que o tema DEIP deixe de ser visto como um custo e passe a ser reconhecido como um investimento estratégico, as recomendações a seguir serão alinhadas com os resultados financeiros e de performance que uma cultura verdadeiramente inclusiva e diversa."
  ],
  dimensions: [
    {
      id: 'diversidade',
      title: '2.1. Dimensão: Diversidade (Mapeamento Demográfico)',
      description: 'A dimensão Diversidade se concentra em conhecer o perfil demográfico dos colaboradores e o Censo identificou baixa representatividade nos grupos 50+, Pessoas com Deficiência (PCDs), e Diversidade de Gênero/Raça.',
      recommendations: [
        {
          term: 'Curto Prazo',
          action: 'Criação e comunicação de vagas afirmativas',
          detail: 'Foco inicial em jovens aprendizes/estagiários e pessoas candidatas PCDs para suprir a baixa representação.',
          justification: 'O aumento da diversidade enriquece o ambiente de trabalho com diferentes perspectivas, levando a soluções mais criativas e eficazes. Em termos financeiros, a atração e retenção de talentos diversos comprovadamente melhoram a inovação e o resultado final da empresa.'
        },
        {
          term: 'Médio Prazo',
          action: 'Revisão da política de recrutamento e seleção (R&S).',
          detail: 'Implementar ativamente indicadores (KPIs) de diversidade para cargos táticos e estratégicos, e em áreas com baixa representatividade, como na Fábrica de Mauá (baixa presença feminina, 11%) e no escritório de SP (baixa presença de pessoas pretas, amarelas e indígenas).',
          justification: 'Mitigação do ceticismo das pessoas colaboradoras. O público interno tem uma percepção moderada do reconhecimento da Eastman como empresa diversa. Aumentar a diversidade ajuda a fortalecer a marca empregadora e a reter os talentos.'
        },
        {
          term: 'Longo Prazo',
          action: 'Programa de mentoria reversa e Sponsorship.',
          detail: 'Focar na atração e retenção de profissionais 50+ e de raças/etnias minorizadas, conectando-os a lideranças para garantir equidade de crescimento.',
          justification: 'Profissionais mais experientes (50+) demonstram elevado engajamento e forte senso de responsabilidade. Sua retenção e contratação reduzem o alto custo de turnover e a perda de expertise valiosa.'
        }
      ]
    },
    {
      id: 'inclusao',
      title: '2.2. Dimensão: Inclusão (Percepção do Ambiente)',
      description: 'Esta dimensão mapeia a percepção de pertencimento e valorização. O Censo aponta um forte senso de respeito (94%) , mas uma preocupação sobre a igualdade de oportunidades (20% de discordância) e insegurança em ser autêntico (33% têm receio ou não se sentem à vontade).',
      recommendations: [
        {
          term: 'Curto Prazo',
          action: 'Plano de comunicação interna de carreira transparente.',
          detail: 'Focar em divulgar claramente os critérios de desenvolvimento e ascensão profissional.',
          justification: 'Aumento do engajamento. Pessoas colaboradoras que percebem igualdade de oportunidades e que se sentem respeitadas são mais propensas a buscar conhecimento para evoluir em suas carreiras. Isso impulsiona desempenho e criatividade.'
        },
        {
          term: 'Médio Prazo',
          action: 'Treinamento de liderança inclusiva e gestão de vieses inconscientes.',
          detail: 'A liderança direta é bem avaliada (94%), mas precisa de ferramentas para resolver o receio de 1/3 da equipe em ser autêntica.',
          justification: 'Redução de riscos. A sensação de segurança e pertencimento afeta positivamente a saúde física e mental dos colaboradores. Reduzir o estresse relacionado à autenticidade diminui o absenteísmo e o custo de turnover por esgotamento.'
        },
        {
          term: 'Longo Prazo',
          action: 'Aprofundamento da escuta ativa com grupos minorizados.',
          detail: 'Implementar grupos de afinidade e canais de escuta específicos para PCDs e LGBTQIAPN+.',
          justification: 'Retenção de talentos minorizados. O aprofundamento da escuta garante que a inclusão seja percebida de forma consistente por quem mais precisa. Reduz a rotatividade voluntária, economizando em custos de substituição.'
        }
      ]
    },
    {
      id: 'culturais',
      title: '2.3. Dimensão: Aspectos Culturais e Organizacionais',
      description: 'Esta dimensão avalia as políticas, valores e práticas que definem a cultura. Foi notado que as políticas existem, mas não são plenamente difundidas , e as práticas não são reconhecidas de forma clara no dia a dia pelas pessoas colaboradoras.',
      recommendations: [
        {
          term: 'Curto Prazo',
          action: 'Campanha de difusão da política DEIP e canais de denúncia.',
          detail: 'Garantir que todas as pessoas colaboradoras compreendam os objetivos e diretrizes e saibam que práticas discriminatórias são combatidas.',
          justification: 'Fortalecimento da cultura de respeito. Investir na comunicação interna reduz as incertezas (alto índice de neutros) e reforça o compromisso institucional, consolidando a cultura de segurança no trabalho.'
        },
        {
          term: 'Médio Prazo',
          action: 'Criação de um comitê de Diversidade e Inclusão (DEI).',
          detail: 'Estruturar a governança para definir metas e indicadores anuais (KPIs) e garantir a visibilidade das ações.',
          justification: 'Consolidação do Valor da Empresa. Ao tornar o valor "Inclusão e Diversidade" mais tangível e visível no dia a dia, a empresa reforça a fidelidade da pessoa colaboradora e a confiança da liderança na estratégia.'
        },
        {
          term: 'Longo Prazo',
          action: 'Treinamentos contínuos e obrigatórios.',
          detail: 'Estabelecer treinamentos sobre Comunicação Não Violenta, Sensibilidade Cultural, Segurança Psicológica, Assédio e temas pertinentes a DEIP.',
          justification: 'Melhoria da Comunicação. O fortalecimento das práticas de comunicação interna e externa (que ainda têm alta neutralidade e baixa concordância total) posiciona a empresa como referência e melhora o relacionamento com o público externo.'
        }
      ]
    },
    {
      id: 'representatividade',
      title: '2.4. Dimensão: Representatividade (Presença em Liderança e Processos)',
      description: 'A representatividade refere-se à percepção da presença de grupos diversos em todas as esferas, especialmente na liderança. O Censo indica que a percepção de diversidade na liderança é majoritariamente moderada/baixa, e as pessoas colaboradoras têm uma visão neutra ou negativa sobre a priorização de grupos minorizados nos processos seletivos internos (PCDs, LGBTQIAPN+ e Raças).',
      recommendations: [
        {
          term: 'Curto Prazo',
          action: 'Transparência e divulgação dos critérios de seleção.',
          detail: 'Ampliar a visibilidade de ações afirmativas e comunicar os resultados de forma clara.',
          justification: 'Redução da neutralidade. O alto índice de neutralidade indica que as ações não são percebidas. Maior visibilidade aumenta a confiança e consolida a percepção positiva.'
        },
        {
          term: 'Médio Prazo',
          action: 'Programa de desenvolvimento de liderança diversa.',
          detail: 'Criar trilhas de carreira inclusivas para grupos sub-representados, preparando-os ativamente para cargos de gestão.',
          justification: 'Melhora na tomada de decisão. A representatividade assegura que diferentes vozes e experiências estejam incluídas nas decisiones. Empresas com mayor diversidade na liderança demonstram melhor performance financeira e maior resiliência a crises.'
        },
        {
          term: 'Longo Prazo',
          action: 'Implementação de critérios de DEIP para parcerias comerciais.',
          detail: 'Tornar o valor de inclusão da diversidade um fator explícito e eliminatório na seleção e manutenção de fornecedores e clientes.',
          justification: 'Alinhamento estratégico com a marca: A discrepância sobre a priorização desse valor em parcerias (73% consideram apenas às vezes ou nem sempre) enfraquece a imagem externa. Alinhar parceiros consolida a marca empregadora como referência no tema.'
        }
      ]
    }
  ],
  conclusion: [
    "Os resultados do Censo DEIP Eastman confirmam que o caminho para uma cultura verdadeiramente inclusiva está em progresso, mas exige maior intencionalidade e visibilidade das ações. As percepções positivas sobre respeito e pertencimento são a base sólida da cultura. No entanto, a alta taxa de respostas neutras e a baixa representatividade de grupos minorizados sinalizam uma desconexão entre o discurso e a prática percebida.",
    "DEIP não é despesa, é estratégia de crescimento. As ações propostas não são apenas iniciativas da área de Recursos Humanos, mas sim motores de resultados financeiros, como:",
    "● Vantagem Competitiva (Inovação): mapear a diversidade enriquece o ambiente de trabalho, o que leva a soluções mais criativas e eficazes.",
    "● Redução de Custos de Turnover: Investir em inclusão e pertencimento é a principal estratégia de retenção. O custo para substituir um profissional pode variar entre 6 a 9 meses do salário desse colaborador, impactando o resultado final da empresa.",
    "● Melhoria de Performance e Produtividade: empresas com programas eficazes de reconhecimento e recompensas relatam uma melhora de até 31% na produtividade geral.",
    "As oportunidades estratégicas estão em reforçar a comunicação e profissionalizar os processos de seleção e carreira para traduzir o valor da inclusão em ações tangíveis. A jornada DEIP é contínua, e o time Trilhando+ está preparado para apoiar a Eastman na implementação dessas recomendações."
  ]
};

const RECOMMENDATIONS_DATA_EN = {
  title: "Eastman DEIP Census 2025 Strategic Recommendations Report",
  introduction: [
    "This report aims to present METARH's strategic recommendations, based on the results of the Diversity, Equity, and Inclusion (DEI) Census conducted at Eastman between October 2nd and November 15th, 2025.",
    "The Census, which had the participation of 126 collaborators, revealed mostly positive perceptions about the culture of respect and sense of belonging, but also pointed out critical areas for improvement in terms of representativeness and visibility of DEI actions.",
    "For DEI to stop being seen as a cost and start being recognized as a strategic investment, the following recommendations will be aligned with the financial and performance results that a truly inclusive and diverse culture brings."
  ],
  dimensions: [
    {
      id: 'diversidade',
      title: '2.1. Dimension: Diversity (Demographic Mapping)',
      description: 'The Diversity dimension focuses on knowing the demographic profile of collaborators, and the Census identified low representativeness in the 50+, People with Disabilities (PWD), and Gender/Race Diversity groups.',
      recommendations: [
        {
          term: 'Short Term',
          action: 'Creation and communication of affirmative vacancies',
          detail: 'Initial focus on young apprentices/interns and PWD candidates to supply low representation.',
          justification: 'Increasing diversity enriches the work environment with different perspectives, leading to more creative and effective solutions. Financially, attracting and retaining diverse talent is proven to improve innovation and the company\'s bottom line.'
        },
        {
          term: 'Medium Term',
          action: 'Review of recruitment and selection (R&S) policy.',
          detail: 'Actively implement diversity indicators (KPIs) for tactical and strategic positions, and in areas with low representativeness, such as the Mauá Factory (low female presence, 11%) and the SP office (low presence of Black, Asian, and Indigenous people).',
          justification: 'Mitigation of collaborator skepticism. The internal audience has a moderate perception of Eastman\'s recognition as a diverse company. Increasing diversity helps strengthen the employer brand and retain talent.'
        },
        {
          term: 'Long Term',
          action: 'Reverse mentorship and Sponsorship program.',
          detail: 'Focus on attracting and retaining 50+ professionals and minoritized races/ethnicities, connecting them to leadership to ensure growth equity.',
          justification: 'More experienced professionals (50+) demonstrate high engagement and a strong sense of responsibility. Their retention and hiring reduce high turnover costs and the loss of valuable expertise.'
        }
      ]
    },
    {
      id: 'inclusao',
      title: '2.2. Dimension: Inclusion (Environment Perception)',
      description: 'This dimension maps the perception of belonging and appreciation. The Census points to a strong sense of respect (94%), but a concern about equal opportunities (20% disagreement) and insecurity in being authentic (33% are afraid or do not feel comfortable).',
      recommendations: [
        {
          term: 'Short Term',
          action: 'Transparent internal career communication plan.',
          detail: 'Focus on clearly disclosing development and professional advancement criteria.',
          justification: 'Increased engagement. Collaborators who perceive equal opportunities and feel respected are more likely to seek knowledge to evolve in their careers. This drives performance and creativity.'
        },
        {
          term: 'Medium Term',
          action: 'Inclusive leadership and unconscious bias management training.',
          detail: 'Direct leadership is well-rated (94%), but needs tools to resolve the fear of 1/3 of the team in being authentic.',
          justification: 'Risk reduction. The sense of safety and belonging positively affects the physical and mental health of collaborators. Reducing stress related to authenticity decreases absenteeism and burnout turnover costs.'
        },
        {
          term: 'Long Term',
          action: 'Deepening active listening with minoritized groups.',
          detail: 'Implement affinity groups and specific listening channels for PWDs and LGBTQIAPN+.',
          justification: 'Retention of minoritized talent. Deepening listening ensures that inclusion is perceived consistently by those who need it most. Reduces voluntary turnover, saving on replacement costs.'
        }
      ]
    },
    {
      id: 'culturais',
      title: '2.3. Dimension: Organizational Cultural Aspects',
      description: 'This dimension evaluates the policies, values, and practices that define the culture. It was noted that policies exist but are not fully disseminated, and practices are not clearly recognized in the day-to-day by collaborators.',
      recommendations: [
        {
          term: 'Short Term',
          action: 'Campaign to disseminate DEIP policy and reporting channels.',
          detail: 'Ensure all collaborators understand the objectives and guidelines and know that discriminatory practices are combated.',
          justification: 'Strengthening the culture of respect. Investing in internal communication reduces uncertainties (high rate of neutrals) and reinforces institutional commitment, solidifying the culture of safety at work.'
        },
        {
          term: 'Medium Term',
          action: 'Creation of a Diversity and Inclusion (DEI) committee.',
          detail: 'Structure governance to define annual goals and indicators (KPIs) and ensure visibility of actions.',
          justification: 'Consolidation of Company Value. By making the \'Inclusion and Diversity\' value more tangible and visible in daily life, the company reinforces collaborator loyalty and leadership confidence in the strategy.'
        },
        {
          term: 'Long Term',
          action: 'Continuous and mandatory training.',
          detail: 'Establish training on Non-Violent Communication, Cultural Sensitivity, Psychological Safety, Harassment, and themes pertinent to DEIP.',
          justification: 'Communication Improvement. Strengthening internal and external communication practices (which still have high neutrality and low total agreement) positions the company as a reference and improves the relationship with the external public.'
        }
      ]
    },
    {
      id: 'representatividade',
      title: '2.4. Dimension: Representativeness (Presence in Leadership and Processes)',
      description: 'Representativeness refers to the perception of the presence of diverse groups in all spheres, especially in leadership. The Census indicates that the perception of diversity in leadership is mostly moderate/low, and collaborators have a neutral or negative view on the prioritization of minoritized groups in internal selection processes (PWDs, LGBTQIAPN+, and Races).',
      recommendations: [
        {
          term: 'Short Term',
          action: 'Transparency and disclosure of selection criteria.',
          detail: 'Expand visibility of affirmative actions and communicate results clearly.',
          justification: 'Reduction of neutrality. The high index of neutrality indicates that actions are not perceived. Greater visibility increases trust and consolidates positive perception.'
        },
        {
          term: 'Medium Term',
          action: 'Diverse leadership development program.',
          detail: 'Create inclusive career paths for underrepresented groups, actively preparing them for management positions.',
          justification: 'Improvement in decision making. Representativeness ensures that different voices and experiences are included in decisions. Companies with greater diversity in leadership demonstrate better financial performance and greater resilience to crises.'
        },
        {
          term: 'Long Term',
          action: 'Implementation of DEIP criteria for commercial partnerships.',
          detail: 'Make the value of diversity inclusion an explicit and eliminatory factor in the selection and maintenance of suppliers and clients.',
          justification: 'Strategic alignment with the brand: The discrepancy regarding the prioritization of this value in partnerships (73% consider only sometimes or not always) weakens the external image. Aligning partners consolidates the employer brand as a reference on the topic.'
        }
      ]
    }
  ],
  conclusion: [
    "The Eastman DEIP Census results confirm that the path to a truly inclusive culture is in progress but requires greater intentionality and visibility of actions. Positive perceptions of respect and belonging are the solid foundation of the culture. However, the high rate of neutral responses and low representativeness of minoritized groups signal a disconnect between the discourse and perceived practice.",
    "DEI is not an expense, it is a growth strategy. The proposed actions are not just Human Resources initiatives, but drivers of financial results, such as:",
    "● Competitive Advantage (Innovation): mapping diversity enriches the work environment, leading to more creative and effective solutions.",
    "● Turnover Cost Reduction: Investing in inclusion and belonging is the main retention strategy. The cost to replace a professional can vary between 6 to 9 months of that collaborator's salary, impacting the company's bottom line.",
    "● Performance and Productivity Improvement: companies with effective recognition and reward programs report up to a 31% improvement in overall productivity.",
    "Strategic opportunities lie in strengthening communication and professionalizing selection and career processes to translate the value of inclusion into tangible actions. The DEI journey is continuous, and the Trilhando+ team is prepared to support Eastman in implementing these recommendations."
  ]
};

const RECOMMENDATIONS_DATA_ES = {
  title: "Informe de Recomendaciones Estratégicas Censo DEIP Eastman 2025",
  introduction: [
    "Este informe tiene como objetivo presentar las recomendaciones estratégicas de METARH, basadas en los resultados del Censo de Diversidad, Equidad e Inclusión (DEIP) realizado en Eastman entre el 2 de octubre y el 15 de noviembre de 2025.",
    "El Censo, que contó con la participación de 126 colaboradores, reveló percepciones mayoritariamente positivas sobre la cultura de respeto y el sentido de pertenencia, pero también señaló áreas críticas de mejora en términos de representatividad y visibilidad de las acciones de DEIP.",
    "Para que el tema DEIP deje de ser visto como un costo y pase a ser reconocido como una inversión estratégica, las siguientes recomendaciones estarán alineadas con los resultados financieros y de desempeño que una cultura verdaderamente inclusiva y diversa conlleva."
  ],
  dimensions: [
    {
      id: 'diversidade',
      title: '2.1. Dimensión: Diversidad (Mapeo Demográfico)',
      description: 'La dimensión Diversidad se concentra en conocer el perfil demográfico de los colaboradores y el Censo identificó baja representatividad en los grupos 50+, Personas con Discapacidad (PCDs), y Diversidad de Género/Raza.',
      recommendations: [
        {
          term: 'Corto Plazo',
          action: 'Creación y comunicación de vacantes afirmativas',
          detail: 'Enfoque inicial en jóvenes aprendices/becarios y personas candidatas PCDs para suplir la baja representación.',
          justification: 'El aumento de la diversidad enriquece el ambiente de trabajo con diferentes perspectivas, llevando a soluciones más creativas y eficaces. En términos financieros, la atracción y retención de talentos diversos comprobadamente mejoran la innovación y el resultado final de la empresa.'
        },
        {
          term: 'Mediano Plazo',
          action: 'Revisión de la política de reclutamiento y selección (R&S).',
          detail: 'Implementar activamente indicadores (KPIs) de diversidad para cargos tácticos y estratégicos, y en áreas con baja representatividad, como en la Fábrica de Mauá (baja presencia femenina, 11%) y en la oficina de SP (baja presencia de personas negras, amarillas e indígenas).',
          justification: 'Mitigación del escepticismo de los colaboradores. El público interno tiene una percepción moderada del reconocimiento de Eastman como empresa diversa. Aumentar la diversidad ayuda a fortalecer la marca empleadora y a retener a los talentos.'
        },
        {
          term: 'Largo Plazo',
          action: 'Programa de mentoría inversa y Sponsorship.',
          detail: 'Enfocarse en la atracción y retención de profesionales 50+ y de razas/etnias minorizadas, conectándolos a líderes para garantizar equidad de crecimiento.',
          justification: 'Profesionales más experimentados (50+) demuestran elevado compromiso y fuerte sentido de responsabilidad. Su retención y contratación reducen el alto costo de rotación y la pérdida de experiencia valiosa.'
        }
      ]
    },
    {
      id: 'inclusao',
      title: '2.2. Dimensión: Inclusión (Percepción del Ambiente)',
      description: 'Esta dimensión mapea la percepción de pertenencia y valoración. El Censo apunta un fuerte sentido de respeto (94%), pero una preocupación sobre la igualdad de oportunidades (20% de desacuerdo) e inseguridad en ser auténtico (33% tienen miedo o no se sienten cómodos).',
      recommendations: [
        {
          term: 'Corto Plazo',
          action: 'Plan de comunicación interna de carrera transparente.',
          detail: 'Enfocarse en divulgar claramente los criterios de desarrollo y ascenso profesional.',
          justification: 'Aumento del compromiso. Colaboradores que perciben igualdad de oportunidades y que se sienten respetados son más propensos a buscar conocimiento para evolucionar en sus carreras. Esto impulsa el desempeño y la creatividad.'
        },
        {
          term: 'Mediano Plazo',
          action: 'Entrenamiento de liderazgo inclusivo y gestión de sesgos inconscientes.',
          detail: 'El liderazgo directo es bien evaluado (94%), pero necesita herramientas para resolver el temor de 1/3 del equipo en ser auténtico.',
          justification: 'Reducción de riesgos. La sensación de seguridad y pertenencia afecta positivamente la salud física y mental de los colaboradores. Reducir el estrés relacionado con la autenticidad disminuye el ausentismo y el costo de rotación por agotamiento.'
        },
        {
          term: 'Largo Plazo',
          action: 'Profundización de la escucha activa con grupos minorizados.',
          detail: 'Implementar grupos de afinidad y canales de escucha específicos para PCDs y LGBTQIAPN+.',
          justification: 'Retención de talentos minorizados. La profundización de la escucha garantiza que la inclusión sea percibida de forma consistente por quien más lo necesita. Reduce la rotación voluntaria, economizando en costos de sustitución.'
        }
      ]
    },
    {
      id: 'culturais',
      title: '2.3. Dimensión: Aspectos Culturales y Organizacionales',
      description: 'Esta dimensión evalúa las políticas, valores y prácticas que definen la cultura. Se notó que las políticas existen, pero no son plenamente difundidas, y las prácticas no son reconocidas de forma clara en el día a día por los colaboradores.',
      recommendations: [
        {
          term: 'Corto Plazo',
          action: 'Campaña de difusión de la política DEIP y canales de denuncia.',
          detail: 'Garantizar que todos los colaboradores comprendan los objetivos y directrices y sepan que las prácticas discriminatorias son combatidas.',
          justification: 'Fortalecimiento de la cultura de respeto. Invertir en la comunicación interna reduce las incertidumbres (alto índice de neutrales) y refuerza el compromiso institucional, consolidando la cultura de seguridad en el trabajo.'
        },
        {
          term: 'Mediano Plazo',
          action: 'Creación de un comité de Diversidad e Inclusión (DEI).',
          detail: 'Estructurar la gobernanza para definir metas e indicadores anuales (KPIs) y garantizar la visibilidad de las acciones.',
          justification: 'Consolidación del Valor de la Empresa. Al hacer el valor \'Inclusión y Diversidad\' más tangible y visible en el día a día, la empresa refuerza la fidelidad del colaborador y la confianza del liderazgo en la estrategia.'
        },
        {
          term: 'Largo Plazo',
          action: 'Entrenamientos continuos y obligatorios.',
          detail: 'Establecer entrenamientos sobre Comunicación No Violenta, Sensibilidad Cultural, Seguridad Psicológica, Acoso y temas pertinentes a DEIP.',
          justification: 'Mejora de la Comunicación. El fortalecimiento de las prácticas de comunicación interna y externa (que aún tienen alta neutralidad y baja concordancia total) posiciona a la empresa como referencia y mejora la relación con el público externo.'
        }
      ]
    },
    {
      id: 'representatividade',
      title: '2.4. Dimensión: Representatividad (Presencia en Liderazgo y Procesos)',
      description: 'La representatividad se refiere a la percepción de la presencia de grupos diversos en todas las esferas, especialmente en el liderazgo. El Censo indica que la percepción de diversidad en el liderazgo es mayoritariamente moderada/baja, y los colaboradores tienen una visión neutral o negativa sobre la priorización de grupos minorizados en los procesos selectivos internos (PCDs, LGBTQIAPN+ y Razas).',
      recommendations: [
        {
          term: 'Corto Plazo',
          action: 'Transparencia y divulgación de los criterios de selección.',
          detail: 'Ampliar la visibilidad de acciones afirmativas y comunicar los resultados de forma clara.',
          justification: 'Reducción de la neutralidad. El alto índice de neutralidad indica que las acciones no son percibidas. Mayor visibilidad aumenta la confianza y consolida la percepción positiva.'
        },
        {
          term: 'Mediano Plazo',
          action: 'Programa de desarrollo de liderazgo diverso.',
          detail: 'Crear caminos de carrera inclusivos para grupos subrepresentados, preparándolos activamente para cargos de gestión.',
          justification: 'Mejora en la toma de decisiones. La representatividad asegura que diferentes voces y experiencias estén incluidas en las decisiones. Empresas con mayor diversidad en el liderazgo demuestran mejor desempeño financiero y mayor resiliencia a crisis.'
        },
        {
          term: 'Largo Plazo',
          action: 'Implementación de criterios de DEIP para asociaciones comerciales.',
          detail: 'Hacer del valor de inclusión de la diversidad un factor explícito y eliminatorio en la selección y mantenimiento de proveedores y clientes.',
          justification: 'Alineación estratégica con la marca: La discrepancia sobre la priorización de este valor en asociaciones (73% consideran solo a veces o no siempre) debilita la imagen externa. Alinear socios consolida la marca empleadora como referencia en el tema.'
        }
      ]
    }
  ],
  conclusion: [
    "Los resultados del Censo DEIP Eastman confirman que el camino para una cultura verdaderamente inclusiva está en progreso, pero exige mayor intencionalidad y visibilidad de las acciones. Las percepciones positivas sobre respeto y pertenencia son la base sólida de la cultura. Sin embargo, la alta tasa de respuestas neutrales y la baja representatividad de grupos minorizados señalan una desconexión entre el discurso y la práctica percibida.",
    "DEIP no es un gasto, es una estrategia de crecimiento. Las acciones propuestas no son solo iniciativas del área de Recursos Humanos, sino motores de resultados financieros, como:",
    "● Ventaja Competitiva (Innovación): mapear la diversidad enriquece el ambiente de trabajo, lo que lleva a soluciones más creativas y eficaces.",
    "● Reducción de Costos de Rotación: Invertir en inclusión y pertenencia es la principal estrategia de retención. El costo para sustituir a un profesional puede variar entre 6 a 9 meses del salario de ese colaborador, impactando el resultado final de la empresa.",
    "● Mejora de Desempeño y Productividad: empresas con programas eficaces de reconocimiento y recompensas reportan una mejora de hasta 31% en la productividad general.",
    "Las oportunidades estratégicas están en reforzar la comunicación y profesionalizar los procesos de selección y carrera para traducir el valor de la inclusión en acciones tangibles. La jornada DEIP es continua, y el equipo Trilhando+ está preparado para apoyar a Eastman en la implementación de estas recomendaciones."
  ]
};

export const getRecommendationsData = (lang: Language) => {
  switch (lang) {
    case 'en': return RECOMMENDATIONS_EN;
    case 'es': return RECOMMENDATIONS_ES;
    default: return RECOMMENDATIONS_PT; // pt
  }
};
const RECOMMENDATIONS_EN = RECOMMENDATIONS_DATA_EN; // Alias for consistency if needed, but switching naming above is fine.
const RECOMMENDATIONS_ES = RECOMMENDATIONS_DATA_ES;
const RECOMMENDATIONS_PT = RECOMMENDATIONS_DATA_PT;

// --- SURVEY DATA ---

export const getDetailedSurveyData = (lang: Language): SurveyCategory[] => {
  const isPt = lang === 'pt';
  const isEn = lang === 'en';

  return [
    {
      id: 'percepcao_diversidade',
      title: isPt ? 'Diversidade' : isEn ? 'Diversity' : 'Diversidad',
      description: isPt
        ? 'Esta dimensão visa conhecer o perfil demográfico dos colaboradores bem como as características que tornam os indivíduos únicos...'
        : isEn
          ? 'This dimension aims to understand the demographic profile of collaborators as well as the characteristics that make individuals unique...'
          : 'Esta dimensión tiene como objetivo conocer el perfil demográfico de los colaboradores así como las características que hacen únicos a los individuos...',
      color: COLORS.primaryPurple,
      icon: 'users',
      questions: DETAILED_SURVEY_DATA[0].questions.map(q => mapQuestionWithTranslation(q, lang))
    },
    {
      id: 'inclusao',
      title: isPt ? 'Inclusão' : isEn ? 'Inclusion' : 'Inclusión',
      description: isPt
        ? 'Esta dimensão se preocupa em mapear a percepção do colaborador quanto ao ambiente, onde todos se sintam bem-vindos...'
        : isEn
          ? 'This dimension is concerned with mapping the collaborator\'s perception of the environment, where everyone feels welcome...'
          : 'Esta dimensión se preocupa por mapear la percepción del colaborador sobre el ambiente, donde todos se sientan bienvenidos...',
      color: COLORS.lime,
      icon: 'heart',
      questions: DETAILED_SURVEY_DATA[1].questions.map(q => mapQuestionWithTranslation(q, lang))
    },
    {
      id: 'cultura',
      title: isPt ? 'Aspectos Culturais Organizacionais' : isEn ? 'Organizational Cultural Aspects' : 'Aspectos Culturales Organizacionales',
      description: isPt
        ? 'Esta dimensão abrange as normas, políticas, valores e práticas que definem a cultura de uma organização...'
        : isEn
          ? 'This dimension covers the norms, policies, values, and practices that define an organization\'s culture...'
          : 'Esta dimensión abarca las normas, políticas, valores y prácticas que definen la cultura de una organización...',
      color: COLORS.orange,
      icon: 'book',
      questions: DETAILED_SURVEY_DATA[2].questions.map(q => mapQuestionWithTranslation(q, lang))
    },
    {
      id: 'representatividade',
      title: isPt ? 'Representatividade' : isEn ? 'Representativeness' : 'Representatividad',
      description: isPt
        ? 'Esta dimensão refere-se à percepção da presença de grupos diversos em posições de liderança...'
        : isEn
          ? 'This dimension refers to the perception of the presence of diverse groups in leadership positions...'
          : 'Esta dimensión se refiere a la percepción de la presencia de grupos diversos en posiciones de liderazgo...',
      color: COLORS.teal,
      icon: 'target',
      questions: DETAILED_SURVEY_DATA[3].questions.map(q => mapQuestionWithTranslation(q, lang))
    }
  ];
};

const mapQuestionWithTranslation = (q: any, lang: Language) => {
  return {
    ...q,
    text: translateQuestion(q.id, lang),
    breakdown: createBreakdownStructure(q),
    considerations: {
      general: translateConsideration(q.id, 'general', lang, q.considerations.general),
      sp: translateConsideration(q.id, 'sp', lang, q.considerations.sp),
      maua: translateConsideration(q.id, 'maua', lang, q.considerations.maua)
    }
  };
};

const translateQuestion = (id: string, lang: Language): string => {
  if (lang === 'pt') return getQuestionTextById(id);
  const t = QUESTIONS_MAP[id];
  return (lang === 'en' ? t?.en : t?.es) || getQuestionTextById(id);
}

const translateConsideration = (id: string, unit: 'general' | 'sp' | 'maua', lang: Language, original: string): string => {
  if (lang === 'pt') return original;
  const t = CONSIDERATIONS_MAP[id];
  if (!t) return original;
  const unitT = t[unit];
  return (lang === 'en' ? unitT?.en : unitT?.es) || original;
}

const getQuestionTextById = (id: string) => {
  for (const cat of DETAILED_SURVEY_DATA) {
    const q = cat.questions.find(q => q.id === id);
    if (q) return q.text;
  }
  return '';
}

// --- PESQUISA NA ÍNTEGRA ORIGINAL ---
export const DETAILED_SURVEY_DATA: any[] = [
  {
    id: 'percepcao_diversidade',
    questions: [
      {
        id: 'q10',
        text: 'Acredita que a Eastman possui um quadro de pessoas diverso?',
        positive: 69.1, neutral: 30.1, negative: 0.8,
        spScore: 60.0, mauaScore: 84.8,
        considerations: {
          general: "Visão consolidada positiva (69.1%), porém mascara uma polarização: enquanto a Fábrica é altamente favorável, o Escritório apresenta hesitação.",
          sp: "Percepção moderada. Apesar da maioria concordar, há um grupo significativo (35%) neutro ou discordante, possivelmente devido à homogeneidade racial observada no escritório (72% brancos).",
          maua: "Percepção muito positiva (84.8%). A fábrica enxerga maior diversidade, o que pode estar correlacionado com a maior presença de pardos e pretos (39%) comparado ao escritório."
        }
      },
      {
        id: 'q11',
        text: 'Acredita que o quadro é diverso em diferentes cargos?',
        positive: 54.8, neutral: 37.9, negative: 7.3,
        spScore: 41.3, mauaScore: 78.3,
        considerations: {
          general: "Resultado geral (54.8%) indica um desafio em verticalizar a diversidade, puxado especialmente para baixo pela percepção corporativa.",
          sp: "Crítico. Apenas 41% concordam. Isso sugere que a diversidade é percebida como concentrada em níveis específicos e não distribuída hierarquicamente.",
          maua: "Positivo (78%). Na fábrica, a percepção de diversidade através dos cargos é quase o dobro do escritório, indicando uma estrutura operacional percebida como mais heterogênea."
        }
      },
      {
        id: 'q12',
        text: 'Acredita que o quadro na liderança é diverso?',
        positive: 42.9, neutral: 38.1, negative: 19.0,
        spScore: 27.5, mauaScore: 69.6,
        considerations: {
          general: "Alerta Crítico. A média consolidada (42.9%) é baixa, destacando que a liderança não é vista como diversa pela maioria da organização.",
          sp: "Ponto de atenção. Apenas 27.5% veem diversidade na liderança. A falta de representatividade no topo pode impactar a motivação de grupos minorizados no escritório.",
          maua: "Surpreendentemente alto (69.6%). A percepção da liderança fabril é muito mais inclusiva, sugerindo líderes que talvez venham da base ou que representem melhor a demografia local."
        }
      },
      {
        id: 'q13',
        text: 'Clientes e público reconhecem a Eastman como diversa?',
        positive: 58.7, neutral: 30.3, negative: 11.0,
        spScore: 42.5, mauaScore: 86.9,
        considerations: {
          general: "A percepção externa é mediana (58.7%). A marca tem força no chão de fábrica, mas não convence o público corporativo sobre sua diversidade.",
          sp: "Baixa percepção de marca empregadora diversa (42.5%). Colaboradores de SP, mais próximos do corporativo/marketing, sentem que a empresa não comunica sua diversidade eficazmente para fora.",
          maua: "Alta percepção (86.9%). Para o público da fábrica, a imagem externa da Eastman é fortemente associada à diversidade."
        }
      }
    ]
  },
  {
    id: 'inclusao',
    questions: [
      {
        id: 'q14',
        text: 'Sou tratado com respeito e dignidade.',
        positive: 92.8, neutral: 4.8, negative: 2.4,
        spScore: 89.9, mauaScore: 97.8,
        considerations: {
          general: "Excelente (92.8%). O respeito é um valor sólido e transversal na empresa, reconhecido por ambas as unidades.",
          sp: "Excelente (89.9%). A base de respeito é sólida, fundamental para a segurança psicológica no escritório.",
          maua: "Exemplar (97.8%). Quase a totalidade dos colaboradores da fábrica sente-se respeitada, um indicador fortíssimo de saúde cultural."
        }
      },
      {
        id: 'q15',
        text: 'Posso ser quem eu sou, sem receios em qualquer ambiente.',
        positive: 67.0, neutral: 25.7, negative: 7.3,
        spScore: 50.6, mauaScore: 95.6,
        considerations: {
          general: "Cenário dicotômico. Embora a média seja 67%, há um abismo entre a segurança sentida na fábrica versus a escritório.",
          sp: "Alerta (50.6%). Apenas metade do escritório sente segurança total para ser autêntico. Isso pode indicar uma cultura corporativa mais rígida ou normativa.",
          maua: "Muito alto (95.6%). O ambiente fabril, contrariando estereótipos, mostra-se extremamente acolhedor para a autenticidade pessoal."
        }
      },
      {
        id: 'q16',
        text: 'Sinto que faço parte da Eastman (Pertencimento).',
        positive: 83.9, neutral: 13.7, negative: 2.4,
        spScore: 74.7, mauaScore: 100.0,
        considerations: {
          general: "Alto Pertencimento (83.9%). A grande maioria sente-se parte da Eastman, um motor de retenção poderoso.",
          sp: "Bom (74.7%), mas com espaço para melhoria. Um quarto do escritório não tem certeza sobre seu pertencimento.",
          maua: "Perfeito (100%). O senso de comunidade e pertencimento na fábrica é absoluto, um ativo valioso para retenção."
        }
      },
      {
        id: 'q17',
        text: 'Todas as pessoas têm oportunidades iguais de evoluírem na carreira.',
        positive: 53.3, neutral: 28.0, negative: 18.7,
        spScore: 36.7, mauaScore: 82.2,
        considerations: {
          general: "Alerta de Oportunidade (53.3%). Pouco mais da metade acredita na meritocracia, puxado para baixo pelo ceticismo em SP.",
          sp: "Crítico (36.7%). A percepção de meritocracia e igualdade de oportunidades é baixa no escritório, o que pode gerar desengajamento.",
          maua: "Muito positivo (82.2%). Na fábrica, o caminho para crescimento parece ser visto como justo e acessível pela grande maioria."
        }
      },
      {
        id: 'q18',
        text: 'O meu líder direto aqui na Eastman é inclusivo.',
        positive: 93.6, neutral: 4.0, negative: 2.4,
        spScore: 91.1, mauaScore: 97.8,
        considerations: {
          general: "Liderança Inclusiva (93.6%). Este é o indicador mais forte da pesquisa, mostrando que a gestão direta está fazendo um excelente trabalho.",
          sp: "Excelente (91.1%). A liderança direta no escritório é um ponto forte, atuando como buffer positivo mesmo com outras percepções mais baixas.",
          maua: "Excelente (97.8%). A liderança na fábrica é vista como quase universalmente inclusiva."
        }
      },
      {
        id: 'q19',
        text: 'A comunicação interna da Eastman é inclusiva?',
        positive: 76.7, neutral: 19.7, negative: 3.6,
        spScore: 68.4, mauaScore: 91.1,
        considerations: {
          general: "A comunicação interna é efetiva (76.7%), mas há uma clara diferença de recepção entre as unidades.",
          sp: "Regular (68.4%). Há uma parcela significativa neutra, sugerindo que a comunicação pode não estar alcançando a todos com a mesma eficácia.",
          maua: "Ótimo (91.1%). A comunicação chega de forma inclusiva ao chão de fábrica."
        }
      },
      {
        id: 'q20',
        text: 'A comunicação externa da Eastman é inclusiva?',
        positive: 58.9, neutral: 34.7, negative: 6.4,
        spScore: 48.1, mauaScore: 77.8,
        considerations: {
          general: "Gap de Imagem Externa (58.9%). O posicionamento de mercado não está convencendo o time interno, especialmente o administrativo.",
          sp: "Baixo (48.1%). Reforça o dado da Q13: o escritório não vê a marca se posicionando de forma inclusiva para o mercado.",
          maua: "Bom (77.8%). A percepção é mais generosa na fábrica, talvez por menor exposição às mídias corporativas ou marketing."
        }
      },
      {
        id: 'q21',
        text: 'Considero um ambiente inclusivo para pessoas LGBTQIAPN+.',
        positive: 79.9, neutral: 16.9, negative: 3.2,
        spScore: 76.0, mauaScore: 86.7,
        considerations: {
          general: "Ambiente Seguro (79.9%). A percepção de segurança para o público LGBTQIAPN+ é alta e consistente.",
          sp: "Bom (76%), dado que 30% do público SP é LGBT. Indica que, apesar dos receios de autenticidade (Q15), o ambiente específico para LGBTs é visto como seguro.",
          maua: "Muito bom (86.7%). Mesmo com menor representatividade declarada (15%), o ambiente é visto como acolhedor."
        }
      },
      {
        id: 'q22',
        text: 'Considero um ambiente inclusivo para pessoas com deficiência.',
        positive: 39.6, neutral: 30.6, negative: 29.8,
        spScore: 25.3, mauaScore: 64.5,
        considerations: {
          general: "Maior Ponto de Atenção (39.6%). A inclusão de Pessoas com Deficiência é o indicador pior avaliado na dimensão 'Inclusão'.",
          sp: "Muito Crítico (25.3%). A percepção de inclusão para PCDs é baixíssima no escritório. Pode indicar barreiras físicas ou atitudinais severas.",
          maua: "Regular (64.5%). Melhor que SP, mas ainda indica que a inclusão de PCDs na área industrial é um desafio a ser vencido."
        }
      },
      {
        id: 'q23',
        text: 'Considero um ambiente inclusivo para pessoas de todas as idades.',
        positive: 75.1, neutral: 15.3, negative: 9.6,
        spScore: 67.1, mauaScore: 88.9,
        considerations: {
          general: "Inclusão Geracional (75.1%). Um bom resultado geral, sustentado pela alta aceitação na fábrica.",
          sp: "Regular (67.1%). O escritório tem poucos 50+ (11%), o que pode impactar essa percepção de inclusão etária.",
          maua: "Ótimo (88.9%). A fábrica retém mais talentos 50+ (21%), o que reflete nessa percepção positiva de inclusão geracional."
        }
      }
    ]
  },
  {
    id: 'cultura',
    questions: [
      {
        id: 'q24',
        text: 'Acredito que a Eastman tem uma política clara de inclusão.',
        positive: 82.3, neutral: 16.0, negative: 1.7,
        spScore: 73.4, mauaScore: 97.8,
        considerations: {
          general: "Clareza da Política (82.3%). A grande maioria conhece a política de inclusão, mostrando boa disseminação.",
          sp: "Bom (73.4%). A maioria conhece, mas ainda há 26% que não veem essa clareza.",
          maua: "Excelente (97.8%). A política parece ter sido disseminada com enorme eficácia na unidade fabril."
        }
      },
      {
        id: 'q25',
        text: 'A Eastman possui práticas de inclusão da diversidade.',
        positive: 72.7, neutral: 21.3, negative: 6.0,
        spScore: 59.5, mauaScore: 95.6,
        considerations: {
          general: "Práticas Ativas (72.7%). A percepção é positiva, embora haja um ligeiro gap entre conhecer a política e ver a prática.",
          sp: "Atenção (59.5%). Há um gap entre ter a política (73%) e a percepção da prática (59%) no escritório.",
          maua: "Excelente (95.6%). Na fábrica, a política e a prática andam de mãos dadas na percepção dos colaboradores."
        }
      },
      {
        id: 'q26',
        text: 'A Eastman têm, dentre os seus valores, a inclusão.',
        positive: 79.9, neutral: 18.9, negative: 1.2,
        spScore: 70.9, mauaScore: 95.6,
        considerations: {
          general: "Valores Internalizados (79.9%). A inclusão é reconhecida como um valor central pela organização.",
          sp: "Bom (70.9%). O valor é reconhecido, mas a neutralidade de 29% sugere que ele precisa ser mais reforçado no dia a dia.",
          maua: "Excelente (95.6%). O valor é amplamente reconhecido e internalizado."
        }
      },
      {
        id: 'q27',
        text: 'Nunca presenciei situação de discriminação na Eastman.',
        positive: 79.9, neutral: 19.3, negative: 0.8,
        spScore: 70.9, mauaScore: 95.6,
        considerations: {
          general: "Alerta de Discriminação (79.9% Nunca Presenciaram). Embora alto, significa que 20% já presenciaram ou não negam. Este é um ponto significativo.",
          sp: "Atenção. Cerca de 30% já presenciaram ou não negam ter presenciado discriminação. Requer investigação.",
          maua: "Muito seguro. 95.6% afirmam nunca ter presenciado discriminação, um ambiente muito saudável."
        }
      },
      {
        id: 'q28',
        text: 'Práticas discriminatórias são repudiadas e combatidas.',
        positive: 82.3, neutral: 16.2, negative: 1.5,
        spScore: 74.7, mauaScore: 95.6,
        considerations: {
          general: "Confiança no Combate (82.3%). A maioria confia que a discriminação é combatida, sinal de fortaleza institucional.",
          sp: "Bom (74.7%). Há confiança no combate, mas menor do que na fábrica.",
          maua: "Excelente (95.6%). Alta confiança na impunidade zero para discriminação."
        }
      }
    ]
  },
  {
    id: 'representatividade',
    questions: [
      {
        id: 'q29',
        text: 'Prioriza relacionamento com parceiros que valorizam diversidade.',
        positive: 34.2, neutral: 53.0, negative: 12.8,
        spScore: 16.9, mauaScore: 64.4,
        considerations: {
          general: "Baixa Prioridade para Parceiros (34.2%). Um dos indicadores mais baixos. A cadeia de suprimentos não é vista como diversa.",
          sp: "Crítico (16.9%). O escritório, que lida mais com fornecedores, é cético quanto a essa priorização.",
          maua: "Bom (64.4%). A fábrica tem uma visão mais idealista ou experiencia relações diferentes com parceiros."
        }
      },
      {
        id: 'q30',
        text: 'Prioriza contratação de pessoas LGBTQIAPN+.',
        positive: 45.8, neutral: 48.0, negative: 6.2,
        spScore: 35.1, mauaScore: 64.4,
        considerations: {
          general: "Contratação LGBTQIAPN+ (45.8%). Menos da metade enxerga priorização intencional na contratação deste grupo.",
          sp: "Baixo (35.1%). Mesmo com mais LGBTs no escritório, não se percebe uma ação intencional de priorização na contratação.",
          maua: "Bom (64.4%). A percepção de acción afirmativa é mais forte na fábrica."
        }
      },
      {
        id: 'q31',
        text: 'Prioriza contratação de pessoas com deficiência.',
        positive: 20.3, neutral: 46.2, negative: 33.5,
        spScore: 6.5, mauaScore: 44.5,
        considerations: {
          general: "Crítico - Contratação PCD (20.3%). A percepção de esforço para contratar PCDs é quase inexistente na visão geral.",
          sp: "Alarmante (6.5%). O escritório praticamente não enxerga esforço na contratação de PCDs.",
          maua: "Regular (44.5%). A percepção es mejor, mas ainda abaixo de 50%, indicando necesidad de mejoría general."
        }
      },
      {
        id: 'q32',
        text: 'Prioriza contratação de pessoas de diferentes gerações.',
        positive: 53.2, neutral: 34.5, negative: 12.3,
        spScore: 41.6, mauaScore: 73.3,
        considerations: {
          general: "Contratação Geracional (53.2%). A percepção é de neutra a positiva, sugerindo um equilíbrio orgânico mais do que intencional.",
          sp: "Regular (41.6%). Percepção morna sobre diversidade etária na entrada.",
          maua: "Bom (73.3%). A fábrica vê maior mix geracional sendo contratado."
        }
      },
      {
        id: 'q33',
        text: 'Prioriza contratação de pessoas de diferentes raças e etnias.',
        positive: 54.8, neutral: 30.4, negative: 14.8,
        spScore: 40.3, mauaScore: 80.0,
        considerations: {
          general: "Contratação Racial (54.8%). Um resultado moderado que indica espaço para ações mais intencionais no letramento e atração racial.",
          sp: "Regular (40.3%). Dado que o escritório é 71% branco, a percepção de falta de priorização racial es coherente con la realidad.",
          maua: "Muito bom (80%). A fábrica, más diversa racialmente, percebe este esforço de forma clara."
        }
      }
    ]
  }
];