import Calculadora from "./Calculadora";

function EnergiaCinetica() {
    return (
        <Calculadora
            titulo="Calcular Energía Cinética"
            endpoint="energia"
            campos={[
                { name: "masa", label: "Masa (kg)" },
                { name: "velocidad", label: "Velocidad (m/s)" },
            ]}
        />
    );
}

export default EnergiaCinetica;
