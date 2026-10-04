function registrar(){
    var nombre=document.getElementById("nombre").value
    var correo=document.getElementById("correo").value
    var clave=document.getElementById("clave").value
    var terminos=document.getElementById("terminos").checked
    var programa=document.getElementById("programa").value
    if(nombre==""){
        document.getElementById("msg").innerHTML="Pon tu nombre"
    } else if(correo==""){
        document.getElementById("msg").innerHTML="Pon tu correo"
    } else if(clave==""){
        document.getElementById("msg").innerHTML="Pon tu contraseña"
    } else if(terminos==false){
        document.getElementById("msg").innerHTML="Acepta los términos y condiciones"
    } else if(programa==""){
        document.getElementById("msg").innerHTML="Selecciona un programa"
    } else{
        document.getElementById("msg").innerHTML="Registrado: "+nombre+" - si enviamos por POST es mucho mas seguro para nuestros datos sensibles";
    }
}
function enviarContacto(){
    var nombre=document.getElementById("nombre").value
    var mensaje=document.getElementById("mensaje").value
    if(nombre==""){
        document.getElementById("msg").innerHTML="Pon tu nombre"
    } else if(mensaje==""){
        document.getElementById("msg").innerHTML="Pon tu mensaje"
    } else{
        document.getElementById("msg").innerHTML="Mensaje enviado: "+nombre
    }
}
