// CICLOS O LOOPS                                 

// FOR

for (let i=1; i<= 10; i ++){
    console.log(i) 
}

//FOR - DECREMENTO 

for (let j=5; j >=1; j--){
    console.log(j)
}
console.log ("Feliz año!!!")

// TABLA DE MULTIPLICAR DEL 7

for (let m=1; m <= 10; m++){
    console.log (`Multiplicacion de 7 x ${m} es igual a ${7*m}`)
}

// CICLOS WHILE 

let i = 1;

while (i <= 10){
    console.log(i);
    i++
}

// APP DE ENTRADA A UN BAR 

let edad = 16  

while (edad < 18){
    console.log("No puedes ingresar al bar. Eres menor de edad.");
    edad ++
}
console.log("Bienvenido al bar!");

// APP DE RIEGO DE PLANTAS 

let cantidad_agua = 0;

while (cantidad_agua <10){
    console.log("Riegos las plantas con " + cantidad_agua + "litros de agua");
    cantidad_agua++;
}
console.log("Todas las plantas han sido regadas");

// DO WHILE                            

do{
    console.log(numero);
    numero ++;
}while (numero <=10);  //se ejecuta al menos una vez, aunque la condicion sea falsa 

// SENTENCIA BREAK Permite salir del bucle n

for (let i = 1; i <= 10; i++){
    if (i === 5){
        console.log("Se ha alcanzado el numero 5. Saliendo del bucle");
        break;
    }
    console.log(i);
}