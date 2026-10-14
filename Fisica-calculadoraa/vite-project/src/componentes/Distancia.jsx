import Calculadora from "./Calculadora";

function Distancia() {
    return (
        <Calculadora
            titulo="Calcular Distancia"
            endpoint="distancia"
            campos={[
                { name: "velocidad", label: "Velocidad (m/s)" },
                { name: "tiempo", label: "Tiempo (s)" },
            ]}
        />
    );
}

export default Distancia;
