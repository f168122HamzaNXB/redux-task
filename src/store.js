import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import studentReducer from './redux/student/studentReducer';
import authReducer from './redux/auth/authReducer';

const rootReducer = combineReducers({ 
    studentReducer,
    authReducer,
 })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;   