const content = document.getElementById("content");

const instrumentos = {
    "instrumento": [
        {
            "instrumento": "Guitarra",
            "marca": "Grestch",
            "modelo": "Electromatic ",
            "precio": 2100000,
            "imagen": "imagenes/grestch.webp"
        },
        {
            "instrumento": "Guitarra",
            "marca": "Fender",
            "modelo": "Stratocaster",
            "precio": 1300000,
            "imagen": "imagenes/fender.webp"
        },
        {
            "instrumento": "Guitarra",
            "marca": "Gibson",
            "modelo": "Les Paul",
            "precio": 4600000,
            "imagen": "imagenes/gibson.webp"
        },
        {
            "instrumento": "Guitarra",
            "marca": "Ibanez",
            "modelo": "Jem",
            "precio": 820000,
            "imagen": "imagenes/ibanez 1.webp"
        },
        {
            "instrumento": "Guitarra",
            "marca": "Ibanez",
            "modelo": "Grg 170",
            "precio": 410000,
            "imagen": "imagenes/bajo ibanez 2.webp"
        },
        {
            "instrumento": "Bajo",
            "marca": "Ibanez",
            "modelo": "Grs206",
            "precio": 495000,
            "imagen": "imagenes/bajo ibanez.webp"
        },
        {
            "instrumento": "Bajo",
            "marca": "Ibanez",
            "modelo": "Sdgr",
            "precio": 637000,
            "imagen": "imagenes/bajo ibanez 2.webp"
        },
        {
            "instrumento": "Bajo",
            "marca": "Yamaha",
            "modelo": "Trbx505",
            "precio": 740000,
            "imagen": "imagenes/bajo yamaha.webp"
        },
        {
            "instrumento": "Amplificador",
            "marca": "Marshall",
            "modelo": "Mg101",
            "precio": 593000,
            "imagen": "imagenes/marshall.webp"
        },
        {
            "instrumento": "Amplificador",
            "marca": "Roland",
            "modelo": "Jc-40",
            "precio": 1100000,
            "imagen": "imagenes/roland.webp"
        },
        {
            "instrumento": "Amplificador",
            "marca": "Marshall",
            "modelo": "Code100",
            "precio": 590000,
            "imagen": "imagenes/marshall 2.webp"
        },
        {
            "instrumento": "Amplificador",
            "marca": "Vox",
            "modelo": "Air",
            "precio": 500000,
            "imagen": "imagenes/vox.webp"
        },
        {
            "instrumento": "Bateria",
            "marca": "Pearl",
            "modelo": "Roadshow",
            "precio": 735000,
            "imagen": "imagenes/pearl.webp"
        },
        {
            "instrumento": "Bateria",
            "marca": "Pearl",
            "modelo": "Roadshow silver",
            "precio": 735000,
            "imagen": "imagenes/pearl 2.webp"
        },
        {
            "instrumento": "Bateria",
            "marca": "Rmv",
            "modelo": "Crossroad",
            "precio": 360000,
            "imagen": "imagenes/rmv.webp"
        },
        {
            "instrumento": "Bateria",
            "marca": "Tama",
            "modelo": "Rythm Mate",
            "precio": 740000,
            "imagen": "imagenes/tama.webp"
        }
    ]
};

let carrito = [];

instrumentos.instrumento.forEach((instrumento) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${instrumento.imagen}">
    <h3>${instrumento.marca} ${instrumento.modelo}</h3>
    <p class="price">$ ${instrumento.precio}</p>
    `;

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    content.appendChild(comprar);

    document.getElementById("content").appendChild(content);
});