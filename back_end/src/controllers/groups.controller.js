import Service from "../services/groups.services.js";

const controller = () => {

    const getAll = async (req, res) => {

        const service = Service(req.dbClient);
        const groups = await service.getAll();

        res.status(200).json(groups);
    }

    const getById = async (req, res) => {

        const service = Service(req.dbClient);
        const group = await service.getById(req.params.id);

        if (group) {
            res.status(200).json(group);
        } else {
            res.startus(404).end();
        }
    }

    const deleteById = async (req, res) => {
        const service = Service(req.dbClient);
        const deleted = await service.deleteById(req.params.id);
        if (deleted) {
            res.status(200).end();
        } else {
            res.startus(404).end();
        }
    }

    const create = async (req, res) => {
        const service = Service(req.dbClient);
        const group = req.body;
        const createdGroup = await service.create(group);
        res.status(201).json(createdGroup);
    }

    const fullUpdateById = async(req, res)=> {
        const service = Service(req.dbClient);
        const id = req.params.id;
        const group = {
            ...req.body,
            id
        }; // los tres puntos copia las propiedades del objeto y al final les agrega el id que cree en la linea 44
        const updatedGroup = await service.fullUpdateById(group);
        if (updatedGroup){
            res.status(200).end();
        } else {
            res.status(404).end();
        }
        res.status(201).json(createdGroup);
    }

    return {
        getAll,
        getById,
        deleteById,
        create,
        fullUpdateById
    }
}

export default controller;