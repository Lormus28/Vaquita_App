import Router from "express-promise-router";
import Controller from "../controllers/groups.controller.js";

const groupsRouter = () => {

    const grouter = Router();
    const controller = Controller();

    grouter.get('/', controller.getAll);

    return grouter;
};

export default groupsRouter;
