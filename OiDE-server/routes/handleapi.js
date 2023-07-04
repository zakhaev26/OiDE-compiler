const express = require('express');
const Route  = express.Router();


const api = require('../services/api.js')

Route.post('/',api);

module.exports = Route;