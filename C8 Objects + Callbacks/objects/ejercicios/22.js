function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var str1 = str1.toLowerCase();
   var str2 = str2.toLowerCase();   
   var arr1 = str1.split("");
   var arr = str2.split(""); 
   arr.sort();
   arr1.sort();
   if (arr1.length==arr.length) {
      for (i=0; i<arr.length; i++) {
         if (arr[i] === arr1[i]) {
         } else {
            return false;
         }
      }
   } else {
      return false;
      }
   return true;
}

module.exports = esAnagrama;

/*
function esAnagrama(str1, str2) {
  // Si las longitudes son diferentes, no pueden ser anagramas
  if (str1.length !== str2.length) {
    return false;
  }

  // Crear objetos para contar las frecuencias de cada letra en ambas cadenas
  const charCount1 = {};
  const charCount2 = {};

  // Contar las frecuencias de cada letra en la primera cadena
  for (const char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Contar las frecuencias de cada letra en la segunda cadena
  for (const char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Comparar los objetos de conteo
  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}
*/