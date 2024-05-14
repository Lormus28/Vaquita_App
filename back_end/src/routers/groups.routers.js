import Router from "express-promise-router";
import Controller from "../controllers/groups.controller.js";

const groupsRouter = () => {

    const router = Router();
    const controller = Controller();

    router.get('/', controller.getAll);

    return router;
};

export default groupsRouter;
