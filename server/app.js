require("dotenv").config();
require("./src/utilities/mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const ResponseError = require("./src/utilities/responseError");
const errorMiddleware = require("./src/middlewares/errorMidleware");
const routes = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(
     mongoSanitize({
          replaceWith: "_",
     })
);

app.use(routes);

app.use("*", (req, res, next) => {
     const endpoint = req.originalUrl;
     next(new ResponseError(404, `${endpoint} endpoint not found! `));
});
app.use(errorMiddleware);

module.exports = app;
