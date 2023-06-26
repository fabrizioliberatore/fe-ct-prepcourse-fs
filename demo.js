//variables numbers y string

// const res = require("express/lib/response");

// var numero = 1234;
// var nombre = "alejandro";
// // null test

// var telefono = "15232";
// var telefono = null;

// // operadores

// var suma = 2 + 7;
// var resta = 3 - 1;
// var division = 4 / 3;
// var multiplicacion = 4 * 3;
// var potencia = 4 ** 3;
// var modulo = 10 % 3;

// // operadores de comparacion

// var comparacion = 3 >= 4;
// var comparar = 3 <= 3;

// // operadores logicos

// // var resultadologico = (100 < 200)&&(300 > 150);
// // var resultadologico = (100>200)||(320===300);

// // // metodos  '.length'

// // var nombre = "fabrizio";

// // //funciones, sin parametros

// // function logHola(){
// //     console.log("Hola!");
// // }


// funciones, con parametros

// function logHola(nombre){
//     console.log("Hola," + nombre);
// }


//funciones con return

// function sumar(a, b){
// var suma = a + b;
// return suma;
// }

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
//         break;     
//         case "martes": console.log("es martes");
//         break; 
//         case "miercoles": console.log("es mercoles");
//         break;
//         case "jueves":console.log("es jueves");
//         break;
//         case "viernes":console.log("es viernes");
//         break;
//         default: console.log("no es valido");
//         break;
//     }
// }
// diasemana("lunes")


// diasemana("jueves")   //si saco un break, sigue a la siguiente linea por mas que sea verdadera

//   para las tareas

// function conection(status) {

//     switch(status){
//         case 1 : 
//         return  "Online";
//         case 2 : 
//         return  "Away";
//         default : 
//         return  "Offline";
//      }
// }
// console.log(conection(3))

    //  si lo quiero acotado

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
//     console.log(conection(1))

//arrays!!!!!!!!!!!

//for!!!!!!!
 
// var comidas = ["pizza", "pasta", "panchos"];
// for(let i =0 ; i < comidas.length; i++){
//     console.log(comidas[i]);
// }
// var comidas = ["pasta", "pizza", "tarta"];
// var hola = "hola123"
// comidas.push("sandwich", "empanada", hola);

// console.log(comidas)

//push!!!!!!!!!!con funcion

// function comida(comidas,elemento){
//     var comidas2 = comidas.push(elemento);
// return comidas;
// }
// console.log(comida(["panchos", "pastas","cafe"],"cafecito"));



// function agregarItemAlComienzoDelArray(array, elemento) {
//     // Agrega el "elemento" al comienzo del arreglo recibido.
//     // Retorna el arreglo.
//     // Tu código:
//     array.unshift(elemento);
//     return array;
//  }
// console.log(agregarItemAlComienzoDelArray(["pasta", "pepsi"], "coca"))

//for of!!!!!!!!!

// var comidas =["pizza", "pasta", "panchos"];
// for(comida of comidas){
//     console.log(comida);
// }

// M05

//arrays

// function devolverultimoelemento(array){

//     return array[array.length - 1];
// }

// console.log(devolverultimoelemento(["pizza","empanada", "helado"]))

// function incrementarporuno(array)// array[1,2,3,4] a [2,3,4,5]
// {
//     for(var i= 0; i < array.length; i++){
//         array[i] = array[i]+ 1;
//     }
//     return array;
// }
// console.log(incrementarporuno([1,2,3,4]))

// function incrementarporuno(array)// array para string es igual
// {
//     for(var i= 0; i < array.length; i++){
//         array[i] = array[i] + " + papas";
//     }
//     return array;
// }
// console.log(incrementarporuno(["pepsi","coca","vino","fanta"]))

// function incrementarporuno(array){
// var newArray = [];
// for (let i = 0; i < array.length; i++) {
//    newArray.push(array[i] + 1);
// }
// return newArray;
// }
// console.log(incrementarporuno([1,2,3,4]))

