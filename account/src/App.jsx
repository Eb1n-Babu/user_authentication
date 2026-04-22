// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
    return (
        <Router>
            <nav style={{ textAlign: "center", margin: "20px" }}>
                <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>
                <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
                <Link to="/logout" style={{ margin: "0 10px" }}>Logout</Link>
            </nav>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
}

export default App;
