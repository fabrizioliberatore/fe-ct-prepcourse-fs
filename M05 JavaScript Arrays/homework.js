/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   
   // for(let i = 0; i < array.length; i++){
   //    array[i] = array[i] +1;
   // }
   // return array;

   var newArray = [];
   for (var i = 0; i < array.length; i++) {
      newArray.push(array[i] + 1);
   }
   return newArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
//no puedo poner return.push(elemento);porque me devuelve un nro igual
// a la cantidad de elementos,seria como array.length del array+1

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

//opcion 2
//var array2 = array.unshift(elemento);
//return array2;
//}

//no puedo poner return.unshift(elemento);porque me devuelve un nro igual
// a la cantidad de elementos,seria como array.length del array+1

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

//opcion 1

   var frase = palabras.reduce(function(acc, elemento){
      return acc + " " + elemento;
   })
   return frase;
}

//opcion 2 , funcion por fuera

//  function union(acc, elemento){
// return acc + " " + elemento;
// }
// var frase = palabras.reduce(union);
// return frase;


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:


   //    return array.includes(elemento);
// }

//opcion 2 ,for

for(var i=0; i < array.length; i++){
   if (array[i] === elemento)
   return true;
}
return false;
}


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
  var suma = arrayOfNums.reduce(function (acc, elemento){
return acc + elemento;
   });

return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
  var suma = resultadosTest.reduce(function(acc, elemento){
   return acc + elemento;
  })
  return suma/resultadosTest.length;
}

//opcion 2 ,  for

// var suma = 0;
// for (var = 0; i < resultadosTest.length; i++){
// suma =suma + resultadosTest[i];
// }
// return suma/resultadosTest.length;
// }

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   
//   return Math.max(...arrayOfNums);
// }

//opcion 2 for each

var mayor = arrayOfNums[0];
arrayOfNums.forEach(function(numero){
if(numero > mayor){
   mayor = numero;
}
})
return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var producto = 1
if (arguments.length > 0){
 for (var i= 0; i < arguments.length; i++) {
   producto = producto * arguments[i];
 }
 return producto;
} else  {
   return 0;
}
}
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   //for each
   var total = 0;
   array.forEach(function(numero){
      if(numero > 18){
         total++;
      }
   })
   return total;
}

//opcion 2 , for

// var contador = 0;
// for (var i = 0; i < array.length; i++) {
//    if (array[i] > 18) {
//       contador++;
//    }
// }
// return contador;
// }

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7){
   return "Es fin de semana";
} else {
   return "Es dia laboral";
}
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numstr = num.toString();
   return numstr[0] === "9";

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var primerValor = array[0];

   for (var i = 1; i < array.length; i++) {  // pongo i=1 porque quiero empezar a comparar desde el segundo dato
   if (array[i] !== primerValor){
      return false;
   }
}
return true;
}




function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses = [];
array.forEach(function(mes){
   if(mes === "Enero" || mes === "Marzo" || mes === "Noviembre"){
      meses.push(mes)
   }
})
if(meses.length === 3){
   return meses;
}else{
   return "No se encontraron los meses pedidos";
}
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

//    var tabla =[];
//    if(i = 0; i <= 10; i++){
//       var resultado = 6 * i;
//       tabla.push(resultado);
//    }
//    return resultado;
// }

//opcion 2, .map

// var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function tabladel6(elemento){
//    return elemento * 6;
// }
// var sextuple = numeros.map(tabladel6);
// return sextuple;
// }

//opcion 2, .map (callback)

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sextuple = numeros.map(function(elemento){
   return elemento * 6;
})
return sextuple;
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   //foreach
   var mayoresA100 = [];
   array.forEach(function(numero){
      if (numero > 100){
         mayoresA100.push(numero);
}   
})
return mayoresA100
}

//opcion 2,for

// var mayoresA100 = [];
// for(var i = 0; i < array.length; i++){
//    if(array[i] > 100){
//     mayoresA100.push(array[i]);
//    }
// }
// return mayoresA100;
// }

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
   var array = [];
   var suma = num;
   for (var i = 0; i < 10; i++) {
     suma = suma + 2;
     if (suma === i + 1) break;
     else {
       array.push(suma);
     }
   }
   if (i < 10) {
     return "Se interrumpió la ejecución";
   } else {
     return array;
   }
}
   

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   // var array = [];
   // var suma = num;
   // for (var i = 0; i < 10; i++) {
   //   if (i + 1 === 5) 
   //   continue;
   //   else {
   //    suma = suma + 2;
   //     array.push(suma);
   //   }
   // }
   //   return array;
   // }

   //opcion 2,while

   var i = 0;
   const new_array = [];
   
   while(i < 10){
   i++;
   
   
   if(i === 5){
   
   continue;
   
   }
   new_array.push(num += 2);
   }
   
   return new_array;
   
   }


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
