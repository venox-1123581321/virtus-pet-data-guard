// src/App.jsx
import React, { useState, useEffect } from 'react';
import Pet from './components/Pet';
import StatusBar from './components/StatusBar';
import Controls from './components/Controls';
import Quiz from './components/Quiz';
import Evolution from './components/Evolution';
import { calculateHealth, calculateKnowledge, checkEvolution } from './utils/gameLogic';

function App() {
  const [gameState, setGameState] = useState({
    health: 100,
    knowledge: 0,
    stage: 'egg',
    lastFed: new Date(),
    powers: [],
    showQuiz: false,
    showEvolution: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        health: calculateHealth(prev.health, prev.lastFed)
      }));
    }, 3600000); // Check health every hour

    return () => clearInterval(timer);
  }, []);

  const handleFeed = (score) => {
    setGameState(prev => {
      const newKnowledge = calculateKnowledge(prev.knowledge, score);
      const newStage = checkEvolution(newKnowledge);
      const showEvolution = newStage !== prev.stage;

      return {
        ...prev,
        health: Math.min(100, prev.health + 25),
        knowledge: newKnowledge,
        stage: newStage,
        lastFed: new Date(),
        showEvolution
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-center text-3xl font-bold mb-8">Virtus Pet: DataGuard</h1>
      
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg">
        {gameState.showEvolution ? (
          <Evolution stage={gameState.stage} onComplete={() => setGameState(prev => ({ ...prev, showEvolution: false }))} />
        ) : (
          <>
            <Pet stage={gameState.stage} health={gameState.health} />
            <StatusBar health={gameState.health} knowledge={gameState.knowledge} />
            <Controls 
              onFeed={() => setGameState(prev => ({ ...prev, showQuiz: true }))}
              stage={gameState.stage}
              powers={gameState.powers}
            />
          </>
        )}
        
        {gameState.showQuiz && (
          <Quiz 
            onComplete={handleFeed}
            onClose={() => setGameState(prev => ({ ...prev, showQuiz: false }))}
          />
        )}
      </div>
    </div>
  );
}

export default App;