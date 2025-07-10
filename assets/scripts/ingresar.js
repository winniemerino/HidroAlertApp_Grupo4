document.querySelector('.pantalla-inicio').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del enlace

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Aquí deberías validar el usuario y la contraseña
    // Si son correctos, actualiza el menú
    const storedEmail = localStorage.getItem('email'); // Obtener el correo guardado
    const storedNombres = localStorage.getItem('nombres'); // Obtener el nombre guardado

    if (username === storedEmail && password) { // Asegúrate de validar la contraseña correctamente
        // Redirigir a menu2.0.html
        window.location.href = 'menu2.0.html';
    }
});
