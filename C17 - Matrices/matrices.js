//Hoy les queremos contar de las matrices en programación. El concepto complicado es que es una estructura de datos que almacena datos de forma bidimensional. 
//El concepto sencillo, es que es un array que guarda otros arrays. Pero mejor, veamos un video sobre esto.

//La matriz es una variable cuyo valor es un array, el cual a su vez guarda otros arrays dentro.

const matrizDeEdades = [
    [20, 45, 22, 50, 12, 12],
    [14, 45, 12, 12, 13, 3],
    [5, 4, 22, 5, 13, 5],
    [9, 73, 12, 5, 8, 31] 
];

console.log(matrizDeEdades[0][3])

//Recorrido de una matriz. 

const laMatriz = [
    [1, 3, 5, 7],
    [0, 2, 4, 6],
    [8, 9, 10, 11]
]

//Recorrer una fila 
for (let i = 0; i< laMatriz[1].length; i++) {
console.table(laMatriz[1][i]);    
}

//Recorrer una columna 
for (let i = 0; i< laMatriz.length; i++) {
    console.table(laMatriz[i][2]);    
}

//Recorrer por filas 
for (let fila=0;fila<laMatriz.length;fila++){
    for(let columna=0;columna<laMatriz[fila].length;columna++){
    console.log(laMatriz[fila][columna]);}
    
}

//Recorrer por columnas 
//Se recorre la matriz completa

for (let columna=0;columna<laMatriz[0].length;columna++){   
    for(let fila=0;fila<laMatriz[fila].length;fila++){
    console.log(laMatriz[fila][columna]);}
}

