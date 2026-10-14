import Calculadora from "../componentes/Calculadora";
import { calcularMatematicas } from "../api";

function Circulo() {
    return (
        <Calculadora
            titulo="Área del círculo"
            endpoint="area-circulo"
            calcularFuncion={calcularMatematicas}
            campos={[
                {
                    name: "radio",
                    label: "Radio"
                }
            ]}
        />
    );
}

export default Circulo;