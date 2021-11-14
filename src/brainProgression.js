const random = require('random');
const gameEngine = require('./gameEngine');

function generateQuestion() {
  const first = random.int(1, 20);
  const delta = random.int(1, 20);
  return {
    question: `${first} ${first + delta} .. ${first + 3 * delta} ${first + 4 * delta}`,
    answer: (first + 2 * delta).toString(),
  };
}

gameEngine.run(generateQuestion);
