//  Ejercicio 1.e
//Hacer un algoritmo con JavaScript que reciba cualquier letra del abecedario y muestre en consola el valor booleano que indique si es o no una vocal//

function esVocal(letra) {
    const vocales = ['A', 'E', 'I', 'O', 'U'];
    const letraMayuscula = letra.toUpperCase();
    return vocales.includes(letraMayuscula);
}

const letraIngresada = prompt("Ingrese una letra del abecedario");
const resultado = esVocal(letraIngresada);
console.log(`La letra ${letraIngresada} ${resultado ? 'es' : 'no es'} una vocal.`);
alert(`La letra ${letraIngresada} ${resultado ? 'es' : 'no es'} una vocal.`);