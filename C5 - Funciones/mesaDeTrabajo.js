//// Ejercicio 1 ////
//Función Declarada
function convertirPulgadasACmsDec(pulgadas){
    return pulgadas*2.54;
}
console.log("Punto 1 (Fn Declarada):",convertirPulgadasACmsDec(10));
//FuncionExpresada
const convertirPulgadasACmsExp=function(pulgadas)
{
    return pulgadas*2.54;
}
console.log("Punto 1 (Fn Declarada):",convertirPulgadasACmsExp(10));
//Función Flecha
const convertirPulgadasACmsFle = (pulgadas) => pulgadas*2.54;
console.log("Punto 1 (Fn Flecha):",convertirPulgadasACmsFle(10));


//// Ejercicio 2 //// 
//Función Declarada
function stringAUrlDec(palabra){
    return("http:www."+palabra+".com");
}
console.log("Punto 2 (Fn Declarada):",stringAUrlDec("digital"));

//FuncionExpresada
const stringAUrlExp=function(palabra){
    return("http:www."+palabra+".com");
}
console.log("Punto 2 (Fn Expresada):",stringAUrlExp("digital"));

//Función Flecha
const stringAUrlFle=(palabra) => ("http:www."+palabra+".com");
console.log("Punto 2 (Fn Flecha):",stringAUrlFle("digital"));


//// Ejercicio 3 ////
//Función Declarada
function agregarAdmiracionDec(palabra){
    return(palabra+"!");
}
console.log("Punto 3 (Fn Declarada):",agregarAdmiracionDec("digital"));

//FuncionExpresada
const agregarAdmiracionExp=function(palabra){
    return(palabra+"!");
}
console.log("Punto 3 (Fn Expresada):",agregarAdmiracionExp("digital"));

//Función Flecha
const agregarAdmiracionFle=(palabra) => (palabra+"!");
console.log("Punto 3 (Fn Flecha):",agregarAdmiracionFle("digital"));


//// Ejercicio 4 ////
//Función Declarada
function edadPerritoDec(edad){
    return edad*7;
}
console.log("Punto 4 (Fn Declarada):",edadPerritoDec(3));

//FuncionExpresada
const edadPerritoExp=function(edad){
    return edad*7;
}
console.log("Punto 4 (Fn Expresada):",edadPerritoExp(3));

//Función Flecha
const edadPerritoFle = (edad) => edad*7;
console.log("Punto 4 (Fn Flecha):",edadPerritoFle(3));


//// Ejercicio 5 ////
//Función Declarada
function salarioMesDec(sueldoMes){
    return sueldoMes/40;
}
console.log("Punto 5 (Fn Declarada):",salarioMesDec(400));

//FuncionExpresada
const salarioMesExp=function(sueldoMes){
    return sueldoMes/40;
}
console.log("Punto 5 (Fn Expresada):",salarioMesExp(400));

//Función Flecha
const salarioMesFle = (sueldoMes) => sueldoMes/40;
console.log("Punto 5 (Fn Flecha):",salarioMesFle(400));


//// Ejercicio 6 ////
//Función Declarada
function calculadorIMCDec(pesoKg, alturaMt){
    return (pesoKg/alturaMt**2)*100;
}
console.log("Punto 6 (Fn Declarada):",calculadorIMCDec(60,160));

//FuncionExpresada
const calculadorIMCExp = function(pesoKg, alturaMt){
    return (pesoKg/alturaMt**2)*100;
}
console.log("Punto 6 (Fn Expresada):",calculadorIMCExp(60,160));

//Función Flecha
const calculadorIMCFle = (pesoKg, alturaMt) => (pesoKg/alturaMt**2)*100;
console.log("Punto 6 (Fn Flecha):",calculadorIMCFle(60,160));
