let juegos = [
    
    {id:"1",nombre:"God Of War" , price: 1500 ,genero: "acción", img: "imagenes/gow.png", plataforma:"ps4",cant:1},
    {id:"2",nombre:"Need for Speed Payback", price: 1200, genero: "autos", img:"imagenes/nfs.jpg", plataforma:"ps4",cant:1},
    {id:"3",nombre:"Outlast" , price: 800 , genero: "survival", img:"imagenes/Outlast.jpg", plataforma:"ps4",cant:1},
    {id:"4",nombre:"Resident Evil4" , price: 850 , genero: "survival", img:"imagenes/re4ps4.jpg", plataforma:"ps4",cant:1},    
    {id:"5",nombre:"Resident Evil 3", price: 1500, genero: "survival", img:"imagenes/re3.jpg", plataforma:"ps4",cant:1},
    {id:"6",nombre:"Forza Horizon 4" , price: 1850, genero: "autos", img:"imagenes/forza.jpg", plataforma:"ps4",cant:1},
    {id:"7",nombre: "Horizon Zero Dawn", price: 1650, genero: "ación", img:"imagenes/horizon.jpg", plataforma:"ps4",cant:1},
    {id:"8",nombre:"Uncharted 4" , price: 1000, genero: "acción", img:"imagenes/uncharted.jpg", plataforma:"ps4",cant:1},
    {id:"9",nombre: "Metal Gear Solid V", price: 950, genero:"acción", img:"imagenes/mgs.jpg", plataforma:"ps4",cant:1},
    {id:"10",nombre: "DragonBall Fighters Z", price: 750, genero:"acción", img:"imagenes/dbz.jpg", plataforma:"ps4",cant:1},
    {id:"11",nombre:"Fifa" , price: 2100, genero: "deporte", img:"imagenes/fifa2022.jpg", plataforma:"ps4",cant:1},
    {id:"12",nombre:"Pes" , price: 2000 , genero: "deporte", img:"imagenes/pes2020.jpg", plataforma:"ps4",cant:1},
    {id:"13",nombre:"God of war 3" , price: 1800 , genero: "acción", img:"imagenes/gow3ps4.jpg", plataforma:"ps4",cant:1},
    {id:"14",nombre:"Battlefield V" , price: 1800 , genero: "shooter", img:"imagenes/battlefieldV.jpg", plataforma:"ps4",cant:1},
    {id:"15",nombre:"God of war 2" , price: 2000 , genero: "acción", img:"imagenes/gow2ps2.jpg", plataforma:"ps2",cant:1},
    {id:"16",nombre:"God of war" , price: 2000 , genero: "acción", img:"imagenes/gowps2.jpg", plataforma:"ps2",cant:1},
    {id:"17",nombre:"Resident Evil Village" , price: 2500 , genero: "survival", img:"imagenes/villageps4.jpg", plataforma:"ps4",cant:1},
    {id:"18",nombre:"Call Of Duty Vanguard" , price: 2550 , genero: "shooter", img:"imagenes/vanguardps4.png", plataforma:"ps4",cant:1},
    {id:"19",nombre:"Death Strading" , price: 2800 , genero: "acción", img:"imagenes/deathstradingps4.jpg", plataforma:"ps4",cant:1},
    {id:"20",nombre:"God of war 3" , price: 1800 , genero: "acción", img:"imagenes/gow3ps3.jpg", plataforma:"ps3",cant:1},
    {id:"21",nombre:"Resident Evil Village" , price: 2500 , genero: "survival", img:"imagenes/villageps5.jpg", plataforma:"ps5",cant:1},
    {id:"22",nombre:"Call Of Duty Vanguard" , price: 2550 , genero: "shooter", img:"imagenes/vanguardxboxone.jpeg", plataforma:"xbox",cant:1},
    {id:"23",nombre:"Death Strading" , price: 2800 , genero: "acción", img:"imagenes/deathstradingps5.jpg", plataforma:"ps5",cant:1},
    {id:"24",nombre:"God Of War Ragnarok" , price: 1500 ,genero: "acción", img: "imagenes/ragnarokps5.jpg", plataforma:"ps5",cant:1},
    {id:"25",nombre:"Ghost of Tsushima" , price: 1500 ,genero: "acción", img: "imagenes/ghostps5.jpg", plataforma:"ps5",cant:1}
];


const saveLocal = (clave, valor) => localStorage.setItem(clave, JSON.stringify(valor)); 
const readLocal = (clave) => JSON.parse(localStorage.getItem(clave));

