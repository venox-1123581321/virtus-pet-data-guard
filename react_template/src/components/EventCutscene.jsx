import React, { useEffect } from 'react';

const EventCutscene = ({ stage, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const srcMap = {
    OVO: '/assets/cutscenes/OVO_roar.gif',
    IGUANA: '/assets/cutscenes/IGUANA_roar.gif',
    IGUANA_MAIOR: '/assets/cutscenes/IGUANA_MAIOR_roar.gif',
    CARNOTAURO: '/assets/cutscenes/CARNOTAURO_roar.gif',
    TREX: '/assets/cutscenes/TREX_roar.gif',
    PETZILLA: '/assets/cutscenes/PETZILLA_roar.gif',
    DRAGON: '/assets/cutscenes/DRAGON_roar.gif',
    TRANSFORMER: '/assets/cutscenes/TRANSFORMER_roar.gif'
  };

  const key = (stage || 'OVO').toUpperCase();
  const gifSrc = srcMap[key] || srcMap['OVO'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <img
        src={gifSrc}
        alt={`${key} roar`}
        className="max-w-full max-h-full animate-fadeInOut"
      />
    </div>
  );
};

export default EventCutscene;
