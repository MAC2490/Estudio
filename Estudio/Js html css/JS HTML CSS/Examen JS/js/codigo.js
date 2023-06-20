let i = 0;
let precio = 0;
function comprarHamburguesa(){
    i++;
    precio += 12000;

    const cantidadH = document.getElementById("cantidad1");
    const precioH = document.getElementById("precio1")

    cantidadH.textContent = i;
    precioH.textContent = precio;
}

let precioS = 0;
let j = 0;
function comprarSancocho(){
    j++;
    precioS += 25000;

    const cantidadS = document.getElementById("cantidad2");
    const precioSa = document.getElementById("precio2");

    cantidadS.textContent = j;
    precioSa.textContent = precioS;
}

let  precioChurrasco = 0;
let l = 0;
function comprarChurrasco(){
    l++;
    precioChurrasco += 32000;

    const cantidadC = document.getElementById("cantidad3");
    const precioC = document.getElementById("precio3");

    cantidadC.textContent = l;
    precioC.textContent = precioChurrasco;
}

let  precioTrucha = 0;
let m = 0;
function comprarTrucha(){
    m++;
    precioTrucha += 48000;

    const cantidadT = document.getElementById("cantidad4");
    const precioT = document.getElementById("precio4");

    cantidadT.textContent = m;
    precioT.textContent = precioTrucha;
}

function eliminarH(){
    i--;
    precio -= 12000; 
    
    const cantidadH = document.getElementById("cantidad1");
    const precioH = document.getElementById("precio1")

    cantidadH.textContent = i;
    precioH.textContent = precio;
}

function eliminarS(){
    j--;
    precioS -= 25000

    const cantidadS = document.getElementById("cantidad2");
    const precioSa = document.getElementById("precio2");

    cantidadS.textContent = j;
    precioSa.textContent = precioS;
}

function eliminarC(){
    l--;
    precioChurrasco -= 32000;

    const cantidadC = document.getElementById("cantidad3");
    const precioC = document.getElementById("precio3");

    cantidadC.textContent = l;
    precioC.textContent = precioChurrasco;
}

function eliminarT(){
    m--;
    precioTrucha -= 48000;

    const cantidadT = document.getElementById("cantidad4");
    const precioT = document.getElementById("precio4");

    cantidadT.textContent = m;
    precioT.textContent = precioTrucha;
} 

function total(){
    let totalCantidad = i + j + l + m 
    let totalPrecio = precio + precioS + precioChurrasco + precioTrucha;

    const totalCantidadSuma = document.getElementById("total");
    const totalPrecioAPagar = document.getElementById("totalPagar");

    totalCantidadSuma.textContent = totalCantidad;
    totalPrecioAPagar.textContent = totalPrecio;
}