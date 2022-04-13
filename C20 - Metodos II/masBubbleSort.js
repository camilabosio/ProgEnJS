//¿qué estructura necesitamos para almacenar una lista de personas?


//Con el tipo de dato “array” podemos almacenar objetos para muchas personas

let personas = [
    {
    nombre: "Dua",
    apellido: "Lipa",
    ocupacion: "cantante",
    estatura: 173
    },
    {
    nombre: "Ariana",
    apellido: "Grande",
    ocupacion: "cantante",
    estatura: 160
    },
    {
    nombre: "Taylor",
    apellido: "Swift",
    ocupacion: "cantante",
    estatura: 180
    },

]

//Acceder a propiedades
console.log(personas[1].estatura) //160

//También, podemos crear un loop que itere sobre todo el array y mostrar por consola alguna propiedad, como por ejemplo, la estatura.
for (let index = 0; index < personas.length; index++) {
    console.log(personas[index].estatura);    
}
//Como extra, podemos aplicar condicionales

for (let index = 0; index < personas.length; index++) {
    if(personas[index].estatura > 170){
    console.log(personas[index].nombre);    
    }
}

//Ejercicio, ordenar las personas de menor a mayor tomando su edad. 
//Utilizar bubble Sort

