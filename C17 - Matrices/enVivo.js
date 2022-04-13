let matrix = [
    [5, 2, 4],
    [3, 6, 8],
    [4, 7, 9]
];

for ( let i = 0; i < matrix.length; i++){        
    console.log(`fila numero: ${i}`)
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])

    }
}
//console.table(matrix)

let matriz = []
let interno1 = [10, 20, 30]
let interno2 = [40, 50, 60]

matriz.push(interno1, interno2);
console.table(matriz);

