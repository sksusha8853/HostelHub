import * as api from "../../api";

export const authActions = {
    SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
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
    };
};

export const login = (userDetails, navigate) => {
    return async (dispatch) => {
        console.log(userDetails);
        const response = await api.login(userDetails);
        if (response.error) {
            console.log("response", response);
        } else {
            console.log('response', response)
            const { success, authToken } = response?.data;
            console.log(userDetails);
            if (success) {
                localStorage.setItem("user", JSON.stringify(authToken));
                dispatch(setUserDetails(authToken));
                navigate("/");
            }
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
