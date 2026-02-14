function sumar(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    let resultado = obtenerResultado(a,b );

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}