import express from "express";

import {
    calcularVelocidad,
    calcularAceleracion,
    calcularFuerza,
    calcularEnergia,
    calcularDensidad,
    calcularTiempo,
    calcularDistancia,
    calcularPeso
} from "../controllers/fisica.controller.js";

import {
    validarVelocidad,
    validarAceleracion,
    validarFuerza,
    validarEnergia,
    validarDensidad,
    validarTiempo,
    validarDistancia,
    validarPeso
} from "../middlewares/fisica.middlewares.js";

const router = express.Router();

router.post(
    "/velocidad",
    validarVelocidad,
    calcularVelocidad
);

router.post(
    "/aceleracion",
    validarAceleracion,
    calcularAceleracion
);

router.post(
    "/fuerza",
    validarFuerza,
    calcularFuerza
);

router.post(
    "/energia",
    validarEnergia,
    calcularEnergia
);

router.post(
    "/densidad",
    validarDensidad,
    calcularDensidad
);

router.post(
    "/tiempo",
    validarTiempo,
    calcularTiempo
);

router.post(
    "/distancia",
    validarDistancia,
    calcularDistancia
);

router.post(
    "/peso",
    validarPeso,
    calcularPeso
);

export default router;
