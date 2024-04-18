const express = require("express");
const { Rating } = require("../../db/models");
const { User } = require("../../db/models");
// const { Character, User } = require('../../db/models');
// const verifyAccessToken = require('../middlewares/verifyAccessToken');

const apiRatingPointRouter = express.Router();

apiRatingPointRouter.post("/", async (req, res) => {
  try {
    const { userId, rating } = req.body;
    const ran = await Rating.create({ userId, rating });
    res.status(201).json(ran);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while creating ban" });
  }
});

apiRatingPointRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id; // Изменение здесь
    const retUser = await User.findByPk(id);
    const rating = await Rating.findAll({ where: { userId: id } });
    const result = rating.reduce((acc, el) => acc + el.rating, 0); // Здесь также исправлена ошибка в методе reduce
    retUser.rating = result / rating.length;
    await retUser.save(); // Используйте await здесь, чтобы дождаться завершения сохранения

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while creating ban" });
  }
});

module.exports = apiRatingPointRouter;
