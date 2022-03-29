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