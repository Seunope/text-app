import * as actions from './action_types';

// export const createAccount = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: actions.ASYNC_REQUEST });
//     // let responseData = await CREATE_ACCOUNT(data);
//     let responseData = { data: 1 };
//     dispatch({
//       type: actions.ASYNC_RECEIVE_SUCCESS,
//       data: responseData.data,
//     });
//     return responseData;
//   } catch (error) {
//     dispatch({
//       type: actions.ASYNC_RECEIVE_ERROR,
//       data: error,
//     });
//     return error;
//   }
// };

export const doubleNumber = () => {
  return {
    type: actions.COUNTER_ADDED,
  };
};
