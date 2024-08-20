function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var i = 0;
  while (i<array.length-1) {
    if (array[i]==array[i+1]) {
      i++;
    } else {
      return false;
    }
  }
  if (i==array.length-1) {
    return true;
  }
}

module.exports = todosIguales;
