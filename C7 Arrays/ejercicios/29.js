function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  //var numeros = [1, 2, 3, 4, 6, 7, 8, 9];
  var arr1 = [];
  var arr = [];
  if (numeros.length==0) {
    return null;
  }
  for (var i = 0; i<numeros.length-1; i++) {
    if (numeros[i]!==numeros[i+1]-1) {
      arr1.push(numeros[i]+1);      
      } else {
        arr.push(numeros[i]);
      }
  }
  arr.push(numeros[numeros.length - 1]);
  console.log(arr);
  console.log(arr1[0]);
  if (numeros.length==arr.length) {
    return null
    } else {
        return arr1[0];
      }
}

module.exports = encontrarNumeroFaltante;