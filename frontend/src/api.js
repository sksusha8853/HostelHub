import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5000/api",
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem("user");

        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Public Routes
export const login = async (data) => {
    try {
        console.log("data", data);
        return await apiClient.post("/login", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const registerStudent = async (data) => {
    try {
        console.log("data", data);
        return await apiClient.post("/createstudent", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const registerStaff = async (data) => {
    try {
        console.log("data", data);
        return await apiClient.post("/createstaff", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const postComplaint = async (data) => {
    try {
        console.log("data", data);
        return await apiClient.post("/createcomplaint", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};


export const postSuggestion = async (data) => {
    try {
        console.log("data", data);
        return await apiClient.post("/createsuggestion", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const getAllComplaints = async (data) => {
    try {
        console.log("data", data);
        return await apiClient.get("/getAllComplaints", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const getAllSuggestions = async (data) => {
    try {
        console.log("data", data);
        return await apiClient.get("/getAllSuggestions", data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};
