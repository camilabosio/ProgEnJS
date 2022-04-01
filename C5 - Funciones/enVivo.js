const prompt = require("prompt-sync")({ sigint: true });

//Function number = convierte todo el string a number
let edad = Number(prompt("Ingresa tu edad: "))
console.log(edad)

//Función expresada VS declarada
//Expresada se llama dentro de una variable
//Declarada se llama con function
let suma = (num1, num2) => num1 + num2; //arrow fuction

let resta = function(num1, num2){
    return num2 - num1;
}; //funcion expresada(no hace falta poner el nombre de la función acá)

function multiplicar (num1, num2){
    return num1 * num2
};//Funcion declarada(se necesita aplicar un nombre a la funcion)

//Scoope alcanza de las funciones o variables 
let nombre = "Profesor"
function saludar(){
    let nombre = "Camila" //Esta variable va a tener la prioridad sobre el scoope
    return `Hola ${nombre}!!`
}
console.log(nombre);
console.log(saludar(nombre));

//Calcular perimetro de un triangulo
function perimetroDeTrianguloEquilatero(lado){
    return lado*3
}
console.log(perimetroDeTrianguloEquilatero(5));