import React from 'react';

const StatusBar = ({ health, knowledge }) => {
  return (
    <div className="mb-6 space-y-4">
      {/* Health */}
      <div className="flex justify-between mb-1">
        <span className="text-sm">Saúde</span>
        <span className="text-sm">{health}%</span>
      </div>
      <div className={health < 20 ? 'health-low' : ''}>
        <div className="w-full h-4 bg-black pixel-border">
          <div
            className="h-4 bg-virtus-green"
            style={{ width: `${health}%` }}
          />
        </div>
      </div>
      {/* Knowledge */}
      <div className="flex justify-between mt-4 mb-1">
        <span className="text-sm">Conhecimento</span>
        <span className="text-sm">{knowledge} / 100</span>
      </div>
      <div className="w-full h-4 bg-black pixel-border">
        <div
          className="h-4 bg-virtus-green"
          style={{ width: `${(knowledge / 100) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default StatusBar;
