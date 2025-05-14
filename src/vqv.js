const vqv = (name, age) => {
 if (typeof name !== 'string') {
  return undefined; 
 } 

  const string = (
    `Oi, meu nome é ${name}!\nTenho ${age} anos,
trabalho na Trybe e mando muito em programação!\n#VQV!`
  );
return string;
};

module.exports = vqv;
