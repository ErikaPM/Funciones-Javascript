//FUNCIONES

// function saludar(nombre) {
//   console.log("Hola " + nombre);
// }

// saludar("Erika la favorita del profe");

// function calculadora(numero1, numero2) {
//   var suma = numero1 + numero2;
//   return suma;
// }

// console.log(calculadora(3, 4));

//Puedo hacer varias operaciones simultaneas

// function calculadora(numero1, numero2) {
//   console.log("suma: " + (numero1 + numero2));
//   console.log("resta: " + (numero1 - numero2));
//   console.log("multiplicacion: " + numero1 * numero2);
// }

// calculadora(3, 4);

//Y agregarle otros criterios:

// function mostrarPantalla(numero1, numero2) {
//   document.write("suma: " + (numero1 + numero2));
//   document.write("resta: " + (numero1 - numero2));
//   document.write("multiplicacion: " + numero1 * numero2);
// }

// function mostrarConsola(numero1, numero2) {
//   console.log("suma: " + (numero1 + numero2));
//   console.log("resta: " + (numero1 - numero2));
//   console.log("multiplicacion: " + numero1 * numero2);
// }

// function calculadora(numero1, numero2, mostrar = true) {
//   if (mostrar == true) {
//     mostrarPantalla(numero1, numero1);
//   } else {
//     mostrarConsola(numero1, numero2);
//   }
// }

// calculadora(3, 4, true);

// //TALLER

// //Punto 1 a

// function sumar(x1, x2) {
//   var sumar = x1 + x2;
//   return sumar;
// }

// //b

// function restar(x, y) {
//     var restar = x + y;
//     return restar;
//   }

//   //c

// function multiplicar(x, y) {
//     var multiplicar = x * y;
//     return multiplicar;
//   }

//    //d

//   function dividir(x, y) {
//     var dividir = x / y;
//     return dividir;
//   }

//Punto 2

// var numero1 = parseInt(prompt("Ingrese un numero:"));
// var numero2 = parseInt(prompt("Ingrese otro numero:"));
// var operacion = prompt("Ingresa la operacion que quieres realizar");

// function calculadora(numero1, numero2) {
//   if (operacion == "+") {
//     alert("suma " + (numero1 + numero2));
//   }
//   if (operacion == "-") {
//     alert("resta " + (numero1 - numero2));
//   }
//   if (operacion == "*") {
//     alert("multiplicar " + numero1 * numero2);
//   }
//   if (operacion == "/") {
//     alert("dividir " + numero1 / numero2);
//   }
// }

// calculadora(numero1, numero2);

//Punto 3
// var numero;

// function par(numero) {
//   if (numero % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function impar(numero) {
//   if (numero % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // console.log(par(1));
// // console.log(par(2));
// // console.log(par(3));
// // console.log(par(4));

// console.log(impar(1));
// console.log(impar(2));
// console.log(impar(3));
// console.log(impar(4));

//Punto 4

var numero = parseInt(prompt("ingresa un número"));

function primo(numero) {
  if (numero / numero == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(4);
