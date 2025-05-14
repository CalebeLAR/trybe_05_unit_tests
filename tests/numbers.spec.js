const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se quando a função retorna true quando recebe como parametro o array [1, 2, 3, 4, 5]', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);

  });
  it('Verifica se quando a função retorna false quando recebe como parametro o array [1, 2, "3", 4, 5] ', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);

  });
  it('Verifica se quando a função retorna false quando recebe como parametro o array [1, "a", 3] ', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);


  });
  it('Verifica se quando a função retorna false quando recebe como parametro o array [" "] ', () => {
    expect(numbers([' '])).toBe(false);

  });

});
