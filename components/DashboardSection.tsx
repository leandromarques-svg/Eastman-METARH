import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { getSectionData, CHART_COLORS, COLORS, DICTIONARY } from '../constants';
import { Language } from '../types';
import MetricCard from './MetricCard';
import { Users, Heart, Target, TrendingUp, ChevronDown, Briefcase, Activity, Smile, BookOpen } from 'lucide-react';

interface Props {
  language: Language;
}

const DashboardSection: React.FC<Props> = ({ language }) => {
  const [filter, setFilter] = useState<'general' | 'sp' | 'maua' | 'women'>('general');

  const data = getSectionData(language, filter);
  const dict = DICTIONARY[language];

  return (
    <div className="space-y-8 animate-fade-in">

      {/* Introduction & Filter */}
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-metarh-primary flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-metarh-dark mb-2">{data.title}</h2>
          <p className="text-gray-600">{data.description} Total: <span className="font-bold text-metarh-primary">{data.respondents}</span>.</p>
        </div>

        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="appearance-none bg-slate-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-metarh-primary font-medium cursor-pointer"
          >
            <option value="general">{dict.filters.general}</option>
            <option value="sp">{dict.filters.sp}</option>
            <option value="maua">{dict.filters.maua}</option>
            <option value="women">{dict.filters.women}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title={dict.metrics.lgbt}
          value={`${data.lgbtData}%`}
          description={dict.metrics.lgbt_desc}
          color="pink"
          icon={<Heart size={24} />}
        />
        <MetricCard
          title={dict.metrics.pcd}
          value={`${data.pcdData}%`}
          description={dict.metrics.pcd_desc}
          color="purple"
          icon={<Users size={24} />}
        />
        <MetricCard
          title={dict.metrics.gender}
          value={`${Math.max(...data.genderData.map(d => d.value)).toFixed(1)}%`}
          description={`${dict.metrics.gender_desc} ${data.genderData.reduce((prev, current) => (prev.value > current.value) ? prev : current).name}.`}
          color="lime"
          icon={<Target size={24} />}
        />
        <MetricCard
          title={dict.metrics.age}
          value={`${Math.max(...data.ageData.map(d => d.value)).toFixed(1)}%`}
          description={`${dict.metrics.age_desc} ${data.ageData.reduce((prev, current) => (prev.value > current.value) ? prev : current).name}.`}
          color="purple"
          icon={<TrendingUp size={24} />}
        />
      </div>

      {/* Charts Row 1: Gender & Race */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gender Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 border-b pb-2">
            <Users className="text-metarh-primary" size={20} />
            <h3 className="text-lg font-bold text-metarh-dark">
              {language === 'pt' ? 'Identidade de Gênero' : language === 'en' ? 'Gender Identity' : 'Identidad de Género'}
            </h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.genderData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip formatter={(value: number) => [`${value.toFixed(1)}%`, '']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {data.genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? COLORS.darkPurple : COLORS.primaryPurple} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Race Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 border-b pb-2">
            <Target className="text-metarh-primary" size={20} />
            <h3 className="text-lg font-bold text-metarh-dark">{dict.charts.race_title}</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.raceData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.raceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`${value.toFixed(1)}%`, '']} />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Row 2: Sexual Orientation & Job Role */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sexual Orientation Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 border-b pb-2">
            <Heart className="text-metarh-pink" size={20} />
            <h3 className="text-lg font-bold text-metarh-dark">
              {language === 'pt' ? 'Orientação Sexual' : language === 'en' ? 'Sexual Orientation' : 'Orientación Sexual'}
            </h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.sexualOrientationData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.sexualOrientationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#cbd5e1' : COLORS.pink} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`${value.toFixed(1)}%`, '']} />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Job Role Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 border-b pb-2">
            <Briefcase className="text-metarh-lime" size={20} />
            <h3 className="text-lg font-bold text-metarh-dark">
              {language === 'pt' ? 'Cargo / Posição' : language === 'en' ? 'Job Role' : 'Cargo'}
            </h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.jobData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip formatter={(value: number) => [`${value.toFixed(1)}%`, '']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {data.jobData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS.teal} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Row 3: Obesity & Religion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Obesity Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 border-b pb-2">
            <Activity className="text-metarh-orange" size={20} />
            <h3 className="text-lg font-bold text-metarh-dark">
              {language === 'pt' ? 'Autodeclaração: Obesidade' : language === 'en' ? 'Obesity Self-Dec.' : 'Obesidad'}
            </h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.obesityData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.obesityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'Sim' || entry.name === 'Yes' || entry.name === 'Sí' ? COLORS.orange : '#e2e8f0'} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`${value.toFixed(1)}%`, '']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Religion Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 border-b pb-2">
            <BookOpen className="text-metarh-primary" size={20} />
            <h3 className="text-lg font-bold text-metarh-dark">
              {language === 'pt' ? 'Religião ou Crença' : language === 'en' ? 'Religion / Belief' : 'Religión / Creencia'}
            </h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.religionData} margin={{ left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                <YAxis hide />
                <Tooltip formatter={(value: number) => [`${value.toFixed(1)}%`, '']} itemStyle={{ color: COLORS.darkPurple }} />
                <Bar dataKey="value" fill={COLORS.primaryPurple} radius={[4, 4, 0, 0]}>
                  {data.religionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;