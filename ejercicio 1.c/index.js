//Crear una fórmula para saber si un número es o no es un múltiplo de 2.//

function esMultiploDeDos(numero)
{
    return (numero %2 === 0);
}

const inputNumero= prompt("Ingrese un número:"); 
const miNumero= parseInt(inputNumero);
console.log(esMultiploDeDos(miNumero) ? miNumero + " es múltiplo de 2" : miNumero + " no es múltiplo de 2"); 
