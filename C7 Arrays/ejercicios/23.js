function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var arr = [];
  var acumulado = num;
  for (var i = 0; i<10; i++) {
    if (i!==acumulado) {
      acumulado = acumulado+2;
      arr.push(acumulado);
    } else {
      return "Se interrumpió la ejecución";
    }
  }
  //console.log(arr);
  return arr;
}

module.exports = breakStatement;
