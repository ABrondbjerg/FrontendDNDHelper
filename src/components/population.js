function getRandomPopulation(size, populationBySize) {
  const { min, max } = populationBySize[size];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default getRandomPopulation;

// et eksempel på populationBySize fra chat.
