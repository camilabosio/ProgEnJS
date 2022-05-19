//2)Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 números.

function generarMatriz10por10(num1, num2) {
    let matrizNueva = [];
    for (let i = 0; i < num1; i++) {
      matrizNueva.push([]);
      for (let j = 1; j <= num2; j++) {
        let num = i * 10 + j;
        matrizNueva[i].push(num);
      }
    }
    return matrizNueva;
  }
  let matriz10por10 = generarMatriz10por10(10, 10);
  console.table(matriz10por10);


//Otra posible forma
function generadorDeMatriz(num){
  let matrizAgustina = []
  for (let i = 0; i < num; i++) {
      let arrayI = []
      for (let j = 0; j < num; j++) { 
          arrayI.push(i*10 + j + 1)
      }
      matrizAgustina.push(arrayI)
  }
  return matrizAgustina
}

console.table(generadorDeMatriz(10))

//Otra solución
function generarMatriz10por10() {
  let matriz = [];
  let contador = 1;
  for (let fila = 0; fila < 10; fila++) {
      let array = [];
      for (let col = 0; col < 10; col++) {
      array.push(contador++);
      }
          matriz.push(array);
  }
  return matriz;
}
console.log(generarMatriz10por10());
