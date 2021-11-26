


let juegos = [
    
    {nombre:"God Of War" , genero: "Acción"},
    {nombre:"Need for Speed Payback" , genero: "Autos"},
    {nombre:"Outlast" , genero: "Survival Horror"},
    {nombre:"Resident Evil4" , genero: "Survival Horror"},
    {nombre:"Resident Evil 3", genero: "Survival Horror"},
    {nombre:"Forza Horizon 4" , genero: "Autos"},
    {nombre: "Horizon Zero Dawn", genero: "Ación"},
    {nombre:"Uncharted 4" , genero: "Acción"},
    {nombre: "Metal Gear Solid V", genero:"Acción"},
    {nombre: "Dragon Ball Fighters Z", genero:"Acción"},
    {nombre:"Fifa" , genero: "Deporte"},
    {nombre:"Pes" , genero: "Deporte"},
    {nombre:"Guitar Hero 5" , genero: "Música"}
]


let JuegosDeACcion = juegos.filter(function(juegos){
    return juegos.genero === "Acción";
});

let JuegosDeSurvival = juegos.filter(function(juegos){
    return juegos.genero === "Survival Horror";
});

let JuegosDeAutos = juegos.filter(function(juegos){
    return juegos.genero === "Autos";
});

let JuegosDeDeporte = juegos.filter(function(juegos){
    return juegos.genero === "Deporte";
});

function accion(){
    console.log(JuegosDeACcion);
}
function deporte(){
    console.log(JuegosDeDeporte);
}

function autos(){
    console.log(JuegosDeAutos);
}

function survival(){
    console.log(JuegosDeSurvival);
}

$(document).ready(function(){
    //AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
    $('.genero__items .genero__item[category="all"]').addClass('btn-active');

    //-----------------------------------

    $('.genero__item').click(function(){
        let catProduct = $(this).attr('category');

        //ocultando productos
        $('.container__box').hide();

        //------

        $('.container__box[category="'+catProduct+'"]').show();


    });

    $('.genero__item[category="all"]').click(function(){
        $('.container__box').show();
    })


});



// --------------lista de deseados


let valor =  document.getElementsByClassName("elemento");
function listaDeDeseados(valor){

    
    let lista = document.getElementById("lista");

    
    let nuevoLi = document.createElement("li");

    nuevoLi.innerHTML = valor;
    
    lista.appendChild( nuevoLi);
   
    
    

}


/*
function listaCompras(){

    let valor =  document.getElementById("elemento");
    let lista = document.getElementById("lista");

    
    let nuevoLi = document.createElement("li");

    nuevoLi.innerHTML = `${valor.value}`;
    
    lista.appendChild( nuevoLi);

}
*/





function borrarElemento(){

    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);

}