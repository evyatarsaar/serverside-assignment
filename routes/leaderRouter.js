const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Returning all leaders to you...");
  })
  .post((req, res, next) => {
    res.end(
      `adding leader ${req.body.name} with description ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /leaders`);
  })
  .delete((req, res, next) => {
    res.end("Delteting all the leaders...");
  });

leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    res.end(`sending to you leader data : ${req.params.leaderId}`);
  })
  .post((req, res, nest) => {
    res.statusCode = 403;
    res.end(`POST not supported on /leaders/${req.params.leaderId}`);
  })
  .put((req, res, next) => {
    res.end(`Editing leader ${req.params.leaderId}
    \n${req.body.name} - ${req.body.description}`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting ${req.params.leaderId}`);
  });

module.exports = leaderRouter;
