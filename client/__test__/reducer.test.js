'use strict';

import uuid from 'uuid/v1';
import jest from 'jest';
import * as actions from '../src/components/category/catActions.js';
import reducer from '../src/components/category/catReducer.js';

describe('cat reducer test', () => {
  let state = [];
  test('add a new category', () => {
    let category = {task: 'games', description: 'monopoly'};
    let action = {type: 'CREATE', payload: category};
    state = reducer(state, action);

    expect(state.length).toEqual(1);
    expect(state[0].description).toEqual(category.description);
    expect(state[0].task).toEqual(category.task);
  });

  test('update a category', () => {
    let newCategory = {task: 'pizza', description: 'munchies'};
    state = reducer(state, {
      type: 'UPDATE',
      payload: {
        task: newCategory.task,
        description: newCategory.description,
      },
    });
    expect(state[0].task).toEqual('pizza');
    expect(state[0].description).toEqual('munchies');
  });


  test('delete a category', () => {

    let category = {task: 'computer', description: 'mac', id: uuid()};
    let category1 = {task: 'concert', description: 'tickets', id: uuid()};

    state = [{...category}, {...category1}];

    state = reducer(state, {
      type: 'DELETE',
      payload: category,
    });

    expect(state.length).toEqual(2);
    expect(state[0].task).toEqual('computer');
    expect(state[0].description).toEqual('mac');
  });
});

describe('file reducer', () => {
  let state = {};
  test('')
})
