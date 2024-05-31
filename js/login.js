/* mail and password hardcodeados */
const mail = "pepito@mail.com"
const pass = "123456"

// obtener campos y boton enviar
const campoMail = document.querySelector("#email");

const campoPassword = document.querySelector("#password");

const botonEnviar = document.querySelector(".btn");

// agregar evento al sacar de foco ( click fuera de campo)

campoMail.addEventListener("blur", ()=> verificarCampoMail(campoMail));
campoPassword.addEventListener("blur", ()=> verificarCampoPassword(campoPassword));

//botonEnviar.addEventListener("onclick", ()=> verificarIngreso());

function verificarCampoMail(campo){
    console.log(campo.value)
    if (campo.value != "" && campo.value.length > 5){
        console.log("Es un mail valido !");
        return campo.value === mail;
    }
}

function verificarCampoPassword(campo){
    console.log(campo.value)
    if (campo.value != "" && campo.value.length > 5){
        console.log("Password valido !");
        return campo.value === pass;
    }
}

// funcion para verificar datos
function verificarIngreso(){
    let msj = "";
    if(verificarCampoMail(campoMail) && verificarCampoPassword(campoPassword)){
        msj = "Mail y Password correctos";
        redireccionar();
    }
    else{
        msj = "Mail y/o Password incorrectos"
    }

    alert(msj);
}
function redireccionar(){
    window.location.replace("https://cv310814.github.io/EntregaFinal_Integrador/index.html")
}
