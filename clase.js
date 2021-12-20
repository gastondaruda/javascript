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
        this.price = price;
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
            <div class="shoppingCartItem" id="shopCartItems">
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
                    <button class="btn btn-danger buttonDelete" onclick="deleteItem()" type="button">X</button>
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
        this.carrito.push(this.stock.find(producto => producto.id == id));
    }
    removeToCart(i){
        this.carrito.splice( i , 1); //¿Cómo hacer para que el método splice elimine el div que quiero???
    }
    renderTienda(destino){
        document.getElementById(destino).innerHTML = this.stock.map(item => item.productCard()).join("");
    }
    renderCarrito(destino){
        document.getElementById(destino).innerHTML = this.carrito.map(item => item.shopCard()).join("");
    }
    /*
    remove(destino){
        document.getElementsByClassName(destino).innerHTML = this.carrito.map(item => item.shopCard()).pop("");
    } */
    //removeProducto(destino){
        //document.getElementById(destino) = ;
    //}

    }
    


let localGasty = new Tienda();

localGasty.addProductos(juegos);

localGasty.renderTienda("container");


function comprar(id){
    
    localGasty.addToCart(id);
    console.log(localGasty);
    localGasty.renderCarrito("shop-container");
};





/*
    const deleteBtn = document.getElementsByClassName("buttonDelete");

    deleteBtn.addEventListener("click", () => {
        console.log("clicked")
        //const item = e.target.parentElement.parentElement; 
        //const shopContainer = document.getElementById("shop-container");

        //shopContainer.removeChild(item);
    });
*/



function deleteItem(e) {
    
        localGasty.removeToCart(e);
        console.log(localGasty);   
        localGasty.renderCarrito("shop-container");
}


        //localGasty.renderCarrito("shop-container");

        /*
        splice( i , 1)
        //--------------

        for( let i=0 ; i<localGasty.lenght ; i++) {
            if( buttonDelete.this.nombre === this.nombre){
                removeToCart()
            }
        }
        */
        

//Se tiene que eliminar el Objeto del array seleccionado (¿¿e.target??)

//----------------------------------------------------------------------
/*

function deleteItem(id) {
        localGasty.removeToCart(id)
        console.log(localGasty);    
        //localGasty.renderCarrito("shop-container");
        
}


function deleteItem() {
    const deleteBtn = document.getElementsByClassName("buttonDelete");
    const shopCartItems = document.getElementsByClassName("shoppingCartItem");
    
    deleteBtn.addEventListener("click", (e) => {
        console.log("clicked");
    });
    
    //console.log("clicked")
}
*/



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
    
    







