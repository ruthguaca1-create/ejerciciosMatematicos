import Calculadora from "../componentes/Calculadora";
import { calcularMatematicas } from "../api";

function Rectangulo() {
    return (
        <Calculadora
            titulo="Área del rectángulo"
            endpoint="area-rectangulo"
            calcularFuncion={calcularMatematicas}
            campos={[
                {
                    name: "base",
                    label: "Base"
                },
                {
                    name: "altura",
                    label: "Altura"
                }
            ]}
        />
    );
}

export default Rectangulo;