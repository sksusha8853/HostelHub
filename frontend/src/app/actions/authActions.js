import * as api from "../../api";

export const authActions = {
    SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
    SET_LOGGED_IN: "AUTH.SET_LOGGED_IN",
};

export const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    };
};

export const setLoggedIn = (loggedIn) => {
    console.log('loggedInAction', loggedIn)
    return {
        type: authActions.SET_LOGGED_IN,
        loggedIn,
    };
};

export const getAuthActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
        registerStudent: (userDetails, navigate) =>
            dispatch(registerStudent(userDetails, navigate)),
        registerStaff: (userDetails, navigate) =>
            dispatch(registerStaff(userDetails, navigate)),
        setUserDetails: (userDetails) =>
            dispatch(setUserDetails(userDetails)),
        setLoggedIn: (loggedIn) => dispatch(setLoggedIn(loggedIn))
    };
};

export const login = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.login(userDetails);
        if (response.error) {
            console.log("response", response);
        } else {
            const { success, role, authToken } = response?.data;
            if (role === "student") {
                navigate("/");
            }
            else if (role === "staff") {
                navigate("/");
                // separate page for staff
            }
            else {
                navigate("/");
                // initial details
            }
            dispatch(setUserDetails(authToken));
        }
    };
};

export const registerStudent = (userDetails, navigate) => {
    return async (dispatch) => {
        console.log(userDetails);
        const response = await api.registerStudent(userDetails);
        console.log(response);
        if (response.error) {
        } else {
            const { success } = response?.data;
            if (success) navigate("/login");
        }
    };
};

export const registerStaff = (userDetails, navigate) => {
    return async (dispatch) => {
        console.log(userDetails);
        const response = await api.registerStaff(userDetails);
        console.log(response);
        if (response.error) {
        } else {
            const { success } = response?.data;
            if (success) navigate("/login");
        }
    };
};
