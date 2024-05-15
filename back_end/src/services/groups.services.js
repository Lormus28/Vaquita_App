import Repository from "../repositories/groups.repository.js";

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
        
        // // validaciones de campos primero
        // const name = validatedName(group.name);

        // // validaciones con la base de datos
        // const groupCount = await repository.countByName(name);
        // if (groupCount > 0) {
        //     throw AppError('Ya existe un grupo con ese nombre', 409);
        // }

        return await repository.create(group);
    }

    return {
        getAll,
        getById,
        deleteById,
        create
    };
}

export default service;