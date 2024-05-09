"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var haceFrio = true;
var estaLloviendo = false;
if (haceFrio) {
    if (estaLloviendo) {
        console.log('Me quedo en casa');
    }
    else {
        console.log('Vengo al curso del CFL');
    }
}
var rls = require("readline-sync");
var nroDeseado = rls.questionInt("Escriba el número que desea verificar si es mayor o no a 20: ");
if (nroDeseado > 20) {
    console.log('El número es mayor a 20: ' + nroDeseado);
}
else {
    console.log('El número es menor o igual a 20: ' + nroDeseado);
}
var numero1 = 3;
var numero2 = 5;
var resultado;
resultado = numero1 > numero2; // resultado=false
resultado = numero1 < numero2; // resultado=true
numero1 = 5;
numero2 = 5;
resultado = numero1 >= numero2; // resultado=true
resultado = numero1 <= numero2; // resultado=true
resultado = numero1 == numero2; // resultado=true
resultado = numero1 != numero2; // resultado=false
