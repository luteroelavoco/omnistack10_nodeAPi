const{Router} = require('express');
const routes = Router();
const DevController = require('./controllers/DevController');

routes.post('/devs',DevController.store);

module.exports = routes;