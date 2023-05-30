function realizarSoma(c1) {
  const soma = [...c1].reduce((acc, curr) => acc + curr, 0);
  return soma;
}

module.exports = realizarSoma;