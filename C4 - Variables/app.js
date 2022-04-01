//instación de prompt por medio de la terminal y luego se configura el código
const prompt = require("prompt-sync")({ sigint: true });
//Probando su función en consola

let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}`);


// Variables
let primeraVariable = 'Hola';
console.log(primeraVariable);

/*Tipos de datos
Number (entero y .decimal) ,String , Boolean, Not a number, Null, 
Undefined, Objeto literal, Arrays
*/

let edad = 33;
console.log(edad);

let texto = 'Hola, soy un texto';
console.log(texto);

let verdadero = true;
console.log(verdadero);

let notANumber = NaN;
console.log(notANumber);

let nulo = null;
console.log(nulo);

let sinValor; 
console.log(sinValor);

let miComputadora = {
    marca: "Chespirito",
    prendida: true,
    año: 2015,
}
console.log(miComputadora)

let seriesFavoritas = [
    'Breaking Bad', 'Greys Anatomy'
] 
console.log(seriesFavoritas);

//Operadores 
let primerNumero = 14;
let segundoNumero = 35;
let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);


