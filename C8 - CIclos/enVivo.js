
//Hacer un codigo que nos muestre los numeros del 0 al 10
let mostralDel1al10 = () => {
    for (let i = 0; i <=10;  i++) {
        console.log(i);
    }
};

mostralDel1al10()

//Mostrar los numeros que un usuario me pida 
let mostrarUsuario = (nInicial, nFinal) => {
    for (let i = nInicial; i <= nFinal; i++){
        console.log(i)
    }
};
mostrarUsuario(1, 10);


//Mostrar los numeros que el usuario me pida con el incremento que el me pida
let mostrarUsuario2 = (nInicial, nFinal, nContarDeA) => {
    for (let i = nInicial; i <= nFinal; i += nContarDeA){
        console.log(i)
    }
};
mostrarUsuario2(10, 100, 10);

//De reversa 
let mostrarUsuario3 = (nInicial, nFinal, nContarDeA) => {
    for (let i = nInicial; i >= nFinal; i -= nContarDeA){
        console.log(i)
    }
};
mostrarUsuario3(10, 1, 1);