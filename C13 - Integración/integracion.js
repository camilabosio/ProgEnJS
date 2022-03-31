/*
Deberás crear una función llamada sumatoria que reciba un 
número como parámetro y que devuelva la sumatoria de todos sus 
números anteriores, incluso ese mismo. 
Ejemplo: sumatoria(3) debe retornar 6 porque hace (1+2+3)
*/

function sumatoria(numero){
    let resultado = 0;
    
    for (let i = 0; i < numero; i++) { 
        resultado = resultado + i
    }
    return resultado;
}

console.log(sumatoria(8))

/*
Deberás crear una función llamada loopDePares que reciba 
como parámetro un número y haga un loop de 0 a 100 
mostrando en la consola cada número del loop. 
En caso de que el número de la iteración sumado con el 
número pasado por parámetro sea par, mostrará en la consola: 
“El número X es par”.
*/

function loopDePares(numero){
    for (let i = 0; i <= 100; i++) {
        console.log(i);

    if((i + numero) % 2 === 0){
        console.log('El numero' +(i + numero) + 'es par')
    }
   }
}
loopDePares(5)