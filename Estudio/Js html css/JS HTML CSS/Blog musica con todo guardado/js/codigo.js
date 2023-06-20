function publicarNoticia() {
    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let url_img = document.getElementById("imagen").value;

    console.log(titulo);
    console.log(descripcion);
    console.log(url_img);
    let o1 = 1;
    let o2 = 2;
    let html = `<section id="scroll">
                    <div class="container px-5">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-6 order-lg-`+o1+`">
                                <div class="p-5"><img class="img-fluid rounded-circle" src="`+url_img+`" alt="..." /></div>
                            </div>
                            <div class="col-lg-6 order-lg-`+o2+`">
                                <div class="p-5">
                                    <h2 class="display-4">`+titulo+`</h2>
                                    <p>`+descripcion+`</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
    if(o1 == 1){
        o1 = 2;
        o2 = 1;
    }else{
        o1 = 1;
        o2 = 2;
    }

     //section
    const span =  document.getElementById("aqui");
    let seccion = document.createElement("section");

    //1.	Div 2.1.1 ese lleva adentro la img 
    let div2_1_1 = document.createElement("div");
    div2_1_1.classList.add("img-fluid","rounded-circle");
    
    //2.	El div 2.1 lleva adentro el 2.1.1
    let div2_1 = document.createElement("div");
    div2_1.classList.add("p-5");
    div2_1.appendChild(div2_1_1);

    //3.	El div 1 lleva adentro el 2.1 
    let div1 = document.createElement("div");
    div1.classList.add("col-lg-6","order-lg-2");
    div1.appendChild(div2_1);

    //4.	Él div 2.2.1 lleva adentro el texto 
    let div2_2_1 = document.createElement("div");
    div2_2_1.classList.add("p","display-4");

    //5.	El div 2.2 lleva adentro el 2.2.1
    let div2_2 = document.createElement("div");
    div2_2.classList.add("p-5");
    div2_2.appendChild(div2_2_1);

    //6.	El div 1 lleva dentro el 2.2 
    div1 = document.createElement("div");
    div1.classList.add("col-lg-6", "order-lg-1");
    div1.appendChild(div2_2);

    //7.	El div 1 lleva adentro la sección 
    seccion = document.createElement("section");
    seccion.classList.add("container","px-5");
    seccion.appendChild(div1);

    return span.appendChild(seccion);
}