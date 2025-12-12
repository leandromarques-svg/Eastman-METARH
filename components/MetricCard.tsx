import React from 'react';
import { MetricCardProps } from '../types';
import { COLORS } from '../constants';

const MetricCard: React.FC<MetricCardProps> = ({ title, value, description, color = 'purple', icon }) => {
  const getColors = () => {
    switch (color) {
      case 'pink': return { bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-metarh-pink' };
      case 'lime': return { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-600' };
      default: return { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-metarh-dark' };
    }
  };

  const style = getColors();

  return (
    <div className={`p-6 rounded-2xl border ${style.bg} ${style.border} shadow-sm hover:shadow-md transition-all duration-300`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
        {icon && <div className={`${style.text}`}>{icon}</div>}
      </div>
      <div className={`text-4xl font-extrabold mb-2 ${style.text} font-sans`}>
        {value}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default MetricCard;
