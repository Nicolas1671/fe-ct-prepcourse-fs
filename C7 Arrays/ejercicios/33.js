function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  
  let result = "";
  let i = 0, j = 0, k = 0; // Índices para cada string

  while (i < str1.length || j < str2.length || k < str3.length) {
    if (i < str1.length) {
      result += str1[i];
      i++;
    }
    if (j < str2.length) {
      result += str2[j];
      j++;
    }
    if (k < str3.length) {
      result += str3[k];
      k++;
    }
  }
  return result;
}

module.exports = combine;

