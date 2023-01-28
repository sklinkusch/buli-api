const routes = require('express').Router();
const liga1 = require('./liga1');

routes.use('/', liga1);

module.exports = routes;