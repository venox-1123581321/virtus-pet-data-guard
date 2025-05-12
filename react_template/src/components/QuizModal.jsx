import React, { useState } from 'react';
import quizzes from '../data/quizzes.json';

const QuizModal = ({ questionIndex, onAnswer, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = quizzes[questionIndex];

  const handleSend = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    const correct = selectedOption === question.correctIndex;
    onAnswer(correct);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedOption(null);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-virtus-black p-4 pixel-border max-w-md w-full space-y-4">
        <h3 className="text-white text-base leading-snug">{question.question}</h3>
        <div className="flex flex-col gap-2">
          {question.options.map((option, idx) => {
            let classes = 'p-2 border border-gray-700 text-left text-sm text-white rounded';
            if (isSubmitted) {
              if (idx === question.correctIndex) {
                classes += ' border-virtus-green';
              } else if (idx === selectedOption && selectedOption !== question.correctIndex) {
                classes += ' border-virtus-red';
              }
            } else if (idx === selectedOption) {
              classes += ' border-virtus-cyan';
            }
            return (
              <button
                key={idx}
                onClick={() => !isSubmitted && setSelectedOption(idx)}
                className={classes}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSend}
            disabled={selectedOption === null || isSubmitted}
            className="bg-virtus-cyan text-black font-bold py-2 px-4 pixel-border disabled:opacity-50 text-sm"
          >
            Enviar
          </button>
        </div>
        {isSubmitted && (
          <p className={`text-center font-bold ${selectedOption === question.correctIndex ? 'text-virtus-green' : 'text-virtus-red'}`}>
            {selectedOption === question.correctIndex ? 'Correto!' : 'Errado!'}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
