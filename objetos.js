// OBJETOS EN JAVASCRIPT - JSON

//Declarar un objeto

let aprendiz = {
    nombre: "Lizeth",
    apellido: "Garcia",
    correo: "mlgf5832@gmail.com",
    programa: {
        nombrePrograma:"ADSO",
        duracionPrograma: 21,
        codigoPrograma: 32331,
        ficha: "3233140"
    },
    saludar: function() {
        console.log("Hola mundo")
    }
}

// ACCEDER A LAS PROPIEDADES DEL OBJETO 

console.log(aprendiz);
console.log(aprendiz.programa);
console.log(aprendiz.programa.ficha);
console.log(aprendiz.saludar());

// ACCEDER A LOS METODOS DEL OBJETO 

    aprendiz.saludar();

// MODIFICAR PROPIEDADES DEL OBJETO

    aprendiz.correo = "mlgf5832@gmail.com";
    console.log(aprendiz.correo);

// AGREGAR UNA NUEVA PROPIEDAD AL OBJETO

    aprendiz.telefono = "3208233458";
    console.log(aprendiz);

// ELIMINAR UNA PROPIEDAD DEL OBJETO

    delete aprendiz.telefono;
    console.log(aprendiz);

// IMPRIMIR UN SOLO VALOR 

    console.log("Este es el nombre: " + aprendiz.nombre);

// ITERACION O RECORRER CADA PROPIEDAD DEL ELEMENTO - FOR IN 

for (let propiedad in aprendiz){
    console.log(propiedad);  //imprime las claves 
    console.log(aprendiz[propiedad]);  //imprime los valores
}

// CONSTRUCTORES DE FUNCIONES CON OBJETOS 

function aprendiz(nombre, apellido, correo, programa){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.programa = programa; 
    this.saludar = function(){
        return console.log("Hola mundo");
}
}
// INSTANCIAR EL MODELO

let aprendiz1 = new aprendiz("Lizeth", "Garcia", "mlgf5832@gmail.com", "ADSO");
console.log(aprendiz1);
console.log(typeof aprendiz1);

let aprendiz2 = new aprendiz("Pepito", "Garcia", "gjtitit@gmail.com", "SST");
console.log(aprendiz2);
console.log(typeof aprendiz2);
console.log(aprendiz2.nombre);