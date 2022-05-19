// Ejercicios

// 1.	Escribir una función que reciba un array de elementos e indique si se encuentran ordenados de menor a mayor o no. https://codesandbox.io/s/clase-ejercicio-1-0lchn?ﬁle=/src/index.js

console.log("--------------------------EJERCICIO 1-------------------------");

let arr1 = [0, 4, 2, 6, 1, 9];
let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [1, 2, 3, 4, 6, 5];

const verificarOrden = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return "El array no esta ordenado de forma ascendente";
    }
  }
  return "El array esta ordenado de forma ascendente";
};

console.log(verificarOrden(arr1));
console.log(verificarOrden(arr2));
console.log(verificarOrden(arr3));

// 2.	Escribir una función que reciba un array con nombres, y para cada nombre imprima el mensaje Estimado (nombre) , vote por mí. https://codesandbox.io/s/clase-ejercicio-2-nwwxq?ﬁle=/src/index.js

console.log("--------------------------EJERCICIO 2-------------------------");

let nombres = ["Juana", "Pedro", "María"];

const Votar = (arrNombres) => {
  for (let i = 0; i < arrNombres.length; i++) {
    console.log(`Estimado/a ${arrNombres[i]} vote por mí`);
  }
};
Votar(nombres);

// 3.	Hacer un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma: (suponiendo que indica 6).
// 666666
// 55555
// 4444
// 333
// 22
// 1
// https://codesandbox.io/s/clase-ejercicio-3-wcyu6?ﬁle=/src/index.js

console.log("--------------------------EJERCICIO 3-------------------------");

const piramideInvertida = () => {
  for (let i = 6; i >= 1; i--) {
    let linea = i.toString();
    for (let j = 1; j <= i - 1; j++) {
      linea += i.toString();
    }
    console.log(linea);
  }
};

piramideInvertida();

// 4.	Teniendo 3 arrays: ﬁla1 = [4,9,2]
// ﬁla2 = [3,5,7]
// ﬁla3 = [8,1,6]
// Cargarlos en una matriz y, luego, hacer la suma de los valores horizontales de cada ﬁla, los verticales de cada columna y las 2 diagonales, e imprimirlas por consola.
//Imprimir la multiplicación de cada columna (es decir, los 3 valores multiplicados entre sí) sólo si el resultado es par.

console.log("--------------------------EJERCICIO 4-------------------------");

let fila1 = [4, 9, 2];
let fila2 = [3, 5, 7];
let fila3 = [8, 1, 6];

let nuevaMatriz = [];
nuevaMatriz.push(fila1, fila2, fila3);
console.table(nuevaMatriz);

const sumarFilas = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    let sumaFila = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      sumaFila += matriz[i][j];
    }
    console.log(`La suma de la fila ${i + 1} es ${sumaFila}`);
  }
};

console.log(sumarFilas(nuevaMatriz));

const sumarColumnas = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    let sumaColumna = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      sumaColumna += matriz[j][i];
    }
    console.log(`La suma de la columna ${i + 1} es ${sumaColumna}`);
  }
};

console.log(sumarColumnas(nuevaMatriz));

const sumarDiagonal = (matriz) => {
  let diagonalPrinc = 0;
  let diagonalSec = 0;
  for (let i = 0; i < matriz.length; i++) {
    diagonalPrinc += matriz[i][i];
    diagonalSec += matriz[i][matriz.length - (i + 1)];
  }
  console.log(
    `La suma de la diagonal principal es ${diagonalPrinc} y la suma de la diagonal secunadaria es ${diagonalSec}`
  );
};

console.log(sumarDiagonal(nuevaMatriz));

const multiplicarColumnas = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    let producto = 1;
    for (let j = 0; j < matriz[i].length; j++) {
      producto *= matriz[j][i];
    }
    if (producto % 2 === 0) {
      console.log(producto);
    }
  }
};

console.log(multiplicarColumnas(nuevaMatriz));
