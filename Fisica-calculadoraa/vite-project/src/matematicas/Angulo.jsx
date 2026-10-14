import Calculadora from "../componentes/Calculadora";
import { calcularMatematicas } from "../api";

function Angulo() {
    return (
        <Calculadora
            titulo="Calcular Ángulo"
            endpoint="angulo"
            calcularFuncion={calcularMatematicas}
            campos={[
                {
                    name: "catetoOpuesto",
                    label: "Cateto opuesto"
                },
                {
                    name: "hipotenusa",
                    label: "Hipotenusa"
                }
            ]}
        />
    );
}

export default Angulo;