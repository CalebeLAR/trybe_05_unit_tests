const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    // Verifica se o array retornado pela função contém dois itens dentro.
    expect(productDetails('firstProduct', 'secondProduct').length).toBe(2);
  });

  it('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    const outroArray = productDetails('firstProduct', 'secondProduct');
    expect(outroArray[0]).toMatchObject({ name: 'firstProduct', details: { productId: 'firstProduct123' } });
    expect(outroArray[1]).toMatchObject({ name: 'secondProduct', details: { productId: 'secondProduct123' } });
    // Teste se o retorno da função é um array.
    const array = productDetails('firstProduct', 'secondProduct');
    //verifica se o retorno da função é um objeto;
    expect(typeof array).toBe('object');
    //verifica é possivel dar PUSH no retorno da função;
    array.push('itemTest');
    expect(typeof array).toBe('object');
    //verifica se é possivel dar LENGTH no retorno da função;
    expect(typeof array.length).toBe('number');
  });

  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    let x = 'firstProduct';
    let y = 'secondProduct';
    expect(productDetails(x, y)).not.toBe(productDetails(x, x));
    expect(productDetails(x, y)).not.toBe(productDetails(y, y));
  });

  it('Verifica se os dois productIds terminam com 123.', () => {
    const ultimoArray = productDetails('firstProduct', 'secondProduct');
    let productIds0 = ultimoArray[0].details.productId
    let productIds1 = ultimoArray[1].details.productId
    expect(productIds0).toMatch(/123/);
    expect(productIds1).toMatch(/123/);
  });
});
