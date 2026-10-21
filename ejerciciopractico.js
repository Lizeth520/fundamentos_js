// FORMULARIO DE INICIO SESION 

let usuario = "";
let contrasena = "";

function iniciarSesion() {

    usuario = document.getElementById("login-correo").value;
    contrasena = document.getElementById("login-password").value;

    if (usuario == "" || contrasena == "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Datos ingresados correctamente.");
    }

}
