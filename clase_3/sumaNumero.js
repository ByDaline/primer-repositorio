"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var primerNumero = readlineSync.questionInt("Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
var segundoNumero = readlineSync.questionInt("Ingrese el segundo número: ");
console.log("el segundo número es ", segundoNumero);
var resultado = primerNumero + segundoNumero;
console.log("El resultado de la suma es:", resultado);
//Área del Rectángulo
var base = readlineSync.questionInt("Ingrese la base: ");
var altura = readlineSync.questionInt("Ingrese la altura: ");
var area = base * altura;
console.log("El área es: ", area);
//Área del Rectángulo
var baseRectangulo = readlineSync.questionInt("Ingrese la base: ");
var alturaRectangulo = readlineSync.questionInt("Ingrese la altura: ");
var areaRectangulo = baseRectangulo * alturaRectangulo;
console.log("El área es: ", areaRectangulo);
