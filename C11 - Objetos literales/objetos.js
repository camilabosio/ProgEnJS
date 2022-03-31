//Son la represetacion en código de un elemento en la vida real

let auto = {
    marca : 'Ford',
    patente : 'AC 134 DD',
};
console.log(auto.marca) // ford

//Cuando las propiedades almacenan funciones se dice que es un metodo del objeto
let tenista = {
	nombre: 'Roger',
    edad: 38,
    activo: true,
    saludar: function() {
		return '¡Hola! Me llamo Roger';
    }
};
//Para ejecturar la función 
console.log(tenista.saludar()) // '¡Hola! Me llamo Roger'

//Con la palabra this podemos acceder al valor de cada propiedad interna de ese objeto
let tenista2 = {
	nombre: 'Roger',
    apellido: 'Federer',
    saludar: function() { 
    return '¡Hola! Me llamo ' + this.nombre; 
    }
};
console.log(tenista2.saludar()); // ¡Hola! Me llamo Roger
