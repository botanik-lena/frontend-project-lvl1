import readlineSync from 'readline-sync';
import welcome from '../src/greeting.js';
import getRandomNumber from '../src/randomNumber.js';

const progression = () => {
  const userName = welcome();
  console.log('What number is missing in the progression?');
  let isCorrect = true;
  let count = 0;

  while (isCorrect) {
    // Получить длину массива
    const arrayLength = getRandomNumber(5, 10);
    // Получить шаг прогрессии
    const progressionStep = getRandomNumber(1, 10);
    // Получить стартовое число
    const startNumber = getRandomNumber(0, 100);
    // Заполнить массив
    const progressionArray = [];
    progressionArray[0] = startNumber;

    for (let i = 0; i < arrayLength; i += 1) {
      progressionArray[i + 1] = progressionArray[i] + progressionStep;
    }
    // Получить индекс числа, который будет спрятан
    const indexHiddenNumber = getRandomNumber(0, progressionArray.length - 1);
    // Записать спратянное число
    const hiddenNumber = progressionArray[indexHiddenNumber];

    // Создать массив с учётом спрятанного числа
    const arrayHiddenNumber = progressionArray.slice(0);
    arrayHiddenNumber[indexHiddenNumber] = '. .';

    console.log(`Question: ${arrayHiddenNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (hiddenNumber === Number(userAnswer)) {
      count += 1;
      console.log('Correct!');
    } else {
      isCorrect = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }

    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
};

export default progression;
