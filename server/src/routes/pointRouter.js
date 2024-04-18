const express = require("express");
const {Point} = require("../../db/models");

const apiPointRouter = express.Router();

apiPointRouter.route("/").get(async (req, res) => {
  const points = await Point.findAll();
  res.json(points);
});


module.exports = apiPointRouter;

