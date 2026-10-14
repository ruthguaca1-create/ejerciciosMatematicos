import { Routes, Route, Navigate } from "react-router-dom";

// Componentes de Física
import Sidebar from "./componentes/sidebar";
import Velocidad from "./componentes/velocidad";
import Distancia from "./componentes/Distancia";
import Tiempo from "./componentes/Tiempo";
import Fuerza from "./componentes/Fuerza";
import Peso from "./componentes/Peso";
import EnergiaCinetica from "./componentes/EnergiaCinetica";
import Densidad from "./componentes/Densidad";
import Aceleracion from "./componentes/Aceleracion";

// Componentes de Matemáticas
import Rectangulo from "./matematicas/Rectangulo";
import Triangulo from "./matematicas/Triangulo";
import Circulo from "./matematicas/Circulo";
import Hipotenusa from "./matematicas/Hipotenusa";
import CatetoOpuesto from "./matematicas/CatetoOpuesto";
import Angulo from "./matematicas/Angulo";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-600 p-6">
        <Routes>
          {/* Rutas principales */}
          <Route
            path="/"
            element={<Navigate to="/velocidad" replace />}
          />

          {/* Física */}
          <Route path="/velocidad" element={<Velocidad />} />
          <Route path="/distancia" element={<Distancia />} />
          <Route path="/tiempo" element={<Tiempo />} />
          <Route path="/fuerza" element={<Fuerza />} />
          <Route path="/peso" element={<Peso />} />
          <Route
            path="/energia-cinetica"
            element={<EnergiaCinetica />}
          />
          <Route path="/densidad" element={<Densidad />} />
          <Route path="/aceleracion" element={<Aceleracion />} />

          {/* Matemáticas */}
          <Route
            path="/area-rectangulo"
            element={<Rectangulo />}
          />

          <Route
            path="/area-triangulo"
            element={<Triangulo />}
          />

          <Route
            path="/area-circulo"
            element={<Circulo />}
          />

          <Route
            path="/hipotenusa"
            element={<Hipotenusa />}
          />

          <Route
            path="/cateto-opuesto"
            element={<CatetoOpuesto />}
          />

          <Route
            path="/angulo"
            element={<Angulo />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;