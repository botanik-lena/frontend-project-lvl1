import readlineSync from 'readline-sync';
import welcome from '../src/greeting.js';
import getRandomNumber from '../src/randomNumber.js';
import getNOD from '../src/getNOD.js';

const nod = () => {
  const userName = welcome();
  console.log('Find the greatest common divisor of given numbers.');
  let isCorrect = true;
  let count = 0;

  while (isCorrect) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const result = getNOD(firstNumber, secondNumber);

    if (result === Number(userAnswer)) {
      count += 1;
      console.log('Correct!');
    } else {
      isCorrect = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }

    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
};

export default nod;
