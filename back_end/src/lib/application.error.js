function createApplicationError(msg, errorCode, cause) {
    const error = Error(msg, {cause}); //Error es una funcion constructora de node, ya definida para recibir estos parametros
    error.isApplicationError = true;
    error.errorCode = errorCode;
    return error;
}

export default createApplicationError;