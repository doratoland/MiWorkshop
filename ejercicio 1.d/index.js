//Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario básico por horas y el número de horas trabajadas en un mes y realice lo siguiente:
//i. Calcular su salario básico mensual
//ii. Determinar si recibe o no subsidio de transportes. Un empleado recibe este subsidio cuando el salario mensual básico es menor o igual a $700.000 COP
//iii. Mostrar en consola el nombre del empleado, su salario básico mensual y si recibe o no subsidio de transporte//

function calcularSalarioMensual() {
    const nombre = prompt("Ingrese el nombre del empleado:");
    const salarioPorHora = parseFloat(prompt("Ingrese el salario por hora:"));
    const horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas:"));

    const salarioMensual = salarioPorHora * horasTrabajadas;
    const recibeSubsidio = salarioMensual <= 700000;

    // Mostrar resultados en consola
    console.log("Nombre del empleado: " + nombre);
    console.log("Salario básico mensual: $" + salarioMensual.toFixed(2));
    console.log("Recibe subsidio de transporte: " + (recibeSubsidio ? "Sí" : "No"));

    const mensaje =
        "Nombre del empleado: " + nombre + "\n" +
        "Salario básico mensual: $" + salarioMensual.toFixed(2) + "\n" +
        "Recibe subsidio de transporte: " + (recibeSubsidio ? "Sí" : "No");

    // Mostrar resultados con alert
    alert(mensaje);
}

// Llamar a la función para ejecutarla
calcularSalarioMensual();
