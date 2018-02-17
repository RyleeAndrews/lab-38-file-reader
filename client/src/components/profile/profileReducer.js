'use strict';

let defaultState = {};

export default (state=defaultState,action) => {

    let {type,payload} = action;

    switch(type) {

        case "SET_AUTH_USER": {
            return payload.user;
        }

        case "UPDATE_USER": {
          console.log(state,payload);
          return Object.assign(state,payload);
        }

        case "DELETE_USER": {
          return Object.assign({...state,payload});
        }

        default:
            return state;

    }

};
