'use strict';

const User = require('../../models/user.js');

const getUserById = module.exports = (req, res, next) => {
  User.findOne({_id: req.decodedId})
    .then(user => {
      if (!user) {
        return next({statusCode: 400, message: 'no user'});
      }
      console.log(user);
      req.user = user;
      next();
    })
    .catch(next);
};
