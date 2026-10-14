import Calculadora from "../componentes/Calculadora";
import { calcularMatematicas } from "../api";

function Triangulo() {
    return (
        <Calculadora
            titulo="Área del triángulo"
            endpoint="area-triangulo"
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

export default Triangulo;