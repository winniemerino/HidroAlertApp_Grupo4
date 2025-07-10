document.getElementById('registroForm').addEventListener('submit', function(event) {
        // Evitar el envío del formulario
        event.preventDefault();
        // Obtener los valores de los campos
        const nombres = document.getElementById('nombres-y-apellidos').value.trim();
        const dni = document.getElementById('DNI').value.trim();
        const email = document.getElementById('email').value.trim();
        const departamento = document.getElementById('departamento').value.trim();
        const provincia = document.getElementById('provincia').value.trim();
        const distrito = document.getElementById('distrito').value.trim();
        const contraseña = document.getElementById('contraseña').value.trim();
        const confirmarContraseña = document.getElementById('confirmar-contraseña').value.trim();
        // Validar que todos los campos estén completos
        if (!nombres || !dni || !email || !departamento || !provincia || !distrito || !contraseña || !confirmarContraseña) {
          alert('Por favor, completa todos los campos requeridos.');
          return; // Detener el envío del formulario
        }
        // Validar que las contraseñas coincidan
        if (contraseña !== confirmarContraseña) {alert('Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.');
          return; // Detener el envío del formulario
        }
        // Guardar datos en localStorage
    localStorage.setItem('nombres', nombres);
    localStorage.setItem('dni', dni);
    localStorage.setItem('email', email);
    localStorage.setItem('departamento', departamento);
    localStorage.setItem('provincia', provincia);
    localStorage.setItem('distrito', distrito);
        // Si todo es válido, redirigir a ingresar.html
        window.location.href = 'ingresar.html'; // Redirigir a la página de ingreso
      });
