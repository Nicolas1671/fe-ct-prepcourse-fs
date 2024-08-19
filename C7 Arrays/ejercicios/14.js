function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var newarray = [];
  array.forEach((num)=>{
    if (num>10) { 
      newarray.push(num)
    }
  })
  return newarray.length;
}

module.exports = contarElementosMayoresA10;
