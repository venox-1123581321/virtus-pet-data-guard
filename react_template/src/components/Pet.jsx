import React from 'react';

const Pet = ({ stage }) => {
  const stageKey = stage.toUpperCase();
  const imageSrc = `/assets/images/${stageKey}.png`;
  const displayName = stageKey.replace(/_/g, ' ').toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="text-center mb-4">
      <div className="bg-pixel-pattern p-2 pixel-border inline-block">
        <img
          src={imageSrc}
          alt={displayName}
          className="w-72 h-72 mx-auto"
          onError={(e) => { e.target.src = `/assets/images/OVO.png`; }}
        />
      </div>
      <h2 className="mt-4 text-3xl text-virtus-cyan font-bold">
        {displayName}
      </h2>
      <p className="text-base text-virtus-cyan">Absorvendo conhecimento!</p>
    </div>
  );
};

export default Pet;
