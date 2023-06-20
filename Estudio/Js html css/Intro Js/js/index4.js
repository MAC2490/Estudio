let cantidad = parseInt(prompt("Ingrese la cantidad de producto "));
let precio = parseInt(prompt("Ingrese el valor unitario del producto"));

let valor = cantidad * precio;
let descuento = "";

if (valor > 100000 && cantidad >= 5 && valor < 100000 && cantidad < 19) {
    descuento = valor * 0.1;
    document.write("Tasa de descuento del 10%" + "<br>");
}
if (valor < 100000 && cantidad >= 5) {
    descuento = valor * 0.05
    document.write("Tasa de descuento del 5%" + "<br>");
} else {
    if (valor >= 200000 || cantidad >= 20) {
        descuento = valor * 0.2;
        document.write("Tasa de descuento del 20%" + "<br>");
    }
}



let valor_a_pagar = valor - descuento;

document.write("valor del descuneto " + descuento + "<br>")
document.write("valor a pagar sin descuento " + valor + "<br>")
document.write("valor a pagar con descuento" + valor_a_pagar)