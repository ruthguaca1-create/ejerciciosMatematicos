import express from "express";

import {
    areaRectangulo,
    perimetroRectangulo,
    areaTriangulo,
    areaCirculo,
    hipotenusa,
    angulo,
    catetoOpuesto
} from "../controllers/matematicas.controller.js";

import {
    validarAreaRectangulo,
    validarPerimetroRectangulo,
    validarAreaTriangulo,
    validarAreaCirculo,
    validarHipotenusa,
    validarCatetoOpuesto,
    validarAngulo
} from "../middlewares/matematicas.middlewares.js";

const router = express.Router();

router.post(
    "/area-rectangulo",
    validarAreaRectangulo,
    areaRectangulo
);

router.post(
    "/perimetro-rectangulo",
    validarPerimetroRectangulo,
    perimetroRectangulo
);

router.post(
    "/area-triangulo",
    validarAreaTriangulo,
    areaTriangulo
);

router.post(
    "/area-circulo",
    validarAreaCirculo,
    areaCirculo
);

router.post(
    "/hipotenusa",
    validarHipotenusa,
    hipotenusa
);

router.post(
    "/angulo",
    validarAngulo,
    angulo
);

router.post(
    "/cateto-opuesto",
    validarCatetoOpuesto,
    catetoOpuesto
);
export default router;