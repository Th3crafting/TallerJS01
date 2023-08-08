// Leer 3 números, determinar el mayor de los 3 e imprimirlos
// Dillan Real Nieto

'use strict'

let texto1 = prompt('Ingrese el primer número.');
let texto2 = prompt('Ingrese el segundo número.');
let texto3 = prompt('Ingrese el tercer número.');
let numeroMayor = 0;

let numero1 = parseFloat(texto1);
let numero2 = parseFloat(texto2);
let numero3 = parseFloat(texto3);

while(isNaN(numero1)){
    texto1 = prompt('Ingrese nuevamente el primer número.');
    numero1 = parseFloat(texto1);
}

while(isNaN(numero2)){
    texto2 = prompt('Ingrese nuevamente el segundo número.');
    numero2 = parseFloat(texto2);
}

while(isNaN(numero3)){
    texto3 = prompt('Ingrese nuevamente el tercer número.');
    numero3 = parseFloat(texto3);
}

numeroMayor = numero1;

if(numeroMayor<numero2){
    numeroMayor = numero2;
}

if(numeroMayor<numero3){
    numeroMayor = numero3;
}

alert (`El número mayor entre estos tres números (${numero1}, ${numero2}, ${numero3}) es el número ${numeroMayor}.`);