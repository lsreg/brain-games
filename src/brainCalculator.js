const random = require('random');
const gameEngine = require('./gameEngine');

function generateQuestion() {
  const first = random.int(1, 20);
  const second = random.int(1, 20);
  return {
    question: `${first} + ${second}`,
    answer: (first + second).toString(),
  };
}

gameEngine.run(generateQuestion);
