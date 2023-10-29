import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import rootReducer from "./app/reducers/index.js";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignupStudent from "./screens/SignupStudent";
import SignupStaff from "./screens/SignupStaff";
import Profile from "./screens/Profile";
import Complaint from "./screens/Complaint";
import Suggestion from "./screens/Suggestion";
import ShowComplaints from "./screens/ShowComplaints";
import ShowSuggestions from "./screens/ShowSuggestions";
import Announcement from "./screens/Announcement";
import ShowAnnouncements from "./screens/ShowAnnouncements";


const root = ReactDOM.createRoot(document.getElementById("root"));

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore(
  {
    reducer: persistedReducer,
  },
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signupstudent",
    element: <SignupStudent />,
  },
  {
    path: "/signupstaff",
    element: <SignupStaff />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/complaint",
    element: <Complaint />,
  },
  {
    path: "/announcement",
    element: <Announcement />,
  },
  {
    path: "/suggestion",
    element: <Suggestion />,
  },
  {
    path: "/showComplaints",
    element: <ShowComplaints />,
  },
  {
    path: "/showSuggestions",
    element: <ShowSuggestions />,
  },
  {
    path: "/showAnnouncements",
    element: <ShowAnnouncements />,
  },

]);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
    </PersistGate>
  </Provider>
);