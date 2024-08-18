function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var control = 2;
  if (numero!=2 && numero!=3) {
    while (control<numero) {
      if (numero%control!==0) {
        control++;
      } else {
        return false;
      } 
    }
    return true;
  } else {
    return true;
  }
}

/*esNumeroPrimo(5)*/
module.exports = esNumeroPrimo;
