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

changeStatusRouter.put('/client/:id', async (req, res) => {
    const { id } = req.params;
    const { clientId, reason } = req.body;

    try {
        const point = await Point.findByPk(id);
        
        if (!point) {
            return res.status(404).json({ error: 'Point not found' });
        }

        point.clientId = clientId;
        point.reason = reason;
        await point.save();

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error updating client:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

changeStatusRouter.put('/agreed/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const point = await Point.findByPk(id);
        console.log(point);
        if (!point) {
            return res.status(404).json({ error: 'Point not found' });
        }

        point.agreed = true
        await point.save()

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = changeStatusRouter;