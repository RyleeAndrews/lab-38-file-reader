'use strict';

const express = require('express');
const bodyParser = require('body-parser').json();


const Sushi = require('../models/sushi.js');


const sushiRouter = module.exports = express.Router();

sushiRouter.get('/api/:model', (req,res,next) => {
  try {


    Sushi.find({})
      .then( result => res.send(result))
      .catch(err => next(err));
  }
  catch(error){
    next(error.message);
  }
});


sushiRouter.get('/api/:model/:id', (req,res,next) => {
  try {
    let id = req.params.id;
    Sushi.findOne({_id: id})
      .then( result => res.send(result))
      .catch(err => next(err));
  }
  catch(error){
    next(error.message);
  }
});

sushiRouter.post('/api/:model', bodyParser, (req,res,next) => {

  try {
    let sushi = new Sushi(req.body);

    console.log('model', req.params);
    sushi.save()
      .then( result => res.send(result))
      .catch(err => next(err));
  }
  catch(error){
    next(error.message);
  }
});

sushiRouter.put('/api/:model/:id', bodyParser, (req,res,next) => {
  try{

    let id = req.params.id;

    Sushi.findOne({_id:id})
      .then( result => {
        Object.assign(result, req.body);
        return result.save();
      })
      .then(result => res.send(result))
      .catch(err => next(err));
  }
  catch(error){
    next(error.message);
  }
});

sushiRouter.delete('/api/:model/:id', (req,res,next) => {

  try{

    let id = req.params.id;

    Sushi.remove({_id:id})
      .then( () => res.send('model deleted'))
      .catch(err => res.send('model id not found'));
  }
  catch(error){
    next(error.message);
  }
});
