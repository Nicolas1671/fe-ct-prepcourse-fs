function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var i = 0;
  var newarray = [];
  while (i<array.length) {
    var a = array.pop();
    newarray.push(a);
  }
  return newarray;
}

module.exports = invertirArray;
