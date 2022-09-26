import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/reg_reducer';
// import userReducer from './reducers/user_reducer';

const store = configureStore(
  {
    reducer: {
      reg: registrationReducer,
      // user: userReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
