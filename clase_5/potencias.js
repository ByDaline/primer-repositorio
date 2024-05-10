"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Escriba la base: ");
console.log("La base es " + base);
var exponente = rls.questionInt("Escriba el exponente: ");
console.log("El exponente es " + exponente);
function elevarBase(base, exponente) {
    var resultado = 1;
    for (var i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
function calcularPotencia(base, exponente) {
    var resultadoPotencia;
    if (exponente === 0) {
        resultadoPotencia = 1;
        console.log("El resultado de la potencia es: " + resultadoPotencia);
    }
    else {
        resultadoPotencia = elevarBase(base, exponente);
        console.log("El resultado de la potencia es: " + resultadoPotencia);
    }
}
calcularPotencia(base, exponente);
