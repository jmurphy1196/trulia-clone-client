import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER } from '../types';
const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
        
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        
        case SET_USER:
            console.log(action.payload);
            return {
                authenticated: true,
                loading: false,
                ...action.payload

            }
        default:
            return {
                ...state
            };
            
    }
}