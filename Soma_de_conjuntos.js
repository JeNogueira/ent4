const realizarSoma = require('./Soma_de_conjuntos_funcao');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let conjunto1 = [];

function adicionarElemento() {
  rl.question('Digite um elemento (ou "sair" para encerrar): ', (elemento) => {
    if (elemento.toLowerCase() === 'sair') {
   
      console.log('A soma dos conjuntos é: ' + realizarSoma(conjunto1));
      rl.close();
    } else {
      conjunto1.push(parseInt(elemento));
      adicionarElemento();
    }
  });
}

function pede_numeros(){
    
  console.log('Soma de Conjuntos');
  console.log('==================');
  
  console.log('Insira os elementos do conjunto 1:');
  
  
  adicionarElemento(conjunto1);
  
  rl.on('close', () => {
    console.log('Programa encerrado.');
  })
}

pede_numeros();