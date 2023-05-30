const calcularSoma = require('../contagem_funcao.js');

test(' Calcule a soma de 10 e 20', () => {
    expect(calcularSoma ([10,20])).toBe(30);
});

test(' Calcule a soma de 10 e 30', () => {
    expect(calcularSoma ([10,30])).toBe(40);
});

test(' Calcule a soma errada de 10 e 40', () => {
    expect(calcularSoma ([10,30])).not.toBe(400);
});
