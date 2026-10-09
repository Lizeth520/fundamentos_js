// OPERADORES LOGICOS 

// AND (&&)
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false 

let edad = 25;
let semanascotizadas = 1000;

console.log(edad >= 18 && semanascotizadas >= 1300); //true
console.log(edad >= 65 && semanascotizadas < 1300); //false

// OR (||)   Devuelve true si al menos una de las condiciones es verdadera
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false        

let calificacion = 90;
let inasistencias = 2;

console.log(calificacion >= 70 || inasistencias <= 3); //true
console.log(calificacion < 70 || inasistencias > 3);    //false

// NOT (!)
console.log(!true); //false
console.log(!false); //true

let aprobado = true;

console.log(!true); //false
console.log(!false); //true