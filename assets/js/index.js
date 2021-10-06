import { Aguila, Leon, Lobo, Oso, Serpiente } from "./clases/especies.js"

let infoAnimales = [];
let Animales = ( async () => {
    const url = "http://localhost:5500/animales.json";
    const getData = async () => {
        const res  = await fetch(url);
        const data = await res.json();
        console.log("Animales data:", data);
        infoAnimales = data.animales;

        return infoAnimales
    }
    return  getData() 
})()


function animalSound(animalIdx) {
    const animal = arregloObjetosAnimales[animalIdx]
    switch (animal.Nombre) {
        case "Leon" :
            animal.Rugir();
            break;
        case "Lobo" :
            animal.Aullar();
            break;
        case "Oso" :
            animal.Grunir();
            break;
        case "Serpiente" :
            animal.Sisear();
            break;
        case "Aguila" :
            animal.Chillar();
            break;
    }
}


function animalModal(animalIdx) {

    const animal = arregloObjetosAnimales[animalIdx];
    $("#exampleModal").modal("show")

    const modalAnimal = document.querySelector(".modal-body")
    console.log("modal anim", modalAnimal.innerHTML);
    modalAnimal.innerHTML = "";
    modalAnimal.innerHTML +=  `<div class="d-flex justify-content-center">`;
    modalAnimal.innerHTML +=  `  <img src="./assets/imgs/${animal.Img}"" width="200px" style="margin:auto;display:block;" /> `;
    modalAnimal.innerHTML +=  `</div>`;
    modalAnimal.innerHTML +=  `<p class="text-light text-center">${animal.Nombre}</p>`;
    modalAnimal.innerHTML +=  `<p class="text-light text-center">${animal.Edad}</p>`;
    modalAnimal.innerHTML +=  `<p class="text-light text-center">${animal.Comentarios}</p>`;
    modalAnimal.innerHTML +=  ``;

}

const selectorAnimal = document.getElementById("animal");
selectorAnimal.addEventListener("change", (ev) => {
    let nombreAnimal = selectorAnimal.value;
        if (infoAnimales.length > 0) {
        let imgHtml = `<img src = "assets/imgs/${infoAnimales.find(anml => anml.name == nombreAnimal).imagen}" width = "200px">`
        document.getElementById("preview").innerHTML = imgHtml;
    }
})




let arregloObjetosAnimales = [];

const botonAgregar = document.getElementById("btnRegistrar")
botonAgregar.addEventListener("click", (evento) => {
    evento.defaultPrevented;

    const selectorEdad = document.getElementById("edad");
    const textoComentario = document.getElementById("comentarios");

    let animalRegistrado;
    if (selectorAnimal.selectedIndex > 0 &&
        selectorEdad.selectedIndex > 0 &&
        textoComentario.value.length > 0) {

            //Se crea el objeto y se agrega al contenedor, incluyendo la imagen y el sonido
            //primero se busca el animal en el arreglo
            let anml = infoAnimales.find(anml => anml.name == selectorAnimal.value)
            let idxAnml = infoAnimales.findIndex(a => a.name == selectorAnimal.value)

            console.log(selectorAnimal.value);
            switch (selectorAnimal.value) {
                case "Aguila": { 
                    animalRegistrado = new Aguila(infoAnimales[idxAnml].name, selectorEdad.value, infoAnimales[idxAnml].imagen, textoComentario.value, infoAnimales[idxAnml].sonido);
                    break;
                }

                case "Leon": { 
                    animalRegistrado = new Leon(infoAnimales[idxAnml].name, selectorEdad.value, infoAnimales[idxAnml].imagen, textoComentario.value, infoAnimales[idxAnml].sonido);
                    console.log("se registró leon");
                    break
                }

                case "Lobo": { 
                    animalRegistrado = new Lobo(infoAnimales[idxAnml].name, selectorEdad.value, infoAnimales[idxAnml].imagen, textoComentario.value, infoAnimales[idxAnml].sonido);
                    console.log("Se registro lobo");
                    break
                }

                case "Oso": { 
                    animalRegistrado = new Oso(infoAnimales[idxAnml].name, selectorEdad.value, infoAnimales[idxAnml].imagen, textoComentario.value, infoAnimales[idxAnml].sonido);
                    break
                }

                case "Serpiente": { 
                    animalRegistrado = new Serpiente(infoAnimales[idxAnml].name, selectorEdad.value, infoAnimales[idxAnml].imagen, textoComentario.value, infoAnimales[idxAnml].sonido);
                    break
                }

                //Se agrega este animal al arreglo de animales
            }
            arregloObjetosAnimales.push(animalRegistrado);
            renderAnimals();
    }
    else {
        alert ("falta información, por favor rellene todos los campos")
    }

    
});


function renderAnimals() {
    
    let divAnimales = document.getElementById("Animales");
    divAnimales.innerHTML = '';

    arregloObjetosAnimales.forEach( (animal, idx) => {
        let anmlCardHtml = "";

        anmlCardHtml += `<div class="card text-center mx-3" style="width: 100px; height: 150px;">`;
        anmlCardHtml += `<img class="card-img-top" id="b${idx}" src="assets/imgs/${animal.Img}" alt="imagen de ${animal.Nombre}" width = "100px" height = "120px" >`;
        anmlCardHtml += `<div class="card-body my-0 py-0 text-white" style = "background-color: #969696;">`;
        anmlCardHtml += `<button id="s${idx}" width = "100px" style = "background-color: #969696;"><i class="fas fa-volume-up"></i></button>`;
        anmlCardHtml += `</div>`
        anmlCardHtml += `</div>`
        
        divAnimales.innerHTML += anmlCardHtml;

    })

    addEventsToButtons()
}


function addEventsToButtons () {
    const animales = document.getElementById("Animales");
    const btnsSonidos = animales.querySelectorAll("button");
    btnsSonidos.forEach( (btn) => {
        btn.addEventListener("click", (event) => {
            const animalIndexS = event.currentTarget.id.slice(1, 3);
            animalSound(animalIndexS)
        })
    })


    const imgModals = animales.querySelectorAll("img");
    imgModals.forEach( (imagen) => {
        imagen.addEventListener("click", (event) => {
            const animalIndexM = event.currentTarget.id.slice(1, 3);
            animalModal(animalIndexM)
        })
    })




}





