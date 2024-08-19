function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var newarray = array.map((num)=>{return num*2})
  return newarray;
}

module.exports = duplicarElementos;
