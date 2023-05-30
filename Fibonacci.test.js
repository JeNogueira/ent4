const fibonacciSequence = require('../Fibonacci');

test(' teste 10 termos', () => {
    expect(fibonacciSequence (10)).toMatchObject([0,1,1,2,3,5,8,13,21,34]);
});


