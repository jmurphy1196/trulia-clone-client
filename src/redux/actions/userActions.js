import {
    SET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    SET_AUTHENTICATED,
    START_POPUP,
    END_POPUP
    

} from '../types';

import axios from 'axios';

const userURL = 'https://us-central1-trulia-clone1.cloudfunctions.net/api';

export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post(`${userURL}/login`, userData).then((res) => {
        setAuthorizationHeader(res.data);
        dispatch({ type: SET_AUTHENTICATED }); //TODO change to set authenticated upon getting user details
        dispatch({ type: CLEAR_ERRORS });

    }).catch((err) => {
        console.log(err);
        dispatch({ type: SET_ERRORS, payload: err.response.data });

    })
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
};

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
        .post(`${userURL}/signup`, newUserData)
        .then((res) => {
            setAuthorizationHeader(res.data.token);
            console.log(res.data.token);
            dispatch({ type: CLEAR_ERRORS });
            history.push('/');
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
};

export const getUserDetails = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get(`${userURL}/users`).then((res) => {
        console.log(res.data);
        dispatch({ type: SET_USER, payload: res.data });

    }).catch((err) => {
        console.log(err);

    });
}

export const editUserDetails = (userData) => (dispatch) => {
    console.log('this function has been called!')
    dispatch({ type: LOADING_UI });
    axios.post(`${userURL}/edit`, userData).then((res) => {
        //dispatch stop loading UI
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: START_POPUP });
        setTimeout(() => {
            dispatch({ type: END_POPUP });
        }, 4200);
        console.log('edited');
        console.log(res.data);

    }).catch((err) => {
        console.log(err);
        dispatch({ type: SET_ERRORS, payload: err.response.data });
    })
}




const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};