import {
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    STOP_LOADING_UI,
    START_POPUP,
    END_POPUP
} from '../types';

const initialState = {
    loading: false,
    errors: null,
    popup: false
}

export default function (state = initialState, action) {
    
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null,
                loading: false
            }
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            }
        case START_POPUP:
            return {
                ...state,
                popup: true
            };
        case END_POPUP:
            return {
                ...state,
                popup: false
            }
        default:
            return state;
    }
}