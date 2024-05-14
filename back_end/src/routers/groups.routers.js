import Router from "express-promise-router";

const groupsRouter = () => {

    const grouter = Router();

    grouter.get('/', (req, res, next) => {res.end(); next()});

    return grouter;
};

export default groupsRouter;
