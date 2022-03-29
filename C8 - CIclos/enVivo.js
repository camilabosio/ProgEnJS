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
		let nuemro1 = numero * i;
		console.log(numero + " * " + i + " = " + nuemro1);
		i++
	}
	return numero;
}