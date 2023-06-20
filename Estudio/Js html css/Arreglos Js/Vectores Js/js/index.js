// // llenar un arreglo de 5 animales diferentes
// let animales = ["Gato","Perro","Oso"];
// let numeros = [2,3,4,5,80];
// let de_todo = ["Pedro",20,true,4.5];

// document.write(de_todo[0]);

// document.write("<br>");
// document.write(animales.length);

// document.write("<br>");
// let ultimo = numeros[numeros.length - 1];
// document.write(ultimo);

// // Recorrer un arreglo
// for (let i = 0; i < animales.length; i++) {
//     document.write("<br>");
//     document.write(animales[i]);
// }

// //Agregar elementos al final del arreglo 
// animales.push("pato");

// //Agregar elementos al inicio del arrglo 
// animales.unshift("Tigre");

// //Eliminar el ultimo
// animales.pop();

// //Eliminar el primero
// animales.shift()

// animales.forEach(function(ele,ind,arr){
//     document.write("<br>");
//     document.write("- "+ind+" - "+ele);
// }) 

// //Ingresar un nuevo dato

// //Ingresar un nuevo dato al final
// let nuevo_animal1 = prompt("Ingrse un nuevo animal");
// animales.push(nuevo_animal1);

// //Ingresar un nuevo dato al inicio
// let nuevo_animal2 = prompt("Ingrse un nuevo animal");
// animales.unshift(nuevo_animal2);

// document.write("<br>");
// animales.forEach(function(ele,ind,arr){
//     document.write("<br>");
//     document.write("- "+ind+" - "+ele);
// }) 

// // Buscar el indice de un elemento 
// let dato_buscado = prompt("Ingrese el dato a buscar o a eliminar");
// let posisicion = animales.indexOf(dato_buscado);
// document.write("<br>");
// document.write("valor del indice es "+posisicion);
// document.write("<br>");

// //Eliminar un dato sin importar su indice
// animales.splice(posisicion, 1);

// document.write("<br>");
// animales.forEach(function(ele,ind,arr){
//     document.write("<br>");
//     document.write("- "+ind+" - "+ele);
// })

// //Hacer una copia de un arreglo 
// let copia_animales = animales.slice();
// console.log(copia_animales);

// // Declarar arrglos vacios
// let adso = [];
// let otor = new Array();
//1. solicitar al usuario 5 nombres de personas almacenarlos en un arrglo e imprimirlos en una lista no ordenada

// let nombres = [];

// for (let i = 0; i < 5; i++) {
//     nombres[i] = prompt("Ingrese el nombre " + i);
// }

// for (let i = 4; i >= 0; i--) {
//     document.write("<br>"+nombres[i]);
// }

// let buscar = prompt("Ingrese el nombre que quiere buscar y eliminar");
// let pos = nombres.indexOf(buscar)
// document.write("<br>");
// document.write("<br> valor del indice es "+pos);
// document.write("<br>");

// nombres.splice(pos, 1);

// document.write("<br>");
// nombres.forEach(function(ele,ind,arr){
//     document.write("<br>");
//     document.write("- "+ind+" - "+ele);
// })



//2. almacenar en un arrego los numeros impares del 1 al 10 imprimirlos utilizando forEach



//3. solicitar al usuario varios numeros hasta que presione el 0 esos numeros deben estar almacenados enn un
//arreglo, imprimir el indice donde quedaron y el numero tambien el promedio de esos numeros 