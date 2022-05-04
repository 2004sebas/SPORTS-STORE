const select = document.querySelector("#select-products")
const main = document.querySelector("#main-market")
window.addEventListener("load", loadSelect);
select.addEventListener("change", elementSelected);

function elementSelected(event) {
    products.map(element => {
        if (event.target.value === element.name) {
            nameProduct = element.name;
            imgProduct = element.img;
            priceProduct = element.price;
            
        }
    })
    createCard(nameProduct, imgProduct, priceProduct);
}

function loadSelect() {
    products.map(element => {
        const opt = document.createElement('option');
        opt.textContent = element.name;
        opt.value = element.name;
        select.appendChild(opt);
    });
}
function createCard(nameProduct, imgProduct, priceProduct) {
    const card = document.createElement('div');
    const tittle = document.createElement('h3');
    const imgCard = document.createElement('img');
    const price = document.createElement('p');
    const comprar = document.createElement('button');
    const eliminar = document.createElement('button');
    tittle.textContent = nameProduct;
    imgCard.setAttribute('src', imgProduct);
    imgCard.setAttribute('alt',nameProduct);
    comprar.textContent = "COMPRAR";
    price.textContent = priceProduct; 
    eliminar.textContent = "X"
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

    function buy() {
        alert(`EL balon comprado es: ${tittle.textContent}`)

    }
    function clear() {
        main.removeChild(card)
    }

}