const express = require("express");
const bodyParser = require("body-parser");
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

// get put post delete
promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Sending you all the promotions..");
  })
  .post((req, res, next) => {
    res.end(
      `Will add ${req.body.name} promo with description ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.end(`PUT operation not supported on /promotions`);
  })
  .delete((req, res, next) => {
    res.end("Deleting all promotions...");
  });

promoRouter
  .route("/:promoId")
  .get((req, res, next) => {
    res.end(`Sending for you details about ${req.params.promoId}`);
  })
  .post((req, res, next) => {
    res.end(`POST not supported on  /promotions/${req.param.promoId}`);
  })
  .put((req, res, next) => {
    res.end(
      `updating the promotion ${req.body.name} to ${req.body.description}`
    );
  })
  .delete((req, res, next) => {
    res.end(`delete promotion ${req.params.promoId}`);
  });

module.exports = promoRouter;
