import React from 'react';
import Sparkline from './Sparkline';

export default function AchievementsPanel({ quizCount, bestStreak, evolutions, history }) {
  return (
    <div className="pixel-border bg-virtus-black/80 p-3 space-y-2">
      <h3 className="w-full text-center text-sm text-virtus-cyan font-bold">
        Estatísticas
      </h3>
      <ul className="text-xs text-virtus-cyan list-disc pl-5 space-y-1">
        <li>Total quizzes: {quizCount}</li>
        <li>Melhor sequência: {bestStreak}</li>
        <li>Evoluções: {evolutions}</li>
      </ul>
      <div>
        <h4 className="text-xs text-virtus-cyan font-semibold mb-1">
          Últimos conhecimentos
        </h4>
        <Sparkline data={history} />
      </div>
    </div>
  );
}
