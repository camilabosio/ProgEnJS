
/*
Ejercicio 1
1 ---- Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio.  
A ---- ¿Qué tipo de dato contiene la variable ‘alumnos’?
RTA: Un array de objetos. 
B --- ¿Qué propiedades tiene la estructura definida en el archivo final.js? 
RTA: id, nombre, apellido, legajo y notas.

2 --- Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. 
Deberás mostrar por consola antes y después de función o método que implementaste. Utiliza VisualStudio code. 
*/
const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
    },
    {
      id: 5,
      nombre: "Javier",
      apellido: "Riera",
      legajo: 20220125,
      notas: [],
    },
  ];
  function ordenarLegajoAsc (array) {
    for(let i =0; i<array.length; i++) {
        for(let j=0; j<array.length -1; j++) {
            if(array[j].legajo > array[j+1].legajo) {
                let aux = array[j]
                array[j] = array[j+1]
                array[j+1] =aux
            }
        }
    } return array
}
console.table(alumnos);
ordenarLegajoAsc(alumnos);
console.table(alumnos);



/*
Ejercicio 2
Dado el objeto alumno
1 --- Crear un método que retorne el promedio de notas. 
*/

let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
}

function promedioJavier(alumno){
    let promedio = 0
    for (let i=0; i < alumno.notas.length; i++){
        promedio += alumno.notas[i]
    }
    return (promedio / alumno.notas.length)
}
console.table(alumno);
let promedioNotas = promedioJavier(alumno);
console.log(promedioNotas);


// 2 --- Crear una función que ordene las notas del alumno de forma descendente

function ordenarNotasDesc(alumno){
    for ( let i = 0; i < alumno.notas.length; i++){
        for( let j = 0; j < alumno.notas.length; j++){
            if(alumno.notas[j] < alumno.notas[j+1]){
                let aux = alumno.notas[j];
                alumno.notas[j] = alumno.notas[j + 1];
                alumno.notas[j + 1] = aux
            }
        }
    }
}
console.table(alumno);
ordenarNotasDesc(alumno);
console.table(alumno);


/*
jercicio 3
A --- Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.
*/

function matrizCuadrada(numeroEntero){
    let matriz = [];
    let valor = 1;
    for(let i = 0; i < numeroEntero ; i++){
        let fila = [];
        for( let j = 0; j < numeroEntero ; j++){
            fila.push(valor++);
        }
        matriz.push(fila);
    }
    return matriz;
}
const matriz3x3 = matrizCuadrada(3)
console.log(matriz3x3);


// B --- Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3. 

function multiplosDe3 (matriz){
    let sumatoria = 0
    for(let i = 0; i < matriz.length; i++){
        for( let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] % 3  === 0 ){
                sumatoria += matriz[i][j]
            }
        }
    }return sumatoria

}
console.log(multiplosDe3(matriz3x3))

// C --- Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.
function sumarValorPar(matriz){
    let sumatoria = 0
    for(let i = 0; i < matriz.length; i++){
        for( let j = 0; j < matriz[i].length; j++){
            sumatoria = sumatoria +  matriz[i][j];
        }   
    }
        if(sumatoria%2 === 0){
           return true;
        } else {
           return false;
        }
    }       
console.log(sumarValorPar(matriz3x3))

// D ---Crear una función que retorne la suma de las diagonales de la matriz.

function sumarDiagonales(matriz){
    let sumatoriaDiagonales = 0;
    for(let i = 0; i < matriz.length; i++){
        sumatoriaDiagonales += matriz[i][i];
        sumatoriaDiagonales += matriz[i][matriz.length-1-i];
    }
    return sumatoriaDiagonales;
}

console.log(sumarDiagonales(matriz3x3));