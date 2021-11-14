const random = require('random');
const gameEngine = require('./gameEngine');

function generateQuestion() {
  const number = random.int(1, 20);
  return {
    question: `Is ${number} even? (yes/no)`,
    answer: (number % 2) === 0 ? 'yes' : 'no',
  };
}

gameEngine.run(generateQuestion);
