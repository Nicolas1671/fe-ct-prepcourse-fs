function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a<b) {
    var i = b;
    var resultado = 1;
    do {
      resultado = resultado*i;
      i = i - 1;
    } while (i>=a && i>=0);
    return resultado;
  } /*if (b<a) {
    var i = a;
    var resultado = 1;
    do {      
      resultado = resultado*i;
      i = i - 1;
    } while (i>=b && i>=0);
    return resultado;
  }*/ else {
    return a;
  }
}

module.exports = productoEntreNúmeros;