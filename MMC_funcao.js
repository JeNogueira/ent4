function calcularMdc(a, b) {
    while (b !== 0) {
      var r = a % b;
      a = b;
      b = r;
    }
    
    return a;
  
  }

  module.exports = calcularMdc;
