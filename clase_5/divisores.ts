/*
Ejercicio: Divisores
• Implemente un método llamado cantidadDeDivisores que 
reciba un número entero y devuelva la cantidad de divisores 
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 
16, por lo que la respuesta debería ser 5 
• Re-utilice el método esMultiplo implementado para el ejercicio 
anterior
*/
import * as rls from 'readline-sync';
let numEntero : number = rls.questionInt ("Escriba un numero: ");

function esMultiplo(numEntero : number, multiploDe : number) : boolean {
    return numEntero % multiploDe === 0;
}
function cantidadDeDivisores(numEntero:number) : number{
    let cantidad=0;
    for(let i = 1; i<=numEntero;i++){
        if (esMultiplo(numEntero, i)){
            cantidad++;
        }
    }
    return cantidad;
}
console.log(`El número de divisores de ${numEntero} es: ${cantidadDeDivisores(numEntero)}`);