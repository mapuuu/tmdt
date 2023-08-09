import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as User from './Reducers/userReducers.js';

const rootReducer = combineReducers({
  // Add your reducers here
  userLogin: User.userLoginReducer,
  userRegister: User.userRegisterReducer,
});
// get userinFo from localStorage
const userInFoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const initialState = {
  userLogin: { userInfo: userInFoFromStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
