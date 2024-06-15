import Repository from "../repositories/groups.repository.js";
import AppError from "../lib/application.error.js";

const service = (dbClient) => {

    const repository = Repository(dbClient);

    const getAll = async () => {
        return await repository.getAll();
    }

    const getById = async (id) => {
        return await repository.getById(id);
    }

    const deleteById = async (id) => {
        return await repository.deleteById(id);
    }

    const create = async (group) => {

        const name= validateName(group.name);

        const countGroup = await repository.countByName(name);

        if (countGroup > 0) {
            throw AppError('Ya existe un grupo con ese nombre', 409);
        }

        return await repository.create(group);
    }

    const fullUpdateById = async (group) => {

        const name = validateName(group.name);
        const existingGroup = await repository.getById(group.id);

        if (!existingGroup) {
            throw AppError('El grupo que va a modificar no existe', 404);
        }

        const countGroup = await repository.countByNameNotId(name, group.id);

        if (countGroup > 0) {
            throw AppError('Ya existe otro grupo con ese nombre', 409);
        
        return await repository.fullUpdateById({
            ...group,
            name
        });
    };

    function validateName(newName) {
        //limpiar los datos
        const name = (newName || '').trim();
        //validar que los datos ingresados sean válidos
        if (name.length === 0) {
            throw AppError('El nombre es requerido', 400);
        }
        if (name.length > 30) {
            throw AppError('El nombre debe ser menor a 30 caracteres');
        }
        return name;
    };

    return {
        getAll,
        getById,
        deleteById,
        create,
        fullUpdateById
    };
}

export default service;