//push,pop,unshift,shift

// var comidas = ["Pizza", "hamburguesa", "pastas", "lasagna"];

// var hola = "hola123"
// comidas.push("sandwich", "empanadas",[1,2,3], 4, "hola", "hola", hola);

 //  console.log(comidas)

// comidas.pop();
// comidas.pop();
// comidas.pop();
// comidas[1] = "platano";
// comidas.unshift("hot dog", "papa");
//comidas.shift();

// console.log(comidas);


// function agregarItemAlFinalDelArray(array, elemento) {
//     // Agrega el "elemento" al final del arreglo recibido.
//     // Retorna el arreglo.
//     // Tu código:
//     array.push(elemento);
//     return array;
//  }
// console.log(agregarItemAlFinalDelArray(["pizza","empanada"], "coca"))



// clase 3

//forEach!!!!

//A)

// var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// autos.forEach(function(elemento, indice){
//     console.log(elemento, indice);
// });   

////puedo poner solo elemento , o ambos en function..lo mismo en console.log

// var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// autos.forEach(function(elemento){
//     console.log(elemento);
// }); 

//// o 

// var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// autos.forEach(function(elemento, indice){
//     console.log(elemento);
// }); 


//B)

// var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// function mostrarNombres(elemento, indice){
//   console.log(elemento, indice);
// }
// autos.forEach(mostrarNombres);



//.map

// var numeros = [2,3,4,5];

// function multi(elemento){
//   return elemento * 3;
// }
// var triple =numeros.map(multi);

// console.log(triple);


//opcion 2

// var numeros = [2,3,4,5];

// function multi(elemento){
//   return elemento * 3;
// }

// numeros.map(function(elemento){
//   return elemento * 3;
// })


//_______________.reduce_______________________________

//con numeros

// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var suma = numeros.reduce(function(acc, elemento){  

//   return acc + elemento
// })

// return suma;

//_________opcion 2(call back)

// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sumatoria (acc, elemento) {
//   return acc + elemento;
// }

// var suma = numeros.reduce(sumatoria)  // puedo solo poner numeros.reduce(sumatoria),pero no veria lo que me devuelve en la consola

// return suma;

//_____opcion 2 (multiplicacion)

// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function multiplicarDosNumeros(a,b){
//   return a * b; //1x2,2x3,6x4.....
// }
// var productos = numeros.reduce(multiplicarDosNumeros);

// return productos;

//____con palabras

// var palabras = ["Hola ", "mi ", "nombre ", "es ", "Martin "];

// var frase = palabras.reduce(function(acc, elemento){
  
//   return acc + elemento;
// })

//return frase;


//_________arguments_________

// function saludo(nombre, apellido){
//   return arguments[0]        //si pongo console.log(arguments), me muestra todo del objeto
// }
// saludo("fabrizio", "Liberatore")




//  M05!!!!!


// function union(acc, palabra){
//     return acc + " " + palabra;
//     }
//     var concatenacion = palabras.reduce(union);
//     return concatenacion;
    
// promedio 

// function union(acc, palabra){
//     return acc + " " + palabra;
//     }
//     var concatenacion = palabras.reduce(union);
//     return concatenacion;
    

// opcion 2
    

// function union(acc, palabra){
//     return acc + " " + palabra;
//     }
//     var concatenacion = palabras.reduce(union);
//     return concatenacion;
    

//---------------------------clase 4----------------------------------------

//____________objetos_______________
// ej:
// var usuario = {
// nombre : "fabrizio",
// password : "hola123",
// edad : 33,
// online : true,
// amigos:["maria", "jose"]
// };
////____dot notation

// console.log(usuario);
// console.log(usuario.nombre);
// console.log(usuario.online)

////_____bracket notation

// console.log([usuario]);
// console.log(usuario["nombre"]);
// console.log(usuario["amigos"])


//// ____asignar

// usuario.pais = "colombia";
// usuario["identificacion"] = 1234;

// //___modificar

