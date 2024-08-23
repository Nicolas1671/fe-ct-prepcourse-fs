function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  //var string = "casa";
  var arr1 = string.split("");
  var arr = string.split(""); 
  arr1.reverse();
  //console.log(arr1);
  //console.log(arr);
  for (i=0; i<arr.length; i++) {
    if (arr[i] === arr1[i]) {
      } else {
          return false;
        }
    }
  return true;
}

module.exports = esPalindromo;