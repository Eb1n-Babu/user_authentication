import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000", // Django backend URL
    withCredentials: true,            // allow session cookies
});

export const registerUser = (data) => API.post("/auth/", data);
export const loginUser = (data) => API.post("/auth/login/", data);
export const logoutUser = () => API.post("/auth/logout/");
