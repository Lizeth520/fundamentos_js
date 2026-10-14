let promedio = 2.8;

// IF - ELSE IF - ELSE 

if (nota >= 0 && nota <= 5) {

if (promedio >= 4.5) {
    console.log("Excelente");
} else if (promedio >= 3.5) {
    console.log("Bueno");
} else if (promedio >= 3.0) {
    console.log("Aceptable");
} else {
    console.log("Debe reforzar la competencia");
}

// SWITCH: COMPARAR OPCIONES 

let menu = 3;
let opcion = Number(prompt("Digita el numero de la opcion que corresponda 1. Ver horario  2. Consultar notas  3. Salir:"));

switch (opcion) {
    case 1:
        console.log("Ver horario de formación");
        break;
    case 2:
        console.log("Consultar notas");
        break;
    case 3:
        console.log("Salir");
        break;
    default:
    console.log("Opción no válida");
}
}
