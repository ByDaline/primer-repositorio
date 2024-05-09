import * as rls from 'readline-sync';
let num : number = rls.questionInt("Escriba un número: ");
if (num === 0) {
    console.log("El nÃºmero ingresado es " + num + ".");
    } else if (num % 2 === 0) {
        console.log("El " + num + " es par.");
        } else {
            console.log("El " + num + " es impar.");
        }