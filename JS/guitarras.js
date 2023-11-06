/* Constantes */
const content = document.getElementById("content");
const vercarrito = document.getElementById("carrito");
const modalcontainer = document.getElementById("modal-container");

let carrito = [];

/* Crear tarjetas en HTML */

const getproducts = async () => {
    const response = await fetch('JS/guitarras.json');
    const data = await response.json();
    data.instrumentos.forEach((instrumento) => {
        content.appendChild(crearTarjeta(instrumento));
    });

    function crearTarjeta(instrumento) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${instrumento.imagen}">
            <h3>${instrumento.marca} ${instrumento.modelo}</h3>
            <p class="price">$${instrumento.precio.toLocaleString()}</p>
        `;
    
        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        card.appendChild(comprar);
    
        comprar.addEventListener("click", () => {
            agregarAlCarrito(instrumento);
        });
    
        return card;
    } 
}

function crearTarjeta(instrumento) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${instrumento.imagen}">
        <h3>${instrumento.marca} ${instrumento.modelo}</h3>
        <p class="price">$${instrumento.precio.toLocaleString()}</p>
    `;

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    card.appendChild(comprar);

    comprar.addEventListener("click", () => {
        agregarAlCarrito(instrumento);
    });

    return card;
}

/* Carrito */
function agregarAlCarrito(instrumento) {
    carrito.push({
        marca: instrumento.marca,
        modelo: instrumento.modelo,
        precio: instrumento.precio,
        imagen: instrumento.imagen,
    });
    console.log(carrito);
}

/* Mostrar carrito en pantalla */
function mostrarCarritoEnModal() {
    const modalheader = document.createElement("div");
    modalheader.className = "modal-header";
    modalheader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;

    modalcontainer.innerHTML = "";
    modalcontainer.style.display = "flex";
    modalcontainer.append(modalheader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-buttons";

    modalheader.append(modalbutton);

    modalbutton.addEventListener("click", () => {
        modalcontainer.innerHTML = "";
        modalcontainer.style.display = "none";
    });

    /* Mostrar los productos en el carrito */
    carrito.forEach((instrumento) => {
        let carritocontent = document.createElement("div");
        carritocontent.className = "modal-content";
        carritocontent.innerHTML = `
            <img src="${instrumento.imagen}">
            <h3>${instrumento.marca} ${instrumento.modelo}</h3>
            <p class="price">$${instrumento.precio.toLocaleString()}</p>
        `;
        modalcontainer.append(carritocontent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const compratotal = document.createElement("div");
    compratotal.className = "total-content";
    compratotal.innerHTML = `Total a pagar: $${total.toLocaleString()}`;
    modalcontainer.append(compratotal);
}

vercarrito.addEventListener("click", mostrarCarritoEnModal);

getproducts();



