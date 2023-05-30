const readline = require('readline');
const calcularSoma = require('../contagem_funcao');

const numeros = [];

function adicionarNumero() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite um número: ', (numero) => {
    numeros.push(parseInt(numero));
    rl.close();
    mostrarMenu();
  });
}

function adicionarConjunto() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o conjunto de números separados por espaço: ', (conjunto) => {
    const numerosString = conjunto.split(" ");
    for (let i = 0; i < numerosString.length; i++) {
      const num = parseInt(numerosString[i]);
      numeros.push(num);
    }
    rl.close();
    mostrarMenu();
  });
}

function calcularSoma(n) {
  let soma = 0;
  for (let i = 0; i < n.length; i++) {
    soma += n[i];
  }
  return soma;  
}

function mostrarMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Escolha uma opção:\n1 - Adicionar número\n2 - Calcular a soma dos números\n0 - Sair\n', (opcao) => {
    switch(parseInt(opcao)) {
      case 1:
        adicionarNumero();
        break;

      case 2:
        console.log("A soma dos números é: " + calcularSoma(numeros));
        mostrarMenu();
        break;

      case 0:
        console.log("Encerrando o programa...");
        rl.close();
        break;
      default:
        console.log("Opção inválida, tente novamente.");
        mostrarMenu();
    }
  });
}

mostrarMenu();
