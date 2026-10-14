// VALIDAR VELOCIDAD

export const validarVelocidad = (req, res, next) => {
    const { distancia, tiempo } = req.body;

    if (
        distancia === undefined ||
        tiempo === undefined ||
        distancia === "" ||
        tiempo === ""
    ) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    }

    if (
        typeof distancia !== "number" ||
        typeof tiempo !== "number" ||
        Number.isNaN(distancia) ||
        Number.isNaN(tiempo)
    ) {
        return res.status(400).json({
            error: "Los valores de distancia y tiempo deben ser números"
        });
    }

    if (distancia < 0 || tiempo <= 0) {
        return res.status(400).json({
            error: "La distancia no puede ser negativa y el tiempo debe ser mayor que cero"
        });
    }

    next();
};


// VALIDAR ACELERACIÓN

export const validarAceleracion = (req, res, next) => {
    const {
        velocidadInicial,
        velocidadFinal,
        tiempo
    } = req.body;

    if (
        velocidadInicial === undefined ||
        velocidadFinal === undefined ||
        tiempo === undefined ||
        velocidadInicial === "" ||
        velocidadFinal === "" ||
        tiempo === ""
    ) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    }

    if (
        typeof velocidadInicial !== "number" ||
        typeof velocidadFinal !== "number" ||
        typeof tiempo !== "number" ||
        Number.isNaN(velocidadInicial) ||
        Number.isNaN(velocidadFinal) ||
        Number.isNaN(tiempo)
    ) {
        return res.status(400).json({
            error: "Los valores deben ser números"
        });
    }

    if (tiempo <= 0) {
        return res.status(400).json({
            error: "El tiempo debe ser mayor que cero"
        });
    }

    next();
};


// VALIDAR FUERZA

export const validarFuerza = (req, res, next) => {
    const { masa, aceleracion } = req.body;

    if (
        masa === undefined ||
        aceleracion === undefined ||
        masa === "" ||
        aceleracion === ""
    ) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    }

    if (
        typeof masa !== "number" ||
        typeof aceleracion !== "number" ||
        Number.isNaN(masa) ||
        Number.isNaN(aceleracion)
    ) {
        return res.status(400).json({
            error: "Los valores de masa y aceleracion deben ser números"
        });
    }

    if (masa <= 0) {
        return res.status(400).json({
            error: "La masa debe ser mayor que cero"
        });
    }

    next();
};


// VALIDAR ENERGÍA

export const validarEnergia = (req, res, next) => {
    const { masa, velocidad } = req.body;

    if (
        masa === undefined ||
        velocidad === undefined ||
        masa === "" ||
        velocidad === ""
    ) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    }

    if (
        typeof masa !== "number" ||
        typeof velocidad !== "number" ||
        Number.isNaN(masa) ||
        Number.isNaN(velocidad)
    ) {
        return res.status(400).json({
            error: "Los valores de masa y velocidad deben ser números"
        });
    }

    if (masa <= 0) {
        return res.status(400).json({
            error: "La masa debe ser mayor que cero"
        });
    }

    if (velocidad < 0) {
        return res.status(400).json({
            error: "La velocidad no puede ser negativa"
        });
    }

    next();
};


// VALIDAR DENSIDAD

export const validarDensidad = (req, res, next) => {
    const { masa, volumen } = req.body;

    if (
        masa === undefined ||
        volumen === undefined ||
        masa === "" ||
        volumen === ""
    ) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    }

    if (
        typeof masa !== "number" ||
        typeof volumen !== "number" ||
        Number.isNaN(masa) ||
        Number.isNaN(volumen)
    ) {
        return res.status(400).json({
            error: "Los valores de masa y volumen deben ser números"
        });
    }

    if (masa <= 0 || volumen <= 0) {
        return res.status(400).json({
            error: "La masa y el volumen deben ser mayores que cero"
        });
    }

    next();
};


// VALIDAR TIEMPO

export const validarTiempo = (req, res, next) => {
    const { distancia, velocidad } = req.body;

    if (
        distancia === undefined ||
        velocidad === undefined ||
        distancia === "" ||
        velocidad === ""
    ) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    }

    if (
        typeof distancia !== "number" ||
        typeof velocidad !== "number" ||
        Number.isNaN(distancia) ||
        Number.isNaN(velocidad)
    ) {
        return res.status(400).json({
            error: "Los valores de distancia y velocidad deben ser números"
        });
    }

    if (distancia < 0 || velocidad <= 0) {
        return res.status(400).json({
            error: "La distancia no puede ser negativa y la velocidad debe ser mayor que cero"
        });
    }

    next();
};


// VALIDAR DISTANCIA

export const validarDistancia = (req, res, next) => {
    const { velocidad, tiempo } = req.body;

    if (
        velocidad === undefined ||
        tiempo === undefined ||
        velocidad === "" ||
        tiempo === ""
    ) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    }

    if (
        typeof velocidad !== "number" ||
        typeof tiempo !== "number" ||
        Number.isNaN(velocidad) ||
        Number.isNaN(tiempo)
    ) {
        return res.status(400).json({
            error: "Los valores de velocidad y tiempo deben ser números"
        });
    }

    if (velocidad < 0 || tiempo < 0) {
        return res.status(400).json({
            error: "La velocidad y el tiempo no pueden ser negativos"
        });
    }

    next();
};


// VALIDAR PESO

export const validarPeso = (req, res, next) => {
    const { masa } = req.body;

    if (
        masa === undefined ||
        masa === ""
    ) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    }

    if (
        typeof masa !== "number" ||
        Number.isNaN(masa)
    ) {
        return res.status(400).json({
            error: "El valor de masa debe ser un número"
        });
    }

    if (masa <= 0) {
        return res.status(400).json({
            error: "La masa debe ser mayor que cero"
        });
    }

    next();
};