document.getElementById("formularioNotas").addEventListener("submit", function(e){
e.preventDefault();

const nota1 = parseFloat(document.getElementById("nota1").value);
const nota2 = parseFloat(document.getElementById("nota2").value);
const nota3 = parseFloat(document.getElementById("nota1").value);
const resultado = document.getElementById("resultado");


    try{
        const promedio = calcularPromedio(nota1, nota2, nota3);
        resultado.textContent=`Promedio es: ${promedio}`;
        resultado.style.color = promedio >=5? "green": "orange";
    }catch(error){
        resultado.textContent=error.message;
        resultado.style.color = "red";
    }

})

function calcularPromedio(n1, n2, n3){
    console.log("Calculando promedio...");

    if([n1, n2, n3].some(isNaN)){
        throw new Error("Las notas debe ser numeros validos");
    }

    if([n1, n2, n3].some(n=>n<0 || n>10)){
        throw new Error("Ingresa notas en rango correcto 0 - 10 ")
    }

    return (n1 + n2 + n3)/3;
}