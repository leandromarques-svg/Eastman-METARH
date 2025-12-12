import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import { getSectionData, CHART_COLORS, COLORS, DICTIONARY } from '../constants';
import { Language } from '../types';
import MetricCard from './MetricCard';
import { Users, Heart, Target, TrendingUp, AlertCircle, CheckCircle2, ChevronDown } from 'lucide-react';

interface Props {
  language: Language;
}

const DashboardSection: React.FC<Props> = ({ language }) => {
  const [filter, setFilter] = useState<'general' | 'sp' | 'maua'>('general');

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

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gender Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-metarh-dark mb-6 border-b pb-2">{dict.charts.gender_title}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.genderData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  cursor={{fill: '#f3e5ff'}}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
                />
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
          <h3 className="text-lg font-bold text-metarh-dark mb-6 border-b pb-2">{dict.charts.race_title}</h3>
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

      {/* Analysis Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
          <div className="flex items-center gap-2 mb-4">
             <CheckCircle2 className="text-metarh-lime" fill="#470082" />
             <h3 className="text-lg font-bold text-metarh-dark">{dict.charts.highlights}</h3>
          </div>
          <ul className="space-y-3">
            {data.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-metarh-dark flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
          <div className="flex items-center gap-2 mb-4">
             <AlertCircle className="text-metarh-pink" />
             <h3 className="text-lg font-bold text-metarh-dark">{dict.charts.challenges}</h3>
          </div>
          <ul className="space-y-3">
            {data.challenges.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-metarh-pink flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardSection;