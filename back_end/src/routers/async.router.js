import Router from "express-promise-router";
import groupsRouter from "./groups.routers.js";
import { connectDatabase, commitDatabase, rollbackDatabase } from "../lib/database.middleware.js";

const asyncRouter = () =>{

    const router = Router();

    router.use(connectDatabase);
    router.use("/groups", groupsRouter());
    router.use(commitDatabase);
    router.use(rollbackDatabase);
    
    return router;
}

export default asyncRouter;