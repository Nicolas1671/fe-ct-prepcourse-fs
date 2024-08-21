function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var arr = [];
  var acumulado = num;
  for (var i = 0; i<10; i++) {
    if (i!==5) {
      acumulado = acumulado+2;
      arr.push(acumulado);
    } else {
      continue;
    }
  }
  //console.log(arr);
  return arr;
}

module.exports = continueStatement;
