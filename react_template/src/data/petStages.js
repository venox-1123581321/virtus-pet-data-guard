// src/data/petStages.js
export const petStages = {
  egg: {
    name: 'Egg',
    minKnowledge: 0,
    description: 'Your journey begins! Feed me with knowledge to help me hatch.',
    powers: []
  },
  iguana: {
    name: 'Iguana',
    minKnowledge: 100,
    description: 'A small but eager learner, ready to grow!',
    powers: []
  },
  carnotaur: {
    name: 'Carnotaur',
    minKnowledge: 300,
    description: 'Growing stronger with each lesson learned!',
    powers: []
  },
  giant: {
    name: 'Giant Lizard',
    minKnowledge: 600,
    description: 'A powerful creature with special abilities!',
    powers: ['Light Ray', 'Roar', 'Dance']
  },
  megazord: {
    name: 'Dragon Megazord',
    minKnowledge: 1000,
    description: 'The ultimate form, master of all knowledge!',
    powers: ['Light Ray', 'Roar', 'Dance', 'Fly', 'Binary Dimension Jump']
  }
};

export const evolutionRequirements = {
  iguana: 100,
  carnotaur: 300,
  giant: 600,
  megazord: 1000
};