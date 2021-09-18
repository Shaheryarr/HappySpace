import axios from "axios"
import { CHANGE_PASSWORD_API, LOGIN_API, OTP_VERIFY_API, REQUEST_PASSWORD_API, RESEND_OTP_API, RESET_PASSWORD_API, SIGNUP_API } from "./apis"

export const postLoginRequest = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(LOGIN_API, params, {
            withCredentials: true
        }).then(res => {
            console.log('postLoginRequest res: ', res.data);
            resolve(res.data)
        }).catch(err => {
            console.log('postLoginRequest err: ', err.response.data);
            reject(err)
        })
    })
}

export const postSignUpRequest = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(SIGNUP_API, params, {
            withCredentials: true
        }).then(res => {
            console.log('postSignUpRequest res: ', res.data);
            resolve(res.data)
        }).catch(err => {
            console.log('postSignUpRequest err: ', err.response.data);
            reject(err)
        })
    })
}

export const postOtpVerify = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(OTP_VERIFY_API, params, {
            withCredentials: true
        }).then(res => {
            console.log('postOtpVerify res: ', res.data);
            resolve(res.data)
        }).catch(err => {
            console.log('postOtpVerify err: ', err.response.data);
            reject(err)
        })
    })
}

export const changePassword = (PARAMS) => {
    return new Promise((resolve, reject) => {
        axios.post(CHANGE_PASSWORD_API, PARAMS, {
            withCredentials: true
        }).then(res => {
            console.log('changePassword res: ', res.data);
            resolve(res.data)
        }).catch(err => {
            console.log('changePassword err: ', err.response.data);
            reject(err)
        })
    })
}

export const resetPassword = (PARAMS) => {
    return new Promise((resolve, reject) => {
        axios.post(RESET_PASSWORD_API, PARAMS, {
            withCredentials: true
        }).then(res => {
            console.log('resetPassword res: ', res.data);
            resolve(res.data)
        }).catch(err => {
            console.log('resetPassword err: ', err.response.data);
            reject(err)
        })
    })
}

export const requestPassword = (PARAMS) => {
    return new Promise((resolve, reject) => {
        axios.post(REQUEST_PASSWORD_API, PARAMS, {
            withCredentials: true
        }).then(res => {
            console.log('requestPassword res: ', res.data);
            resolve(res.data)
        }).catch(err => {
            console.log('requestPassword err: ', err.response.data);
            reject(err)
        })
    })
}

export const resendOtp = (PARAMS) => {
    return new Promise((resolve, reject) => {
        axios.post(RESEND_OTP_API, PARAMS, {
            withCredentials: true
        }).then(res => {
            console.log('resendOtp res: ', res.data);
            resolve(res.data)
        }).catch(err => {
            console.log('resendOtp err: ', err.response.data);
            reject(err)
        })
    })
}