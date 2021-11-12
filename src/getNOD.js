const getNOD = (x, y) => {
  if (y > x) return getNOD(y, x);
  if (!y) return x;
  return getNOD(y, x % y);
};

export default getNOD;
