import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
const logger = require('./utils/logger')

const app: Application = express();

const db = require('../config/database');

db.sync().then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => logger.info("server ok!"));
})

// db.authenticate()
//     .then(() => console.log('db ok!'))
//     .catch((err: Error) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.get("/", (req: Request, res: Response) => {
    logger.info("usuario en root");
    return res.send("ok")
});
app.use("/", require("./routes"));



module.exports = app;

