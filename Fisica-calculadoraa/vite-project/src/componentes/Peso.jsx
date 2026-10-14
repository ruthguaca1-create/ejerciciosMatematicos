import Calculadora from "./Calculadora";

function Peso() {
    return (
        <Calculadora
            titulo="Calcular Peso"
            endpoint="peso"
            campos={[{ name: "masa", label: "Masa (kg)" }]}
        />
    );
}

export default Peso;
