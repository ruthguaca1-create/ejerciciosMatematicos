
const redondear = (numero) => Math.round(numero * 100) / 100;

export const calcularVelocidad = (req, res) => {
    const { distancia, tiempo } = req.body;

    const velocidad = redondear(distancia / tiempo);

    res.json({
        operacion: "velocidad",
        distancia,
        tiempo,
        resultado: velocidad,
        unidad: "m/s",
        mensaje : `La velocidad es ${velocidad} m/s`
    });
};


export const calcularAceleracion = (req, res) => {
    const { velocidadInicial, velocidadFinal, tiempo } = req.body;

    const aceleracion = redondear((velocidadFinal - velocidadInicial) / tiempo);

    res.json({
        operacion: "aceleracion",
        velocidadInicial,
        velocidadFinal,
        tiempo,
        resultado: aceleracion,
        unidad: "m/s²",
        mensaje: `La aceleración es ${aceleracion} m/s²`
    });
};


export const calcularFuerza = (req, res) => {
    const { masa, aceleracion } = req.body;

    const fuerza = redondear(masa * aceleracion);

    res.json({
        operacion: "fuerza",
        masa,
        aceleracion,
        resultado: fuerza,
        unidad: "N",
        mensaje: `La fuerza es ${fuerza} N`
    });
};


export const calcularEnergia = (req, res) => {
    const { masa, velocidad } = req.body;

    const energia = redondear(0.5 * masa * velocidad ** 2);

    res.json({
        operacion: "energia",
        masa,
        velocidad,
        resultado: energia,
        unidad: "J",
        mensaje: `La energía es ${energia} J`
    });
};


export const calcularDensidad = (req, res) => {
    const { masa, volumen } = req.body;

    const densidad = redondear(masa / volumen);

    res.json({
        operacion: "densidad",
        masa,
        volumen,
        resultado: densidad,
        unidad: "kg/m³",
        mensaje: `La densidad es ${densidad} kg/m³`
    });
};

export const calcularTiempo = (req, res) => {
    const { distancia, velocidad } = req.body;

    const tiempo = redondear(distancia / velocidad);

    res.json({
        operacion: "tiempo",
        distancia,
        velocidad,
        resultado: tiempo,
        unidad: "s",
        mensaje: `El tiempo es ${tiempo} s`
    });
};


export const calcularDistancia = (req, res) => {
    const { velocidad, tiempo } = req.body;

    const distancia = redondear(velocidad * tiempo);

    res.json({
        operacion: "distancia",
        velocidad,
        tiempo,
        resultado: distancia,
        unidad: "m",
        mensaje: `La distancia es ${distancia} m`
    });
};


export const calcularPeso = (req, res) => {
    const { masa } = req.body;
    const gravedad = 9.8;

    const peso = redondear(masa * gravedad);

    res.json({
        operacion: "peso",
        masa,
        gravedad,
        resultado: peso,
        unidad: "N",
        mensaje: `El peso es ${peso} N`
    });
};
