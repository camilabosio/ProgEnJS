//Practica Kahoot falso
 

//Repaso ejercicios

/*
1. Crear una función que imprima todos los dígitos decimales, del 0 al 9,
usando un ciclo For.
*/

function mostrarDecimales() {
    for(let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++){
            if ( i === 10 & j === 1) {
                return null;
            }else {
                console.log( `${i}.${j}`)
            }
        }
    }
}

mostrarDecimales()


/*
2. Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres. 
*/

function imprimirDeTres(min, max){
    for(let i = min; i <= max; i+= 3 ){
        console.log(i)
    }
}
imprimirDeTres(5,20)

/*
3. Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100.
*/

let imprimirSumatoria = (min, max) =>{
    let sumatoria = 0;
    for ( let i = min; i <=max; i++){
        sumatoria += i;
    }

    return sumatoria;
}
console.log(imprimirSumatoria(0,100))

/*
4. Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase.
*/

const cantidadVovales = function(string) {
    let stringLower = string.toLowerCase();
    let vocales = ['a', 'e', 'i','o', 'u' ];
    let sumarVocales = 0;
    for ( let i = 0; i < stringLower.length; i++ ){
        if (vocales.includes(stringLower[i])) {
            sumarVocales++;
        }
    }
    return sumarVocales;
};

console.log(cantidadVovales("Programacion imperativa"));

//Ejercicio 4 mesa de trabajo

let fila1 = [4,9,2];
let fila2 = [3,5,7]
let fila3 = [8,1,6]

let matrizDe3 = []
matrizDe3.push(fila1, fila2, fila3)
console.table(matrizDe3)

/*
function sumarFila(matriz) {
    for ( let i = 0; i < matriz.length; i++){
        let sumatoria = 0;
        for ( let j = 0; j < matriz[i].length; j++){
            sumatoria += matriz[i][j];
        }
        console.log(sumatoria);
    }
}
sumarFila(matrizDe3)
*/

function imprimirMultiplicacion(matriz){
    for (let i = 0; i < matriz.length; i++){
        let producto = 1;
        for (let j = 0; j < matriz[i].length; j++){
            producto *= matriz[j][i]
        }
        if(producto & 2 === 0){
            console.log(producto);
        }
    }

}

imprimirMultiplicacion(matrizDe3)