import * as readlineSync from 'readline-sync'; 
let primerNumero : number = readlineSync.questionInt( "Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
let segundoNumero : number = readlineSync.questionInt( "Ingrese el segundo número: ");
console.log("el segundo número es ", segundoNumero);
let resultado : number = primerNumero + segundoNumero;
console.log("El resultado de la suma es:", resultado);

//Área del Rectángulo
let base : number = readlineSync.questionInt( "Ingrese la base: ");
let altura : number = readlineSync.questionInt( "Ingrese la altura: ");
let area : number = base * altura;
console.log("El área es: ", area);

//Área del Rectángulo
let baseRectangulo : number = readlineSync.questionInt( "Ingrese la base: ");
let alturaRectangulo : number = readlineSync.questionInt( "Ingrese la altura: ");
let areaRectangulo : number = baseRectangulo * alturaRectangulo;
console.log("El área es: ", areaRectangulo);
