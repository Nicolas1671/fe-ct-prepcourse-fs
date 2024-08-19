function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length==1 || array.length==0) {
    return 0;
  } else {
    var max = Math.max(...array)
    var indice = array.indexOf(max);
    return indice;
  }
}

module.exports = encontrarIndiceMayor;
