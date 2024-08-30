function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var arrFinal = [];
   arrayOfStrings.forEach((elemento) => {
      if (elemento[0]=="a") {
         arrFinal.push(elemento)}
   });
   return arrFinal;
}

module.exports = filter;
