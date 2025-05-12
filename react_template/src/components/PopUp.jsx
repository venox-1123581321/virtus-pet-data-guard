import React, { useEffect } from 'react';

const PopUp = ({ text, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="popup fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="bg-virtus-green text-black font-bold py-2 px-4 pixel-border animate-fadeUp">
        {text}
      </div>
    </div>
  );
};

export default PopUp;
