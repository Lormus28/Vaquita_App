import Repository from "../repositories/groups.repository.js";

const service = (dbClient)=>{

    const repository = Repository (dbClient);

    const getAll = async () =>{
        
        return await repository.getAll();
    }

    return {
        getAll
    };
}

export default service;