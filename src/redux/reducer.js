import {combineReducers} from 'redux'


const User = {};
const UserReducer = (state = User, action) => {
  if (action.type === 'SET_DATA_USER') {
    state = action.value
  };
  return state; 
};


const Token = '';

const TokenReducer = (state = Token, action) => {
  if (action.type === 'SET_DATA_TOKEN') {
    state = action.value
    // console.log('action value',action.value);
  }
  return state; 
};

const reducer = combineReducers({
    UserReducer,
    TokenReducer,
})

export default reducer;