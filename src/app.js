require("dotenv").config();
const express = require("express");
const app = express();
const db = require("mongoose");
const { MONGODB_URL } = process.env;
const port = process.env.PORT || 8000;
const intializeExpressMiddlewares = require("../middlewares/express.middlewares");
const intializeRouters = require("../middlewares/routes.middlewares");
const intializePassport = require("./passport");

db.connect(MONGODB_URL);

intializeExpressMiddlewares(app);
intializeRouters(app);
intializePassport();

app.listen(port, () =>
	console.log(`Example app listening on http://localhost:${port}/`)
);
