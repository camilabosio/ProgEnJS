const prompt=require("prompt-sync")();
/*
Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() 
y para escribir en la consola debés utilizar el método console.log().
*/

function mostrarFrase()
{
    let frase=prompt("Ingresa tu frase: ")
    console.log("Tu frase es:",frase);
}
//mostrarFrase();

/*Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y 
un signo de exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
 */

function saludo(){
    let nombre=prompt("Cuál es tu nombre?: ");
    console.log(`Hola ${nombre}!`)
}
//saludo();

/*Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, 
e imprima en la consola la suma de los dos números que ingresó el usuario. */

function sumaDosNumeros()
{
    //const prompt=require("prompt-sync")();
    let numero1=Number(prompt("Cuál es el primer número? "));
    let numero2=Number(prompt("Cuál es el segundo número? "));
    let sumaNumeros=numero1+numero2;
    console.log("La suma de los números es: "+sumaNumeros);
}
//sumaDosNumeros();

/*Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario 
que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, 
ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!" */


function aleatorioNumero()
{
    let numAleatorio=Math.round(Math.random()*10); 
    let nNumAdivino=Number(prompt("Cuál es el número? "));

    if (numAleatorio===nNumAdivino)
    {
        console.log("Felicitaciones, ese era!");
    }
    else
    {
        console.log("Lo siento, intenta nuevamente!");
    }
}
//aleatorioNumero();

/*Escribí un programa que imprima los números pares del 0 al 100.*/

function numeros0al100(){
    for (let i = 1; i <=100; i++) {
        if (i%2==0) {
            console.log(i);
        }
    }
}
//numeros0al100();

/*Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra que muestre lo mínimo 
que le falta para ser un número de 2 cifras; de lo contrario, que muestre lo mínimo que le falta para 
ser un número de 3 cifras. Considerar que el usuario ingresa números de hasta dos cifras.*/

function numeroCifras(){
    let numeroCifras= Number(prompt("Ingresa el número: "));
    let diferenciaNums2c=9-numeroCifras;
    let diferenciaNums3c=999-numeroCifras;
    if (diferenciaNums2c>0) {
        console.log(`Falta ${99-diferenciaNums2c} unidades, para ser número de dos cifras`);
    } else {
        console.log(`Falta ${diferenciaNums3c} unidades, para ser número de tres cifras`);
    }
}
numeroCifras();
/*
Hacer un algoritmo que muestre el promedio de varias notas o de N notas ingresadas, 
se debe definir el valor de N para conocer la cantidad de notas a ingresar.
*/
let nNotas=Number(prompt("Ingresa la cantidad de notas a evaluar: "))


function sumaNaturales(nNatural){
    let sumNatural=0;
    for (let i = 1; i <= nNatural; i++) {
        sumNatural +=  i;
    }
    console.log("La suma de los primeros "+nNatural+" naturales es: "+sumNatural);    
} 
sumaNaturales(nNatural);
  
