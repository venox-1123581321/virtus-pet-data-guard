// src/components/Pet.jsx
import React from 'react';

const Pet = ({ stage, health }) => {
  const petStyles = {
    egg: "🥚",
    iguana: "🦎",
    carnotaur: "🦖",
    giant: "🐉",
    megazord: "🤖"
  };

  const petNames = {
    egg: "Mysterious Egg",
    iguana: "Code Iguana",
    carnotaur: "Data Carnotaur",
    giant: "Giant Knowledge Lizard",
    megazord: "Binary Dragon Megazord"
  };

  const getHealthStatus = () => {
    if (health > 70) return 'happy';
    if (health > 30) return 'normal';
    return 'sick';
  };

  return (
    <div className="text-center mb-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className={`text-8xl mb-4 transition-transform hover:scale-110 ${health < 30 ? 'opacity-50' : ''}`}>
          {petStyles[stage]}
        </div>
        <h2 className="text-2xl font-bold mb-2 text-blue-400">{petNames[stage]}</h2>
        <div className={`text-xl font-semibold ${
          getHealthStatus() === 'happy' ? 'text-green-400' :
          getHealthStatus() === 'normal' ? 'text-yellow-400' :
          'text-red-400'
        }`}>
          {getHealthStatus() === 'happy' ? 'Happy and Learning!' :
           getHealthStatus() === 'normal' ? 'Ready for Knowledge' :
           'Needs Study Time!'}
        </div>
      </div>
    </div>
  );
};

export default Pet;