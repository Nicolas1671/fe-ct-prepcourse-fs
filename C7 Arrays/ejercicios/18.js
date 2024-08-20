function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var total = resultadosTest.reduce((a, b) => {
    return a + b;
  });
  return total/resultadosTest.length;
}

module.exports = promedioResultadosTest;
