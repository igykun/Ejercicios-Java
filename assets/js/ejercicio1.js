document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value.trim();
    let asunto = document.getElementById('asunto').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    // Expresión regular para solo permitir caracteres alfabéticos
    let regex = /^[A-Za-z\s]+$/;

    // Banderas de validación
    let esValido = true;

    // Validamos que la variable nombre no este vacio o que su contenido sean solo letras
    if (nombre === '' || !regex.test(nombre)) {
        document.querySelector('.errorNombre').textContent = 'El nombre es requerido.';
        esValido = false;
    } else {
        document.querySelector('.errorNombre').textContent = '';
    }

    // Validamos que la variable asunto no este vacio o que su contenido sean solo letras
    if (asunto === '' || !regex.test(asunto)) {
        document.querySelector('.errorAsunto').textContent = 'El asunto es requerido.';
        esValido = false;
    } else {
        document.querySelector('.errorAsunto').textContent = '';
    }

    // Validamos que la variable mensaje no este vacio o que su contenido sean solo letras
    if (mensaje === '' || !regex.test(mensaje)) {
        document.querySelector('.errorMensaje').textContent = 'El mensaje es requerido.';
        esValido = false;
    } else {
        document.querySelector('.errorMensaje').textContent = '';
    }

    // Si logra pasar todas las validaciones se envia un mensaje directo al div resultado
    if (esValido) {
        document.querySelector('.resultado').textContent = 'Mensaje enviado con éxito.';
    } else {
        document.querySelector('.resultado').textContent = '';
    }
});
