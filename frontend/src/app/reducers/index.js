import { combineReducers } from "redux";
import authReducer from "./authReducer";
import mainReducer from "./mainReducer";

const allReducers = combineReducers({
    auth: authReducer,
    main: mainReducer
});

export default allReducers;