import Calculadora from "../componentes/Calculadora";
import { calcularMatematicas } from "../api";

function CatetoOpuesto() {
    return (
        <Calculadora
            titulo="Calcular Cateto Opuesto"
            endpoint="cateto-opuesto"
            calcularFuncion={calcularMatematicas}
            campos={[
                {
                    name: "hipotenusa",
                    label: "Hipotenusa"
                },
                {
                    name: "catetoAdyacente",
                    label: "Cateto adyacente"
                }
            ]}
        />
    );
}

export default CatetoOpuesto;