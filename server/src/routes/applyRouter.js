const express = require('express');
const {Access, Point} = require('../../db/models')


const applyRouter = express.Router();

applyRouter.post('/create', async (req, res) => {
    try {
        const { pointId, clientId } = req.body;
        const access = await Access.create({ 
            pointId, 
            clientId,
            status: false,
        }, {
            include: [Point]
        });

        console.log(access)
        return res.status(200).json(access)
    } catch (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

applyRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const point = await Point.findOne({ where: { id } });
        if (!point) {
            return res.status(404).json({ error: 'Point not found' });
        }

        const accesses = await Access.findAll({ where: { pointId: point.id} });
        console.log(accesses);
        
        for (const access of accesses) {
            access.status = true;
            await access.save();
        }

        res.sendStatus(200);
    } catch (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})

applyRouter.get('/applied', async (req, res) => {
    
})



module.exports = applyRouter