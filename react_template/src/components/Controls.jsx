import React from 'react';

const Controls = ({ onFeed }) => (
  <div className="mt-4">
    <button
      onClick={onFeed}
      className="w-full bg-virtus-green text-black font-bold py-3 pixel-border transform transition duration-150 active:scale-90"
    >
      <span className="text-2xl mr-2 align-middle">📚</span>
      <span className="align-middle">Alimentar</span>
    </button>
  </div>
);

export default Controls;
