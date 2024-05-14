import Repository from "../repositories/groups.repository.js";

const service = (dbClient)=>{

    const repository = Repository (dbClient);

    const getAll = async () =>{

        return await repository.getAll();
    }

    const getById = async (id) =>{
        
        return await repository.getById(id);
    }

    return {
        getAll,
        getById
    };
}

export default service;