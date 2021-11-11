import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const max = 100;
  const min = 0;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};

const welcome = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  return name;
};

const even = () => {
  const userName = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let isCorrect = true;
  let count = 0;

  const isEven = (number) => {
    const result = (number % 2) === 0 ? 'yes' : 'no';
    return result;
  };

  while (isCorrect) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isEven(number) === userAnswer) {
      count += 1;
      console.log('Correct!');
    } else {
      isCorrect = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(number)}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }

    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
};

export default even;
