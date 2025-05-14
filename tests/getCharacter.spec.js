const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna undefine caso não receba parâmetro.', () => {
    expect(getCharacter()).toBe(undefined);
  });
  
  it('Verifica se a função retorna o objeto correto para o parâmetro "Arya".', () => {
    expect(getCharacter('Arya')).toStrictEqual({ name: 'Arya Stark', class: 'Rogue', phrases: ['Not today', 'A girl has no name.'] });
  });

  it('Verifica se a função retorna o objeto correto para o parâmetro "Brienne".', () => {
    expect(getCharacter('Brienne')).toStrictEqual({ name: 'Brienne Tarth', class: 'Knight', phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'], });
  });

  it('Verifica se a função retorna o objeto correto para o parâmetro "Melissandre".', () => {
    expect(getCharacter('melissandre')).toStrictEqual({ name: 'Melissandre', class: 'Necromancer', phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'], });
  });

  it('Verifica se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.', () => {
    expect(getCharacter('ARYA')).toStrictEqual(getCharacter('ArYa'.toLowerCase()));
    expect(getCharacter('BRIENNE')).toStrictEqual(getCharacter('Brienne'.toLowerCase()));
    expect(getCharacter('MELISSANDRE')).toStrictEqual(getCharacter('melissandre'.toLowerCase()));
  });

  it('Verifica se ao passar um nome que não está na tabela, a função retorna undefined.', () => {
    expect(getCharacter('stringQualquer')).toBe(undefined);
  });
});
