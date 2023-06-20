//Funciones JS

function suma (){
    //Todo el codigo que quiera
    let num1 = parseInt(prompt("Ingrese el primer numero "));
    let num2 = parseInt(prompt("Ingrese el segundo numero "));

    let respuesta = num1 + num1

    imprimir_r(respuesta);

    return respuesta;
}

function imprimir_r(resultado /*parametro*/){
    document.write("<br>");
    document.write(resultado);
}

function operar(){
    let n1 = parseInt(prompt("Ingrese el primer nuemero"));
    let n2 = parseInt(prompt("Ingrese el primer nuemero"));

    let suma = n1+n2;
    let resta = n1-n2;
    let multi = n1*n2;
    let div = n1/n2;

    let resultados = [suma, resta, multi, div];

    return resultados;
}

let result = operar();
console.log(result);