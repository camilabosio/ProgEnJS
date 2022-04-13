//Funciona como un algoritmo de ordenamiento

//Ordena una lista de valores, siguiendo el criterio ascendente-descente

//Sintaxis y funcionamiento de buble sort
let numeros = [6,5,1,2,4,3,8,7];


/* 1 --- 
A nivel general este algoritmo va a querer “interrogar”
todos los números del array, ya veremos cuál en un momento.
Para la iteración, utilizaremos un ciclo for, 
que vaya desde el primer elemento del array, hasta el último.
*/

for(let i=0; i<numeros.length; i++) {
}

/* 2 --- 
La “pregunta” que Bubble Sort hace es la siguiente: empezando desde el primer número
del array, preguntar al siguiente número si es mayor y, de ser así, cambiar posiciones.
Caso contrario, pasar al siguiente número y hacer la misma pregunta.
Una primera iteración por cada número no nos garantiza que ya los números están
ordenados, por lo que vamos a tener que repetir este proceso, no solamente empezando
desde el primer elemento del array, sino desde todos los números, menos el último. Para
esto, vamos a tener que utilizar un ciclo dentro de un ciclo, o un doble for.
*/
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
    }
    }

/*
El último paso del algoritmo Bubble Sort nos indica que hagamos una pregunta lógica,
estando en el for interno: ¿es el siguiente número de la lista, mayor que el actual (sobre
el que se está iterando)? Si es así, intercambiamos posiciones, y repitamos esto hasta el
final del array. Al terminar, pasemos al segundo número del array y volvamos a hacer
todo de nuevo. En código, esto se ve así:
*/

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
        }
    }
}
console.log(numeros);