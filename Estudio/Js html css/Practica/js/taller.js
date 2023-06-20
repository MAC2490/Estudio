// let cont = 0;
// for (let i = 0; i < 5; i++) {
//     let precioU = parseInt(prompt("Ingrese el valor unitario del producto "+(i+1)));
//     cont = cont+precioU;
// }

// let precioD = cont*4900;
// document.write("Valor en peso "+precioD);

//Taller 2

// let cantidad = parseInt(prompt("Ingrese la cantidad de clientes "));
// let clientes = [cantidad];
// let cont = 0;

// for (let i = 0; i < cantidad; i++) {
//     let registro = parseInt(prompt("Ingrese el valor del consumo del cliente "+(i+1)));
//     if (registro>=50000){
//         let descuento = registro*0.2;
//         let descuento1 = registro-descuento;
//         clientes [i] = descuento1;
//         cont = cont+clientes[i];
//     }else if (registro<50000){
//         clientes [i] = registro;
//         cont = cont+registro;
//     }
// }

// for (let i = 0; i < cantidad; i++) {
//     document.write("Pago del cliente "+(i+1)+" "+clientes[i]+"<br>");
// }

// document.write("Pago de todos lo clientes "+cont);

//Taller 3

// const horaNormal = prompt("Ingrese la hora en formato de 12 horas (por ejemplo, 3:30 PM):");

// const fecha = new Date(`2000/01/01 ${horaNormal}`);

// let horaMilitar = fecha.getHours();

// if (horaMilitar < 10) {
//   horaMilitar = "0" + horaMilitar;
// }

// document.write(`La hora militar es: ${horaMilitar}:${fecha.getMinutes()}`);

//Taller 4
// let n = parseInt(prompt("Ingrese el numero "));
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//     let multi = i*sum;
//     document.write(i+" * "+sum+" = "+multi+"<br>");
//     sum=multi;
// }

//Taller 5

// let n = parseInt(prompt("Ingrese el numero "));

// for (let i = 10; i >= 1; i--) {
//     let multi = n*i;
//     document.write(n+" * "+i+" = "+multi+"<br>");
// }

//Taller 6

// let credito = parseInt(prompt("Ingrese el monto del credito "));
// let tiempoCredito = parseInt(prompt("Ingrese el tiempo en meses a pagar del credito"));

// let pagoMensual = credito/tiempoCredito;

// if (tiempoCredito<=12){

//     document.write("Porcentaje de tasa de interes anual 48%");
//     let tasaInteres = credito*0.48;
//     let tasaInteresMensual = tasaInteres/tiempoCredito;
//     let totalPagar = pagoMensual+tasaInteresMensual;
//     let sumaPago = credito+tasaInteres;
//     document.write("<br>"+"Tasa de interes mensual "+tasaInteresMensual+"<br>");
//     document.write("Total a pagar al mes "+totalPagar+"<br>");
//     document.write("Total a pagar con tasa de interes "+sumaPago+"<br>");

// }else if (tiempoCredito>12 && tiempoCredito<60){

//     document.write("Porcentaje de tasa de interes anual 36%");
//     let tasaInteres = credito*0.36;
//     let tasaInteresMensual = tasaInteres/tiempoCredito;
//     let totalPagar = pagoMensual+tasaInteresMensual;
//     let sumaPago = credito+tasaInteres;
//     document.write("<br>"+"Tasa de interes mensual "+tasaInteresMensual+"<br>");
//     document.write("Total a pagar al mes "+totalPagar+"<br>");
//     document.write("Total a pagar con tasa de interes "+sumaPago+"<br>");
// }else if (tiempoCredito>=60){

//     document.write("Porcentaje de tasa de interes anual 23%");
//     let tasaInteres = credito*0.24;
//     let tasaInteresMensual = tasaInteres/tiempoCredito;
//     let totalPagar = pagoMensual+tasaInteresMensual;
//     let sumaPago = credito+tasaInteres;
//     document.write("<br>"+"Tasa de interes mensual "+tasaInteresMensual+"<br>");
//     document.write("Total a pagar al mes "+totalPagar+"<br>");
//     document.write("Total a pagar con tasa de interes "+sumaPago+"<br>");
// }

//Taller 1 

// function todo(){
//     let cantidad = document.getElementById("kilos").value;
//     let valor = cantidad*2000;
//     let descuento = 0;
//     let valorpagar = 0;
//     if(cantidad>=0 && cantidad<=2){
//         document.getElementById("imprimir").innerHTML = valor;
//     }else if (cantidad>2 && cantidad<=5){
//         descuento = valor*0.1
//         valorpagar = valor-descuento;
//         document.getElementById("imprimir").innerHTML = valorpagar;
//     }else if (cantidad>5 && cantidad<=10){
//         descuento = valor*0.15;
//         valorpagar = valor-descuento
//         document.getElementById("imprimir").innerHTML = valorpagar;
//     }else if (cantidad>10){
//         descuento = valor*0.2;
//         valorpagar = valor-descuento
//         document.getElementById("imprimir").innerHTML = valorpagar;
//     }
// }

//Taller 2
