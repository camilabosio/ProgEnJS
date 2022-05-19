let numeros = [6, 5, 1, 2, 4, 3, 8, 7];
const letrasMayus = [
  "Analia",
  "Agustina",
  "Andrea",
  "Andres",
  "antonela",
  "alejandra",
  "antonio",
  "Argentina"
];
// const letras = ["a", "A", "c", "D", "z", "Z", "J", "L"];
// console.log(numeros);
let numerosOrdenados = numeros.slice();
// console.log("copia con slice", numerosOrdenados);
let numerosOrdenados2 = [...numeros];
// console.log("copia con spread op", numerosOrdenados2);

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
console.log(bubbleSort(letrasMayus));
// console.log(bubbleSort(letras));