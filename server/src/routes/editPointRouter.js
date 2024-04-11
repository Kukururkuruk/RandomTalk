const express = require('express');
const { Point } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const apiEditPointRouter = express.Router();

apiEditPointRouter
.route('/:id')
.put(async (req, res) => {
  const { id, theme, cloth, longitude, latitude, status, userId, img } = req.body;
  await Point.update(req.body, { where: { id } });
  const updatedStudent = await Point.findOne({ where: { id } });
  res.json(updatedStudent);
})

module.exports = apiEditPointRouter;
