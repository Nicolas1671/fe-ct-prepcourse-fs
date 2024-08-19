function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  //var array = ['hello', 'world', 'this', 'is', 'a', 'test'];
  var found = array.find((element) => element.length>5) 
  console.log(found);
  return found; 
}

module.exports = obtenerPrimerStringLargo;
