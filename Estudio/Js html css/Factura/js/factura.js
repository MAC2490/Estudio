let producto = "";
let preciounitario = 0;
let cantidad = 0;
let iva = 0;
let total_producto = 0;
let subtotal = 0; 
let descuento = 0;
let total_pagar = 0;
let totalproducto = 0;

function capturar_datos() {
    producto = document.getElementById("producto").value;
    preciounitario = document.getElementById("valor_u").value;
    cantidad = document.getElementById("cantidad").value;
    console.log("Producto: "+producto);
    console.log("Precio U: "+preciounitario);
    console.log("cantidad: "+cantidad);

    return calcular_datos(preciounitario ,cantidad)
}

function calcular_datos(precioU,cant) {
    iva = precioU * cant * 0.19;
    totalproducto = precioU * cantidad + iva;
    subtotal += totalproducto;
    total_pagar += totalproducto;
    console.log("IVA: "+iva);
    console.log("total  producto: "+totalproducto);
    console.log("subtotal: "+subtotal);
    
    hacerDescuento(subtotal);
    mostrarSubtotal(subtotal);
    return imprimir_datos(); 
}

function imprimir_datos() {
    const lista = document.getElementById("lista");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    const text_td1 = document.createTextNode(producto);
    const text_td2 = document.createTextNode(preciounitario);
    const text_td3 = document.createTextNode(cantidad);
    const text_td4 = document.createTextNode(iva);
    const text_td5 = document.createTextNode(totalproducto);
    
    td1.appendChild(text_td1);
    td2.appendChild(text_td2);
    td3.appendChild(text_td3);
    td4.appendChild(text_td4);
    td5.appendChild(text_td5);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    return lista.appendChild(tr);
}

function mostrarSubtotal(sub) {
    const span = document.getElementById("imprimiendo_subtotal");
    const text_subtotal = document.createTextNode(sub);
    return span.appendChild(text_subtotal);
}

function mostrar_descuento(d_t) {
    const span = document.getElementById("imprimiendo_descuento");
    const text_subtotal = document.createTextNode(d_t);
    return span.appendChild(text_subtotal);
}

function hacerDescuento(sub) {
    let descuento = document.getElementById("descuento").value;
    let decimal = descuento/100;
    let descuento1 = sub * decimal;
    let decimal_total = sub - descuento1;

    
    return mostrar_descuento(decimal_total);
}