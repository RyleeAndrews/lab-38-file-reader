'use strict';

const User = require(__dirname + '/../models/user.js');
const basicHTTP = require(__dirname + '/../lib/middleware/basicHttp.js');
const bearerAuth = require(__dirname + '/../lib/middleware/bearAuth.js');
const jsonParser = require('body-parser').json();
const jwt = require('jsonwebtoken');
const authRouter = module.exports = require('express').Router();

authRouter.post('/auth/create', jsonParser, (req, res, next) => {

  const password = req.body.password;

  delete req.body.password;

  let newUser = new User(req.body);

  newUser.generateHash(password)
    .then((user) => {
      user.save()
        .then( user => {
          console.log('user', user);
          let token = user.generateToken();
          res.cookie('auth', token, { maxAge: 900000 });
          res.send({user,token});
        })
        .catch(next);
    })
    .catch(next);

});

authRouter.get('/auth/login', basicHTTP, (req, res, next) => {

  User.findOne({username: req.auth.username})

    .then(user => {

      if (!user) {
        next({statusCode: 403, message: 'Invalid Username'});
      }

      user.comparePassword(req.auth.password)
        .then( user => {
          let token = user.generateToken();
          res.cookie('auth', token, { maxAge: 900000 });
          res.send({user,token});
        })
        .catch( err =>
          next({statusCode: 403, message: 'Invalid Credentials'})
        );

    })
    .catch(next);
});

authRouter.get('/auth/validate', bearerAuth, (req, res, next) => {
  User.findOne({_id: req.userId})
    .then(user => {
      console.log('made it')
      if(!user){
        throw new Error('user not found');
      }
      let token = user.generateToken();
      res.cookie('auth', token, { maxAge: 900000 });
      res.send({user,token});
    })
    .catch(next);
});
