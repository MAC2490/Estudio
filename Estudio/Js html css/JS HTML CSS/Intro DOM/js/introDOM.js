function sumar() {
    //     // let nom = document.getElementById("dato").value;
    //     // let texto = "Hola "+nom;
    //     // return document.getElementById("parrafo").innerHTML = texto; 

    //     //pedir dos numeros al usuario y crear un boton para sumarlos
    let num1 = document.getElementById("dato1").value;
    num1 = (parseInt(num1));
    let num2 = document.getElementById("dato2").value;
    num2 = (parseInt(num2));
    let suma = (num1 + num2);
    document.getElementById("dato1").value = "";
    document.getElementById("dato2").value = "";
    return document.getElementById("parrafo").innerHTML = suma;
}

let todos = "";
function agregarGusto() {
    let item = document.getElementById("gusto").value;
    todos += "<li>" + item + "</li>";
    return document.getElementById("lista").innerHTML = todos;
}

function agregarGustoPro() {
    //Tomar el dato del input que tiene el ID gustos
    let dato = document.getElementById("gusto").value;

    //Crear un nodo de texto HTML para el navegador 
    let texto = document.createTextNode(dato);

    //Creando un elemento li HTML
    const item = document.createElement("li");

    //Poner le texto HTML anterior dentro del li
    item.appendChild(texto);

    //Agregar el item creado a su padre OL 
    const ol = document.getElementById("lista");
    document.getElementById("gusto").value = "";
    //Agregando un hijo al OL
    return ol.appendChild(item);
}

// function agregarOperacion(valor) {
//     let resultado = document.getElementById('resultado');

//     if (valor == '='){
//       resultado.value = eval(resultado.value);
//     }else {
//       resultado.value += valor;
//     }
// }
  
