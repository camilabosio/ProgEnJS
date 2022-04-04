/*
Calcular un promedio 
1 --- Crear una función
2 --- Ingresar parametros 
3 --- Conocer o contar la cantidad de elementos 
4 --- Recorrer el arreglo 
5 --- Realizar la suma de los elementos
6 --- Dividir el total por la cantidad de elementos 
7 --- Devolver el promedio
*/
let notas1 = [10, 5, 3, 9, 4, 8, 7, 3];
let notas2 = [5, 9, 3, 4, 7];

const promedioDeNotas = arrayNotas => {
    let sumatoria = 0
    let largo = arrayNotas.length
    for( let i = 0; i < largo; i++){
        sumatoria = sumatoria + arrayNotas[i]
    }
    let promedio = sumatoria / largo;
    return promedio
};

let promedioNotas1 = promedioDeNotas(notas1);
let promedioNotas2 = promedioDeNotas(notas2);

console.log("Promedio de notas1", promedioNotas1);
console.log(`Promedio de notas2: ${promedioNotas2}`);

//Convertir a mayusculas el array 
let peliculas = ["breaking bad", "star wars", "totoro"]

function convierteMayuscula(array){
    let contenido = array.length
    let newPeli = []

    for(let i=0; i<contenido; i++){
        newPeli.push(array[i].toUpperCase())
    }return newPeli
}
console.log(convierteMayuscula(peliculas))
