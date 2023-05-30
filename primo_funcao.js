function verificarPrimo(numero) {
    let primo = true;
    if (numero <= 1) {
      primo = false;
    } else {
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          primo = false;
          break;
        }
      }
    }
    
    return primo;
  }

  module.exports = verificarPrimo;