//Punto 1

let edad = 5 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

if (edad<0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido");
} else if (edad %2 !=0){
    console.log( "¿Sabías que tu edad es impar?");
} else if(edad < 18) {
  console.log("No puede pasar al bar.")
} else if (edad < 21){
  console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else if (edad ===21) {
    console.log("Bienvenido. elicidades! por haber llegado a la amayoría de edad");  
} else {
  console.log("Puede pasar al bar y tomar alcohol.")
}


function totalAPagar(vehiculo,litrosConsumidos){
    if (vehiculo==="coche"){
        montoAPagar=litrosConsumidos*86;
    } else if (vehiculo==="moto"){
        montoAPagar=litrosConsumidos*70;
    } else if (vehiculo==="autobus"){
        montoAPagar=litrosConsumidos*55;
    }

    if (litrosConsumidos>=0 && litrosConsumidos <=25){
        montoAPagar = montoAPagar+50;
    } else {
        montoAPagar = montoAPagar+25;
    }

    return montoAPagar
}

console.log("Se debe pagar por los litros consumidos: $"+totalAPagar("coche",10)); 


function precioSandwich(sandwichBase, tipoPan, boolAdicQueso,boolAdicTomate,boolAdicLechuga,boolAdicCebolla,boolAdicMayonesa,boolAdicMostaza)
{
    switch (sandwichBase) {
        case "pollo":
            precio_base=150;
        break;
        case "carne":
            precio_base=200;
        break;
        case "veggie":
            precio_base=100;
        break;
        default:
            break;
    }

    switch (tipoPan) {
        case "blanco":
            precio_pan=50;
        break;
        case "negro":
            precio_pan=60;
        break;
        case "sinGluten":
            precio_pan=75;
        break;
        default:
            break;
    }

    let precio_adicion=0;
    boolAdicQueso ? precio_adicion=precio_adicion+20:precio_adicion;
    boolAdicTomate ? precio_adicion=precio_adicion+15:precio_adicion;
    boolAdicLechuga ? precio_adicion=precio_adicion+10:precio_adicion;
    boolAdicCebolla ? precio_adicion=precio_adicion+15:precio_adicion;
    boolAdicMayonesa ? precio_adicion=precio_adicion+5:precio_adicion;
    boolAdicMostaza ? precio_adicion=precio_adicion+5:precio_adicion;

    let precio_total=precio_base+precio_pan+precio_adicion;
    return precio_total;
}

console.log("El sandwich tiene un precio de $:" +precioSandwich("pollo", "blanco", true,true,true,true,true,true,));