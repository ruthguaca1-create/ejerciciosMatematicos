import Calculadora from "./Calculadora";

function Fuerza() {
    return (
        <Calculadora
            titulo="Calcular Fuerza"
            endpoint="fuerza"
            campos={[
                { name: "masa", label: "Masa (kg)" },
                { name: "aceleracion", label: "Aceleración (m/s²)" },
            ]}
        />
    );
}

export default Fuerza;
