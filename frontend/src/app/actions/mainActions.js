import * as api from "../../api";

export const authActions = {
    SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getMainActions = (dispatch) => {
    return {
        postComplaint: (complainDetails, navigate) => dispatch(postComplaint(complainDetails, navigate)),
        getAllComplaints:(userDetails, navigate) => dispatch(getAllComplaints(userDetails,navigate)),
        postSuggestion: (suggestionDetails, navigate) => dispatch(postSuggestion(suggestionDetails, navigate)),
        getAllSuggestions:(userDetails, navigate) => dispatch(getAllSuggestions(userDetails, navigate)),
        getAllAnnouncements:(userDetails, navigate) => dispatch(getAllAnnouncements(userDetails, navigate)),
        postAnnouncement:(announcementDetails, navigate) => dispatch(postAnnouncement(announcementDetails, navigate))
    };
};


export const postComplaint = (complainDetails, navigate) => {
    return async (dispatch) => {
        console.log(complainDetails);
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

export const postAnnouncement = (announcementDetails, navigate) => {
    return async (dispatch) => {
        console.log(announcementDetails);
        const response = await api.postAnnouncement(announcementDetails);
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

export const getAllComplaints = (userDetails,setData, navigate) => {
    return async (dispatch) => {
        const response = await api.getAllComplaints(userDetails);
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

export const getAllSuggestions = (userDetails, setData, navigate) => {
    return async (dispatch) => {
        const response = await api.getAllSuggestions(userDetails);
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

export const getAllAnnouncements = (announcementDetails, setData, navigate) => {
    return async (dispatch) => {
        const response = await api.getAllAnnouncements(announcementDetails);
        if (response.error) {
            console.log("response", response);
        } else {
            const { success, announcements } = response?.data;
            setData(announcements);
            console.log('announcements', announcements)
            return announcements;
        }
    };
};