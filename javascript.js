


let juegos = [
    
    {id:"1",nombre:"God Of War" , price: 1500 ,genero: "acción", img: "imagenes/gow.png"},
    {id:"2",nombre:"Need for Speed Payback", price: 1200, genero: "autos", img:"imagenes/nfs.jpg"},
    {id:"3",nombre:"Outlast" , price: 800 , genero: "survival", img:"imagenes/Outlast.jpg"},
    {id:"4",nombre:"Resident Evil4" , price: 850 , genero: "survival", img:"imagenes/re.jpg"},    
    {id:"5",nombre:"Resident Evil 3", price: 1500, genero: "survival", img:"imagenes/re3.jpg"},
    {id:"6",nombre:"Forza Horizon 4" , price: 1850, genero: "autos", img:"imagenes/forza.jpg"},
    {id:"7",nombre: "Horizon Zero Dawn", price: 1650, genero: "ación", img:"imagenes/horizon.jpg"},
    {id:"8",nombre:"Uncharted 4" , price: 1000, genero: "acción", img:"imagenes/uncharted.jpg"},
    {id:"9",nombre: "Metal Gear Solid V", price: 950, genero:"acción", img:"imagenes/mgs.jpg"},
    {id:"10",nombre: "DragonBall Fighters Z", price: 750, genero:"acción", img:"imagenes/dbz.jpg"},
    {id:"11",nombre:"Fifa" , price: 2100, genero: "deporte", img:"imagenes/fifa2022.jpg"},
    {id:"12",nombre:"Pes" , price: 2000 , genero: "deporte", img:"imagenes/pes2020.jpg"}

];









//-------------------------PLANTILLAS E INNERHTML CON ONJETOS/ARRAYS----------
const container = document.getElementById("container");



for (let juego of juegos) {    
const contenedor = document.createElement("div");    
contenedor.innerHTML = `
            <div class="container__box" category="${juego.genero}">
                <img class="videogames item-img" src="${juego.img}" alt="">
                <h3 class="item-title"> ${juego.nombre}</h3>
                <h3 class="item-price"> $${juego.price}</h3>
                <button class="addToCart">
                    Comprar
                </button>
                <button value=${juego.nombre} class="elemento " onclick="listaDeDeseados(value)"><i class='bx bx-plus-circle'></i></button>
            </div>`
        
            container.appendChild(contenedor);
        

            
    }
    


    
//--------------------CARRITO--DE--COMPRAS--------------------

let addToShopCart = document.querySelectorAll('.addToCart');
addToShopCart.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

/*
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});
*/

function addToCartClicked(e) {
    let button = e.target;
    let item = button.closest('.container__box');
    
    
    let itemTitle = item.querySelector('.item-title').textContent;
    let itemImg = item.querySelector('.item-img').src
    let itemPrice = item.querySelector('.item-price').textContent;

    addItemToShoppingCart(itemTitle, itemPrice, itemImg)

  
}
let ShopCartContainer = document.querySelector('.shopping-cart')

function addItemToShoppingCart(itemTitle, itemPrice, itemImg) {
   let shopCartRow = document.createElement('div');
   
   shopCartRow.innerHTML = `
                            <div class="shoppingCartItem">
                                        
                            <div class="shopping-cart-item">
                                <img src=${itemImg} class="shopping-cart-image">
                            </div>
                            <div class="shopping-cart-tittle">
                                <h6 class="shopping-cart-item-title">${itemTitle}</h6>
                            </div>

                            <div class="shopping-cart-price">
                                <p class="item-price shoppingCartItemPrice">${itemPrice}</p>
                            </div>



                            <div class="shopping-cart-quantity">
                                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                    value="1">
                                <button class="btn btn-danger buttonDelete" type="button">X</button>
                            </div>

                            </div>`;

   
   ShopCartContainer.append(shopCartRow);

   shopCartRow.querySelector('.buttonDelete').addEventListener('click' , removeShopCartItem);



   updatePrecioTotal();
}

//-----------------------------------

//---------------------------


let valor =  document.getElementsByClassName("elemento");

function listaDeDeseados(valor){


    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li");

    nuevoLi.innerHTML = valor;

    lista.appendChild( nuevoLi);


    for ( let i = 0; i < sessionStorage.length ; i++) {
        let JSONli = JSON.stringify(valor);
        sessionStorage.setItem("id" , JSONli);
    };

}
//---------------------


$(document).ready(function(){
//AGREGANDO CLASE ACTIVE AL PRIMER ENLACE

//-----------------------------------

$('.genero__item').click(function(){
let catProduct = $(this).attr('category');

//ocultando productos
$('.container__box').hide();

//------mostrando por categoria

$('.container__box[category="'+catProduct+'"]').show();


});

$('.genero__item[category="all"]').click(function(){
$('.container__box').show();
})


});



//---------------------------CARRITO DE COMPRAS----------------

function updatePrecioTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        '.shoppingCartItemPrice'
      );
      const shoppingCartItemPrice = parseInt(
        shoppingCartItemPriceElement.textContent.replace('$', '')
      );
      
      
      total = total + shoppingCartItemPrice
    });
    shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
  }



  


//--------------------------------


function removeShopCartItem(e){
    let buttonClicked = e.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    
}




//--------------------AGREGAR-COMENTARIOS--------------------
addComentario.addEventListener("click", agregarComentario)

function agregarComentario(){

let input =  document.getElementById("elemento");

let comentarios = document.getElementById("comentario__section");


let nuevoComentario = document.createElement("p");

//let JSONNewC = JSON.stringify(nuevoComentario);


nuevoComentario.innerHTML = `
                            <p class="comentarios__section__2">
                            "${input.value}"
                            </p>
                            `;


comentarios.appendChild( nuevoComentario);

//sessionStorage.setItem("valor" , "hola")
/*
for( let i = 0; i < 3 ; i++) {
    
    sessionStorage.setItem(i , JSON.stringify(nuevoComentario));

}
*/
}


/*
for ( let i = 0 ; i < localStorage.length ; i++) {
    

    
    localStorage.setItem( i , valor);
}
*/


//--------------------


/*
for( let i = 0; i < 3 ; i++) {
    
    localStorage.setItem(i , JSON.stringify(nuevoLi));

}
*/


