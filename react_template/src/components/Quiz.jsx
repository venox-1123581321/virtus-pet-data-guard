// src/components/Quiz.jsx
import React, { useState, useEffect } from 'react';

const Quiz = ({ onComplete, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: 'What is Machine Learning?',
      options: [
        'A subset of AI that enables systems to learn from data',
        'A programming language',
        'A database management system',
        'A web development framework'
      ],
      correct: 0
    },
    {
      question: 'What is a Neural Network?',
      options: [
        'A computer networking protocol',
        'A mathematical model inspired by biological neural networks',
        'A type of database',
        'A programming paradigm'
      ],
      correct: 1
    },
    {
      question: 'What is Deep Learning?',
      options: [
        'Learning while sleeping',
        'Traditional programming',
        'Neural networks with multiple layers',
        'A database query language'
      ],
      correct: 2
    }
  ]);

  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (selectedIndex) => {
    const isCorrect = selectedIndex === questions[currentQuestion].correct;
    const points = isCorrect ? 10 : 0;
    setScore(score + points);
    setFeedback(isCorrect ? '🎉 Correct!' : '❌ Try again next time!');
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setFeedback('');
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleFinish = () => {
    onComplete(score);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-gray-800 p-8 rounded-xl max-w-xl w-full m-4 shadow-2xl border border-gray-700">
        {!showResult ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-400">Knowledge Quiz</h2>
              <span className="text-lg font-semibold">Question {currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className="mb-6">
              <p className="text-xl mb-4">{questions[currentQuestion].question}</p>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200 transform hover:scale-102 hover:shadow-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
              {feedback && (
                <div className="mt-4 text-center text-xl font-bold animate-bounce">
                  {feedback}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-2xl mb-6">Your Score: {score}/{questions.length * 10}</p>
            <button
              onClick={handleFinish}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Feed Knowledge to Pet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;