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



// bucle for!!!!!!!!!!!!!!

// for(var i = 0; i< "hola".length; i++) {
//     console.log("hola"[i]);
// }


// function encontrarVocalA(string) {
//     for( var i = 0; i < string.length; i++){
//        if(string[i] === "a") {
//         return "encontre vocal a";
//        } 
       
// }return "no hay vocal a";
// }
// console.log(encontrarVocalA("hola"))

//bucle while!!!!!!!!!!!!!!!!

// var count = 1;
// while(count < 6) {
//     console.log("count es: ", + count);
//     count++;
// }


//bucle do while!!!!!!!!!!!

// var count = 1;
// do{
//     console.log("count es: " + count);
//     count++;}
//     while(count < 6);



//switch!!!!!!!!!!!!!!!!

// function diasemana(dia){
//     switch(dia){
//         case "lunes": console.log("es lunes");
//     
//         case "martes": console.log("es martes");
//     
//         case "miercoles": console.log("es mercoles");
//     
//         case "jueves":console.log("es jueves");
//     
//         case "viernes":console.log("es viernes");
//     
//         default: console.log("no es valido");
//     
//     }
// }
// diasemana("jueves")   //si saco un break, sigue a la siguiente linea por mas que sea verdadera

//   para las tareas

// function conection(status) {

//     switch(status){
//         case 1 : 
//         return = "Online";
//         case 2 : 
//         return = "Away";
//         default : 
//         return = "Offline";
//      }
//     return estado;
// }
//      si lo quiero acotado

// function conection(status) {

//     switch(status){
//         case 1 : 
//         return "Online";
//         case 2 : 
//         return  "Away";
//         default : 
//         return  "Offline";
//      }
//     }

//arrays!!!!!!!!!!!

//for!!!!!!!
 
// var comidas = ["pizza", "pasta", "panchos"];
// for(let i =0 ; i < comidas.length; i++){
//     console.log(comidas[i]);
// }






//for of!!!!!!!!!

// var comidas =["pizza", "pasta", "panchos"];
// for(comida of comidas){
//     console.log(comida);
// }