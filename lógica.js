/* 
Archivo que pertenece y se encarga de la capa de la lógica de negocio.
Procesa la información ingresada por el usuario y conecta a la capa de presentación con la capa de datos
*/

/*
 Función principal que se ejecuta cuando el usuario 
 presiona el botón "SUMAR" en la interfaz (index.html).
 */
function sumar(){
    /* 
    Se obtienen los valores de los campos de entrada utilizando el id de los campos
    y los convierte a núms. enteros. 
    */
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    /* Se llama a la función encontrada en el archivo datos.js*/
    let resultado = obtenerResultado(a,b);

    /*
    Actualiza dinámicamente el contenido del elemento
    <p id="resultado"> en la interfaz gráfica.
    */
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}