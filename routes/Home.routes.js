const express = require('express');
const HomeController = require('../controllers/Home.controller');
const Router = express.Router();


Router.get('/', HomeController.getHome);
Router.post('/postcard', HomeController.postHome);
  

module.exports = Router;