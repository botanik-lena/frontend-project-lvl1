const randomSign = () => {
  const signs = ['+', '-', '*'];
  const max = 2;
  const min = 0;
  const index = Math.floor(Math.random() * (max - min + 1)) + min;

  return signs[index];
};

export default randomSign;
