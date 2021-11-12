import readlineSync from 'readline-sync';
import welcome from '../src/greeting.js';
import randomSign from '../src/randomSign.js';
import getRandomNumber from '../src/randomNumber.js';

const calc = () => {
  const userName = welcome();
  console.log('What is the result of the expression?');
  let isCorrect = true;
  let count = 0;

  while (isCorrect) {
    const firstOperand = getRandomNumber();
    const secondOperand = getRandomNumber();

    const sign = randomSign();
    let result = 0;

    console.log(`Question: ${firstOperand} ${sign} ${secondOperand}`);
    const userAnswer = readlineSync.question('Your answer: ');

    switch (sign) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        break;
    }

    if (result === Number(userAnswer)) {
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

export default calc;
