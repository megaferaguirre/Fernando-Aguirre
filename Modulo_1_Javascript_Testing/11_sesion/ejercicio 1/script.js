document.getElementById("testForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const resultado = document.getElementById("resultado");

    try{
        validaDatos(nombre, edad);
        resultado.textContent = `Hola ${nombre}, tienes ${edad} años.`;
        resultado.style.color = "green";
    }catch(error){
        console.log("error:", error);
        resultado.textContent = error.message;
        resultado.style.color = "red";
    }

})

function validaDatos(nombre, edad){
    console.log("Valida los datos...");

    if(nombre === "" || edad === ""){
        throw new Error("Por favor completa los campos");
    }

    if(edad <= 0){
        throw new Error("La edad debe ser un numero.");
    }

    if(nombre.leght > 30){
        throw new Error("El nombre es muy largo");
    }

    console.log("Datos correctos");
}