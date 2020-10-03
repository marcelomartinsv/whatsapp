const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./config/db')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("ok"));
app.use("/contacts", require("./routes/contacts"))
app.use("/messages", require("./routes/messages"))
app.use("/calls", require("./routes/calls"))

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("server ok!"));

module.exports = app;

