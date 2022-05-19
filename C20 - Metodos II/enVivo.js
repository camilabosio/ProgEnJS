const arrayCuentas = [
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.4,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 10,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ];
  
  // Desarrollar una función que ordene internamente de
  // forma ascendente según él saldo de cada cuenta,
  // la misma deberá retornar él array ordenado
  // {
  //   titular: "Arlene Barr",
  //   estaHabilitada: false,
  //   saldo: 3253.40,
  //   edadTitular: 33,
  //   tipoCuenta: "sueldo"
  // },
  
  const ordenarPorSaldo = (cuentas) => {
    for (let i = 0; i < cuentas.length; i++) {
      for (let j = 0; j < cuentas.length - 1; j++) {
        if (cuentas[j].saldo > cuentas[j + 1].saldo) {
          // se hace cambio
          let aux = cuentas[j];
          cuentas[j] = cuentas[j + 1];
          cuentas[j + 1] = aux;
        }
      }
    }
    return cuentas;
  };
  // console.table(ordenarPorSaldo(arrayCuentas));
  console.table(ordenarPorSaldo(arrayCuentas));