'use strict';

const mongoose = require('mongoose');


const sushiSchema = new mongoose.Schema({
  task: String,
  description: String,
  categoryID: String,
});

const Sushi = module.exports = mongoose.model('Sushi', sushiSchema);
