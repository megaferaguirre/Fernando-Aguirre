let intentos = 0;
let claveCorrecta = "1234";
let claveIngresada;

while(intentos < 3){
    claveIngresada = prompt("Ingresa contrasena")

    if(claveIngresada === claveCorrecta){
        console.log("Acceso correcto");
        break;
    }else{
        console.log("Contrasena incorrecta");
    }
    intentos++;
}

if(intentos === 3){
    console.log("Has agotado tus intentos");
}
    
