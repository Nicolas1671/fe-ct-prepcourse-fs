function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var total = arrayOfNums.reduce((a, b) => {
    return a + b;
  });
  return total;
}

module.exports = agregarNumeros;
