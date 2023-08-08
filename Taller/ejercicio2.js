// Leer un número e imprimir un mensaje si es positivo o negativo
// Dillan Real Nieto

'use strict';

let texto = prompt('Ingrese un número:');

let numero = parseFloat(texto);

while(isNaN(numero)){
    texto = prompt('Ingrese solamente números:');
    numero = parseFloat(texto);
}

if(numero>0){
    alert (`El número ${numero} es positivo.`);
}else if(numero<0){
    alert (`El número ${numero} es negativo.`);
}else{
    alert (`El número ${numero} es 0`);
}