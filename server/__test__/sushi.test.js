'use strict';

const superagent = require('superagent');
const server = require('../index.js');

process.env.MONGODB_URL;
const mongoose = require('mongoose');
const Sushi = require('../models/sushi.js');


test('get route for all objects', () => {
  return superagent.get('http://localhost:3000/api/Sushi')
    .then( res => {
      expect(res.status).toBe(200);
    });
});

test('get route for a single object', () => {
  return superagent.get('http://localhost:3000/api/Sushi/5a83c593bf4e1e5ba07eca4c')
    .then( res => {
      expect(res.body.task).toBe('dsavavadfsvvsdva');
      expect(res.body.description).toBe('asdvavdsaad');
    });
});

test('post route', () => {
  return superagent.post('http://localhost:3000/api/Sushi')
    .send({task: 'groceries', description: 'food'})
    .then( res => {
      expect(res.body.task).toBe('groceries');
      expect(res.body.description).toBe('food');
    });
});

test('put route', () => {
  return superagent.put('http://localhost:3000/api/Sushi/5a83cd0dd2a4935d0e0ef5c5')
    .send({task: 'car', description: 'oil'})
    .then( res => {
      expect(res.body.task).toBe('car');
      expect(res.body.description).toBe('oil');
    });
});

test('delete route', () => {
  return superagent.delete('http://localhost:3000/api/Sushi/5a83cd4287ac4b5d19329622')
    .then( res => {
      expect(res.body.task).toBe(undefined);
      expect(res.body.description).toBe(undefined);
      expect(res.body.categoryID).toBe(undefined);
    });
});
