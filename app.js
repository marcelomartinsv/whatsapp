const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./config/database');

db.authenticate()
    .then(() => console.log('db ok!'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
    }
    next();
    });

app.get("/", (req, res) => res.send("ok"));
app.use("/contacts", require("./routes/contacts"))
app.use("/messages", require("./routes/messages"))
app.use("/calls", require("./routes/calls"))

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("server ok!"));

module.exports = app;

