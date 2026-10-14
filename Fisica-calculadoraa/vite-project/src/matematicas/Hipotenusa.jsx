import Calculadora from "../componentes/Calculadora";
import { calcularMatematicas } from "../api";

function Hipotenusa() {
    return (
        <Calculadora
            titulo="Calcular Hipotenusa"
            endpoint="hipotenusa"
            calcularFuncion={calcularMatematicas}
            campos={[
                {
                    name: "catetoOpuesto",
                    label: "Cateto opuesto"
                },
                {
                    name: "catetoAdyacente",
                    label: "Cateto adyacente"
                }
            ]}
        />
    );
}

export default Hipotenusa;