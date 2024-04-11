const express = require('express');
const { Point } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const apiDeletePointRouter = express.Router();

apiDeletePointRouter
  .route('delete/:id')
  .delete(verifyAccessToken, async (req, res) => {
    await Point.destroy({
      where: { id: req.params.id },
    });
    res.sendStatus(200);
  })

module.exports = apiDeletePointRouter;
