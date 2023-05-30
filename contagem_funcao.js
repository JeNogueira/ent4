
function calcularSoma(n) {
    let soma = 0;
    for (let i = 0; i < n.length; i++) {
      soma += n[i];
    }
    return soma;  
  }

  module.exports = calcularSoma;