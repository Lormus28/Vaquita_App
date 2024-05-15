function continue_Decor(controllerFunction) {
    return async (req, res, next) => {
        try {
            await controllerFunction(req, res);
            next(); //middleware de express.js que me lleva al siguiente procesamiento
        } catch (error) {
            next(error); // middleware de express.js queme lleva al manejo de error
        }
    };
}

export default continue_Decor;