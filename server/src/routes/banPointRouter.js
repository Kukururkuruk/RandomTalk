const express = require("express");
const {Ban} = require("../../db/models");
// const { Character, User } = require('../../db/models');
// const verifyAccessToken = require('../middlewares/verifyAccessToken');

const apiBanPointRouter = express.Router();

apiBanPointRouter.post("/", async (req, res) => {
  try {
    const { userId, pointId } = req.body;
    const ban = await Ban.create({ userId, pointId });
    res.status(201).json(ban);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while creating ban" });
  }
});

apiBanPointRouter.route("/all").get(async (req, res) => {
  const bans = await Ban.findAll();
  res.json(bans);
});

module.exports = apiBanPointRouter;
