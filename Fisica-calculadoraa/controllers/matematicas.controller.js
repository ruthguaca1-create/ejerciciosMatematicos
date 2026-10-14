export const areaRectangulo = (req, res) => {
    const { base, altura } = req.body;

    const resultado = base * altura;

    res.json({
        operacion: "areaRectangulo",
        base,
        altura,
        resultado,
        unidad: "unidades cuadradas",
        mensaje: `El área del rectángulo es ${resultado} unidades cuadradas`
    });
};

export const perimetroRectangulo = (req, res) => {
    const { base, altura } = req.body;

    const resultado = 2 * (base + altura);

    res.json({
        operacion: "perimetroRectangulo",
        base,
        altura,
        resultado,
        unidad: "unidades",
        mensaje: `El perímetro del rectángulo es ${resultado} unidades`
    });
};

export const areaTriangulo = (req, res) => {
    const { base, altura } = req.body;

    const resultado = (base * altura) / 2;

    res.json({
        operacion: "areaTriangulo",
        base,
        altura,
        resultado,
        unidad: "unidades cuadradas",
        mensaje: `El área del triángulo es ${resultado} unidades cuadradas`
    });
};

export const areaCirculo = (req, res) => {
    const { radio } = req.body;

    const resultado = Math.PI * Math.pow(radio, 2);

    res.json({
        operacion: "areaCirculo",
        radio,
        resultado,
        unidad: "unidades cuadradas",
        mensaje: `El área del círculo es ${resultado.toFixed(2)} unidades cuadradas`
    });
};

export const hipotenusa = (req, res) => {
    const { catetoOpuesto, catetoAdyacente } = req.body;

    const resultado = Math.sqrt(
        Math.pow(catetoOpuesto, 2) +
        Math.pow(catetoAdyacente, 2)
    );

    res.json({
        operacion: "hipotenusa",
        catetoOpuesto,
        catetoAdyacente,
        resultado,
        unidad: "unidades",
        mensaje: `La hipotenusa es ${resultado.toFixed(2)} unidades`
    });
};

export const angulo = (req, res) => {
    const { catetoOpuesto, hipotenusa } = req.body;

    const resultado = Math.asin(
        catetoOpuesto / hipotenusa
    ) * (180 / Math.PI);

    res.json({
        operacion: "angulo",
        catetoOpuesto,
        hipotenusa,
        resultado,
        unidad: "grados"
    });
};

export const catetoOpuesto = (req, res) => {
    const { hipotenusa, catetoAdyacente } = req.body;

    const resultado = Math.sqrt(
        Math.pow(hipotenusa, 2) -
        Math.pow(catetoAdyacente, 2)
    );

    res.json({
        operacion: "catetoOpuesto",
        hipotenusa,
        catetoAdyacente,
        resultado,
        unidad: "unidades",
        mensaje: `El cateto opuesto es ${resultado.toFixed(2)} unidades`
    });
};