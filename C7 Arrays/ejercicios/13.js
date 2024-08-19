function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var newarray = [];
  array.forEach((num)=>{
    if (num%2==0) { 
      newarray.push(num)
    }
  })
  return newarray;
}

module.exports = filtrarNumerosPares;
