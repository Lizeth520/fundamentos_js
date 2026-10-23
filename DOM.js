// DUMENT OBJECT MODEL (DOM)

// SELECCIONAR UN ELEMENTO POR SU ID 

let tituloHeader = document.getElementById("tituloHeader");
console.log(tituloHeader);  
console.log(typeof tituloHeader);

// SELECCIONAR UN ELEMENTO POR SU ETIQUETA

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
console.log(typeof parrafos);

//SELECCIONAR UN ELEMENTO POR SU CLASE 

let descripcionParrafo =document.getElementsByClassName("descripcion");
console.log(descripcionParrafo);
console.log(typeof descripcionParrafo);

// SELECCIONAR UN ELEMENTO POR SU SELECTOR CSS
// SELLECCIONA EL PRIMER ELEMENTO QUE CUMPLA CON EL SELECTOR 

let parrafoSelector = document.querySelector(".descripcion"); // CLASE 
let tituloSENA = document.querySelector("#tituloSENA");  //ID

console.log(parrafoSelector);
console.log(tituloSENA);
console.log(typeof parrafoSelector);

// SELECCIONAR UN ELEMENTO CON EL QUERYSELECTORALL

let allParrafos = document.querySelectorAll(".descripcion");
console.log(allParrafos);

// MODIFICAR LOS ATRIBUTOS DE UN ELEMENTO DEL DOM 

// CAMBIAR UN TEXTO DE UN ELEMENTO 

let subtituloSENA = document.querySelector("#subtituloSENA");
subtituloSENA.textContent = "ADSO";

// CAMBIAR  EL ESTILO DE UN ELEMENTO 

tituloHeader.style.color = "blue";
tituloHeader.style.fontSize = "50px";
tituloHeader.style.fontFamily = "Arial, Helvetica, sans-serif";

parrafos [2].style.color = "red";

// AGREGAR UNA CLASE DE CSS A UN HTML MEDIANTE JAVASCRIPT

let contactanos = document.getElementById("#contactanos");
contactanos.classList.add("destacado");

// CAMBIAR EL ATRIBUTO SRC DE UNA IMAGEN DEL HTML 

let logoSENA = document.getElementById("#logoSENA");
logoSENA.src = "nueva_imagen.png";