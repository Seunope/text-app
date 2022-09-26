import {
  ASYNC_RECEIVE_ERROR,
  ASYNC_RECEIVE_SUCCESS,
  ASYNC_REQUEST,
  ASYNC_RECEIVE_SUCCESS_2,
} from './action_types';
import {
  EMPLOYMENT_RECORD,
  BANK_ACCOUNT_INFO,
  REQUEST_LOAN,
  REFERRAL_CODE,
  UPLOAD_PASSPORT,
  LOAN_HISTORY,
  CUSTOMER_STATUS,
  PROFILE_COMPLETE,
  CUSTOMER_REFERRALS,
  CHANGE_PASSWORD,
  SAVE_FUND,
  LOAN_REQUEST_APPLICATION,
  PENDING_LOAN,
  CANCEL_LOAN_OFFER,
  ACCEPT_LOAN_OFFER,
  RAVE_PAY_CLEAR_BALANCE,
  RAVE_PAY_NEXT_REPAYMENT,
  GET_NOTIFICATION,
} from '../../api/http';

export const employmentRecord = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await EMPLOYMENT_RECORD(data);
    dispatch({
      type: ASYNC_RECEIVE_SUCCESS,
      data: responseData,
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

export const bankAccountInfo = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await BANK_ACCOUNT_INFO(data);
    dispatch({
      type: ASYNC_RECEIVE_SUCCESS,
      data: responseData,
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

// export const requestLoan = data => async dispatch => {
//   try {
//     dispatch({type: ASYNC_REQUEST});
//     let responseData = await REQUEST_LOAN(data);
//     dispatch({
//       type: ASYNC_RECEIVE_SUCCESS,
//       data: responseData,
//     });
//     return responseData;
//   } catch (error) {
//     dispatch({
//       type: ASYNC_RECEIVE_ERROR,
//       data: error,
//     });
//     return error;
//   }
// };

export const loanHistory = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await LOAN_HISTORY(data);
    dispatch({
      type: ASYNC_RECEIVE_SUCCESS,
      data: responseData,
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

export const referralCode = () => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await REFERRAL_CODE();
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const customerReferrals = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await CUSTOMER_REFERRALS(data);
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const uploadPassport = () => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await UPLOAD_PASSPORT();
    dispatch({type: ASYNC_RECEIVE_SUCCESS});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const customerStatus = () => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await CUSTOMER_STATUS();
    dispatch({type: ASYNC_RECEIVE_SUCCESS});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const profileComplete = () => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await PROFILE_COMPLETE();
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const changePassword = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await CHANGE_PASSWORD(data);
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const loanRequestApplication = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await LOAN_REQUEST_APPLICATION(data);
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const pendingLoan = () => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await PENDING_LOAN();
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const acceptLoanOffer = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await ACCEPT_LOAN_OFFER(
      data.customerDecision,
      data.requestId,
    );
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const cancelLoanRequest = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await CANCEL_LOAN_OFFER(
      data.customerDecision,
      data.requestId,
    );
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const ravePayClearBalance = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await RAVE_PAY_CLEAR_BALANCE(data);
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const ravePayNextRepayment = (data) => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await RAVE_PAY_NEXT_REPAYMENT(data);
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};

export const notifications = () => async (dispatch) => {
  try {
    dispatch({type: ASYNC_REQUEST});
    let responseData = await GET_NOTIFICATION();
    dispatch({type: ASYNC_RECEIVE_SUCCESS_2});
    return responseData;
  } catch (error) {
    dispatch({type: ASYNC_RECEIVE_ERROR});
    return error;
  }
};
