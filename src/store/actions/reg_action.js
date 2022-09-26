import {
  ASYNC_RECEIVE_ERROR,
  ASYNC_RECEIVE_SUCCESS,
  ASYNC_REQUEST,
  ASYNC_RECEIVE_TOKEN_SUCCESS,
  ASYNC_RECEIVE_SUCCESS_2,
} from './action_types';

export const createAccount = (data) => async (dispatch) => {
  try {
    dispatch({ type: ASYNC_REQUEST });
    // let responseData = await CREATE_ACCOUNT(data);
    let responseData = { data: 1 };
    dispatch({
      type: ASYNC_RECEIVE_SUCCESS,
      data: responseData.data,
    });
    return responseData;
  } catch (error) {
    dispatch({
      type: ASYNC_RECEIVE_ERROR,
      data: error,
    });
    return error;
  }
};

// export const loginAccount = (data) => async (dispatch) => {
//   try {
//     dispatch({type: ASYNC_REQUEST});
//     let responseData = await LOGIN_ACCOUNT(data);
//     // console.log('responseDatad',responseData);
//     if (responseData.token) {
//       await SaveToken(responseData.token, 15);
//       await SaveToStorage('user', responseData.user);
//       await SaveToStorage('tokenAge', new Date());
//       dispatch({
//         type: ASYNC_RECEIVE_TOKEN_SUCCESS,
//         data: responseData.user,
//         token: responseData.token,
//       });
//     } else {
//       dispatch({
//         type: ASYNC_RECEIVE_SUCCESS,
//         data: responseData.data,
//       });
//     }

//     return responseData;
//   } catch (error) {
//     console.log('eerrr', error)
//     dispatch({type: ASYNC_RECEIVE_ERROR});
//     return error;
//   }
// };

// export const verifyOTP = (data) => async (dispatch) => {
//   try {
//     dispatch({type: ASYNC_REQUEST});
//     let responseData = await VERIFY_OTP(data.otp, data.id, data.email);
//     await SaveToken(responseData.token, 30);
//     dispatch({
//       type: ASYNC_RECEIVE_TOKEN_SUCCESS,
//       data: responseData.data,
//       token: responseData.token,
//     });
//     return responseData;
//   } catch (error) {
//     dispatch({
//       type: ASYNC_RECEIVE_ERROR,
//       error: error,
//     });
//     return error;
//   }
// };

// export const resendOTP = (data) => async (dispatch) => {
//   try {
//     dispatch({type: ASYNC_REQUEST});
//     let responseData = await RESEND_OTP(data.telephone);
//     dispatch({
//       type: ASYNC_RECEIVE_SUCCESS_2,
//     });
//     return responseData;
//   } catch (error) {
//     dispatch({
//       type: ASYNC_RECEIVE_ERROR,
//       error: error,
//     });
//     return error;
//   }
// };

// export const createPin = (data) => async (dispatch) => {
//   try {
//     dispatch({type: ASYNC_REQUEST});
//     let responseData = await CREATE_PIN(data);
//     dispatch({type: ASYNC_RECEIVE_SUCCESS});
//     return responseData;
//   } catch (error) {
//     dispatch({type: ASYNC_RECEIVE_ERROR});
//     return error;
//   }
// };

// export const personalDetails = (data) => async (dispatch) => {
//   try {
//     dispatch({type: ASYNC_REQUEST});
//     let responseData = await PERSONAL_DETAILS(data);
//     await SaveToStorage('user', responseData.updatedUser);
//     dispatch({type: ASYNC_RECEIVE_SUCCESS});
//     return responseData;
//   } catch (error) {
//     dispatch({type: ASYNC_RECEIVE_ERROR});
//     return error;
//   }
// };

// export const forgetPassword = (data) => async (dispatch) => {
//   try {
//     dispatch({type: ASYNC_REQUEST});
//     let responseData = await FORGOT_PASSWORD(data);
//     dispatch({type: ASYNC_RECEIVE_SUCCESS});
//     return responseData;
//   } catch (error) {
//     dispatch({type: ASYNC_RECEIVE_ERROR});
//     return error;
//   }
// };

// export const resetPassword = (data) => async (dispatch) => {
//   try {
//     dispatch({type: ASYNC_REQUEST});
//     let responseData = await RESET_PASSWORD(data);
//     dispatch({type: ASYNC_RECEIVE_SUCCESS});
//     return responseData;
//   } catch (error) {
//     dispatch({type: ASYNC_RECEIVE_ERROR});
//     return error;
//   }
// };
