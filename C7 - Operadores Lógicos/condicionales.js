//Condicional if

let clima = 'Lluvia'
let dia = 'Domingo'
if(clima == 'Soleado' && dia == 'Domingo'){
  console.log("Lindo día para pasear")
}else if (clima == 'Soleado' && dia == 'Lunes'){
    console.log("Podemos ir al cine")
}else{
    console.log("Mejor no salgo")
} 

let edad = 19;
let acceso = '';

if(edad < 16){
    acceso = 'prohibido';
}else if (edad >= 16 && edad <= 18){
    acceso = 'Permitido solo acompañado de un mayor'
}else {
    acceso = 'permitido'
}

let lenguaje = "javascript";

if(lenguaje === "javascript"){
    console.log("Estoy aprendiendo")
}else{
    console.log("Lo aprenderé más adelante")
}

let dias = 'jueves'
function finDeSemana (dias) {	
	if (dias == 'viernes') {
    	console.log('buen finde')
	} else if (dias == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}


//If ternario

let fruta = 'Manzana';

let resultado = fruta == 'Banana'?'Buenisimo, me gustan las banans':'Ufa, quería banana';
console.log(resultado);



//Switch 
let semaforo = 'No se';
switch(semaforo){
    case 'Verde':
        console.log("Puedo cruzar");
        break;
    case 'Amarillo':
        console.log("Precaución");
        break
    case 'Rojo':
        console.log("No cruzar")
        break
    default:
        console.log("El semaforo no funciona")
        break
}

let day = 'jueves'
function finDeSemana(day){
	switch (day){
		case 'viernes':
    	console.log('buen finde');
		break;
	case 'lunes' :
    	console.log('buena semana');
		break
	default:
    	console.log('buen dia')
		break
		}
}	
function tengoClases(dia) {
	switch (dia) {
	case 'lunes':
	console.log("tenés clases");
	break;
	case 'miércoles':
	console.log("tenés clases");
	break;
	case 'viernes':
	console.log("tenés clases");
	break;
	default:
	console.log("no tenés clases");
	}
	}