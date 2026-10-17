
// ATIVIDAD 5:EJERCICIO PRACTICO 

const numero = number(prompt("Ingresa un numero para ver la tabla:"));

console.log(`Tabla del ${numero}:`);
for (let i =1; i <= 10; i++){
    console.log(`${numero} x $ {i} = ${numero*i}`);
}

// Ingreso de notas

let suma = 0;
let cantidad = 0;

let nota = Number(prompt("Ingresa una nota para termina"));

while (nota !== 0) {
    suma = suma + nota;
    cantidad = cantidad + 1;
    nota = nuumber 
}








}else {
console.log("No se ingreso ninguna nota.");
}   

// FICHAS CON EL FOR...OF 
const fichas = ["32333140", "1834600", "3214567"];

// MOSTRAR LAS FICHAS ENUMERADAS 

let contador = 1 
for (const ficha of fichas){
    console.log(`${contador} Ficha ${ficha}`);
    contador ++;
}

// OMITIR UNA FECHA ESPECIFICA
console.log("--- Omitiendo la ficha 3233140 ---");
contador = 1;
for(const ficha of fichas){
    if (ficha === "3233140") {
        continue; // salta esta vuelta y pasa a la siguiente
    }
    console.log(`${contador}, Ficha ${ficha}`);
    contador ++;
}

// PARES DEL 1 AL 50 

console.log("Numeros pares del 1 al 50");
for (let n = 2; n <= 50; n += 2) {
    console.log(n);
}