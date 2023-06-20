//EJERSISIO 1
//1.preguntaral usuario cuantos numeros desea ingresar, sumar esos numeros e imprimir el resultado, sacar el promedio e imprimir el reuslato.

// let n = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar "));
// let guardar = 0;
// for(let i=0; i<n;i++){
//     let numeros = parseInt(prompt("Ingrese el numero "+ i));
//     guardar = guardar+numeros;
// }

// let promedio = n/guardar;
// document.write("La suma de los numeros es: "+guardar+"<br>");
// document.write("El promedio es: "+promedio);

//EJERSISIO 2
//2. solicitar varios numeros al usuario hasta que presione el 0, multiplicar todos esos numeros y entregar el resultado 

// let multiplicar = 1;
// let i = 0;
// while(i<1){
//     let n = parseInt(prompt("Ingrese un numero"));
//     multiplicar = multiplicar*n;
//     let opcion = parseInt(prompt("0 para salir"));
//     if (opcion==0){
//         i=1;
//     }
// }
// document.write("Resultados de multiplicacion: "+multiplicar+"<br>");

//EJERSISIO 3
//3. preguntar al usuario cuantos productos desea comprar, luego pedirle el nombre del producto y el valor unitario y la cantidad de cadad uno de los productos que desea comprar, cuando el usuario haya 
//ingresado todos los procductos imprimir la factura adisional, al iva del 19%,  imprimir subtotal, valor del iva y valor a pagar.
//Nota: cuando le preguntes cuantos productos desea llevar no se permiten 0 ni negativos 

// let cantidadp ;
// do{
//     cantidadp = parseInt(prompt("Ingrese la cantidad de productos que desea comprar"));
// }while (cantidadp<=0)

// let valor1 = 1;
// let valor;
// let cantidad;
// let nombre;
// let valorconjunto;
// for (let i=0;i<cantidadp;i++){
//     nombre = prompt("Ingrese el nombre del producto");
//     cantidad = parseInt(prompt("Ingrese la cantidad que va a llevar"));
//     if (cantidad<=0){
//         cantidad = parseInt(prompt("Error digite de nuevo la cantidad")); 
//     }
//     valor = parseInt(prompt("Ingrese el valor unitario del producto"));
//     valor1 = valor1*valor
//     document.write("nombre del producto "+nombre+"<br>");
//     document.write("cantidad del producto "+cantidad+"<br>");
//     document.write("valor unitario a pagar sin el iva "+valor+"<br>");
//     valorconjunto = valor*cantidad;
//     document.write("valor del producto "+valorconjunto+"<br>");
//     document.write("<hr>");
// }
// document.write("valor subtotal "+valor1+"<br>");
// let iva = valor1*0.19;
// document.write("valor a pagar con iva "+ iva+"<br>");

//EJERSISIO 4
//4. preguntar al usuario cuantos estudaintes hay en el grupo, por cada estudainte pedir el nombre, la nota 1,2,3, calcular la nota final tenientdo en cuanta que la nota 1 vale el 20%
//la nota 2 el 30% y la 3 el 50% tambien imprimi la lista de estudiantes con todas las notas y el promedio de grupo.
// IMCOMPLETO
// let cantidadE = parseInt(prompt("Ingrese la cantidad de estuantes "));

// let estudaintes;
// let nota1;
// let nota2;
// let nota3;
// let porsentaje1;
// let porsentaje2;
// let porsentaje3;
// let promedio;
// for (let i = 0; i<cantidadE; i++){
//     estudaintes = (prompt("Ingrese el nombre del estuante "+i));
//     nota1 = parseInt(prompt("Ingrese la nota 1 del estuantes "));
//     nota2 = parseInt(prompt("Ingrese la nota 2 del estuantes "));
//     nota3 = parseInt(prompt("Ingrese la nota 3 del estuantes "));

//     porsentaje1 = nota1*0,2;
//     porsentaje2 = nota2*0,3;
//     porsentaje3 = nota3*0,5;
//     promedio = porsentaje1+porsentaje2+porsentaje3;
//     document.write("Promedio del estudiante "+i+": "+porsentaje1+"<br>");
//     document.write("Promedio del estudiante "+i+": "+promedio+"<br>");
// }
//let grupo = promedio/cantidadE;
//document.write("Promedio del grupo "+grupo+"<br>");

// EJERCICIO 5
//5. con siclos imprimir una tabla html de 5  por 10 en cadad selda llenar los numeros pares en orden desendente

// let tabla = "<table border='1'>";
// let contador = 100;

// for (let i = 0; i<10;i++){
//     tabla += "<tr>";
//     for (let j = 0; j<5;j++){
//         tabla += "<td>"+contador+"</td>";
//         contador = contador - 2;
//     }
//     tabla += "</tr>";
// }

// tabla += "</table>";

// document.write(tabla);