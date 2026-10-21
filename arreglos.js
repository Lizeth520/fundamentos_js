// ARREGLOS EN JAVASCRIPT 

// DECLARAR ARRAYS ANTIGUAMENTE
let programas = new Array("ADSO", "SST", "TOPOGRAFIA", "MINERIA");
console.log(typeof programas);

//DECLARAR ARRAYS ACTUALES 

let programasSena = ["ADSO", "22811", true];
console.log(programasSena);
console.log(typeof programasSena);

// IMPRIMIR ELEMENTOS DE UN ARREGLO

let lenguajes = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"];
console.log(lenguajes[0]); //HTML
console.log(lenguajes[2]); //JAVASCRIPT
console.log(lenguajes[5]); //INDEFINIDO

// AGREGAR ELEMENTOS A UN ARREGLO 

lenguajes.push("Java");
console.log(lenguajes);

// MODIFICAR ELEMENTOS DE UN ARREGLO 

lenguajes[2] = "JS";
console.log(lenguajes);

// ELIMINAR UN ELEMENTO DE UN ARREGLO 

lenguajes.pop(); ///ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO
console.log(lenguajes);  

lenguajes.reverse();  /// INVIERTE EL ORDEN DE LOS ARREGLOS 
console.log(lenguajes);

console.log(lenguajes.length); // CANTIDAD DE ELEMENTOS DEL ARREGLO 

// BUSCAR ELEMENTOS DE UN ARREGLO 

console.log(lenguajes.includes("Python")); // TRUE
console.log(lenguajes.includes("PHP")); //FALSE

//RECORRER UN ARREGLO CON UN CICLO FOR

for(let i; i < lenguajes.length; i++){
    console.log(lenguajes[i]);
}

// RECORRER UN ARREGLO CON UN FOR ... OF 

for(let lenguajes of lenguajes){
    console.log(lenguajes);
}

// RECORRER UN ARREGLO CON FOR-EACH 

lenguajes.forEach(function(lenguaje){
    console.log(lenguajes);
});

// CONCATENAR 2 ARRAYS

let lenguajesFrontend = ["HTML", "CSS", "JAVASCRIPT"];
let lenguajesBackend = ["Python", "PHP", "Java", "C#"];

let lenguajesProgramacion = lenguajesFrontend.concat(lenguajesBackend);
console.log(lenguajesProgramacion);