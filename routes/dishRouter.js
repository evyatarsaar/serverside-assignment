const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the dishes for you");
  })

  .post((req, res, next) => {
    res.end(
      `Will add the dish ${req.body.name} with details ${req.body.description}`
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /dishes`);
  })

  .delete((req, res, next) => {
    res.end(`deleting all the dishes`);
  });

dishRouter
  .route("/:dishId")
  .get((req, res, next) => {
    res.end(`bringing you the details of dish: ${req.params.dishId}`);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST not supported on dishes/${req.params.dishId}`);
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`updating dish ${req.body.name} with ${req.body.description}`);
  })

  .delete((req, res, next) => {
    res.end(`deleting the dish ${req.params.dishId}`);
  });

module.exports = dishRouter;
