'use strict';

const fileDataRouter = module.exports = ('express').Router();
const bodyParser = require('body-parser').json();
const bearAuth = require('../lib/middleware/bearAuth.js');
const FileData = require('../models/fileData.js');
const getUserById = require('../lib/middleware/authMiddleware.js');



fileDataRouter.get('/api/files', bearAuth, getUserById, (req,res,next) => {

  FileData.find({})
    .then( files => {
      res.status(200).send(files);
    })
    .catch( err => {
      next(err.message);
    });
});

fileDataRouter.get('/api/files/:id', (req,res,next) => {
  let id = req.params.id;

  FileData.findOne({id: id})
    .then( files => {
      res.status(200).send(files);
    })
    .catch(err => {
      next(err.message);
    });
});

fileDataRouter.post('/api/files', bearAuth, getUserById, bodyParser, (req,res,next) => {
  let fileData = new FileData(req.body);

  fileData.save()
    .then( files => {
      res.status(200).send(files);
    })
    .catch( err => {
      next(err.message);
    });
});

fileDataRouter.put('/api/files/:id', bearAuth, getUserById, bodyParser, (req,res,next) => {
  let id = req.params.id;

  FileData.findOne({id:id})
    .then( result => {
      Object.assign(result,req.body);
      return result.save();
    })
    .then( data => {
      res.status(200).send(data);
    })
    .catch( err => {
      next(err.message);
    });
});

fileDataRouter.delete('/api/files/:id', bearAuth, getUserById, (req,res,next) => {
  let id = req.params.id;

  FileData.remove({id: id})
    .then( () => res.status(200).send('successful delete'))
    .catch( err => next(err.message));
});
