/*
Ejercicio 1:
 A --- Deberás escribir un objeto literal llamado estudiante que contenga 
las siguientes propiedades que deberás completar con tus datos:
*/
let alumno = "Camila"

let estudiante = { 
    nombre : "Camila",
    apellido : "Bosio",
    camada : 7,
    esParcial: true,
}


/*
2 --- Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno.
La función deberá retornar la condición final del alumno (solo retorna la palabra). 
Al momento de llamar a la función, deberás mostrar la siguiente frase: 
“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” 
*/

function situacion (nota){
    if(nota>7){
        condicion = "Prmocionado"
    }else if(nota >=4 && nota <7){
        condicion = "Debe rendir examen final"
    }else if(nota<4){
        condicion = "Desaprobado"
    }return `El alumno obtuvo una nota igual a ${nota} por lo tanto su condición es ${condicion}`

}
console.log(situacion(3))
console.log(situacion(5))
console.log(situacion(8))
console.log(situacion(6))

/*
Ejercicio 2 
1 --- Crear un array llamado clase
2 --- Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
A --- Agrega estos 3 objetos al array llamado clase.
*/

let clase = [{
    nombre: "Jimena",
    apellido: "Simanco",
    bimestre: 2
},{
    nombre: "Martin",
    apellido: "Albornos",
    bimestre: 1   
},{
    nombre: "Marina",
    apellido: "Martilla",
    bimestre: 3
}]

// B --- Imprimir el array para ver que contenga esos objetos.

console.table(clase)

/*
3 --- Crea una función que reciba el array clase como parámetro e incremente en 1 el 
número de bimestre de cada uno de los alumnos, llámala siguienteCursada. 
Debes utilizar una estructura de repetición. 
4 --- Deberás hacer el correcto llamado de la función mostrando el array 
clase antes y después de llamar a siguienteCursada. 
*/

function siguienteCursada(array){
    for (let i = 0; i < array.length; i++){
        array[i].bimestre += 1;
    }
};
console.table(clase);
siguienteCursada(clase)
console.table(clase);


/* Ejercicio 3
1 --- Crear una función que apruebe o desapruebe alumnos en base a su asistencia 
y a su progreso completo en PlayGround (true, false). Para ello deberán: 

A --- Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas 
para la aprobación de la materia, en este caso serán 23 asistencias mínimas. 
*/

const asistenciaMinima = 23

/*
La función deberá recibir como parámetros la cantidad de asistencias
y la condición final ante PlayGround del alumno. 
 */
function estadoAlumno(asistencia, condicion){
    if (asistencia <=asistenciaMinima  && condicion ){
        return ("Aprobado")       
    } else{
         return ("Desaprobado")
    }  
}
console.log(estadoAlumno(3, false))