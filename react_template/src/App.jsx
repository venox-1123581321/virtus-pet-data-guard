import React, { useState, useEffect } from 'react';
import Pet from './components/Pet';
import StatusBar from './components/StatusBar';
import Controls from './components/Controls';
import Evolution from './components/Evolution';
import PopUp from './components/PopUp';
import EventCutscene from './components/EventCutscene';
import Sparkline from './components/Sparkline';
import QuizModal from './components/QuizModal';
import StudySuggestionsPanel from './components/StudySuggestionsPanel';
import { phrases } from './data/motivation';
import quizzes from './data/quizzes.json';

// Sequência de fases
const stages = [
  'OVO','IGUANA','IGUANA_MAIOR','CARNOTAURO',
  'TREX','PETZILLA','DRAGON','TRANSFORMER'
];
const TWO_HOURS = 2 * 60 * 60 * 1000;

export default function App() {
  const [gameState, setGameState] = useState({
    health: 100,
    knowledge: 0,
    history: [],
    stage: 'OVO',
    lastZeroHealth: null,
    showEvolution: false,
    message: ''
  });
  const [popUp, setPopUp] = useState({ show: false, text: '' });
  const [event, setEvent] = useState({ show: false, stage: null });
  const [quizIndex, setQuizIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        health: Math.max(0, prev.health - 1)
      }));
    }, 3600000);
    return () => clearInterval(timer);
  }, []);

  const handleFeedClick = () => {
    if (gameState.health > 0) {
      setShowQuiz(true);
    } else {
      const now = Date.now();
      if (gameState.lastZeroHealth && now - gameState.lastZeroHealth >= TWO_HOURS) {
        setGameState(prev => ({ ...prev, health: 10, lastZeroHealth: null }));
      } else {
        alert('Pet sem saúde. Estude e retorne em 2 horas.');
      }
    }
  };

  const handleAnswer = (correct) => {
    setShowQuiz(false);
    setQuizIndex(prev => (prev + 1) % quizzes.length);
    setGameState(prev => {
      const score = 10;
      let { health, knowledge, stage, history, lastZeroHealth } = prev;
      let showEvolution = false;

      if (correct) {
        knowledge = Math.min(100, knowledge + score);
        health = Math.min(100, health + score);
      } else {
        health = Math.max(0, health - score);
        if (health === 0) {
          lastZeroHealth = Date.now();
          const idx = stages.indexOf(stage);
          if (idx > 0) {
            stage = stages[idx - 1];
            knowledge = 0;
          }
        }
      }

      if (knowledge >= 100) {
        const idx = stages.indexOf(stage);
        if (idx < stages.length - 1) {
          stage = stages[idx + 1];
          showEvolution = true;
        }
        knowledge = 0;
      }

      const newHistory = [...history, knowledge].slice(-10);
      if (knowledge === 50 && !showEvolution) {
        setEvent({ show: true, stage });
      }

      const popupText = correct ? `+${score} Conhecimento` : `-${score} Saúde`;
      setPopUp({ show: true, text: popupText });
      setTimeout(() => setPopUp({ show: false, text: '' }), 1000);

      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setTimeout(() => setGameState(s => ({ ...s, message: '' })), 5000);

      return {
        health,
        knowledge,
        history: newHistory,
        stage,
        lastZeroHealth,
        showEvolution,
        message: randomPhrase
      };
    });
  };

  const idx = stages.indexOf(gameState.stage);
  const nextStage = idx < stages.length - 1 ? stages[idx + 1] : gameState.stage;

  return (
    <div className="min-h-screen bg-virtus-blue text-white p-4 font-pixel relative">
      {showQuiz && (
        <QuizModal
          questionIndex={quizIndex}
          onAnswer={handleAnswer}
          onClose={() => setShowQuiz(false)}
        />
      )}
      {popUp.show && <PopUp text={popUp.text} onComplete={() => setPopUp({ show: false, text: '' })} />}
      {event.show && <EventCutscene stage={event.stage} onComplete={() => setEvent({ show: false, stage: null })} />}

      
      <header className="flex justify-center items-center mb-4">
        <div className="text-center">
          <h1 className="title-metal-3 text-3xl font-bold">VIRTUS PET</h1>
          <h2 className="title-metal-3 text-4xl font-bold">DATAGUARD</h2>
        </div>
        <img src="/assets/images/logo_sem_fundo.png" alt="Logo Virtus" className="w-24 h-24 ml-2" />
      </header>

      {gameState.message && <div className="message-banner text-black font-bold mb-4">{gameState.message}</div>}

      <main className="grid grid-cols-12 gap-4 max-w-6xl mx-auto bg-virtus-black p-4 pixel-border">
        <section className="col-span-3 p-2">
          <StudySuggestionsPanel />
        </section>
        <section className="col-span-6 p-4 bg-pixel-pattern pixel-border flex flex-col items-center">
          {gameState.showEvolution ? (
            <Evolution stage={gameState.stage} onComplete={() => setGameState(prev => ({...prev, showEvolution: false}))} />
          ) : (
            <>
              <Pet stage={gameState.stage} />
              <StatusBar health={gameState.health} knowledge={gameState.knowledge} />
              <Controls onFeed={handleFeedClick} />
            </>
          )}
        </section>
        <section className="col-span-3 p-2 bg-virtus-black/80 pixel-border">
          <h3 className="w-full text-center text-sm text-virtus-cyan mb-1">Próxima Fase</h3>
          <img src={`/assets/images/${nextStage}.png`} alt={nextStage} className="w-20 h-20 mb-2 mx-auto" />
          <div className="w-6 h-40 bg-virtus-black pixel-border mx-auto flex items-end">
            <div className="bg-virtus-cyan w-full" style={{height:`${(gameState.knowledge/100)*100}%`}} />
          </div>
        </section>
      </main>
    </div>
  );
}
