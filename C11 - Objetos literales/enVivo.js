//Arreglo de objetos 
/*
Crear una función llamada arregloDeObjetos que reciba un número como parámetro y
devuelvo un arreglo de objetos que tengan una propiedad llamada "valor"
que contenga el valor del número y sus anteriores 

Ejemplo 
arregloDeObjetos(5) debe retornar [{valor:1}, {valor:2}, {valor:3}, {valor:4, {valor:5}}]
*/

//Definir la funcion
    //Crear arreglo vacio
    // rellenar el arreglo
        // crear el for (con todo lo que conlleve)
        // el bucle llega hasta el parametro
            //crear el obj
             //agregarle el array
        //fin bucle
    //retornar el arreglo
// fin funcion

function arregloDeObjetos(num){
    const arrObjetos = []
    for(let i = 1; i <= num; i++){
        let obj = {valor: i};
        arrObjetos.push(obj);
    }
    return arrObjetos;
}
console.log(arregloDeObjetos(6))