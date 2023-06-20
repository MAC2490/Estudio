let nombre_producto = "";
let cant_producto = "";
let valor_producto = "";
var aux =1;
var si = true;
function leer_num() {
    
    //obtengo los datos
    nombre_producto = document.getElementById("nombre").value;
    cant_producto = parseFloat(document.getElementById("cantidad").value);
    valor_producto = parseFloat(document.getElementById("valor").value);
    if (si==true) {
        let valor_total= cant_producto*valor_producto;
    //inserto los datos a la tabla
    let tabla = `<tr>
                    <td>`+aux+`</td>
                    <td>`+nombre_producto+`</td>
                        <td>`+cant_producto+`</td>
                        <td>`+valor_producto+`</td>
                        <td>`+valor_total+`</td>
                </tr>`
    let agg = document.getElementById("encabezado");
    agg.insertAdjacentHTML('afterend',tabla);
    aux=aux+1;
    }
    
}