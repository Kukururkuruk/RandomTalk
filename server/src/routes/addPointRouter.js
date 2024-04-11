const express = require('express');
const { Point, User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const apiAddPointRouter = express.Router();

apiAddPointRouter.post('/add', verifyAccessToken, async (req, res) => {
    try {
      const pointData = {
        ...req.body,
        userId: res.locals.user.id,
        status: req.body.status === undefined ? false : req.body.status
      };

      const newPoint = await Point.create(pointData);
      const newPointWithUser = await Point.findOne({
        where: { id: newPoint.id },
        include: User,
      });

      res.status(201).json(newPointWithUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error while creating point' });
    }
});

module.exports = apiAddPointRouter;
