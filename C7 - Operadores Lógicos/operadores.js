//Operador de asignación (=). Para asignarle un valor a una variables
//let pais = Argentina

//Operadores aritmeticos, los que hacen las operaciones matematicas(+, -, *, /, %)
let sumar = function(numeroA, numeroB){
    return numeroA+ numeroB;
}
console.log(sumar(9,7));

//Operadores de incremento y decremento
let numero = 6
console.log(++numero)

let numero2 = 9
console.log(--numero2)

//Operadores de comparación
//Simples == comparan el valor 
5 == "5" // true
//Estricturas === comparan el valor y tipo de dato
5 === "5" // false

//Operadores de desigualdad 
5 !="5" // False, sólo pregunta por el valor y el valor no es distinto. Desigualdad simple

5 !=="5" // true, ya que el valor es igual pero el tipo de dato no. Desigualdad estricta

//Operadores logicos 
//AND &&. Se deben cumplir ambas condiciones
let dia = "domingo"
let clima = "soleado"

dia == "domingo" && clima == "soleado"
//true

//OR ||. Una basta para que sea verdadera
8>= 15
8 !=3
8 >= 15 || 8!=13 
//true

//Operador de contatenación
let nombre = 'Camila';
let apellido = 'Bosio';
console.log(nombre + ' ' + apellido)
