const express = require("express");
const cors = require("cors")
const usersRoute = require("./users/users.router")

const app = express();

app.use(cors());
app.use(express.json());

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
app.use("/users", usersRoute)

app.use(notFound)
app.use(errorHandler)

module.exports = app;