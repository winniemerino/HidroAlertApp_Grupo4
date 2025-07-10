

// Función para mostrar la sección de historial
function mostrarHistorial() {
  const historialSection = document.getElementById('seccion-historial');
  
  // Aquí puedes agregar la lógica para cargar los reportes realizados
  // Por ejemplo, podrías hacer una llamada a un servidor para obtener los datos
  
  // Muestra la sección de historial
  mostrarSeccion('seccion-historial');
}

// Llama a esta función cuando se cargue la sección de historial
document.addEventListener('DOMContentLoaded', function() {
  mostrarHistorial();
});
