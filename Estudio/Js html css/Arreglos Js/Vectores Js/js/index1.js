// //Arreglos 
// let numeros = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
// let suma = 0;
// for (let i = 0; i<4;i++){
//     for (let j = 0; j<3;j++){
//         document.write(+numeros [i][j]);
//         suma = suma + numeros[i][j];
//     }
//     document.write("<br>");
// }

// document.write("Resultado suma "+suma);

// numeros.forEach(function(ele,ind,arr){
//     document.write("<br>");
//     document.write(ind+" - "+ele);
// })

// hacer una matirz que pregunte cuantos emplados tiene una empresa, pedir nombre, horas, calcular valor y auxilio de transporte si el auxilio de tranporte es 
//menor que 2 millones se le da el auxilio si no, no recibe nada, promedio de horas trabajadas, promedio de salirio de todos, promedio de auxilio de transporte 

// let n_empleados = parseInt(prompt("Ingrese la cantidad de empleados"));

// let nombre = [[],[]];
// let horas = [[],[]];
// let salario = [[],[]];
// let auxtrans = [[],[]];
// let guardarh = 0;
// let guardars = 0;

// for (let i = 0; i<n_empleados; i++){
//     for (let j = 0; j<4; j++){
//         if (j == 0 ){
//             nombre [i][j] = prompt("Ingrse el nombre del empleado");
//         }else if (j == 1){
//             horas [i][j] = prompt("Ingrse las horas trabajadas del empleado ");
//             guardarh = horas [i][j];
//         }else if (j == 2){
//             salario [i][j] = guardarh * 1000000;
//             guardars = salario[i][j];
//         }else if (j == 3){
//             if (guardars <= 2000000){
//                 auxtrans [i][j] = 140000;
//             }else{
//                 auxtrans [i][j] = 0;
//             }
//         }
//     }
// }
// let tabla = "<table border='1'>";
// for (let i = 0; i<n_empleados; i++){
//     tabla += "<tr>";
//     for (let j = 0; j<4; j++){
//         if (j == 0 ){
//             tabla += "<td>NOMBRE</td>";
//             tabla += "<td>"+nombre [i][j]+"</td>";
//         }else if (j == 1){
//             tabla += "<td>HORAS</td>";
//             tabla += "<td>"+horas [i][j]+"</td>";
//         }else if (j == 2){
//             tabla += "<td>SALARIO</td>";
//             tabla += "<td>"+salario [i][j]+"</td>";
//         }else if (j == 3){
//             tabla += "<td>AUX TARNS</td>";
//             tabla += "<td>"+auxtrans [i][j]+"</td>";
//         }
//     }
//     tabla += "</tr>";
// }
// tabla += "</table>";

// document.write(tabla);

// let cantidad = parseInt(prompt("Ingrese la cantidad de empleados "));
// let nomina = [];

// for (let i = 0; i < cantidad; i++){
//     nomina [i] = new Array (4) 
//     for (let j = 0; j < 4; j++) {
//         nomina [i] [j] = "asjdakhj";
//     }
// }
// console.log(nomina);

// let cantidad = parseInt(prompt("Ingrese la cantidad de empleados "));
// let nomina = [];
// let nombre = "";
// let horas_t = 0;
// let sueldo = 0;
// let aux_trans = 0;

// for (let i = 0; i < cantidad; i++){
    // nomina [i] = new Array (4) 
//     nombre = prompt("Ingrese el nombre del empleado "+(i+1));
//     nomina [i] [0] = nombre;
//     horas_t = parseInt(prompt("Ingrese las horas trabajdas del empleado "+(i+1)));
//     nomina [i] [i] = horas_t;
//     sueldo = 100000 * horas_t;
//     nomina [i] [2] = sueldo;
//     if (sueldo <= 2000000){
//         aux_trans = 140000;
//     }else{
//         aux_trans = 0;
//     }
//     nomina [i] [3] = aux_trans;
// }
// console.log(nomina);

let num1 = 0;
let num2 = 0;
let resultado = 0;

function leer_numeros () {
    let j = 0;
    while (j<1){
        num1 = parseInt(prompt("Ingrese el primer numero "));
        num2 = parseInt(prompt("Ingrese el segundo numero "));
        if (isNaN(num1) && isNaN(num2)){
            j = 0;
        }else{
            j++;
        }
    }
}
function operacion (queQuiere) {
    switch (queQuiere) {
        case "suma":
            resultado = (num1+num2);
            break;
        case "resta":
            resultado = (num1-num2);
            break;
        case "multiplicacion":
            resultado = (num1*num2);
            break;
        case "division":
            resultado = (num1/num2);
            break;
        default:
            break;
    }
    document.getElementById("valor").innerHTML = resultado;
}