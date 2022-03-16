//Nivel I y II
const prompt = require("prompt-sync")({ sigint: true });

let numero1 = prompt("Ingrese un numero: ");
let numero2 = prompt("Ingre otro número: ");
let numero3 = prompt('Numero al cuadrado:');


function sumar(numero1, numero2){
    return Number(numero1) + Number(numero2);
}
console.log(sumar(numero1, numero2));

function restar(numero1, numero2){
    return numero1 - numero2;
}
console.log(restar(numero1, numero2));

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}
console.log(multiplicar(numero1, numero2))

function dividir(numero1, numero2){
    return numero1 / numero2;
}
console.log(dividir(numero1, numero2))

//Nivel III

function cuadradoDeUnNumero(numero3){
    return multiplicar(numero3, numero3);
}
console.log(cuadradoDeUnNumero(numero3))

function promedioDeTresNumeros (numero1, numero2, numero3) {
    return (sumar (numero1, numero2) +  Number(numero3)) / 3;
}
console.log(promedioDeTresNumeros(numero1, numero2, numero3))

function calcularPorcentaje(numero1, porcentaje){
    return (numero1 * porcentaje) / 100
}
console.log(calcularPorcentaje(numero1, 15))

let num6 = prompt("Ingrese un número: ");
let num7 = prompt("Ingrese el porcentaje: ");

function GeneradorDePorcentaje(num6, num7) {
    return multiplicar(num6, 100) / num7;
}

console.log(GeneradorDePorcentaje(num6, num7));