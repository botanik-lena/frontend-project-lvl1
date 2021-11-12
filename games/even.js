import readlineSync from 'readline-sync';
import welcome from '../src/greeting.js';
import getRandomNumber from '../src/randomNumber.js';
import isEven from '../src/isEven.js';

const even = () => {
  const userName = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let isCorrect = true;
  let count = 0;

  while (isCorrect) {
    const number = getRandomNumber(2, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = isEven(number);

    if (result === userAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      isCorrect = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
};

export default even;
