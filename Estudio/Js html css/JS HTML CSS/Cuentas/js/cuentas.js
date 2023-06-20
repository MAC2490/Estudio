// function calcular(){
//     let capital = document.getElementById("capital").value;
//     let tasaInteres = document.getElementById("tasaInteres").value;
//     let tiempo = document.getElementById("tiempo").value;

//     let tasaInteresMensual = tasaInteres/tiempo;
//     let interes = tasaInteresMensual/100;
//     let valorInteres = capital*interes;

//     let capitalM = capital/tiempo;

//     let valorPagoMensual = valorInteres+capitalM;

//     let totalPagar = valorPagoMensual*tiempo;

//     const interesMensual = document.createElement("td");
//     const capitalMensual = document.createElement("td");
//     const pagoMensual = document.createElement("td");

//     const guardar = document.createTextNode(valorInteres)
//     const textotd = document.createTextNode(capitalM);
//     const guardar1 = document.createTextNode(valorPagoMensual);

//     interesMensual.appendChild(guardar);
//     capitalMensual.appendChild(textotd);
//     pagoMensual.appendChild(guardar1);

//     const fila = document.getElementById("prueba");
//     fila.appendChild(interesMensual);
//     fila.appendChild(capitalMensual);
//     fila.appendChild(pagoMensual);

//     const total = document.createElement("td");
//     const texto = document.createElement("td");
//     texto.textContent = "Total";
//     const guardar2 = document.createTextNode(totalPagar);
//     total.appendChild(guardar2);

//     const filaTotal = document.getElementById("total");
//     filaTotal.appendChild(texto);
//     filaTotal.appendChild(total);
// }  

let totalinteres = 0;
let valorCapital = 0;
let valorCuota = 0;

function interesCompuesto(){
    let capital = document.getElementById("capital").value;
    let tasaInteres = document.getElementById("tasaInteres").value;
    let tiempo = document.getElementById("tiempo").value;

    let saldos = capital;
    //Interes por mes 
    let interesMensual = tasaInteres/12; 
    let interes = interesMensual/100;

    let valorMensual = capital/tiempo;

    const tbody = document.getElementById("datos");
    for (let i = 0; i < tiempo; i++) {
        let valorInteres = saldos*interes;
        let totalCuota = valorInteres+valorMensual;
        saldos = saldos-valorMensual;

        // Totales 
        totalinteres += valorInteres;
        valorCapital += valorMensual;
        valorCuota += totalCuota;

        const tr = document.createElement("tr");
        const iteradora = document.createElement("td");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");

        const guardarIteradora = document.createTextNode(i+1);
        const gaurdartd1 = document.createTextNode(valorInteres);
        const gaurdartd2 = document.createTextNode(valorMensual);
        const gaurdartd3 = document.createTextNode(totalCuota);
        const gaurdartd4 = document.createTextNode(saldos);

        iteradora.appendChild(guardarIteradora);
        td1.appendChild(gaurdartd1);
        td2.appendChild(gaurdartd2);
        td3.appendChild(gaurdartd3);
        td4.appendChild(gaurdartd4);

        tr.appendChild(iteradora);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tbody.appendChild(tr);
    }
    let inicio = "Total ";
    let final = 0;
    //Total
    const trTotal = document.createElement("tr");
    const tdsolo = document.createElement("td");
    const totaltd1 = document.createElement("td");
    const totaltd2 = document.createElement("td");
    const totaltd3 = document.createElement("td");
    const tdFinal = document.createElement("td");

    //Total
    const guardarSolo = document.createTextNode(inicio);
    const guardarTotal1 = document.createTextNode(totalinteres);
    const guardarTotal2 = document.createTextNode(valorCapital);
    const guardarTotal3 = document.createTextNode(valorCuota);
    const guardarFinal = document.createTextNode(final);

    tdsolo.appendChild(guardarSolo);
    totaltd1.appendChild(guardarTotal1);
    totaltd2.appendChild(guardarTotal2);
    totaltd3.appendChild(guardarTotal3);
    tdFinal.appendChild(guardarFinal);

    trTotal.appendChild(tdsolo);
    trTotal.appendChild(totaltd1);
    trTotal.appendChild(totaltd2);
    trTotal.appendChild(totaltd3);
    trTotal.appendChild(tdFinal);
    
    tbody.appendChild(trTotal);
    return true;
}