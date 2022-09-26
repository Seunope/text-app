import * as actions from '../actions/action_types';

const initialState = {
  counter: 0,
};

const regReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.COUNTER_ADDED:
      return {
        counter: state.counter + 2,
      };
    // case ASYNC_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case ASYNC_RECEIVE_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     data: action.data,
    //   };
    // case ASYNC_RECEIVE_SUCCESS_2:
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // case ASYNC_RECEIVE_TOKEN_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     data: action.data,
    //     token: action.token,
    //   };
    // case ASYNC_RECEIVE_ERROR:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.data,
    //   };
    default:
      return state;
  }
};

export default regReducer;
