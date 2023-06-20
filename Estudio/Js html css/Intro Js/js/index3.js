// Un pequeño prograama que solicite un numero al usuario y que me diga, si es par, impar, negativo, positivo o cero.

let numero = parseInt(prompt("Ingrise un número "));
let resultado = "";
if (numero == 0){
    resultado = "EL numero es igual a Cero "+"<br>";
}else{
    if (numero>0){
        resultado = "El numero es positivo ";
    }else{
        resultado = "El numero es negativo ";
    }
    if (numero % 2 == 0){
        resultado += "y el número es par "+"<br>";
    }else{
        resultado += "y el número es impar "+"<br>";
    }
}

document.write(resultado)

//Conectres logicos 

//solisitar tres numero al usuario y decir cual es mayor, menor y el del medio

let n1 = parseInt(prompt("Ingrese el numero 1"));
let n2 = parseInt(prompt("Ingrese el numero 2"));
let n3 = parseInt(prompt("Ingrese el numero 3"));

let mayor = "";
let medio = "";
let menor = "";

if (n1 > n2 && n1 > n3){
    mayor=n1;
    if (n2 > n3){
        medio = n2;
        menor = n3;
    }else{
        if (n3 > n2){
            medio = n3;
            menor = n2;
        }
    }
}

if (n2 > n3 && n2 > n1){
    mayor = n2;
    if (n1 > n3){
        medio = n1;
        menor = n3;
    }else{
        if (n3 > n1){
            medio = n3;
            menor = n1;
        }
    }
}

if (n3 > n2 && n3 > n1){
    mayor = n3;
    if (n1 > n2){
        medio = n1;
        menor = n2;
    }else{
        if (n2 > n1){
            medio = n2;
            menor = n1;
        }
    }
}

document.write("El mayor es: "+mayor+"<br>");
document.write("El del medio es: "+medio+"<br>");
document.write("El menor es: "+menor+"<br>");

//Solicitar al ususraio dos numeros si al menos uno de los dos es positivo sumarlos sino alertar al usuario

let numero1 = parseInt(prompt("Ingrese el primer numero "));
let numero2 = parseInt(prompt("Ingrese el segundo numero "));

let suma = "";

if (numero1 > 0 || numero2 >0){
    suma = numero1+numero2;
    document.write("<br>La suma es: "+suma);
}else{
    alert("Almenos un numero debe ser positivo");
}

//La empresa tangas nesecita un pequeño progarma para calcular los datos de una compra con las  siguientes condiciones si compra mas de 5 tangas y ademas 
//el presio total supera los 100 mil pesos hacer un descuento del 10% si solo compro 5 o mas tangas pero no supero los 100 mil hacer un descuento del 5% si compra mas de 20 tangas
// o el valor total de las tangas supero los 200 mil realizar un descuento del 20%. solo solicitar al usuario la cantidad y el precio unitaro de cadad uno imprimir el valor del descuento 
// tasa del descuento y valor a pagar    
