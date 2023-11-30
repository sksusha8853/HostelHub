import { authActions } from "../actions/authActions";

const initState = {
    loggedIn: false,
    userDetails: null,
};

const authReducer = (state = initState, action) => {
    console.log('stateReducer', action)
    switch (action.type) {
        case authActions.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails,
            };
        case authActions.SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.loggedIn,
            };
        default:
            return state;
    }
};

export default authReducer;