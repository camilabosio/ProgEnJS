//Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

function mostrar10Siguientes(nNum){
    for (let i = nNum; i <=nNum+10; i++) {
        console.log(i);       
    }
}
console.log("Función 1");
mostrar10Siguientes(3);

//Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function imprimirDeATres(){
    for (let i = 5; i<=20; i+=3){
        console.log(i);
    }
}
console.log("\nFunción 2");
imprimirDeATres();

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
function suma0Al100(){
    let suma0_100=0;
    for (let i = 0; i <=100; i++) {
        suma0_100=suma0_100+i;       
    }
    return suma0_100;
}
console.log("\nFunción 3");
var resFn3=suma0Al100();
console.log(resFn3);

//Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene 
//multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

function factorialNum(pNum){
    var vfact=1;
    for (let i = 1; i <= pNum; i++) {
        vfact*=i //vfact=vfact*i        
    }
    return vfact;
}
console.log("\nFunción 4");
console.log(factorialNum(3)); 

//Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor 
//ingresado por parámetro. 

function fibonacciHastaN(fNum)
{
    var comp_2=1;
    var comp_1=0;
    console.log(comp_1);
    console.log(comp_2);
    var comp_c=0;
    for (let f = 1; f <= fNum-2; f++) {
        comp_c=comp_2+comp_1;
        console.log(comp_c);
        comp_1=comp_2;
        comp_2=comp_c;
    }
}

console.log("\nFunción 5");
fibonacciHastaN(5); 

function fibonacciHastaN2(fNum)
{
    var comp_2=1;
    var comp_1=0;
    console.log(comp_1);
    console.log(comp_2);
    var comp_c=0;
    while(comp_2<fNum) {
        comp_c=comp_2+comp_1;
        console.log(comp_c);
        comp_1=comp_2;
        comp_2=comp_c;
    }
}

console.log("\nFunción 5 2");
fibonacciHastaN2(20);