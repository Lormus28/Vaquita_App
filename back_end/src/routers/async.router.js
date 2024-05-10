import Router from "express-promise-router";
import groupsRouter from "./groups.routers.js";
import { connectDatabase, commitDatabase, rollbackDatabase } from "../lib/database.middleware.js";

const asyncRouter = () =>{

    const router = Router();

    router.use(connectDatabase);
    router.use(commitDatabase);
    router.use(rollbackDatabase);
    router.use("/groups", groupsRouter());

    return router;
}

export default asyncRouter;