import React, { useState } from 'react';
import { LayoutDashboard, FileText, Globe, Lock, Lightbulb, Eye, EyeOff, ClipboardCheck } from 'lucide-react';
import DashboardSection from './components/DashboardSection';
import DetailedSurvey from './components/DetailedSurvey';
import InsightsSection from './components/InsightsSection';
import RecommendationsSection from './components/RecommendationsSection';
import { MetarhLogo, EastmanLogo, TrilhandoLogo } from './components/Logos';
import { Language } from './types';
import { DICTIONARY } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'insights' | 'recommendations'>('overview');
  const [language, setLanguage] = useState<Language>('pt');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const dict = DICTIONARY[language];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Eastman' && password === 'METARH1983') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Credenciais inválidas.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-metarh-dark to-purple-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
          <div className="flex justify-center mb-8 gap-6 items-center">
            <MetarhLogo className="h-10 text-metarh-dark" />
            <div className="w-px h-8 bg-gray-200"></div>
            <EastmanLogo className="h-5 text-red-600" />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Acesso Restrito</h2>
            <p className="text-gray-500 text-sm mt-1">Resultados Censo DEIP</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usuário</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-metarh-primary focus:border-transparent outline-none transition-all"
                placeholder="Digite seu usuário"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-metarh-primary focus:border-transparent outline-none transition-all pr-10"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full bg-metarh-primary hover:bg-metarh-dark text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Lock size={18} />
              Acessar Resultados
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100 no-print">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-6">
            <MetarhLogo className="h-8 md:h-10 text-metarh-dark" />
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{dict.header.client}:</span>
              <EastmanLogo className="h-5 text-red-600" />
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <a href="https://metarh.com.br/trilhando/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <TrilhandoLogo className="h-8 w-auto" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700"
              >
                <Globe size={16} />
                <span className="uppercase">{language}</span>
              </button>

              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)}></div>
                  <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-20 animate-fade-in">
                    <button onClick={() => { setLanguage('pt'); setIsLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-slate-700">Português</button>
                    <button onClick={() => { setLanguage('en'); setIsLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-slate-700">English</button>
                    <button onClick={() => { setLanguage('es'); setIsLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-slate-700">Español</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative bg-metarh-dark text-white pt-16 pb-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://metarh.com.br/wp-content/uploads/2025/12/modern-architecture-enveloped-lush-greenery-capturing-serene-blend-nature-urban-living-sunlit-evening-scaled.jpg")'
        }}
      >
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-metarh-dark/95 via-metarh-dark/80 to-transparent"></div>

        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-sm">
              {dict.hero.title}
            </h2>
            <div className="text-white/90 text-lg font-light space-y-4 leading-relaxed drop-shadow-sm">
              <p>
                {dict.hero.p1}
              </p>
              <p>
                {dict.hero.p2} <strong className="font-bold text-metarh-lime">{dict.hero.respondents_bold}</strong> {dict.hero.p3}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container with negative margin for card effect */}
      <main className="container mx-auto px-4 -mt-10 pb-12 relative z-10">

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-2 mb-8 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto no-print">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 font-bold whitespace-nowrap ${activeTab === 'overview'
              ? 'bg-metarh-dark text-white shadow-md'
              : 'text-gray-500 hover:bg-slate-50 hover:text-metarh-primary'
              }`}
          >
            <LayoutDashboard size={20} />
            {dict.tabs.overview}
          </button>

          <button
            onClick={() => setActiveTab('detailed')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 font-bold whitespace-nowrap ${activeTab === 'detailed'
              ? 'bg-metarh-lime text-metarh-dark shadow-md'
              : 'text-gray-500 hover:bg-slate-50 hover:text-metarh-dark'
              }`}
          >
            <FileText size={20} />
            {dict.tabs.detailed}
          </button>

          <button
            onClick={() => setActiveTab('insights')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 font-bold whitespace-nowrap ${activeTab === 'insights'
              ? 'bg-metarh-lime text-metarh-dark shadow-md ring-2 ring-metarh-lime ring-offset-2'
              : 'text-gray-500 hover:bg-slate-50 hover:text-metarh-lime'
              }`}
          >
            <Lightbulb size={20} />
            {dict.tabs.insights}
          </button>

          <button
            onClick={() => setActiveTab('recommendations')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 font-bold whitespace-nowrap ${activeTab === 'recommendations'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-gray-500 hover:bg-slate-50 hover:text-purple-600'
              }`}
          >
            <ClipboardCheck size={20} />
            {dict.tabs.recommendations}
          </button>
        </div>

        {/* Content Render */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && <DashboardSection language={language} />}
          {activeTab === 'detailed' && <DetailedSurvey language={language} />}
          {activeTab === 'insights' && <InsightsSection language={language} />}
          {activeTab === 'recommendations' && <RecommendationsSection language={language} />}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 mt-12">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <MetarhLogo className="h-8 text-metarh-dark" />
            <div className="w-px h-6 bg-gray-200"></div>
            <EastmanLogo className="h-4 text-red-600" />
            <div className="w-px h-6 bg-gray-200"></div>
            <a href="https://metarh.com.br/trilhando/" target="_blank" rel="noopener noreferrer">
              <TrilhandoLogo className="h-6 w-auto" />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 METARH - {dict.footer.rights}
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;