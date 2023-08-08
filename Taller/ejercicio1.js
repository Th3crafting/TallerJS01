// Realizar un programa que pida al usuario 2 números y se realicen
// las 4 operaciones básicas (suma, resta, multiplicación, división)
// imprimir los resultados
// Dillan Real Nieto

'use strict';

let texto1 = prompt('Ingrese el primer número:');
let texto2 = prompt('Ingrese el segundo número:');
let resultadoSuma = 0;
let resultadoResta = 0;
let resultadoMultiplicacion = 0;
let resultadoDivision = 0;

let numero1 = parseFloat(texto1);
let numero2 = parseFloat(texto2);

while(isNaN(numero1)){
    texto1 = prompt('Vuelva a ingresar el primer número:');
    numero1 = parseFloat(texto1);
}

while(isNaN(numero2)){
    texto2 = prompt('Vuelva a ingresar el segundo número');
    numero2 = parseFloat(texto2);
}

resultadoSuma = numero1 + numero2;
resultadoResta = numero1 - numero2;
resultadoMultiplicacion = numero1 * numero2;
resultadoDivision = numero1 / numero2;

alert (`El resultado de la suma es ${resultadoSuma}.`);
alert (`El resultado de la resta es ${resultadoResta}.`);
alert (`El resultado de la multiplicación es ${resultadoMultiplicacion}.`);

if(numero2===0){
    alert('La división entre cero no es posible.');
}else{
    alert (`El resultado de la división es ${resultadoDivision}.`);
}