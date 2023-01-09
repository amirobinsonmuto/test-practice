function analyzeArray(arr) {
  return {
    average: arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export { analyzeArray };
