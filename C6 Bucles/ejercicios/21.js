function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var resultado = numero;
  while (resultado%2==0) {
    if (resultado!==1) {
    resultado = resultado/2;
    } if (resultado==1) {
      return true;
    } 
  } return false;
}

module.exports = esPotenciaDeDos;
