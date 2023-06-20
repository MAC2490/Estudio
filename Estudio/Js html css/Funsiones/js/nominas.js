// let nombres = new Array;
// let horas_t = new Array;
// let sueldo = new Array;
// let aux_trans = new Array;

// let sueldo_hora = 100000;

// function agregar_empleado(){
//     let nom = prompt("Ingrese el nombre del empleado ");
//     let ht = parseInt(prompt("Ingrese las horas trabajadas"));

//     nombres.push(nom);
//     horas_t.push(ht);

//     return console.log(nombres);
// }

// function calcular_sueldo(){
//     horas_t.forEach(function (ele,ind) {
//         sueldo.push (ele * sueldo_hora);
//     });
//     return imprimir_resultado();
// }

// function imprimir_resultado(){
//     let tabla = "";
//     for (let i = 0; i < nombres.length; i++) {
//         if (sueldo[i]<=2000000){
//             aux_trans[i] = 140000;
//         }else{
//             aux_trans[i] = 0;
//         }
//         tabla += nombres[i]+" - "+horas_t[i]+" - "+sueldo[i]+" - "+aux_trans[i]+"<br>";
//     }
//     return document.write(tabla);
// }


//crear una funcion que reciba como paramatro un numero y su exponente, y entregar el resultado

// function total(numero,expo){
//     let resultado = Math.pow(numero,expo);
//     return resultado;
// }

// console.log(total(2,3));

//crear una funcion que me devuelva un numero aletorio entre 0 1 y 100 

// let max = 90;
// let min = 70
// function random(max,min){
//     return Math.random()*(max - min) + min;
// }

// console.log(random(max,min));

//crear una funcion que le pida el rango desde donde hasta donde quere el numero aletarotio y que se lo retorne

let max  = parseInt(prompt("Ingrese el rengo maximo"));
let min = parseInt(prompt("Ingrse el rango minimo"));

function random(max,min){
    return Math.random()*(max - min) + min;
}

console.log(random(max,min));