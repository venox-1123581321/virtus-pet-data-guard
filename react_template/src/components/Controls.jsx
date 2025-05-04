// src/components/Controls.jsx
import React, { useState } from 'react';

const Controls = ({ onFeed, stage, powers }) => {
  const [activeEffect, setActiveEffect] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const powerEmojis = {
    'Light Ray': '⚡',
    'Roar': '🔊',
    'Dance': '💃',
    'Fly': '🦅',
    'Binary Jump': '🌌'
  };

  const handlePowerUse = (power) => {
    setActiveEffect(power);
    setTimeout(() => setActiveEffect(''), 2000);
  };

  const statusInfo = {
    egg: 'Your pet is gathering energy to hatch! Keep learning!',
    iguana: 'A curious learner, growing with each lesson!',
    carnotaur: 'Getting stronger and smarter!',
    giant: 'Mastering powerful abilities!',
    megazord: 'The ultimate form of knowledge!'
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onFeed}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
        >
          🎯 Feed (Take Quiz)
        </button>
        <button
          onClick={() => setShowStatus(!showStatus)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
        >
          📊 Check Status
        </button>
      </div>

      {showStatus && (
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 animate-fadeIn">
          <p className="text-lg">{statusInfo[stage]}</p>
        </div>
      )}

      {activeEffect && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
          <div className="text-9xl animate-zoom-out">
            {powerEmojis[activeEffect] || '✨'}
          </div>
        </div>
      )}

      {(stage === 'giant' || stage === 'megazord') && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Special Powers</h3>
          <div className="grid grid-cols-2 gap-3">
            {powers.map((power, index) => (
              <button
                key={index}
                onClick={() => handlePowerUse(power)}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <span>{powerEmojis[power]}</span>
                <span>{power}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Controls;