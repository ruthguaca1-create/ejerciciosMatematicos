const API_URL = "http://localhost:3000";

async function calcular(endpoint, datos) {
    let respuesta;

    try {
        respuesta = await fetch(`${API_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });
    } catch {
        throw new Error(
            "No se pudo conectar con el servidor. ¿Está corriendo el backend en el puerto 3000?"
        );
    }

    const cuerpo = await respuesta.json().catch(() => ({}));

    if (!respuesta.ok) {
        throw new Error(
            cuerpo.error || "Ocurrió un error al calcular."
        );
    }

    return cuerpo;
}

// Física
export async function calcularFisica(endpoint, datos) {
    return calcular(`fisica/${endpoint}`, datos);
}

// Matemáticas
export async function calcularMatematicas(endpoint, datos) {
    return calcular(`matematicas/${endpoint}`, datos);
}