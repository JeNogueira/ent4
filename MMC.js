const readline = require('readline');
const calcularMdc = require('../MMC_funcao');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor de A: ", function(a) {
    rl.question("Digite o valor de B: ", function(b) {
       console.log("O máximo divisor comum é: " + calcularMdc(parseInt(a), parseInt(b)));
    rl.close();
  });
});

