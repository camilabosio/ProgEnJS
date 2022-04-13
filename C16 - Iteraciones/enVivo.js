const numeros = [-3, -8, -67, -1, -557]
const encontrarMayor = (arrNum) => {
    let mayor = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arrNum.length; i++){
        //comparar si el numero actual es > que el siguiente
        if(arrNum[i] > mayor){
            // si true, guardarlo en una variable (mayor)
            mayor = arrNum[i];
        }
    }
    return mayor
};
console.log(encontrarMayor(numeros))


let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function buscarRepetidos(array){
    const unicos = [];
    const repetidos = [];
    for (let i = 0; i < array.length; i++){
        if (!unicos.includes(array[i])){
            unicos.push(array[i]);
        } else if (repetidos.includes(array[i])){
            unicos.push(array[i])
        }else {
            repetidos.push(array[i])
        }
    }
    return repetidos;
}
console.log(buscarRepetidos(array));
