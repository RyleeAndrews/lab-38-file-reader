'use strict';
const multer = require('multer');
const s3 = require('../lib/middleware/s3.js');
const bearAuth = require('../lib/middleware/bearAuth.js');
const VisualAsset = require('../models/visualAsset.js');
const getUserById = require('../lib/middleware/authMiddleware.js');
const upload = multer();

const visualAssetRouter = module.exports = require('express').Router();

visualAssetRouter.post('/upload', bearAuth, getUserById, upload.any(), (req,res,next) => {
  let file = req.files[0];

  let key = `${file.filename}.${file.originalname}`;
  return s3.upload(file.path, key)
    .then( url => {
      return new VisualAsset({
        account: req.user._id,
        url,
      }).save();
    })
    .then( file => res.json(file))
    .catch(next);
});
