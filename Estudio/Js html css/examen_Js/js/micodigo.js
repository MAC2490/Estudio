let cantidad_empleados = "";
let valor_hora = "";
let boton="";
let nombre="";
let horas="";
let auxilio_transporte="";
let valor_pagar="";
let auxiliar=1;

function calcular_empleados() {
    cantidad_empleados = parseFloat(document.getElementById("empleados").value);
    document.getElementById("cant_emple").innerHTML= cantidad_empleados;

}

function calcular_hora() {
    valor_hora = parseFloat(document.getElementById("valor_hora").value);
    document.getElementById("val_hora").innerHTML= valor_hora;
    
}



function agregar() {
    
    if (auxiliar<=cantidad_empleados) {
        nombre= document.getElementById("nombre_empleado").value;
        horas= document.getElementById("horas_trabajadas").value;
    
        let sueldo_basico =valor_hora*horas;
        let salud=sueldo_basico*0.04;
    
        if (sueldo_basico<2000000) {
            auxilio_transporte=sueldo_basico*0.08
            valor_pagar=auxilio_transporte+(sueldo_basico-salud);
        }else{
            auxilio_transporte="No recibe";
            valor_pagar=sueldo_basico-salud;
        }
                
        
        let fila = `<tr id="f1">
                        <td>`+nombre+`</td>
                        <td>`+horas+`</td>
                        <td>`+sueldo_basico+`</td>
                        <td>`+salud+`</td>
                        <td>`+auxilio_transporte+`</td>
                        <td>`+valor_pagar+`</td>
                    </tr>`;
        let imprimir = document.getElementById("cabeza");
        imprimir.insertAdjacentHTML('afterend', fila);

        auxiliar=auxiliar+1;
    }else{
       alert("Cantidad de empleados ya agregado");
    }
   
}
