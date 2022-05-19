// let numbers =[22, 33, 54, 66, 72];

// console.log(numbers.length)


// let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
// console.log(grupoDeAmigos[5])

// let str = 'un string cualquiera';
// let arrayAleatorio= ["Digital", "House", 'true', "string", "123","false", '54', str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1)

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(peliculas[3])

function convierteMayuscula (array){
    let contenido = array.length
    let newPeli = [];

    for (i=0; i<contenido; i++){
        newPeli.push(array[i].toUpperCase())
    }
    return newPeli
}
console.log(convierteMayuscula(peliculas))