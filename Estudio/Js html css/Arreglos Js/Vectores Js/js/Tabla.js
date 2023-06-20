//Se nececita una pagina web que permita hacer el calculo de la nota final de estudiantes e imprimir en la tabla nombre del 
// estudiante, nota1, nota2, nota3 y nota final, promedio del grupo en todas las notas la nota final se calcula teniendo en cuenta que
// la nota 1 vale el 30% la nota 2 el 20% la nota 3 el 50%, solicitar al usuario el nombre del estudiante con las 3 notas e irlos 
// imprimiendo 1 a 1 en la tabla actualizando datos

let nombre_array = [];
let nota1_array = [];
let nota2_array = [];
let nota3_array = [];
let nota_final_array = [];
let acum_2 = 0;

function main() {
    let cant_est = parseInt(prompt("Ingrese la cantidad de estudiantes"));
    agregar_estudiante(cant_est);
}

function agregar_estudiante(cant_est) {
    for (let i = 0; i < cant_est; i++) {
        nombre = prompt("Ingrese su nombre estudiante");
        nombre_array.push(nombre);
        nota1 = parseInt(prompt("Nota 1: "));
        nota1_array.push(nota1);
        nota2 = parseInt(prompt("Nota 2: "));
        nota2_array.push(nota2);
        nota3 = parseInt(prompt("Nota 3: "));
        nota3_array.push(nota3);
        let nota_final = (nota1 * 0.3) + (nota2 * 0.2) + (nota3 * 0.5);
        nota_final_array.push(nota_final);
        acum_2 += nota_final;
    }
    imprimir_tabla();
    promedio_grupo();
}

function imprimir_tabla() {
    let tabla = "<table border ='1'>";
    tabla += "<tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Nota Final</th></tr>";
    for (let i = 0; i < nombre_array.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + nombre_array[i] + "</td>";
        tabla += "<td>" + nota1_array[i] + "</td>";
        tabla += "<td>" + nota2_array[i] + "</td>";
        tabla += "<td>" + nota3_array[i] + "</td>";
        tabla += "<td>" + nota_final_array[i] + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("resultado").innerHTML = tabla;
}

function promedio_grupo() {
    let grupo = acum_2 / nombre_array.length;
    document.getElementById("promedio").innerHTML = grupo;
}

main();