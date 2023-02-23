export const getDegreesArray = (count: number) => {
  return [...Array(count)].map((_, index) => 30 + (360 / count) * index);
};
