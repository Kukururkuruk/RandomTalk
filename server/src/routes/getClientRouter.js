const express = require('express');
const { User } = require('../../db/models');

const getClientRouter = express.Router()

getClientRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({
      where: { id }
    });

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching client:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = getClientRouter