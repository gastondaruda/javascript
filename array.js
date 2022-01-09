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

let search = document.getElementById("search").addEventListener("click" , buscarJuego);
//let deleteSearch = document.getElementById("deleteSearch").addEventListener("click" , borrarDiv);


function buscarJuego(){
    let stringSearch = document.getElementById("inputSearch").value;
    let juegoFilter = juegos.filter(juego => juego.nombre.includes(stringSearch));
    console.log(juegoFilter);
    
    for (const juego of juegoFilter) {
        const resultSearch = document.getElementById("resultSearch");
        
        let div = document.createElement("div");
        //resultSearch.parentNode.removeChild(div);
        div.innerHTML = `<div class="result"
                            <h3>${juego.nombre}</h3>
                            <img src="${juego.img}">
                        </div>`;
        resultSearch.appendChild(div);

    }
}

/*
function borrarDiv(resultSearch){
    

    const result = document.getElementsByClassName("result");
    resultSearch.remove(result);
}
*/

$('#deleteSearch').click(function(){
    
    
    //ocultando productos
    $('.result').hide();
    
    //------mostrando por categoria
    
    
    
    
    });

/*
const juegosFilter2 = juegos.filter(juego => juego.nombre.includes("n"));
console.log(juegosFilter2);
*/

/*

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];


for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
*/