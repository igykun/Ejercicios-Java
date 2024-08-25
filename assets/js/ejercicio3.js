// Función result
function result(resultado) {
    document.querySelector('.resultado').textContent = resultado;
}

// Obtenemos el boton sumar y le entregamos la funcion sumar.
document.getElementById('btn-sumar').addEventListener('click', function() {
    //declaramos variables y las llenamos con el valor de los campos input
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    //nos aseguramos que los valores sean numeros
    if (!isNaN(valor1) && !isNaN(valor2)) {
        let suma = valor1 + valor2;
        result(suma);
    } else {
        result('Por favor ingrese números válidos');
    }
});

// Evento click para restar
document.getElementById('btn-restar').addEventListener('click', function() {
    //declaramos variables y las llenamos con el valor de los campos input
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    //nos aseguramos que los valores sean numeros
    if (!isNaN(valor1) && !isNaN(valor2)) {
        let resta = valor1 - valor2;
        // Si el resultado es menor a 0 se muestra 0, de lo contrario se muerta el restulado.
        if (resta < 0) {
            result(0);
        } else {
            result(resta);
        }
    } else {
        result('Por favor ingrese números válidos');
    }
});
