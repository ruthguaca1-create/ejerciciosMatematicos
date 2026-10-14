import Calculadora from "./Calculadora";

function Densidad() {
    return (
        <Calculadora
            titulo="Calcular Densidad"
            endpoint="densidad"
            campos={[
                { name: "masa", label: "Masa (kg)" },
                { name: "volumen", label: "Volumen (m³)" },
            ]}
        />
    );
}

export default Densidad;
