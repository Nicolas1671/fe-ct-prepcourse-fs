function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var arr = texto.split("");
  console.log(arr);
  arr.reverse();
  return arr.join("");
}

module.exports = invertirTexto;
