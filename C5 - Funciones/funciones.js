 //Función expresada

 let sumar = function(numeroA, numeroB){
     return numeroA+ numeroB;
 }

 console.log(sumar(9,7));

 //Funcion declarada

 function resta(numeroC, numeroD){
     return numeroC - numeroD;
 }
 console.log(resta(10,5));
 
//Ejemplo de scope 

let mensaje = 'Hola'; //Acá seria global

function saludar(){
    let mensaje = 'Chau' //Acá sería local
    return mensaje;
}

function saludar2(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}
saludar('Camila', 'Bosio');

function anterior(n){
    return --n
}
anterior(5);

function triple(n){
    return n * 3
}
triple(5);

function anteriorDelTriple(n){
    return (n *3)-1
}
anteriorDelTriple(5)

//Arrow Functions
let saludar = (nombre, apellido) => 
'Hola, ' + nombre + ' ' +  apellido + '!';

