function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var arr = [0,1,2,3,4,5,6,7,8,9,10];
  var newarray = arr.map((num)=>{return num*6})
  return newarray; 
}

module.exports = tablaDelSeis;
