const express = require('express');
const Router = express.Router();

//Getting All

Router.get('/', (req, res) => {
    res.send('Hello World');
})

//Getting One

Router.get('/:id', (req, res) => {
    res.send(req.params);
})

//Creating One

Router.post('/', (req, res) => {

})

//Updating One

Router.patch('/:id', (req, res) => {

})

//Deleting One

Router.delete('/:id', (req, res) => {

})

module.exports = Router;
