const select = document.querySelector("#select-products")
const main = document.querySelector("#main-market")
const contador = document.querySelector("#p-counter")
const textCompra = document.querySelector("#text")
window.addEventListener("load", loadSelect);
select.addEventListener("change", elementSelected);

function elementSelected(event) {
    products.map(element => {
        if (event.target.value === element.name) {
            nameProduct = element.name;
            imgProduct = element.img;
            priceProduct = element.price;
            idProduct = element.id;
            
        }
    })
    createCard(nameProduct, imgProduct, priceProduct, idProduct);
}

function loadSelect() {
    products.map(element => {
        const opt = document.createElement('option');
        opt.textContent = element.name;
        opt.value = element.name;
        select.appendChild(opt);
    });
}
function createCard(nameProduct, imgProduct, priceProduct, idProduct) {
    const card = document.createElement('div');
    const tittle = document.createElement('h3');
    const imgCard = document.createElement('img');
    const price = document.createElement('p');
    const comprar = document.createElement('button');
    const eliminar = document.createElement('button');
    const idcard = document.createElement('p')
    tittle.textContent = nameProduct;
    imgCard.setAttribute('src', imgProduct);
    imgCard.setAttribute('alt',nameProduct);
    comprar.textContent = "COMPRAR";
    price.textContent = priceProduct; 
    eliminar.textContent = "ELIMINAR";
    idcard.textContent = idProduct;
    card.appendChild(tittle);
    card.appendChild(imgCard);
    card.appendChild(price);
    card.appendChild(comprar);
    card.appendChild(eliminar);
    main.appendChild(card);
    card.classList.add('card');
    tittle.classList.add('p-title');
    imgCard.classList.add('img-card');
    comprar.classList.add('btn-add');
    price.classList.add('p-price');
    eliminar.classList.add('btn-add');

    comprar.addEventListener('click',buy);
    eliminar.addEventListener('click', clear);

    let newArray = []
    function buy() {
        alert(`¿DESEA COMPRAR EL ${tittle.textContent}?`);
        newArray.push(idProduct, nameProduct, priceProduct);
        textCompra.textContent = newArray;
    }
    function clear() {
        main.removeChild(card)
    }
}