function myFunction() {
    var x = document.getElementById("clave");
    var y = document.getElementById("clave2");
    if (x.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}

function myFunctionnav() {
    var x1 = document.getElementById("clave1");
    if (x1.type === "password") {
        x1.type = "text";
    } else {
        x1.type = "password";
    }
}

function enviar() {
    var c = document.getElementById("correo").value;
    window.alert("Se envio el codigo a " + c)
    document.getElementById("codigo").style.display = 'grid';
    document.getElementById("nuevo").style.display = 'none';

}

function confirmar() {
    document.getElementById("codigo").style.display = 'none';
    document.getElementById("nuevo").style.display = 'grid';
}

function crear() {
    window.alert("Se guardaron sus datos correctamente");
}

function logins() {
    var nombre = document.getElementById("usuario1").value;
    var clave = parseInt(document.getElementById("clave1").value);
    if (nombre == "rodrigomarcac@gmail.com" && clave == 1234) {
        window.alert("ingreso exitoso");
        document.getElementById("uno").style.display = 'none';
        document.getElementById("dos").style.display = 'block';
        window.alert("detente")

    } else {
        window.alert("Error la contraseña es incorrecta");

    }
}