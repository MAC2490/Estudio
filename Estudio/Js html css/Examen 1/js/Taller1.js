//Taller 1

// const diaN = parseInt(prompt("Ingrese el día de su fecha de nacimiento"));
// const mesN = parseInt(prompt("Ingrese el mes de su fecha de nacimiento"));
// const anoN = parseInt(prompt("Ingrese el año de su fecha de nacimiento"));
// const diaA = parseInt(prompt("Ingrese el día de la fecha actual"));
// const mesA = parseInt(prompt("Ingrese el mes de la fecha actual"));
// const anoA = parseInt(prompt("Ingrese el año de la fecha actual"));

// let edadEnAnos = anoA - anoN;

// if (mesA < mesN || (mesA == mesN && diaA < diaN)) {
//   edadEnAnos--;
// }

// alert("Su edad actual es de"+edadEnAnos+" años");


// Taller 2 

// let personas = new Array(3);

// for (let i = 0; i<3; i++){
//     let edad = parseInt(prompt("Ingrese la edad de la persona "+(i+1)));
//     if (edad<1 || edad>120){
//         alert ("Edad incorrecta ingrese una de nuevo");
//         i--;
//     }else{
//         personas [i] = edad;
//     }
// }

// let menores = 0;
// let adultos = 0;
// let adultosM = 0;
// for (let i = 0; i<3; i++){
//     if (personas [i] < 18){
//         menores++;
//     }else if (personas [i] > 18 && personas [i]<60){
//         adultos++;
//     }else if (personas [i] > 60){
//         adultosM++;
//     }
// }

// let guardar = 0;
// for (let i = 0; i<personas.length; i++){
//     for (let j = 0; j<personas.length-1-i; j++){
//         if (personas [j]>personas[j+1]){
//             guardar = personas[j];
//             personas [j] = personas [j+1];
//             personas [j+1] = guardar;
//         }
//     }   
// }

// let imprimir = 1;
// for (let i = 0; i<personas.length; i++){
//     if (i==0){
//         document.write ("La edad menor "+personas[i]+"<br>");
//     }else if (imprimir==personas.length){
//         document.write ("La edad mayor "+personas[i]+"<br>");
//     }   
//     imprimir++;
// }
// document.write ("Cantidad de menores de edad "+menores+"<br>");
// document.write ("Cantidad de adultos de edad "+adultos+"<br>");
// document.write ("Cantidad de adultos mayores de edad "+adultosM+"<br>");

// Taller 3

// let tamano1 = parseInt(prompt("Ingrese la cantidad de nuemeros del arreglo 1 "));
// let tamano2 = parseInt(prompt("Ingrese la cantidad de nuemeros del arreglo 2 "));

// let numeros1 = new Array (tamano1);
// let numeros2 = new Array (tamano2);

// for (let i = 0; i < numeros1.length; i++) {
//     let num1 = parseInt(prompt("Ingrese un numero Arreglo A "));
//     numeros1 [i] = num1;
// }

// for (let j = 0; j < numeros2.length; j++) {
//     let num2 = parseInt(prompt("Ingrese un numero Arreglo B "));
//     numeros2 [j] = num2;
// }

// let suma = tamano1 + tamano2;
// let juntos = new Array (suma);

// let con1 = 0;
// let con2 = 0;
// for (let j = 0; j < juntos.length; j++) {
//     if (j%2==0){
//         juntos [j] = numeros1 [con1];
//         con1++;
//     }else{
//         juntos [j] = numeros2 [con2];
//         con2++;
//     }
// }

// for (let i = 0; i < juntos.length; i++) {
//     for (let j = 0; j < juntos.length-1-i; j++) {
//         if (juntos [j]>juntos [j+1]){
//             let guardar = juntos [j];
//             juntos [j] = juntos [j+1];
//             juntos [j+1] = guardar;
//         }
//     }
// }

// for (let Q = 0; Q < juntos.length; Q++) {
//     document.write(juntos[Q]+"<br>");
// }  

//Desempeño js

//Taller 1

// let compra = parseInt(prompt("Ingrese la cantidad de kilos que va a llevar " ));

// let pagar = compra*2000;
// let descuento = 0;

// if (compra >= 0 && compra<=2){
//     document.write("No tiene descuento valor a pagar: "+pagar);
// }
// if (compra >= 2.1 && compra <= 5){
//     descuento = pagar*0.1;
//     document.write ("Tiene descuento del 10% valor a pagar: "+(pagar-descuento));
// } 
// if (compra >= 5.1 && compra <= 10){
//     descuento = pagar*0.15;        
//     document.write ("Tiene descuento del 15% valor a pagar: "+(pagar-descuento));
// } 
// if (compra > 10.1){
//     descuento = pagar*0.2;
//     document.write ("Tiene descuento del 20% valor a pagar: "+(pagar-descuento));
// }

