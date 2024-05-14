import Router from "express-promise-router";

const groupsRouter = () => {

    const router = Router();

    router.get('/', (req, res, next) => {res.end(); next()});

    return router;
};

export default groupsRouter;
