let haceFrio : boolean = true;
let estaLloviendo : boolean = false;
if (haceFrio) {
    if (estaLloviendo) {
            console.log('Me quedo en casa');
        } else {
            console.log('Vengo al curso del CFL');
        }
}
import * as rls from 'readline-sync';
let nroDeseado : number = rls.questionInt("Escriba el número que desea verificar si es mayor o no a 20: ");
if (nroDeseado > 20) { 
    console.log('El número es mayor a 20: ' + nroDeseado);
    } else {
        console.log('El número es menor o igual a 20: ' + nroDeseado); 
}

