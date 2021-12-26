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
            alert("ya existe");
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
    //totalCarrito(destino){
        //document.getElementById(destino).innerHTML = this.carrito.push(producto => producto.price);
        
        //let totalCarrito = 0;
        //document.getElementById(destino).innerHTML = this.carrito.map(producto => producto.price);
    //}
}
//this.carrito.map(producto => producto.price)

//this.carrito.map(producto => producto.price == price);


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
    
    







