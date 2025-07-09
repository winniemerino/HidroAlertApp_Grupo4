// NOTIFICACIONES
function mostrarSeccion(idSeccion) {
  // Oculta todas las secciones
  document.querySelectorAll('.content-section').forEach(seccion => {
    seccion.style.display = 'none';
  });

  // Muestra solo la que fue seleccionada
  const seccionActiva = document.getElementById(idSeccion);
  if (seccionActiva) {
    seccionActiva.style.display = 'block';
  }

  // Opcional: resaltar botón activo
  document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
  const boton = document.querySelector(`[onclick="mostrarSeccion('${idSeccion}')"]`);
  if (boton) boton.classList.add('active');
}
