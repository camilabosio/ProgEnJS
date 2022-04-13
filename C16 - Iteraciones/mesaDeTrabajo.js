/* 
1 --- Escribir un programa que muestre por consola los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, 
los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.
*/
function number(){
    for(let recorrido = 0; recorrido <= 100; recorrido++){
     if(recorrido % 3 == 0 && recorrido % 5 == 0){
       console.log( "FizzBuz")
     } else if(recorrido % 3 == 0){
       console.log("Fizz")
     } else if(recorrido % 5 == 0){
       console.log("Buz")
     } else{
       console.log(recorrido)
     }
    }
  }
number()
  

/* 
2 --- Escriban una función que reciba dos parámetros: un array y un índice. La función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6'. 
let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
*/
let paquete = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function valorElemento (array, index){
    console.log(array[index]);
    }
valorElemento(paquete, 7)



/*
3 --- Escribir una función que, dado un número de mes, devuelva la cantidad de días de ese mes —suponiendo que no es un año bisiesto—.
*/
let meses = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function cuantosDias(array, mes) {
    console.log(array[mes-1])
}

console.log(cuantosDias(meses, 5))

/*
4 --- Escribir una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.
*/

/*
5 --- Escribir una función que reciba una array y solo imprima los valores que se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6,23,33,100'. let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
*/

let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function buscarRepetidos(array){
    const unicos = [];
    const repetidos = [];
    for (let i = 0; i < array.length; i++){
        if (!unicos.includes(array[i])){
            unicos.push(array[i]);
        } else if (repetidos.includes(array[i])){
            unicos.push(array[i])
        }else {
            repetidos.push(array[i])
        }
    }
    return repetidos;
}
console.log(buscarRepetidos(array));
