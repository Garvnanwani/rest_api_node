const express = require('express');
const Router = express.Router();
const Subscriber = require('../models/subscriber');

//Getting All

Router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})

//Getting One

Router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)
})

//Creating One

Router.post('/', async (req, res) => {

    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedTo: req.body.subscribedTo
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message, req: req.params });
    }
})

//Updating One

Router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedTo != null) {
        res.subscriber.subscribedTo = req.body.subscribedTo
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//Deleting One

Router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove();
        res.json({ message: 'Success' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'Subscriber not found' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    res.subscriber = subscriber;
    next();
}

module.exports = Router;
