let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
//Convetir un numero que esta en texto en entero con (parseInt)

let suma = num1+num2;
document.write("<p>La suma es: "+suma+"</p>");


let multi = num1*num2;
document.write("<p>La multiplicacion es: "+multi+"</p>");

let  division = num1/num2;
document.write("<p>La division es: "+division+"</p>");

//Consiones
let resta = "";

if(num1>num2){
    resta = num1-num2;
}else{
    resta = num2-num1;
}
document.write("<p>La resta es: "+resta+"</p>");
