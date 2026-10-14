import Calculadora from "./Calculadora";

function Velocidad() {
    return (
        <Calculadora
            titulo="Calcular Velocidad"
            endpoint="velocidad"
            campos={[
                { name: "distancia", label: "Distancia (m)" },
                { name: "tiempo", label: "Tiempo (s)" },
            ]}
        />
    );
}

export default Velocidad;
