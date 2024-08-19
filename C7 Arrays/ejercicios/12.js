function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var newarray = array.map((num)=>{return num.toUpperCase()})
  return newarray;
}


module.exports = convertirStringAMayusculas;
