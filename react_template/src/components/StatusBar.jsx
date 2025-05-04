// src/components/StatusBar.jsx
import React from 'react';

const StatusBar = ({ health, knowledge }) => {
  return (
    <div className="mb-6 space-y-4">
      <div>
        <div className="flex justify-between mb-1">
          <span>Health</span>
          <span>{health}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className={`h-4 rounded-full ${
              health > 70 ? 'bg-green-500' :
              health > 30 ? 'bg-yellow-500' :
              'bg-red-500'
            }`}
            style={{ width: `${health}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span>Knowledge</span>
          <span>{knowledge}/1000</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="h-4 bg-blue-500 rounded-full"
            style={{ width: `${(knowledge/1000)*100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;