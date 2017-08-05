import {combineReducers} from 'redux';
import UserReducer from './reducer-users.js';

import ActiveUserReducer from './reducer-active-user';
import CardQueryReducer from './reducer-card-query';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
  cardQuery: CardQueryReducer
});

export default allReducers;
