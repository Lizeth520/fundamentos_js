// OPERADORES ARITMETICOS

let a = Number(prompt("Digita un numero")); //entrada del primer numero del usuario
let b = Number(prompt("Digita otro numero")); //entrada del segundo numero del usuario

console.log(typeof a) //number
console.log(typeof b) //number

//SUMA

let resultsuma = a+b;
console.log("la suma entre " + a + " y " + b + " es: " + resultsuma);

//RESTA

let resultresta = a-b;
console.log("la resta entre " + a + " y " + b + " es: " + resultresta);

//MULTIPLICACION

let resultmultiplicacion = a*b;
console.log("La multiplicacion entre " + a + " y " + b + " es: " + resultmultiplicacion);

//DIVISION

let resultdivision = a/b;
console.log("La division entre " + a + " y " + b + " es: " + resultdivision);                                      

//MODULO

let resultmodulo = a % b;
console.log("El modulo entre " + a + " y " + b + " es: " + resultmodulo);

//EXPONENTE

let resultexponente = a ** b;
console.log("El exponente entre " + a + " y " + b + " es: " + resultexponente);