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