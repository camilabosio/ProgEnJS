const edades = [33, 27, 34, 30, 34, 25];

function ordenarEdadesAsc (arr) {
    for(let i =0; i<arr.length; i++) {
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j]>arr[j+1]) {
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] =aux
            }
        }
    } return arr
}

console.log(ordenarEdadesAsc(edades))