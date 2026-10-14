import Calculadora from "./Calculadora";

function Tiempo() {
    return (
        <Calculadora
            titulo="Calcular Tiempo"
            endpoint="tiempo"
            campos={[
                { name: "distancia", label: "Distancia (m)" },
                { name: "velocidad", label: "Velocidad (m/s)" },
            ]}
        />
    );
}

export default Tiempo;
