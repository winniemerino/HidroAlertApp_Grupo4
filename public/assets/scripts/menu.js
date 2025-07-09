// Función para cambiar imagen de perfil
document.getElementById('change-image-btn').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('user-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Al cargar la página, actualizar el nombre y la ubicación
window.onload = function() {
    const userName = localStorage.getItem('nombres');
    const departamento = localStorage.getItem('departamento');
    const provincia = localStorage.getItem('provincia');
    const distrito = localStorage.getItem('distrito');

    // Unir la ubicación
    let userLocation = '';
    if (departamento) userLocation += departamento;
    if (provincia) userLocation += (userLocation ? ', ' : '') + provincia;
    if (distrito) userLocation += (userLocation ? ', ' : '') + distrito;

    if (userName) {
        document.getElementById('user-name').textContent = userName;
    }
    if (userLocation) {
        document.getElementById('user-location').textContent = userLocation;
    }
};
