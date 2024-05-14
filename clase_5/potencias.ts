/*
Ejercicio: Potencias
• Realice un programa que devuelva la potencia de un número. 
• La base y el exponente deben ser ingresados por teclado. 
• Sólo deben admitirse exponentes mayores o iguales a cero. 
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos. 
*/

import * as rls from 'readline-sync';
let base : number = rls.questionInt ("Escriba la base: ");
console.log("La base es " + base);
let exponente : number = rls.questionInt ("Escriba el exponente: ");
console.log("El exponente es " + exponente);

function exponentePotencia (base : number,exponente : number){
    let resultado:number=1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}
function calcularPotencia(base : number, exponente : number){
    let resultadoPotencia : number;
    if (exponente === 0){
        resultadoPotencia=1;
        console.log("El resultado de la potencia es: " + resultadoPotencia);
    } else {
        resultadoPotencia=exponentePotencia(base, exponente);
        console.log("El resultado de la potencia es: " + resultadoPotencia);
    }
}
calcularPotencia(base, exponente);