let pos1 = 1;
let pos2 = 2;

function publicarNoticia() {
    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let url_img = document.getElementById("imagen").value;

    console.log(titulo);
    console.log(descripcion);
    console.log(url_img);

    if (pos1 == 1){
        pos1 = 2
        pos2 = 1
    }else{
        pos1 = 1;
        pos2 = 2
    }

    //Crar elementos 
    const span = document.getElementById("aqui");
    const section = document.createElement("section");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const img = document.createElement("img");
    const div5 = document.createElement("div");
    const div6 = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    
    //Agregar las clases correspondientes 
    div1.classList.add("container", "px-5");
    div2.classList.add("row", "gx-5", "align-items-center");
    div3.classList.add("col-lg-6",`order-lg-${pos1}`); 
    div4.classList.add("p-5");``
    img.classList.add("img-fluid", "rounded-circle");
    div5.classList.add("col-lg-6", `order-lg-${pos2}`);
    div6.classList.add("p-5");
    h2.classList.add("display-4");

    //Agregar el contenido a los alementos 
    img.src = url_img;
    h2.textContent = titulo;
    p.textContent = descripcion;

    //Agregar los hijos 
    div6.appendChild(h2);
    div6.appendChild(p);

    div5.appendChild(div6);

    div4.appendChild(img);

    div3.appendChild(div4);

    div2.appendChild(div3);
    div2.appendChild(div5);

    div1.appendChild(div2);

    section.appendChild(div1);

    return span.appendChild(section);
}

/* <div class="container"> 
    <h1>Title</h1>
    <div class="row">
        <img src="" alt="">
        <p>lorem</p>
    </div>
</div> */

// function ejemplo() {
//     const principal = document.getElementById("ejemplo");

//     //Creamos los elementos 
//     const container = document.createElement("div");
//     const row = document.createElement("div");
//     const title = document.createElement("h1");
//     const img = document.createElement("img");
//     const parrafo = document.createElement("p");
    
//     //Agregamos las clases correspondientes
//     container.classList.add("container");
//     row.classList.add("row");
    
//     //Agregamos el texto a los elemntos 
//     title.textContent = "Este es un titulo ";
//     parrafo.textContent = "Esto es un parrafo de ejemplo ";

//     //Agrego ruta de la imagen 
//     img.src = "https://3.bp.blogspot.com/-96kGkkZAvrE/T5FstM0n_QI/AAAAAAAAABw/61kePUW_hs8/s1600/mar.jpg";

//     //Agregamos los elementos al documento hijo 
//     row.appendChild(img);
//     row.appendChild(parrafo);

//     container.appendChild(title);
//     container.appendChild(row);

//     //Imprimimos en el body 
//     return principal.appendChild(container);
// }