// Leer un número, determinar si es par o impar e imprimir un mensaje
// Dillan Real Nieto

'use strict'

let texto = prompt('Ingrese un número:');

let numero = parseFloat(texto);

while(isNaN(numero)){
    texto = prompt('Vuelva a ingresar el primer número:');
    numero = parseFloat(texto);
}

if(numero%2===0){
    alert(`El número ${numero} es un número par.`);
}else{
    alert(`El número ${numero} es un número impar.`);
}