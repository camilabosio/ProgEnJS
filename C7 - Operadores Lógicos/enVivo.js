//Revisar clase en vivo y ejercicios
function esPar(num){
    if (num % 2 === 0){
        return true
    }else {
        return false
    }
}
console.log(esPar(3))

/*
Crear una función puedeSubir() que reciba dos parámetros: altura de una persona
y si viene acompañado Debe retornar un valor booleano que indique si la 
personal puede subirse o no, basado en las siquientes condiciones 
A -- Debe medir mas o igual de 1,40 y menos de 2 metros.
B -- Si mide menos de 1,40m hasta 1,20m deberá venir acompañado.
C -- Si mide menos de 1,20m no podrá subir ni acompañado.
*/
function puedeSubir(altura, company){
    if (altura >= 1.40 && altura < 2.00){
        return true     
    } else if (altura < 1.40 && altura >= 1.20 && company) {
        return (true)       
    } else{
         return ("false")
    }  
}
