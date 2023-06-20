// ciclos Js 
// ciclos para 
// for (let i = 5; i >= 0; i--){
//     console.log(i);
// }

//  pedir un numero del 1 al 10 e imprimir la tabla de multiplicar de dicho numero

// let numero = 0;
// do{
//     numero = parseInt(prompt("Ingrese un numero del 1 al 10"));
// }while (numero>10 || numero<=0)

// for (let i = 1; i<=10;i++){
//     document.write (i+" * "+numero+" = "+numero*i+"<br>");
// }


// for (let j = 1; j<=10;j++){
//     document.write (j+" * "+numero+" = "+j*numero+"<br>");
// }

// silicitar 2 números al usuario e imrpimir los número pares de ese rango 

// let n = parseInt(prompt("Ingrese el primer numero "));
// let n2= parseInt(prompt("Ingrese el segundo numero "));

// if (n<n2){
//     if (n%2==1){
//        n++;
//     }
//     for (let a = n; a<=n2;a+2){
//        document.write("Numeros par encontrados: "+a+"<br>");
//     }
// }else{
//     if (n%2==1){
//         n--;
//     }
//     for (let a = n; a>=n2;a-2){
//         document.write("Numeros par encontrados: "+a+"<br>");   
//     }
// }

// solicitar al usuario cuantos numeros desea ingresar, pedir la cantidad de numeros que el dijo, 
// imprimir cuatos de esos numeros son pares, impares, positivos y negativos

// let num = parseInt(prompt("Ingrese cauntos números desea ingresar "));

// let pares = 0;
// let impares = 0;
// let negativos = 0;
// let positivos = 0;

// for (let w = 0; w<num;w++){
//     let numeros = parseInt(prompt("Ingrese el número que desea "+w));
    
//     Par o impar 
//     if (numeros%2==0){
//         pares++;
//         document.write("El numero es par "+numeros+"<br>");
//     }else{
//         impares++;
//         document.write("El numero es impar "+numeros+"<br>");
//     }

//     positivos o negativos 
//     if (numeros<0){
//         negativos++;
//         document.write("El numero es negativo "+numeros+"<br>");
//     }else{
//         positivos++; 
//         document.write("El numero es positivo "+numeros+"<br>");
//     }
// }

// document.write("cantidad de nueros pares "+pares+"<br>");
// document.write("Cantidad de numeros impares "+impares+"<br>");
// document.write("Cantidad de numeros negativos "+negativos+"<br>");
// document.write("Cantidad de numeros positivos "+positivos+"<br>");


// Imprimir las tablas de multiplicar del 1 al 10       

// for (let Q = 1; Q<=10;Q++){
//     for (let R = 1; R<=10;R++){
//         document.write(Q+" * "+R+" = "+Q*R+"<br>");
//     }
//     document.write("<hr>")
// }

// let num = 0;
// do{
//     num = parseInt(prompt("Ingrese un numero positivo"));
// } while (num <= 0);

// while (num <= 0) {
//     num = parseInt(prompt("Ingrese un numero positivo"));
// }