var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var comentario = document.getElementById("area_comentario");
var boton = document.getElementById("submit");
var formulario = document.getElementById("formulario");
var aviso = document.getElementById("errores_formulario");
var contador_caracteres = document.getElementById("contador_caracteres")
var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var solo_letras = /[0-9]/
var chequeo = []
var decision_submit = null

boton.addEventListener("click",validar_formulario);
comentario.addEventListener("keyup",contador);

function contador() {
var contador_letras = 500 - comentario.value.length
contador_caracteres.innerHTML = "Caracteres restantes: " + contador_letras;
    if (contador_letras < 0) {
        contador_caracteres.style.color = "rgb(238, 9, 9)";
    } else contador_caracteres.style.color = "rgb(94, 92, 92)";
}

function validar_formulario() {

    aviso.innerHTML = "";
    decision_submit = true
    formulario.setAttribute("onsubmit","return true")


    if (nombre.value  === "") {
        aviso.innerHTML += "<p>* Introduzca su nombre</p>";
        chequeo[0] = "error";
    } else chequeo[0] = "ok";

    if (nombre.value.length > 30) {
        aviso.innerHTML += "<p>* Nombre demasiado largo</p>";
        chequeo[1] = "error";
    } else chequeo[1] = "ok";

    if (solo_letras.test(nombre.value)) {
        aviso.innerHTML += "<p>* Su nombre no puede contener numeros</p>";
        chequeo[2] = "error";
    } else chequeo[2] = "ok";

    if (apellido.value === "") {
        aviso.innerHTML += "<p>* Introduzca su apellido</p>";
        chequeo[3] = "error";
    } else chequeo[3] = "ok";

    if (apellido.value.length > 30) {
        aviso.innerHTML += "<p>* Apellido demasiado largo</p>";
        chequeo[4] = "error";
    } else chequeo[4] = "ok";

    if (solo_letras.test(apellido.value)) {
        aviso.innerHTML += "<p>* Su apellido no puede contener numeros</p>";
        chequeo[5] = "error";
    } else chequeo[5] = "ok";

    if (email.value === "") {
        aviso.innerHTML += "<p>* Introduzca un email</p>";
        chequeo[6] = "error";
        chequeo[7] = "error";
    } else if (!(email.value === "")) {
        validacion_email();
        chequeo[6] = "ok";
    }

    if (comentario.value === "") {
        aviso.innerHTML += "<p>* Realice un comentario o consulta</p>";
        chequeo[8] = "error";
    } else chequeo[8] = "ok";

    if (comentario.value.length > 500) {
        aviso.innerHTML += "<p>* Ha excedido los 500 caracteres</p>";
        chequeo[9] = "error";
    } else chequeo[9] = "ok";

    for (var i=0;i<10;i++) {
        if (chequeo[i]=="error") {
            decision_submit = false;
        }
    }

    if (decision_submit == false) {
        formulario.setAttribute("onsubmit","return false")
    }

}

function validacion_email () {
    var validar_correo = expReg.test(email.value)

        if (validar_correo == false) {
            aviso.innerHTML += "<p>* Introduzca un email válido</p>";
            chequeo[7] = "error"
        } else chequeo[7] = "ok"
}
