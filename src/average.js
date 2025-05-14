const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let soma = 0;
  for (let valor of array) {
    if (typeof (valor) !== 'number') {
      return undefined;
    }
    soma += valor;
  }
  let média = Math.round((soma / array.length));
  return média;
};

module.exports = average;
console.log(average([]));