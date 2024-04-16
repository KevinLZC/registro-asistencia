// Función para verificar si el nombre cumple con las condiciones
function validarNombre(nombre) {
    // Verificar si el nombre tiene al menos un nombre y dos apellidos
    const PalabrasN = nombre.trim().split(/\s+/);
    console.log(nombre)
    if (validarPalabra(nombre)) return false;
    if (PalabrasN.length >= 3) {
        for (let i = 0; i < PalabrasN.length; i++) {
            if (!(PalabrasN[i].length >= 3)) {
                return false;
            }
        }
        return true
    } 
}

function validarPalabra (palabra) {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    console.log(format.test(palabra));
    return format.test(palabra);
    
}

// Función para calcular el factor de asistencia según las reglas dadas
function calcularFactorAsistencia(gradoGrupo) {
    const grupo = gradoGrupo.charAt(1);
    if (grupo === 'A' || grupo === 'B' || grupo === 'C') {
        return 2;
    } else if (parseInt(gradoGrupo.charAt(0)) >= 4) {
        return 3;
    } else if (gradoGrupo === '7G') {
        return 0;
    } else {
        return 1;
    }
}

// Función principal
function registrarAsistencia(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const nombre = document.getElementById("nombre").value;
    const numeroCuenta = document.getElementById("numeroCuenta").value;
    const gradoGrupo = document.getElementById("gradoGrupo").value;

    // Validar la entrada
    if (!validarNombre(nombre)) {
        alert("El nombre no es válido. Debe tener al menos un nombre y dos apellidos.");
        return;
    }

    // Calcular el factor de asistencia
    const factorAsistencia = calcularFactorAsistencia(gradoGrupo);

    alert("El factor de asistencia para el estudiante es: " + factorAsistencia);
}

// Obtener el formulario y agregar un listener para el evento submit
const formulario = document.getElementById("registroForm");
formulario.addEventListener("submit", registrarAsistencia);