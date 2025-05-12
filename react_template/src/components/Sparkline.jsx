import React from 'react';

const Sparkline = ({ data }) => {
  if (!data || data.length === 0) return <div className="text-xs text-gray-400">Sem dados</div>;
  const max = Math.max(...data, 100);
  const min = Math.min(...data, 0);
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d - min) / (max - min)) * 100;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 100 100" className="w-full h-16">
      <polyline
        fill="none"
        stroke="#2EC866"
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};

export default Sparkline;
