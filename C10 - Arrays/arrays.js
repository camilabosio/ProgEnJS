//Permiten agrupar varios tipos de datos en una sola variable
let seriesFavoritas = ["Friends", "Game of thrones", "Breaking bad"];
console.log(seriesFavoritas[2]);

let edades = [13, 54, 69, 76];
let variados =["Nacho", 45, seriesFavoritas]

console.log(variados[2][1])

//Metodos de arrays: permiten manipular los datos de un array
//Push: agrega
let colores = ['Azul', 'amarillo', 'negro']
colores.push('Violeta')
console.log(colores)

//pop: saca el ultimo elemento de un array
let nombres = ['Camila', 'Silvina', 'Matias']
nombres.pop();
console.log(nombres)

//Pop a su vez retorna el último elemento
let idiomas = ['Hola', 'bonjour', 'hellow']
let enIngles = idiomas.pop();
console.log(enIngles);

//Shift saca del array al elemento en el índice 0 y retornar igual que pop
let apellidos = ['Bosio', 'Domingues', 'Sierra']
apellidos.shift()
console.log(apellidos)

//Unshift inserta datos al principio del arrays
let frutas = ['manzana', 'banana']
frutas.unshift('naranja', 'pomelo');
console.log(frutas)

//IndeOf retoarma el indice de un valor buscado
let palabras = ['Juego', 'Jugo', 'Junio']
let posicion = palabras.indexOf("Junio") //2
console.log(posicion)

//LastIndexoff comienza a buscar desde el infal hacia el indice 0

//Join unifica todos los valores del array en un sólo string
let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves']
let dias = diasSemana.join(', ');
console.log(dias)