//Estructura básica 
//for(inicio; condicion; modificador){
    //codigo que se ejectutará en cada repitición
//}
//Ejemplo 
for(let vuelta = 1; vuelta <= 5; vuelta++){
    console.log('Dando la vuelta número ' + vuelta);
};

function loro(texto){
    for(let i=1; i<=5; i++){
        console.log(texto)
    }
}
function noParesDeContarImparesHasta(numero){
    let contar = 0;
    for(let i=0; i<=numero; i++){
        if( i % 2 != 0){
            contar += 1
        }
    }
    return contar
}
//Estructura básica 
//while(condicion){
    //codigo que se ejecutará en cada repetición
    //Hace algo para que la condición eventualmente se deje de cumplir
//}
//Ejemplo
let vuelta = 1
while(vuelta <=5){
    console.log("Dando la vuelta numero " + vuelta);
    vuelta++ //al final de cada vuelta sumara 1 a vuelta
};

function tablaDeMultiplicar(numero) {
	let i = 1;
	while (i <= 10) {
		let numero1 = numero * i;
		console.log(numero + " * " + i + " = " + numero1);
		i++
	}
	return numero;
}