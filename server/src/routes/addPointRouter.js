const express = require('express');
const { Point, User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const addPointRouter = express.Router();

addPointRouter
.post(verifyAccessToken, async (req, res) => {
    try {
      const newPoint = await Point.create({
        ...req.body,
        userId: res.locals.user.id,
      });
      const newPointWithUser = await Point.findOne({
        where: { id: newPoint.id },
        include: User,
      });
      res.status(201).json(newPointWithUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error while creating' });
    }
  });

module.exports = addPointRouter;