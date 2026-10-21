// OBJETOS EN JAVASCRIPT - JSON

//Declarar un objeto

let aprendiz = {
    nombre: "Lizeth",
    apellido: "Garcia",
    correo: "mlgf5832@gmail.com",
    programa: 
        nombrePrograma:"ADSO",
        duracionPrograma: 21,
        codigoPrograma: 32331,
        ficha: "3233140"
},
    saludar: function() {
        console.log("Hola mundo")
    }
}
console.log(aprendiz);
console.log(aprendiz.programa);
console.log(aprendiz.programa.ficha);
console.log(aprendiz.saludar());

// CONSTRUCTORES DE FUNCIONES CON OBJETOS 

function aprendiz(nombre, apellido, correo, programa){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.programa = programa; 
}

// INSTANCIAR EL MODELO

let aprendiz1 = new aprendiz("Lizeth", "Garcia", "mlgf5832@gmail.com", "ADSO");
console.log(aprendiz1);
console.log(typeof aprendiz1);

let aprendiz2 = new aprendiz("Pepito", "Garcia", "gjtitit@gmail.com", "SST");
console.log(aprendiz2);
console.log(typeof aprendiz2);
console.log(aprendiz2.nombre);