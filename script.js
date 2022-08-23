let listaNumeros = [1, 2, 3, 1, 5, 1, 7, 1, 9];
function encontraNUM(listaNumeros, valorNumerico) {
  for (let i = 0; valorNumerico.length; i++) {
    if (valorNumerico == 1) {
      return valorNumerico.length[-i];
    }
  }
}
console.log(encontraNUM(listaNumeros, 1));
