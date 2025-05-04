// src/utils/gameLogic.js
export const calculateHealth = (currentHealth, lastFed) => {
  const hoursSinceLastFed = (new Date() - new Date(lastFed)) / (1000 * 60 * 60);
  const healthLoss = Math.floor(hoursSinceLastFed * 0.625); // 15 per day
  return Math.max(0, currentHealth - healthLoss);
};

export const calculateKnowledge = (currentKnowledge, quizScore) => {
  return Math.min(1000, currentKnowledge + quizScore);
};

export const checkEvolution = (knowledge) => {
  if (knowledge >= 1000) return 'megazord';
  if (knowledge >= 600) return 'giant';
  if (knowledge >= 300) return 'carnotaur';
  if (knowledge >= 100) return 'iguana';
  return 'egg';
};

export const getPowers = (stage) => {
  const powersByStage = {
    giant: ['Light Ray', 'Roar', 'Dance'],
    megazord: ['Light Ray', 'Roar', 'Dance', 'Fly', 'Binary Dimension Jump']
  };
  return powersByStage[stage] || [];
};