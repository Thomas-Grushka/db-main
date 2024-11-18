import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.js";
import groupRouter from "./routes/groups-router.js";
import userRouter from "./routes/users-router.js";
import settingsRouter from "./routes/settings.js";

import {notFoundHandler, errorHandler} from "./middlewares/index.js";

const {PORT = 3000} = process.env;
const port = Number(PORT);

const startServer = ()=> {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(cookieParser());

    app.use("/api/auth", authRouter);
    app.use("/api/groups", groupRouter);
    app.use("/api/users", userRouter);
    app.use("/api/settings", settingsRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    app.listen(port, ()=> console.log(`Server running on port ${port}`));
}

export default startServer;


