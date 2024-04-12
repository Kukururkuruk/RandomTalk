const express = require('express');
const {Access, Point} = require('../../db/models')


const applyRouter = express.Router();

applyRouter.post('/create', async (req, res) => {
    try {
        const { pointId } = req.body;

        const access = await Access.create({ 
            pointId, 
            clientId: res.locals.id,
            status: false,
        }, {
            include: [Point]
        });

        return res.status(200).json(access)
    } catch (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})

applyRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
    const point = await Point.findOne({ where: { id } });
        if (!point) {
            return res.status(404).json({ error: 'Point not found' });
        }

        const access = await Access.findAll({ where: { pointId: point.id} });
        
        access.status = true;
        await access.save();

        res.sendStatus(200)
    } catch (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = applyRouter