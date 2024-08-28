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
