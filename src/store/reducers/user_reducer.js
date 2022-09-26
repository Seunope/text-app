import {
  ASYNC_RECEIVE_ERROR,
  ASYNC_RECEIVE_SUCCESS,
  ASYNC_REQUEST,
  ASYNC_RECEIVE_SUCCESS_2,
} from '../actions/action_types';

const initialState = {
  isLoading: false,
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ASYNC_RECEIVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case ASYNC_RECEIVE_SUCCESS_2:
      return {
        ...state,
        isLoading: false,
      };
    case ASYNC_RECEIVE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.data,
      };
    default:
      return state;
  }
};

export default userReducer;