class Producto{
    constructor({id,nombre , price ,genero, img, cant, plataforma}){
        this.id = id;
        this.nombre = nombre;
        this.price = parseInt(price);
        this.genero = genero;
        this.img = img;
        this.cant= cant;
        this.plataforma = plataforma;
    }
    productCard(){
        return `
            <div>
                <div class="container__box ${this.plataforma}" category="${this.genero}">
                    <img class="videogames" src="${this.img}" alt="">
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
                    <p class="item-price shoppingCartItemPrice">$${this.price}</p>
                </div>
                <div class="shopping-cart-quantity">
        
                <h6 class="shopping-cart-quantity-input shoppingCartItemQuantity">
                    ${this.cantidad}
                </h6>
                </div>
                    <button class="btn btn-danger buttonDelete" onclick="deleteItem(${this.id})" type="button">X</button>
                    
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
        this.juegoRepetido = [];

    }
    addProducto(producto){
        this.stock.push(new Producto(producto))
    }
    addProductos(productos){
        productos.forEach(producto => this.addProducto(producto));
    }
    addToCart(id){
        let existe = this.carrito.findIndex(producto => producto.id == id);
        console.log(existe);

        if(existe == -1){
            let prodInsertar = this.stock.find(producto => producto.id == id);
                prodInsertar.cantidad = 1;
            this.carrito.push(prodInsertar);
        }else{
            
            this.carrito[existe].cantidad ++;
            }
    }
    removeToCart(id){
        let existe = this.carrito.findIndex(producto => producto.id == id);
        if(existe == -1){
            this.carrito[existe].cantidad --;
        }else {
            this.carrito = this.carrito.filter(producto => producto.id != id);
        
        }
        }
    renderTienda(destino){
        document.getElementById(destino).innerHTML = this.stock.map(item => item.productCard()).join("");
    }
    renderCarrito(destino){
        document.getElementById(destino).innerHTML = this.carrito.map(item => item.shopCard()).join("");
    }
    calcularTotal(){
        return this.carrito.reduce((acumulador, actual) => acumulador + (actual.price * actual.cantidad), 0 );
    }
    
};


//
/*
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
*/

//---------------------------BUSQUEDA-DE-JUEGO-----


let search = document.getElementById("search").addEventListener("click" , buscarJuego);

//let deleteSearch = document.getElementById("deleteSearch").addEventListener("click" , borrarDiv);


function buscarJuego(){
    let stringSearch = document.getElementById("inputSearch").value;
    let juegoFilter = juegos.filter(juego => juego.nombre.includes(stringSearch));
    console.log(juegoFilter);
    
    
    for (const juego of juegoFilter) {
        const resultSearch = document.getElementById("container");
        
        let div = document.createElement("div");
        //resultSearch.parentNode.removeChild(div);
        div.innerHTML = `<div class="result">
                            <img class="videogames" src="${juego.img}" alt="">
                            <h3>${juego.nombre}</h3>
                            <h3 class="item-price"> $${juego.price}</h3>
                            <button value=${juego.id} class="elemento " onclick="comprar(value)">
                                Comprar
                            </button>
                        </div>`;
        resultSearch.appendChild(div);
    }
}
//-----------------------------------------------------------------------------------------




//-----------------------------------------




let localGasty = new Tienda();

localGasty.addProductos(juegos);

localGasty.renderTienda("container");


function comprar(id){
    
    localGasty.addToCart(id);
    console.log(localGasty);
    localGasty.renderCarrito("shop-container");
    updatePrecioTotal();
    
    
};

//---------------------


//----------------------------------------------------------------------

function deleteItem(id) {
    
        localGasty.removeToCart(id);
        console.log(localGasty);   
        localGasty.renderCarrito("shop-container");
        updatePrecioTotal();
}






//----------------------------------------------------------------------

function updatePrecioTotal() {
    
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    shoppingCartTotal.innerHTML = `$${localGasty.calcularTotal()}`;
}



//----------------------------------------------------------------------

$(document).ready(function(){
    
    $('.genero__item').click(function(){
    let catProduct = $(this).attr('category');    
    //ocultando productos
    $('.container__box').hide();
    $('.result').hide();
    //------mostrando por categoria    
    $('.container__box[category="'+catProduct+'"]').fadeIn();    
    });    
    $('.genero__item[category="all"]').click(function(){
    $('.container__box').fadeIn();
    })    
});
    
//--------por plataforma-------------------
$('#deleteSearch').click(function(){
    $('.result').hide();
    
});

$('#search').click(function(){
    $('.container__box').hide();
    
})
// Cómo se hace un let catProduct = $(this).attr('category') pero en vez de con la categoria con la clase?
$('#ps5').click(function(){
    $('.container__box').hide();
    $('.result').hide();
    $('.ps5').fadeIn();
});
$('#ps4').click(function(){
    $('.container__box').hide();
    $('.result').hide();
    $('.ps4').fadeIn();
});
$('#ps3').click(function(){
    $('.container__box').hide();
    $('.result').hide();
    $('.ps3').fadeIn();
});
$('#ps2').click(function(){
    $('.container__box').hide();
    $('.result').hide();
    $('.ps2').fadeIn();
});
$('#xbox').click(function(){
    $('.container__box').hide();
    $('.result').hide();
    $('.xbox').fadeIn();
});

//------TARJETA--------------
const tarjeta = document.getElementById("tarjeta");
const btnAbrirFormulario = document.getElementById("btn-abrir-formulario");
const formulario = document.getElementById("formulario-tarjeta");
const numeroTarjeta = document.querySelector("#tarjeta .numero");
const nombreTarjeta = document.querySelector("#tarjeta .nombre");
const logoBanco = document.getElementById("logo-marca");
const firma = document.querySelector("#tarjeta .firma p");
const expiracionMes = document.querySelector("#expiracion .mes");
const expiracionYear = document.querySelector("#expiracion .year");
const ccv = document.querySelector("#tarjeta .ccv");
const bancoBg = document.getElementById("bancoBg");

//-----------------
tarjeta.addEventListener("click" , () => {
    tarjeta.classList.toggle("active");
});
//----------------
btnAbrirFormulario.addEventListener("click" , () => {
    btnAbrirFormulario.classList.toggle("active");
    formulario.classList.toggle("active");
});
//-----------------select mes
for( let i= 1; i <=12 ; i++ ){
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    formulario.selectMes.appendChild(option);
};

//-----------------select año
const yearActual = new Date().getFullYear();
for ( let i = yearActual; i <= yearActual + 8 ; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    formulario.selectYear.appendChild(option);
};
//---------------------
const mostrarFrente = () => {
    if(tarjeta.classList.contains("active")){
        tarjeta.classList.remove("active");
    }
}



//-----input numero de tarjeta

formulario.inputNumero.addEventListener("keyup" , (e) => {
    let valorInput = e.target.value;
    //expresiones regulares
    formulario.inputNumero.value = valorInput.replace(/\s/g , '' )
    .replace(/\D/g , '' )
    .replace(/([0-9]{4})/g , "$1 ")
    .trim();

    numeroTarjeta.textContent = valorInput; 

    if(valorInput == "" ){
        numeroTarjeta.textContent = "#### #### #### ####";
        logoBanco.innerHTML = "";
    };

    if( valorInput[0] == 4) {
        logoBanco.innerHTML = "";
        const imagen = document.createElement("img");
        imagen.src = "imagenes/logos/visa.png";
        logoBanco.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoBanco.innerHTML = "";
        const imagen = document.createElement("img");
        imagen.src = "imagenes/logos/mastercard.png";
        logoBanco.appendChild(imagen);
    };

    if( valorInput[0] == 4 && valorInput[1] == 5 && valorInput[2] == 4 && valorInput[3] == 0){
        bancoBg.innerHTML = "";
        const tarjetaImage = document.createElement("img");
        tarjetaImage.src = "imagenes/bbva-bg.jpg";
        bancoBg.appendChild(tarjetaImage);
    } else if ( valorInput[0] == 4 && valorInput[1] == 5 && valorInput[2] == 1 && valorInput[3] == 7 ) {
        bancoBg.innerHTML = "";
        const tarjetaImage = document.createElement("img");
        tarjetaImage.src = "imagenes/galicia-logo.png";
        bancoBg.appendChild(tarjetaImage);
    }

    mostrarFrente();
});


//--------------input nombre tarjeta

formulario.inputNombre.addEventListener("keyup" , (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g , "");
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ""){
        nombreTarjeta.textContent = "Natalia Natalia";
    };

    mostrarFrente();
});

//---------------------

formulario.selectMes.addEventListener("change" , (e) => {
    expiracionMes.textContent = e.target.value;
    mostrarFrente();
});

//-------------

formulario.selectYear.addEventListener("change" , (e) => {
    expiracionYear.textContent = e.target.value.slice(2);
    mostrarFrente();
});

//-------------

formulario.inputCCV.addEventListener("keyup" , ()=> {
    if(!tarjeta.classList.contains("active")){
        tarjeta.classList.toggle("active");
    }

    formulario.inputCCV.value = formulario.inputCCV.value.replace(/\s/g , '' ).replace(/\D/g , '' );

    ccv.textContent = formulario.inputCCV.value;
})