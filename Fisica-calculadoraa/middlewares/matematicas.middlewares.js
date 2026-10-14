export const validarAreaRectangulo = (req, res, next) => {
    const { base, altura } = req.body;

    if (
        base === undefined ||
        altura === undefined ||
        base === "" ||
        altura === ""
    ) {
        return res.status(400).json({
            error: "La base y la altura son obligatoriasssssss"
        });
    }

    if (typeof base !== "number" || typeof altura !== "number" ||
        Number.isNaN(base) || Number.isNaN(altura)) {
        return res.status(400).json({
            error: "La base y la altura deben ser números"
        });
    }

    if (base <= 0 || altura <= 0) {
        return res.status(400).json({
            error: "La base y la altura deben ser mayores que 0"
        });
    }

    next();
};


export const validarPerimetroRectangulo = (req, res, next) => {
    const { base, altura } = req.body;

    if (
        base === undefined ||
        altura === undefined ||
        base === "" ||
        altura === ""
    ) {
        return res.status(400).json({
            error: "La base y la altura son obligatorias"
        });
    }

    if (typeof base !== "number" || typeof altura !== "number" ||
        Number.isNaN(base) || Number.isNaN(altura)) {
        return res.status(400).json({
            error: "La base y la altura deben ser números"
        });
    }

    if (base <= 0 || altura <= 0) {
        return res.status(400).json({
            error: "La base y la altura deben ser mayores que 0"
        });
    }

    next();
};


export const validarAreaTriangulo = (req, res, next) => {
    const { base, altura } = req.body;

    if (
        base === undefined ||
        altura === undefined ||
        base === "" ||
        altura === ""
    ) {
        return res.status(400).json({
            error: "La base y la altura son obligatoriassssss"
        });
    }

    if (typeof base !== "number" || typeof altura !== "number" ||
        Number.isNaN(base) || Number.isNaN(altura)) {
        return res.status(400).json({
            error: "La base y la altura deben ser números"
        });
    }

    if (base <= 0 || altura <= 0) {
        return res.status(400).json({
            error: "La base y la altura deben ser mayores que 0"
        });
    }

    next();
};


export const validarAreaCirculo = (req, res, next) => {
    const { radio } = req.body;

    if (
        radio === undefined ||
        radio === ""
    ) {
        return res.status(400).json({
            error: "El radio es obligatorio"
        });
    }

    if (
        typeof radio !== "number" ||
        Number.isNaN(radio)
    ) {
        return res.status(400).json({
            error: "El radio debe ser un número"
        });
    }

    if (radio <= 0) {
        return res.status(400).json({
            error: "El radio debe ser mayor que 0"
        });
    }

    next();
};


export const validarHipotenusa = (req, res, next) => {
    const { catetoOpuesto, catetoAdyacente } = req.body;

    if (
        catetoOpuesto === undefined ||
        catetoAdyacente === undefined ||
        catetoOpuesto === "" ||
        catetoAdyacente === ""
    ) {
        return res.status(400).json({
            error: "Los dos catetos son obligatorios"
        });
    }

    if (
        typeof catetoOpuesto !== "number" ||
        typeof catetoAdyacente !== "number" ||
        Number.isNaN(catetoOpuesto) ||
        Number.isNaN(catetoAdyacente)
    ) {
        return res.status(400).json({
            error: "Los catetos deben ser números"
        });
    }

    if (catetoOpuesto <= 0 || catetoAdyacente <= 0) {
        return res.status(400).json({
            error: "Los catetos deben ser mayores que 0"
        });
    }

    next();
};


export const validarAngulo = (req, res, next) => {
    const { catetoOpuesto, hipotenusa } = req.body;

    if (
        catetoOpuesto === undefined ||
        hipotenusa === undefined ||
        catetoOpuesto === "" ||
        hipotenusa === ""
    ) {
        return res.status(400).json({
            error: "El cateto opuesto y la hipotenusa son obligatorios"
        });
    }

    if (
        typeof catetoOpuesto !== "number" ||
        typeof hipotenusa !== "number" ||
        Number.isNaN(catetoOpuesto) ||
        Number.isNaN(hipotenusa)
    ) {
        return res.status(400).json({
            error: "El cateto opuesto y la hipotenusa deben ser números"
        });
    }

    if (catetoOpuesto <= 0 || hipotenusa <= 0) {
        return res.status(400).json({
            error: "Los valores deben ser mayores que 0"
        });
    }

    if (catetoOpuesto >= hipotenusa) {
        return res.status(400).json({
            error: "El cateto opuesto debe ser menor que la hipotenusa"
        });
    }

    next();
};


export const validarCatetoOpuesto = (req, res, next) => {
    const { hipotenusa, catetoAdyacente } = req.body;

    if (
        hipotenusa === undefined ||
        catetoAdyacente === undefined ||
        hipotenusa === "" ||
        catetoAdyacente === ""
    ) {
        return res.status(400).json({
            error: "La hipotenusa y el cateto adyacente son obligatorios"
        });
    }

    if (
        typeof hipotenusa !== "number" ||
        typeof catetoAdyacente !== "number" ||
        Number.isNaN(hipotenusa) ||
        Number.isNaN(catetoAdyacente)
    ) {
        return res.status(400).json({
            error: "La hipotenusa y el cateto adyacente deben ser números"
        });
    }

    if (hipotenusa <= 0 || catetoAdyacente <= 0) {
        return res.status(400).json({
            error: "Los valores deben ser mayores que 0"
        });
    }

    if (catetoAdyacente >= hipotenusa) {
        return res.status(400).json({
            error: "El cateto adyacente debe ser menor que la hipotenusa"
        });
    }

    next();
};