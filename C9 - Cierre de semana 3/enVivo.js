//Crear una función que dado un numero 
// ingresado por parametro, si es mayor de 500, calcular el 18% de este

function mayorDe(numero) {
    if (numero > 500) {
        return  numero * 0.18
    } else {
        return numero
    }
}
console.log(mayorDe(800))

//El proximo numero es la suma de los dos anteriores 
function fibonacci(limite){
    //siempre arranca en 0 y 1
    let a = 0
    let b = 1
    let c;
    for (let i=2; i<limite; i++){
        c = a+b;
        a = b;
        b = c;
        console.log(c);
    }
}
(fibonacci(10));