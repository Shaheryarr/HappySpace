import axios from 'axios';
import {
  ADD_MEMBERS,
  ADD_WORKSPACE,
  CHANGE_PASSWORD_API,
  CHECK_AUTH_API,
  LOGIN_API,
  MANAGE_POSTS,
  OTP_VERIFY_API,
  REQUEST_PASSWORD_API,
  RESEND_OTP_API,
  RESET_PASSWORD_API,
  SIGNUP_API,
  UPLOAD_IMAGE_API,
} from './apis';

export const getUserAuthentication = () => {
    return new Promise((resolve, reject) => {
        axios.get(CHECK_AUTH_API, {
            withCredentials: true
        }).then(res => {
            console.log('getUserAuthentication res: ', res.data);
            resolve(res.data);
        }).catch(err => {
            console.log('getUserAuthentication err: ', err.response.data);
            reject(err);
        })
    })
}

export const createPost = params => {
    return new Promise((resolve, reject) => {
        axios.put(MANAGE_POSTS, params, {
            withCredentials: true
        }).then(res => {
            console.log('createPost res: ', res.data);
            resolve(res.data);
        }).catch(err => {
            console.log('createPost err: ', err.response.data);
            reject(err);
        })
    })
}

export const postImageBase64 = params => {
    return new Promise((resolve, reject) => {
        axios.post(UPLOAD_IMAGE_API, params, {
            withCredentials: true
        }).then(res => {
            console.log('postImageBase64 res: ', res.data);
            resolve(res.data);
        }).catch(err => {
            console.log('postImageBase64 err: ', err.response.data);
            reject(err);
        })
    })
}

export const postLoginRequest = params => {
  return new Promise((resolve, reject) => {
    axios
      .post(LOGIN_API, params, {
        withCredentials: true,
      })
      .then(res => {
        console.log('postLoginRequest res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('postLoginRequest err: ', err.response.data);
        reject(err);
      });
  });
};

export const postSignUpRequest = params => {
  return new Promise((resolve, reject) => {
    axios
      .post(SIGNUP_API, params, {
        withCredentials: true,
      })
      .then(res => {
        console.log('postSignUpRequest res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('postSignUpRequest err: ', err.response.data);
        reject(err);
      });
  });
};

export const postOtpVerify = params => {
  return new Promise((resolve, reject) => {
    axios
      .post(OTP_VERIFY_API, params, {
        withCredentials: true,
      })
      .then(res => {
        console.log('postOtpVerify res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('postOtpVerify err: ', err.response.data);
        reject(err);
      });
  });
};

export const changePassword = PARAMS => {
  return new Promise((resolve, reject) => {
    axios
      .post(CHANGE_PASSWORD_API, PARAMS, {
        withCredentials: true,
      })
      .then(res => {
        console.log('changePassword res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('changePassword err: ', err.response.data);
        reject(err);
      });
  });
};

export const resetPassword = PARAMS => {
  return new Promise((resolve, reject) => {
    axios
      .post(RESET_PASSWORD_API, PARAMS, {
        withCredentials: true,
      })
      .then(res => {
        console.log('resetPassword res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('resetPassword err: ', err.response.data);
        reject(err);
      });
  });
};

export const requestPassword = PARAMS => {
  return new Promise((resolve, reject) => {
    axios
      .post(REQUEST_PASSWORD_API, PARAMS, {
        withCredentials: true,
      })
      .then(res => {
        console.log('requestPassword res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('requestPassword err: ', err.response.data);
        reject(err);
      });
  });
};

export const resendOtp = PARAMS => {
  return new Promise((resolve, reject) => {
    axios
      .post(RESEND_OTP_API, PARAMS, {
        withCredentials: true,
      })
      .then(res => {
        console.log('resendOtp res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('resendOtp err: ', err.response.data);
        reject(err);
      });
  });
};

export const createWorkspace = PARAMS => {
  return new Promise((resolve, reject) => {
    axios
      .post(ADD_WORKSPACE, PARAMS, {
        withCredentials: true,
      })
      .then(res => {
        console.log('createworspace res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('createworspace err: ', err.response.data);
        reject(err);
      });
  });
};

export const addMembers = PARAMS => {
  return new Promise((resolve, reject) => {
    axios
      .post(ADD_MEMBERS, PARAMS, {
        withCredentials: true,
      })
      .then(res => {
        console.log('addmembers res: ', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('addmembers err: ', err.response.data);
        reject(err);
      });
  });
};
