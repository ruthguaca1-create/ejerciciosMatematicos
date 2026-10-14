import Calculadora from "./Calculadora";

function Aceleracion() {
    return (
        <Calculadora
            titulo="Calcular Aceleración"
            endpoint="aceleracion"
            campos={[
                { name: "velocidadInicial", label: "Velocidad inicial (m/s)" },
                { name: "velocidadFinal", label: "Velocidad final (m/s)" },
                { name: "tiempo", label: "Tiempo (s)" },
            ]}
        />
    );
}

export default Aceleracion;
