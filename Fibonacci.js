function fibonacciSequence(quantdigfib) {
    // Inicializar a sequência com os primeiros dois termos
    var seq = [0, 1];
  
    // Gerar os demais termos da sequência até o décimo termo
    for (var i = 2; i < quantdigfib; i++) {
      seq[i] = seq[i - 1] + seq[i - 2];
    }
  
    // Exibir a sequência no console
    return seq;
  }
  
  // Chamar a função para gerar a sequência
  console.log("Sequência de Fibonacci até o décimo termo:", fibonacciSequence());

  module.exports = fibonacciSequence;
  