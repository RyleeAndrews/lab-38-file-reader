'use strict';

const jwt = require('jsonwebtoken');
const Sushi = require('../../models/sushi.js');
const User = require('../../models/user.js');


module.exports = (req,res,next) => {

  if(!req.headers.authorization){
    throw new Error('Authorize you must');
  }

  console.log('headers', req.headers)

  let token = req.headers.authorization.split('Bearer ')[1];
  
  if(!token){
    throw new Error('Invalid authorization provided');
  }

  let secret = process.env.SECRET;
  let decodedToken = jwt.verify(token,secret);
  console.log('adfsdfsdf', decodedToken);

  req.userId = decodedToken.id;
  User.findOne({_id: req.userId})
    .then( user => {
      if(!user) next({statusCode: 403, err: new Error('no user found')});
      req.user = user;
    });
  next();
};
