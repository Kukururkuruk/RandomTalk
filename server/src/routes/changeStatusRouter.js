const express = require('express');
const {Point} = require('../../db/models');
const { where } = require('sequelize');

const changeStatusRouter = express.Router();

changeStatusRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const point = await Point.findByPk(id);
        if (!point) {
            return res.status(404).json({ error: 'Point not found' });
        }

        point.status = true
        await point.save()

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = changeStatusRouter;