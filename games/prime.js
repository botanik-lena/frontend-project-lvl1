import readlineSync from 'readline-sync';
import welcome from '../src/greeting.js';
import getRandomNumber from '../src/randomNumber.js';
import isPrime from '../src/isPrime.js';

const prime = () => {
  const userName = welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let isCorrect = true;
  let count = 0;

  while (isCorrect) {
    const number = getRandomNumber(1, 100);

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = isPrime(number);

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

export default prime;
