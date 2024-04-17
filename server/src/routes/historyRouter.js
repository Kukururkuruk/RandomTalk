const express = require('express');
const { History, User, Point } = require('../../db/models');

const historyRouter = express.Router()

historyRouter.post('/history', async (req,res) => {
    try {
        const { userId, clientId, pointId } = req.body;
    
        const history = await History.create({
          userId,
          clientId,
          pointId
        });
    
        return res.status(201).json(history);
      } catch (error) {
        console.error('Error creating history record:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
})

historyRouter.get('/history', async (req, res) => {
  try {
    const histories = await History.findAll();
    return res.status(200).json(histories);
  } catch (error) {
    console.error('Error fetching history records:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = historyRouter