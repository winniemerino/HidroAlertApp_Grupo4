// Mostrar modal de reporte
document.querySelector('.btn-report').addEventListener('click', function() {
  document.getElementById('modal-reporte').classList.remove('hidden');
});

// Función para mostrar vista previa de la imagen
function mostrarVistaPrevia(input) {
  const preview = document.getElementById('preview-image');
  const uploadText = document.getElementById('upload-text');
  
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
      uploadText.textContent = 'Imagen seleccionada';
      uploadText.style.color = '#3a7b8d';
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}
function mostrarVistaPrevia(input) {
            const preview = document.getElementById('preview-image');
            const placeholder = document.getElementById('upload-placeholder');
            
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                    placeholder.style.display = 'none';
                }
                
                reader.readAsDataURL(input.files[0]);
            }
        }

// Función para generar reporte
function generarReporte() {
  const opcion = document.querySelector('input[name="problema"]:checked');
  const imagen = document.getElementById('evidencia').files[0];
  const comentario = document.querySelector('.textarea-box').value.trim(); // Asegúrate de que el selector sea correcto
  
  if (!opcion) {
    mostrarAlerta('Por favor seleccione un tipo de problema');
    return;
  }
  
  if (!imagen) {
    mostrarAlerta('Por favor suba una imagen como evidencia');
    return;
  }
  
  if (comentario === '') {
    mostrarAlerta('Por favor ingrese una descripción del problema');
    return;
  }
  
  // Aquí iría la lógica para enviar el reporte al servidor
  
  // Mostrar confirmación
  cerrarModal('modal-reporte'); // Cierra el modal de reporte
   mostrarSeccion('seccion-historial'); // Muestra la sección de historial
  document.getElementById('modal-exito').classList.remove('hidden'); // Muestra el modal de éxito
}


// Función para mostrar alertas
function mostrarAlerta(mensaje) {
  alert(mensaje);
}

// Función para cerrar el modal de éxito
function cerrarExito() {
  document.getElementById('modal-exito').classList.add('hidden');
}

// Función para cerrar el modal de reporte
function cerrarModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}
