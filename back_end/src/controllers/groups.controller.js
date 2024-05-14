import Service from "../services/groups.services.js";

const controller = ()=>{

    const getAll = async (req,res,next) =>{

        const service = Service (req.dbClient);


        const groups = await service.getAll();


        res.status(200).json(groups);

        next();
    }

    return{
        getAll
    };
}

export default controller;