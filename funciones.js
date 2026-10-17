
// FUNCION SIMPLE 

//Declarar funcion
function saludar (){
    console.log("Hola Mundo!")
}

// Llamar la funcion 

saludar();

// FUNCION CON PARAMETROS 

function saludoPersonalizado (nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`) //INTERPOLACION
}

saludoPersonalizado("Lizeth", "Fonseca");
saludoPersonalizado("Harold", "Sanabria");
saludoPersonalizado("Alejandra", "Forero");
saludoPersonalizado("Jennifer", "Tibaduiza");

// FUNCION CON PARAMETROS POR DEFECTO 

function bienvenidaSena(nombre, programa = "ADSO"){
    console.log(`Hola Aprendiz ${nombre} del programa ${programa}`)
}

bienvenidaSena("Lizeth");
bienvenidaSena("Pepito","Mineria");

// FUNCION CON PARAMETROS DESORDENADOS 

function calcularEdad(nombre, anioNacimiento){
    let edad = 2026 - anioNacimiento;
    console.log(`Hola ${nombre}, tu edad es ${edad} anios`)
}

calcularEdad("Lizeth", 2001);
calcularEdad("Harold", 1997);

// FUNCION CON RETURN

function calcularPromedio(num1, num2, num3){ //Entrada de datos
    let resultado = (num1+num2+num3) / 3; //Proceso de datos
    return resultado; //Salida de datos
}

let result = calcularPromedio(4,5,3);
console.log(` El resultado del promedio es: ${result}`);

function clasificar(promedio){

}








let resultadoClasificacion = clasificar (4.5);
console.log(resultadoClasificacion);

// CALCULADORA 

function sumar(num1, num2){
    return num1 + num2;
} 
function restar(num1, num2){
    return num1 - num2;
} 
function multiplicar(num1, num2){
    return num1 * num2;
} 
function dividir(num1, num2){
    return num1 / num2;
} 

console.log(sumar(2,7));
console.log(restar(4,7));
console.log(multiplicar(2,7));
console.log(dividir(10,2));

function calculadora(num1, num2, opcion){
    switch(opcion){
        case 1:
            return sumar(num1,num2)
        case 2:
            return restar(num1,num2)
        case 3:
            return multiplicar(num1,num2)
        case 4:
            return dividir(num1,num2)
        default:
            return "Opcion no valida"
    }
}
console.log(calculadora(5,3,1)); //SUMAR
console.log(calculadora(10,3,2)); //RESTAR
console.log(calculadora(9,5,3)); //MULTIPLICAR
console.log(calculadora(20,2,4)); //DIVIDIR