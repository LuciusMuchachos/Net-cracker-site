let counter = 1;
const Items = document.querySelector('.cart-header__items');
const screen = document.querySelector('.screen');
const cart = document.querySelector('.cart');
const loader = document.querySelector('.loader');
const menu = document.querySelector('.head-left1__menu-list');
const overlayMenu = document.querySelector('.head__overlay');


function showPopUp()
{
    showLoader();
    setTimeout(showCart, 1000);
}

function closePopUp()
{
    closeCart();
}

screen.addEventListener('click', ()=>
{
    const mod = document.querySelectorAll('.cart.active');
    mod.forEach(mod => {closeCart(mod);})
});

function showCart()
{
    cart.classList.add('active');
    screen.classList.add('active');
    closeLoader();
}

function showLoader()
{
    loader.classList.add('active');
}

function closeLoader()
{
    loader.classList.remove('active');
}

function closeCart()
{
    cart.classList.remove('active');
    screen.classList.remove('active');
}

function findItems()
{
    const addButton = document.querySelectorAll('.goods__button-sale');
    addButton.forEach(button => {
        button.addEventListener('click',() =>
    {
        let goods = button.parentElement;
        let title = goods.querySelector('.goods__title').innerText;
        let price = goods.querySelector('.goods__price').innerText;
        let pic = goods.querySelector('.goods__img').src;
        addToCart(title, price, pic);
    })
    })
}

function addToCart(title, price, pic)
{
    let row = document.createElement('div.');
    const cartItems = document.getElementsByClassName('cart__items')[0];
    let text = "В корзине " + counter + " товара (ов)";
    row.classList.add('add-item');;
    document.querySelector(".head__PopUp").style.visibility = "visible";
    document.querySelector(".head__PopUp").innerText = counter;
    Items.innerText = text;
    counter++;
    const content = `<div class = "flexDiv">
    <img class="flexDiv__basket-img" src="${pic}">
                        <span class="flexDiv__name">${title}</span>
                        <span class= "flexDiv__price">${price}</span>
                        <button class="flexDiv__delete-button">Удалить</button>
                        </div>`
    row.innerHTML = content;  
    cartItems.append(row);
}

findItems();

function openMenu()
{
    menu.classList.add('active');
    overlayMenu.classList.add('active');
}

overlayMenu.addEventListener('click', () => {
    menu.classList.remove('active')
    overlayMenu.classList.remove('active');
})

