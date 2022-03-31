let misMascotas = [
    {
        nombre: "Chimuela",
        raza: "Negra",
        edad: 1,
        sonido: "miau",
        repetirSonido: function(){
            //return this.sonido.repeat(2)
            return `${this.sonido} ${this.sonido}`
        }
    },
    {
        nombre: "Pipino",
        raza: "blanco",
        edad: 3,
        sonido: "hambre",
        repetirSonido: function(){
            //return this.sonido.repeat(2)
            return `${this.sonido} ${this.sonido}`
        }
    },
    {
        nombre: "lola",
        raza: "angus",
        edad: 5,
        sonido: "muu",
        repetirSonido: function(){
            //return this.sonido.repeat(2)
            return `${this.sonido} ${this.sonido}`
        }
    }
];
console.log(misMascotas[0].repetirSonido()) //el punto nos accede a una propiedad del objeto

//Crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1
function aumentarEdad(arrayMascotas){
    for(let i = 0; i <arrayMascotas.length; i++){
        arrayMascotas[i].edad = arrayMascotas[i].edad + 1;
    }
}
console.log(aumentarEdad(misMascotas)) //Hace la suma pero no podemos verlo en console.log



function aumentarEdad2(arrayMascotas) {
  for (let i = 0; i < arrayMascotas.length; i++) {
    if (arrayMascotas[i].edad < 6) {
      arrayMascotas[i].edad += 1;
    } else if (arrayMascotas[i].edad <= 10) {
      arrayMascotas[i].edad += 2;
    } else {
      arrayMascotas[i].edad += arrayMascotas[i].edad / 2;
    }
  }
  return arrayMascotas;
}
console.table(misMascotas);
console.table(aumentarEdad2(misMascotas));