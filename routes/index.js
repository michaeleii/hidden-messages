const express = require("express");
const { displayHomepage } = require("../controllers/indexController");
const index = express.Router();

index.get("/", displayHomepage);

module.exports = index;
