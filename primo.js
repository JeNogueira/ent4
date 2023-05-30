const verificarPrimo = require('./primo_funcao');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número para verificar se ele é primo: ", function(numero) {
  const isPrimo = verificarPrimo(parseInt(numero));
  if (isPrimo) {
    console.log(numero + " é primo!");
  } else {
    console.log(numero + " não é primo.");
  }
  rl.close();
});
