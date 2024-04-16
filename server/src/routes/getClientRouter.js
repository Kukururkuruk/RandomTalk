const express = require('express');
const { User } = require('../../db/models');

const getClientRouter = express.Router()

getClientRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({
      where: { id }
    });

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }
    res.status(200).json(user);
})

module.exports = getClientRouter