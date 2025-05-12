import React, { useState } from 'react';
import { studySuggestions } from '../data/studySuggestions';

const StudySuggestionsPanel = () => {
  const [expanded, setExpanded] = useState(true);
  const [filter, setFilter] = useState('All');
  const [completed, setCompleted] = useState({});

  const themes = ['All', ...new Set(studySuggestions.map(s => s.theme))];
  const filtered = studySuggestions.filter(
    s => filter === 'All' || s.theme === filter
  );

  return (
    <div className="pixel-border bg-virtus-black/80 p-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="w-full text-center text-base text-virtus-cyan font-bold">
          Sugestões de Estudo
        </h3>
        <span className="text-virtus-cyan">{expanded ? '▾' : '▸'}</span>
      </div>
      {!expanded ? (
        <p className="text-xs text-virtus-cyan mt-2">
          Clique no título para ver as sugestões
        </p>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            {themes.map(theme => (
              <button
                key={theme}
                className={`px-2 py-1 text-xs border border-virtus-cyan rounded ${
                  filter === theme ? 'bg-virtus-cyan text-black' : ''
                }`}
                onClick={() => setFilter(theme)}
              >
                {theme}
              </button>
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="text-xs text-virtus-red">Sem sugestões para este tema.</p>
          ) : (
            <ul className="list-disc pl-5 space-y-1 text-xs text-virtus-cyan max-h-40 overflow-auto">
              {filtered.map((sugg, idx) => (
                <li
                  key={idx}
                  className={`${
                    completed[idx] ? 'line-through text-virtus-green/70' : ''
                  } cursor-pointer`}
                  onClick={() =>
                    setCompleted(c => ({ ...c, [idx]: !c[idx] }))
                  }
                >
                  {sugg.text}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default StudySuggestionsPanel;
