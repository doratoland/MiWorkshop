//Ejercicio 1.f//
//El aeropuerto El Dorado se encuentra en remodelación y requiere un programa para suministrarlo a su personal de seguridad con el objetivo de brindar información a los turistas sobre donde se debe tramitar las salidas internacionales para nacionales y extranjeros. Se le solicita diseñar este programa para que reciba el primer dígito de un número de pasaporte y que muestre el valor booleano que indique si el turista es del país o extranjero. Todos los No. de pasaporte que inicien con la letra A son nacionales//

function esNacional(letraPasaporte) {
    const letrasNacionales = { "A": true };
    const letraMayuscula = letraPasaporte.toUpperCase();
    return letrasNacionales[letraMayuscula] || false;
}

const inputPrimerDigito = prompt("Ingrese el número de pasaporte").charAt(0);
const esTuristaNacional = esNacional(inputPrimerDigito);

console.log(`El turista ${esTuristaNacional ? 'es nacional' : 'es extranjero'}.`);
alert(`¿Es el turista nacional? ${esTuristaNacional ? 'Sí' : 'No'}.`);
