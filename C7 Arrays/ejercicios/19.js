function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var i = 0;
  var contador = 1;
  if (arguments.length>0) {
    while (i<arguments.length) {
      contador = contador*arguments[i];
      i++;
    }
    return contador;
  } else {
    return 0;
  }
  console.log(contador);
  /*var args = Array.prototype.slice.call(arguments, 0);
  var total = args.reduce((a, b) => {
    return a*b;
  });
  return total;*/
}
/*multiplicarArgumentos(5,5)*/

module.exports = multiplicarArgumentos;
