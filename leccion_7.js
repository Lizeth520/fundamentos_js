// Ejemplo de IF//

let evidencia = 4.5;

if(evidencia >= 3.5){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

// IF - ELSE IF //

// Clasificacion de edades//

let edad = 80;

if(edad <=13){
    console.log("Eres un niño");
}else if(edad <= 18){
    console.log("Eres un adolescente");
}else if(edad <= 60){
    console.log("Eres un adulto");
}else{
    console.log("Eres un adulto mayor");
}

// IF ANIDADO - EJEMPLO PENSION //

let edadActual = 57
let semanasCotizadas = 1300;
let genero = "Femenino";

if (genero === "Femenino"){
    if (edadActual >= 57){
        if (semanasCotizadas >= 1250){
            console.log("Eres elegible para la pensión");
        }else{
            console.log("No tienes las semanas requeridas para la pensión");
        }
    } else {
        console.log("No tienes la edad requerida para la pensión");
    }   
} else {
    console.log("Lo siento, este ejemplo es solo para mujeres");
}

// EJEMPLO PARA HOMBRES //

let edadHombre = 62;
let semanasCotizadasHombre = 1300;
let generoHombre = "Terian";

if (generoHombre === "Masculino"){
    if (edadHombre >= 62){
        if (semanasCotizadas >= 1300){
            console.log("Eres elegible para la pensión");
        }else{
            console.log("No tienes las semanas requeridas para la pensión");
        }
    } else {
        console.log("No tienes la edad requerida para la pensión");
    }
} else {
    console.log("Lo siento, no puedo calcular la pension para este parametro");
}

// CONDICIONAL CON OPERADORES LOGICOS //

// Ejemplo de inicio de sesion //

let correo = "user@example.com";
let contrasena = "123456";

if (correo == "user@example.com" && contrasena == "123456") {
    console.log("Bienvenido al sistema");
} else {
    console.log("Correo o contraseña incorrectos");
}

// Condicional con operador OR //

// Proceso de certificacion //

let etapa_lectiva = true;
let etapa_practica = false;

if (etapa_lectiva || etapa_practica){
    console.log("Felicidades, te certificaste en el curso");
} else {
    console.log ("Lo siento, no te certificaste en el curso");
}

// OPERADOR TERNARIO //

let nota = 3.6;
let resultado = (nota >= 3.5) ? "Aprobado" : "Reprobado";
console.log(resultado);

// SWITCH //

let dia = 3;

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
}

// RETO: CALCULADORA CON MENU MANEJADO CON UN SWITCH //

let numero_1 = Number(prompt("Digita el numero 1: "));
let numero_2 = Number(prompt("Digita el numero 2: "));
let opcion = Number(prompt("Digita el numero de la opcion que corresponda 1. Sumar  2. Restar  3. Multiplicar  4. Dividir:"));

switch (opcion) {
    case 1:
        console.log(`la suma entre  ${numero1} y ${numero2} es igual a: ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`la resta entre  ${numero1} y ${numero2} es igual a: ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`la multiplicacion entre  ${numero1} y ${numero2} es igual a: ${numero1 * numero2}`);
        break;
    case 4:
        console.log(`la division entre  ${numero1} y ${numero2} es igual a: ${numero1 / numero2}`);
        break;
    default:
        console.log("La opcion no es valida");
}
