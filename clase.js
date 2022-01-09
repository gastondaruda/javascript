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


/*
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click" , searchItem(){
    let juegoSearch = document.getElementById("searchG").value;
    console.log(juegoSearch);
});
*/

function searchItem(){
    let juegoSearch = document.getElementById("searchG").value;

    let juegoFilter = juegos.filter( function(juego){
        return juego.nombre == juegoSearch;
    })
    //document.getElementById("container").innerHTML.appendChild(juegoFilter);
    
    console.log(juegoFilter);
}









const saveLocal = (clave, valor) => localStorage.setItem(clave, JSON.stringify(valor)); 
const readLocal = (clave) => JSON.parse(localStorage.getItem(clave));

class Producto{
    constructor({id,nombre , price ,genero, img}){
        this.id = id;
        this.nombre = nombre;
        this.price = parseInt(price);
        this.genero = genero;
        this.img = img;
    }
    productCard(){
        return `
            <div>
                <div class="container__box" category="${this.genero}">
                    <img class="videogames item-img" src="${this.img}" alt="">
                    <h3 class="item-title"> ${this.nombre}</h3>
                    <h3 class="item-price"> $${this.price}</h3>
                    <button value=${this.id} class="elemento " onclick="comprar(value)">
                        Comprar
                    </button>
                </div>
            </div>`
    }
    shopCard(){
        return `
            <div class="shoppingCartItem" id="${this.id}">
                <div class="shopping-cart-item">
                    <img src=${this.img} class="shopping-cart-image">
                </div>
                <div class="shopping-cart-tittle">
                    <h6 class="shopping-cart-item-title">${this.nombre}</h6>
                </div>
                <div class="shopping-cart-price">
                    <p class="item-price shoppingCartItemPrice">${this.price}</p>
                </div>
                <div class="shopping-cart-quantity">
        
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                        value="1">
                    <button class="btn btn-danger buttonDelete" onclick="deleteItem(${this.id})" type="button">X</button>
                </div>
            </div>
            `
    }
    cartIcon(){
        return `
                <h6 class="cart-icon">1</h6>
                `
    }
}

class Tienda{
    constructor(){
        this.stock = [];
        this.carrito = [];
    }
    addProducto(producto){
        this.stock.push(new Producto(producto))
    }
    addProductos(productos){
        productos.forEach(producto => this.addProducto(producto));

    }
    addToCart(id){
        let existe = this.carrito.find(producto => producto.id == id);
        console.log(existe);

        if(existe){
            alert("Ya existe");
        }else{
            this.carrito.push(this.stock.find(producto => producto.id == id));
            
        }
    }
    removeToCart(id){
        this.carrito = this.carrito.filter(producto => producto.id != id);
        }
    renderTienda(destino){
        document.getElementById(destino).innerHTML = this.stock.map(item => item.productCard()).join("");
    }
    renderCarrito(destino){
        document.getElementById(destino).innerHTML = this.carrito.map(item => item.shopCard()).join("");
    }
    //quantityChange()
    
};



let localGasty = new Tienda();

localGasty.addProductos(juegos);

localGasty.renderTienda("container");


function comprar(id){
    
    localGasty.addToCart(id);
    console.log(localGasty);
    localGasty.renderCarrito("shop-container");
    updatePrecioTotal();
    
    
};

//----------------------------------------------------------------------

function deleteItem(id) {
    
        localGasty.removeToCart(id);
        console.log(localGasty);   
        localGasty.renderCarrito("shop-container");
        updatePrecioTotal();
}


//----------------------------------------------------------------------

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

//agregar un div dinámico para que cuando se agregue un producto, se agregue el "total comprar" PENDIENTE

//----------------------------------------------------------------------

$(document).ready(function(){
    //AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
    
    //-----------------------------------
    
    $('.genero__item').click(function(){
    let catProduct = $(this).attr('category');
    
    //ocultando productos
    $('.container__box').hide();
    
    //------mostrando por categoria
    
    $('.container__box[category="'+catProduct+'"]').fadeIn();
    
    
    });
    
    $('.genero__item[category="all"]').click(function(){
    $('.container__box').fadeIn();
    })
    
    
    });
    
    
//--------------------

/*
let ubicacion = navigator.geolocation.getCurrentPosition( mostrarUbicacion )



function mostrarUbicacion( position ){
    console.log( position.coords.latitude );
    console.log( position.coords.longitude );
}


$("#botonGps").on("click" , mostrarUbicacion);

//---------------------clima

let urlClima = "http://api.openweathermap.org/data/2.5/weather?q=London&appid={fcfaf0816fc485a804d81b25c453cf5b}";


$("#botonClima").click(function(){
    
    $.get( urlClima , function( respuesta ){

        console.log(respuesta);

        let contenido = `<div>
                            <h2>${respuesta.name}</h2>
                            <p>Temp max: ${respuesta.main.temp_max}</p>
                            <p>Temp min: ${respuesta.main.temp_min}</p>        
                        </div>`  
                        
                        
    $("#pi").append(contenido);

    })


})



*/
/*
let climaAjax = $.ajax({
    
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data:{
        q:'Buenos Aires',
        appid: "fcfaf0816fc485a804d81b25c453cf5b",
        dataType: "jsonp",
        units:"metric"
    };

    success: function(data){

        console.log(data);
    }


})


console.log(climAjax);
*/

//---------------MERCADOPAGO--------------------

/*
const mp = new MercadoPago('TEST-73d0f270-29c7-400d-98d7-7b76760aac3c');

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales
mercadopago.configure({
access_token: 'TEST-7005293342374995-010823-48236f5b113b450b8e0581c580060f40-393185361'
});
*/

// Crea un objeto de preferencia
let preference = {
    items: [
        {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
        }
    ]
};

mercadopago.preferences.create(preference)
.then(function(response){
  // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    global.id = response.body.id;
}).catch(function(error){
    console.log(error);
});


const mp = new MercadoPago('TEST-73d0f270-29c7-400d-98d7-7b76760aac3c', {
    locale: 'es-AR'
});

// Inicializa el checkout
mp.checkout({
  preference: {
      id: 'prueba Javascript'
  },
  render: {
        container: '.comprarButton', // Indica el nombre de la clase donde se mostrará el botón de pago
        label: 'Pagar', // Cambia el texto del botón de pago (opcional)
  }
});


/*
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer TEST-7005293342374995-010823-48236f5b113b450b8e0581c580060f40-393185361' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MLA"}'
*/