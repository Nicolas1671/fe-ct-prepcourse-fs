function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  if (num%2==1 || num%2==0) {
    return true;
  } else {
    return false;
  }
  /*Number.isInteger(num)*/
}

module.exports = esEntero;
