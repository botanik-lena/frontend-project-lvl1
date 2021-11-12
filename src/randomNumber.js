const getRandomNumber = () => {
  const max = 30;
  const min = 0;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};

export default getRandomNumber;
