// Dado 4 notas de un estudiante, cacular el promedio del 
// estudiante, imprimir las notas y el promedio
// Dillan Real Nieto

'use strict'

let texto1 = prompt('Ingrese la primera nota:');
let texto2 = prompt('Ingrese la segunda nota:');
let texto3 = prompt('Ingrese la tercera nota:');
let texto4 = prompt('Ingrese la cuarta nota:');
let promedio = 0;

let nota1 = parseFloat(texto1);
let nota2 = parseFloat(texto2);
let nota3 = parseFloat(texto3);
let nota4 = parseFloat(texto4);

while(isNaN(nota1)){
    texto1 = prompt('Vuelva a ingresar la primera nota:');
    nota1 = parseFloat(texto1);
}

while(isNaN(nota2)){
    texto2 = prompt('Vuelva a ingresar la segunda nota:');
    nota2 = parseFloat(texto2);
}

while(isNaN(nota3)){
    texto3 = prompt('Vuelva a ingresar la tercera nota:');
    nota3 = parseFloat(texto3);
}

while(isNaN(nota4)){
    texto4 = prompt('Vuelva a ingresar la cuarta nota:');
    nota4 = parseFloat(texto4);
}

promedio = (nota1+nota2+nota3+nota4)/4;
promedioDecimal = promedio.toFixed(2);

alert (`El promedio de las notas (${nota1}, ${nota2}, ${nota3}, ${nota4}) es el siguiente ${promedioDecimal}.`);