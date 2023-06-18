//variables numbers y string

const res = require("express/lib/response");

var numero = 1234;
var nombre = "alejandro";
// null test

var telefono = "15232";
var telefono = null;

// operadores

var suma = 2 + 7;
var resta = 3 - 1;
var division = 4 / 3;
var multiplicacion = 4 * 3;
var potencia = 4 ** 3;
var modulo = 10 % 3;

// operadores de comparacion

var comparacion = 3 >= 4;
var comparar = 3 <= 3;

// operadores logicos

var resultadologico = (100 < 200)&&(300 > 150);
var resultadologico = (100>200)||(320===300);

// metodos  '.length'

var nombre = "fabrizio";

//funciones, sin parametros

function logHola(){
    conzole.log("Hola!");
}


// funciones, con parametros

function logHola(nombre){
    console.log("Hola," + nombre);
}


//funciones con return

function sumar(a, b){
var suma = a + b;
return suma;
}

//condicionales!!!!!!!!!!!!!!!!!!!!!!!!!

// var edad = 15;
// if (edad > 18) {
//   // console.log('soy mayor de edad');
// } else {
//     //console.log('soy menor de edad');
// }

//function dominioDelPais(dominio){
//      console.log('el pais es colombia');}
//      console.log('el pais es brasil');}
//     else{
//         console.log('el pais es argentina');
//     }
// }

// dominioDelPais('br')

