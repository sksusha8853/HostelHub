import * as api from "../../api";
import { setLoggedIn } from "./authActions";

export const mainActions = {
};

export const getMainActions = (dispatch) => {
    return {
        postComplaint: (complainDetails, navigate) => dispatch(postComplaint(complainDetails, navigate)),
        getAllComplaints: (setData, navigate) => dispatch(getAllComplaints(setData, navigate)),
        deleteComplaint: (complaintId) => dispatch(deleteComplaint(complaintId)),
        postSuggestion: (suggestionDetails, navigate) => dispatch(postSuggestion(suggestionDetails, navigate)),
        getAllSuggestions: (setData, navigate) => dispatch(getAllSuggestions(setData, navigate)),
        deleteSuggestion: (suggestionId) => dispatch(deleteSuggestion(suggestionId)),
    };
};



export const postComplaint = (complainDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.postComplaint(complainDetails);
        if (response.error) {
            console.log("response", response);
        } else {
            console.log('response', response)
            const { success } = response?.data;
            console.log(response);
            if (success) {
                navigate("/");
            }
        }
    };
};

export const getAllComplaints = (setData, navigate) => {
    return async (dispatch) => {
        const response = await api.getAllComplaints();
        if (response.error) {
            console.log("response", response);
        } else {
            const { success, complaints } = response?.data;
            setData(complaints);
            console.log('complaints', complaints)
            return complaints;
        }
    };
};

export const deleteComplaint = (complaintId) => {
    return async (dispatch) => {
        console.log('complaintId1', complaintId)
        const response = await api.deleteComplaint(complaintId);
        if (response.error) {
            console.log("response", response);
        } else {
            const { success } = response?.data;
        }
    };
};

export const postSuggestion = (suggestionDetails, navigate) => {
    return async (dispatch) => {
        console.log(suggestionDetails);
        const response = await api.postSuggestion(suggestionDetails);
        if (response.error) {
            console.log("response", response);
        } else {
            console.log('response', response)
            const { success } = response?.data;
            console.log(response);
            if (success) {
                navigate("/");
            }
        }
    };
};

export const getAllSuggestions = (setData, navigate) => {
    return async (dispatch) => {
        const response = await api.getAllSuggestions();
        if (response.error) {
            console.log("response", response);
        } else {
            const { success, suggestions } = response?.data;
            setData(suggestions);
            console.log('suggestions', suggestions)
            return suggestions;
        }
    };
};

export const deleteSuggestion = (suggestionId) => {
    return async (dispatch) => {
        console.log('suggestionId1', suggestionId)
        const response = await api.deleteSuggestion(suggestionId);
        if (response.error) {
            console.log("response", response);
        } else {
            const { success } = response?.data;
        }
    };
};