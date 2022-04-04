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

// .length retorna la cantidad de caracteres en el sring, incluidos los espacios
let miSerie = 'Mad Men';
miSerie.length; //devuelve 7

let arrayNombres = ['Bart', 'Lisa', 'Maggie'];
arrayNombres.length; //devuelve 3

arrayNombres[0].length//Devuelve caracteres del nombre en el indice 0

// .indexOf() busca el string que recibe como parametro
let saludo ='Hola, estamos programando';

saludo.indexOf('Estamos'); // devuelve 7
saludo.indexOf('vamos'); // devuelve -1 porque no lo encontró
saludo.indexOf('o') // Encuentra primero la 'o' que está en la segunda posición. devuelve 2

//.slice() corta el string y devulve la parte de donde queremos cortar. 
//Recibe como parametro las posiciones donde hace el corte
let frase = 'Breakimg Bad Rules'
frase.slice(9,12); //Devuelve 'Bad'
frase.slice(13); // Devuelve 'Rules!'
frase.slice(-10) // dedvuelve Bad Rules

//.trim elimina los espacios que estén al principio y al final de un string

//.replace() Reemplza una parte del string por otra
let reemplzao = 'Aguante Phyton!';
frase.replace('Phyton', 'JS') // devuelve 'Aguante JS!'

//split() divide un string en partes 

let cancion = 'And bingo was his name, oh!'
cancion.split(' '); //devuelve 
['And', 'bingo', 'was', 'his', 'name', , 'oh!']

let texto = ('Hola, quiero desaprobar JS', 'desaprobar', 'aprobar')
function reemplazoFastFast(texto){
    return texto.replace('desaprobar', 'aprobar')
}
console.log(reemplazoFastFast)