//Taller 2

// let guardar = []; 
// let guardar1 = []; 

// let pos = 0;
// let i = 0;
// while (i<1) {
//     let ingresar = parseInt(prompt("Ingrese numeros pares y 0 para parar "));
    
//     if (ingresar == 0){
//         i++;
//     }else if (ingresar%2!=0){
//         alert ("Solo se permiten numeros pares ingrese uno de nuevo");
//     }

//     if (ingresar%2==0 && ingresar!=0){
//         guardar [pos] = ingresar;
//         guardar1 [pos] = ingresar; 
//         pos++;
//     }
// }

// for (let j = 0; j <guardar.length ; j++) {
//     for (let i = 0; i <guardar.length-i-1 ; i++) {
//         if (guardar[i]>guardar[i+1]){
//             let temp = guardar[i];
//             guardar [i] = guardar [i+1];
//             guardar [i+1] = temp;
//         }
//     }   
// }

// for (let j = 0; j <guardar1.length-1 ; j++) {
//     for (let i = 0; i <guardar1.length-i-1 ; i++) {
//         if (guardar1[i]<guardar1[i+1]){
//             let temp1 = guardar1[i];
//             guardar1 [i] = guardar1 [i+1];
//             guardar1 [i+1] = temp1;
//         }
//     }   
// }

// for (let j = 0; j <guardar.length ; j++) {
//     document.write (guardar[j]+"  ")
// }
// document.write("<br>")
// for (let j = 0; j <guardar.length ; j++) {
//     document.write (guardar1[j]+"  ")

// }

//Taller 3

// let nombreP = [];
// let cantidadP = [];
// let precioP = [];
// let descuentoP = [];
// let precioPagar = [];

// let pos = 0;
// let preiva = 0;

// let i = 0;
// while (i<1){
//     let opcion = parseInt(prompt("Ingrese 1 para comprar o 0 para terminar compra "));
//     if (opcion==1){
//         let compra = prompt("Ingrese el nombre del producto");
//         nombreP [pos] = compra;
//         let precioC = parseInt(prompt("Ingrese el valor unitario del producto "));
//         precioP [pos] = precioC;
//         let cantidad = parseInt(prompt("Ingrese la cantidad "));
//         cantidadP [pos] = cantidad;
//         let precio = precioC*cantidad;
//         if (precio>=530000){
//             let descuento = precio*0.1;
//             descuentoP [pos] = descuento;
//             let pagar = precio-descuento;
//             preiva += pagar;
//             precioPagar [pos] = pagar;
//         }else{
//             preiva += precio;
//             precioPagar[pos] =precio;
//         }
//         pos++;
//     }else if (opcion==0){
//         document.write("Factura")
//         i++;
//     }
// }

// for (let j = 0; j < pos; j++) {
//     document.write ("Nombre del articulo: "+nombreP [j]+"<br>");
//     document.write ("Cantida del articulo: "+cantidadP [j]+"<br>");
//     document.write ("valor unitario del articulo: "+precioP [j]+"<br>");
//     if (precioP [j] >=530000){
//         document.write ("Descuento del producto "+nombreP[j]+"del 10% valor "+ descuentoP[j]+"<br>");
//     }
//     document.write("Precio pagar sin iva "+precioPagar [j]+"<br>");
// }

// let iva = preiva*1.19;
// let mostraIva = preiva*0.19;

// document.write ("Valor del iva "+mostraIva+"<br>");
// document.write ("Valor total a pagar "+iva);

//Taller 4

// let palabra = ["Iglesia","iglesia","Abeja","abeja","Uñas","uñas","Escoba","escoba","Ojo","ojo"];

// let i = 0;
// while (i<1) {
//     let vocal = prompt("Ingrese una vocal ingrese Q para salir ");
//     if (vocal!='A' && vocal!='a' && vocal!='E' && vocal!='e' && vocal!='I' && vocal!='i' && vocal!='O' && vocal!='o' && vocal!='U' && vocal!='u' && vocal!='Q'){
//         if (vocal=='Q'){
//             alert ("Saliedo...")
//         }else{
//             alert ("La letra no es una vocal ingrese una nuevamente ");
//         }
//     }else
//     for (let j = 0; j < palabra.length; j++) {
//         if (palabra [j].charAt(0)==vocal){
//             alert(palabra[j]);
//         }
//     }

//     if (vocal=='Q'){
//         i++;
//     }

// }