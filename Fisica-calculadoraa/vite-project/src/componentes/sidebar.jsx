import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const fisica = [
        { nombre: "Velocidad", ruta: "/velocidad" },
        { nombre: "Distancia", ruta: "/distancia" },
        { nombre: "Tiempo", ruta: "/tiempo" },
        { nombre: "Aceleración", ruta: "/aceleracion" },
        { nombre: "Fuerza", ruta: "/fuerza" },
        { nombre: "Peso", ruta: "/peso" },
        { nombre: "Densidad", ruta: "/densidad" },
        { nombre: "Energía Cinética", ruta: "/energia-cinetica" },
    ];

    const matematicas = [
        { nombre: "Área Rectángulo", ruta: "/area-rectangulo" },
        { nombre: "Área Triángulo", ruta: "/area-triangulo" },
        { nombre: "Área Círculo", ruta: "/area-circulo" },
        { nombre: "Hipotenusa", ruta: "/hipotenusa" },
        { nombre: "Cateto Opuesto", ruta: "/cateto-opuesto" },
        { nombre: "Ángulo", ruta: "/angulo" },
    ];

    const location = useLocation();

    return (
        <div className="w-64 h-screen bg-sky-900 text-white p-6">
            
            <h2 className="text-xl font-bold mb-6">
                Cálculos Físicos
            </h2>

            {/* Cálculos de Física */}
            <ul>
                {fisica.map((item, index) => (
                    <SidebarItem
                        key={index}
                        nombre={item.nombre}
                        ruta={item.ruta}
                        activo={location.pathname === item.ruta}
                    />
                ))}
            </ul>

            {/* Separador */}
            <h3 className="text-sm font-bold uppercase mt-6 mb-3 text-sky-200">
                Cálculos Matemáticos
            </h3>

            {/* Cálculos de Matemáticas */}
            <ul>
                {matematicas.map((item, index) => (
                    <SidebarItem
                        key={index}
                        nombre={item.nombre}
                        ruta={item.ruta}
                        activo={location.pathname === item.ruta}
                    />
                ))}
            </ul>

        </div>
    );
}

function SidebarItem({ nombre, ruta, activo }) {
    return (
        <li className="list-none">
            <Link
                className={`block p-1 rounded ${
                    activo
                        ? "bg-sky-700 font-semibold"
                        : "hover:bg-sky-700"
                }`}
                to={ruta}
            >
                {nombre}
            </Link>
        </li>
    );
}

export default Sidebar;