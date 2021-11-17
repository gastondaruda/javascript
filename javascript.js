
alert("Hola Facundo, te invito a hacer click en el desafío que quieras ver. Gracias.")


/*
let usuarioRegistrado = "Gastón"
let password = 1234;
let error = 0;

function acceder(){
for( let i = 1; i <= 3 ; i++ ) {

    let usuario = prompt("Ingrese su usuario por favor");
    let contraseña = prompt("Ingrese su contraseña por favor");

    if (usuario == usuarioRegistrado && password == contraseña) {
        alert("Bienvenido " + usuarioRegistrado)
        break;

    } 
    else {
        alert("Contraseña incorrecta. Intento nº" + i);
        error = error + 1;
        if(error == 3) {
            alert("Chau tarjeta");
            break;
        }
    
    
        
        
        
    }
    
}
}

document.getElementById("desafio3").onclick = function () {
    acceder();
}

*/


//----------------WHILE-------------------------


/*
function bucle() {
    let Usuario = prompt("Ingrese su nombre o ESC para salir")
while ( Usuario != "ESC") {
    console.log("Hola " + Usuario);
    Usuario = prompt("Ingrese su nombre o ESC para salir"); 
}
}



document.getElementById("desafioWhile").onclick = function () {
    bucle();
}





*/
// DESAFIO FUNCIONES

//push en https://github.com/gastondaruda/javascript



function sumar(){
    let a = parseInt(prompt("Ingresa el primer precio"));
    let b = parseInt(prompt("Ingresa el segundo precio"));
    let c = a + b;
    console.log("la suma de los dos productos que elegiste es de $ " + c)
    return c
}



let suma = sumar();

document.getElementById("suma").onclick = function () {
    sumar(suma);
    
}


//---------------------
/*
function iva(suma){
    let iva = parseFloat(suma * 0.21);
    console.log("El iva ahora es de " + iva)
    return iva;
}

let precioIva = iva(suma);

document.getElementById("iva").onclick = function () {
    iva(suma);
    }

let total = precioIva + suma;

*/
//--------------------
/*
function precioTotal(){
    
    console.log("El resultado final con el iva sumado es de $" + total)
    return 
}

let precioTotal = total();


document.getElementById("total").onclick = function () {
    precioTotal(total);
    }


    document.write(precioTotal),

*/

/*
function todo(){
    sumar();
    iva(c);
    total(c, precioIva);
}



document.getElementById("todo").onclick = function () {
    todo();
    }

*/

//DESAFIO OBJETOS


//CONSTRUCTORES Y PROPIEDADES
//clases
class videogame{
    constructor ( nombre , empresa, year, precio){
    this.nombre = nombre;
    this.empresa = empresa;
    this.year = year;
    this.precio = precio

}

monto(){
    alert("El precio es de " + this.nombre + " es de " + this.precio)
}
}



let GodOfWar = new videogame("God of War" , "Santa monica", 2018 , "$1500")

document.getElementById("gow").onclick = function () {
    console.log(GodOfWar);
    GodOfWar.monto();
}




let ReIV = new videogame ( "Resident Evil 4", "Capcom" , 2005, "$1200");
document.getElementById("re").onclick = function () {
    console.log(ReIV);
    ReIV.monto();
}
    
let uncharted = new videogame("Uncharted 4: El deselace de un ladrón", "Naughhty Dog" , 2026, "$800")

    document.getElementById("uncharted").onclick = function () {
        console.log(uncharted);
        uncharted.monto();
    }


let ReIII = new videogame ("Resident Evil 3 Remake" , "Capcom" , 2020, "$1600")
document.getElementById("re3").onclick = function () {
    console.log(ReIII);
    ReIII.monto();
}


let MetalGearSolid = new videogame("Metal Gear Solid: Ground zeroes" , "Kojima Productions" , 2014, "$850")
document.getElementById("mgs").onclick = function () {
    console.log(MetalGearSolid);
    MetalGearSolid.monto();
}


let Dbz = new videogame("Dragon Ball Fighters" , "Arc System Works" , 2017, "$1000")
document.getElementById("dbz").onclick = function () {
    console.log(Dbz);
    Dbz.monto();
}


//----------- Objetos dentro de un Array
let games = [
    {
        nombre: "Uncharted 3",
        empresa: "naughty Dogs",
        year: 2010,
        precio: 900
    },

    {
        nombre: "Fifa",
        empresa: "Fifa",
        year: 2021,
        precio: 2300
    }
    
    
]

console.log(games)


//Ordenar un Array-----------------------
let nombreJuegos = [
    {nombre: "God of war"},
    {nombre:"Limbo"},
    {nombre:"Call of Duty"},
    {nombre:"Warzone"},
    {nombre:"Battlefield"},
    {nombre:"Outlast"},
    {nombre:"Tetris"},
]

nombreJuegos.sort((a , b) => {
    if(a.nombre < b.nombre){
        return -1;
    }
    if ( a.nombre > b.nombre){
        return 1;
    }
    return 0;
});

console.log(nombreJuegos);