// usuario.pais = "argentina";
// usuario["pais"] = "uruguay";

////______diferencia entre dot y bracket

// var usuario = {
//     nombre : "fabrizio",
//     password : "hola123",
//     edad : 33,
//     online : true,
//     amigos:["maria", "jose"]
//     }

// var profesion = "developer";
// usuario["123hola"] = false;
// usuario.jungla = profesion;
// usuario[profesion] = profesion;
// usuario["jungla"] = profesion;
// usuario["123hola"] = false;

// console.log(profesion);


////_______delete


// var usuario = {
//     nombre : "fabrizio",
//     password : "hola123",
//     pais : "argentina",
//     edad : 33,
//     online : true,
//     amigos:["maria", "jose"]
//     }
//     usuario["123hola"] = false;
//     usuario.lio = "fabri"
//     delete usuario["123hola"];
//     delete usuario.edad;

//     var pais = "bolivia"; // esta variable no existe dentro del objeto,sigue siendo argentina
    
//     console.log(usuario);

//_____metodos de los objetos_______

// //ej 1

// var usuario = {
//     decirHola : function(){
//         return "hola";
//     }

// }

//     console.log(usuario.decirHola());

// //ej 2

// var usuario = {
//         nombre : "fabrizio",
//         password : "hola123",
//         pais : "argentina",
//         edad : 33,
//         online : true,
//         amigos:["maria", "jose"]
//         }

// usuario.decirHola = function(){
//     return "hola";
// }
// console.log(usuario.decirHola());

// //ej 3

// var usuario = {
//     nombre : "fabrizio",
//     password : "hola123",
//     pais : "argentina",
//     edad : 33,
//     online : true,
//     amigos:["maria", "jose"]
//     }

// usuario.decirHola = function(name){
// return "hola" + " " + name;
// }
// console.log(usuario.decirHola("lucas"));



//______metodo hasOwnProperty()

// var objeto ={
//     nombre : "felipe",
//     decirHola : function(name){
//         return "hola" + " " + name
//     }
// }
// console.log(Object.keys(objeto));
// console.log(objeto.hasOwnProperty("nombre")); // me da true
// console.log(objeto.hasOwnProperty("pais")); //me da false


//_____metodo Object.keys

// var usuario = {
//         nombre : "fabrizio",
//         password : "hola123",
//         pais : "argentina",
//         edad : 33,
//         online : true,
//         amigos:["maria", "jose"]
//         }

//         console.log(Object.keys(usuario));

//_______metodo Object.values

// var usuario = {
//         nombre : "fabrizio",
//         password : "hola123",
//         pais : "argentina",
//         edad : 33,
//         online : true,
//         amigos:["maria", "jose"]
//         }

//         console.log(Object.values(usuario));

//         console.log(usuario.amigos.length); // puedo usar el .length en una propiedad que sea un array
//         console.log(usuario.amigos.push("joel")); 
//         console.log(usuario);//agrego a joel


//______________ bucle for in__________

// var usuario = {
//             nombre : "fabrizio",
//             password : "hola123",
//             pais : "argentina",
//             edad : 33,
//             online : true,
//             amigos:["maria", "jose"]
//             }
// for(var clave in usuario){
//     console.log(usuario[clave]);//muestra todos  los valores de cada propiedad
// }

// for(var clave in usuario){
//     console.log(clave);//muestra todas las propiedades
// }


//___para ver cantidad de claves totales

// var usuario = {
//             nombre : "fabrizio",
//             password : "hola123",
//             pais : "argentina",
//             edad : 33,
//             online : true,
//             amigos:["maria", "jose"]
//             }
//  var total = 0;
// for(var clave in usuario){
//     total++;
//    return total;
// }


//_____this

var usuario = {
            nombre : "fabrizio",
            password : "hola123",
            pais : "argentina",
            edad : 33,
            online : true,
            amigos:["maria", "jose"],
        
            }




usuario.decirHola = function(){
    return "hola " + this.nombre;
}
console.log(usuario.decirHola());