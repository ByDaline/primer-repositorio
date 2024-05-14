"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Ejercicio: Divisores
• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior
*/
var rls = require("readline-sync");
var numEntero = rls.questionInt("Escriba un numero: ");
function esMultiplo(numEntero, multiploDe) {
    return numEntero % multiploDe === 0;
}
function cantidadDeDivisores(numEntero) {
    var cantidad = 0;
    for (var i = 1; i <= numEntero; i++) {
        if (esMultiplo(numEntero, i)) {
            cantidad++;
        }
    }
    return cantidad;
}
console.log("El n\u00FAmero de divisores de ".concat(numEntero, " es: ").concat(cantidadDeDivisores(numEntero)));
