// src/components/Evolution.jsx
import React, { useEffect, useState } from 'react';

const Evolution = ({ stage, onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const evolutionEmojis = {
    egg: "🥚",
    iguana: "🦎",
    carnotaur: "🦖",
    giant: "🐉",
    megazord: "🤖"
  };

  const evolutionNames = {
    egg: "Mysterious Egg",
    iguana: "Code Iguana",
    carnotaur: "Data Carnotaur",
    giant: "Giant Knowledge Lizard",
    megazord: "Binary Dragon Megazord"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animationComplete) {
      const completeTimer = setTimeout(onComplete, 1000);
      return () => clearTimeout(completeTimer);
    }
  }, [animationComplete, onComplete]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-2xl">
        <h2 className="text-4xl mb-6 text-yellow-400 font-bold animate-pulse">Evolution Time!</h2>
        <div className="text-9xl mb-4 transition-all duration-1000 transform hover:scale-110">
          {evolutionEmojis[stage]}
        </div>
        <h3 className={`text-2xl font-bold mb-4 transition-all duration-1000 ${
          animationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          {evolutionNames[stage]}
        </h3>
        <div className="text-lg text-gray-300">
          Your pet has evolved to a new form!
        </div>
      </div>
    </div>
  );
};

export default Evolution;