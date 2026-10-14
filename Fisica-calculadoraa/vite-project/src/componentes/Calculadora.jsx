import { useState } from "react";
import { calcularFisica } from "../api";

function Calculadora({
    titulo,
    endpoint,
    campos,
    calcularFuncion = calcularFisica
}) {
    const valoresIniciales = Object.fromEntries(
        campos.map((campo) => [campo.name, ""])
    );

    const [valores, setValores] = useState(valoresIniciales);
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(false);

    const handleChange = (name, value) => {
        setValores((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCalcular = async () => {
        setError(null);
        setResultado(null);
        setCargando(true);

        try {
            // Convertir los valores a números
            const datos = Object.fromEntries(
                Object.entries(valores).map(([clave, valor]) => [
                    clave,
                    valor === "" ? "" : Number(valor)
                ])
            );

            // Enviar los datos al backend
            const respuesta = await calcularFuncion(endpoint, datos);

            // Guardar el resultado
            setResultado(respuesta);

        } catch (err) {
            // Mostrar el mensaje que viene del backend
            setError(err.message);

        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="max-w-md mx-auto">

            <h2 className="text-2xl font-bold mb-4 text-sky-900">
                {titulo}
            </h2>

            <div className="flex flex-col gap-3">

                {campos.map((campo) => (
                    <input
                        key={campo.name}
                        type="text"
                        inputMode="decimal"
                        placeholder={campo.label}
                        value={valores[campo.name]}
                        onChange={(e) =>
                            handleChange(campo.name, e.target.value)
                        }
                        className="border border-slate-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                    />
                ))}

                <button
                    type="button"
                    onClick={handleCalcular}
                    disabled={cargando}
                    className="bg-sky-900 text-white rounded p-2 hover:bg-sky-700 transition disabled:opacity-50"
                >
                    {cargando ? "Calculando..." : "Calcular"}
                </button>

            </div>

            {/* Mensaje de error */}
            {error && (
                <p className="text-red-600 mt-4 border border-red-200 bg-red-50 rounded p-2">
                    {error}
                </p>
            )}

            {/* Resultado */}
            {resultado && !error && (
                <p className="text-emerald-700 mt-4 font-medium border border-emerald-200 bg-emerald-50 rounded p-2">
                    Resultado:{" "}
                    {resultado.mensaje ??
                        (typeof resultado.resultado === "number"
                            ? resultado.resultado.toFixed(2)
                            : resultado.resultado)}
                    {resultado.unidad
                        ? ` ${resultado.unidad}`
                        : ""}
                </p>
            )}

        </div>
    );
}

export default Calculadora;