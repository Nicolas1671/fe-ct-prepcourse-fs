function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var newarray = array.map((num)=>{return num*array.indexOf(num)})
  return newarray;  
}


module.exports = multiplicarElementosPorIndice;
