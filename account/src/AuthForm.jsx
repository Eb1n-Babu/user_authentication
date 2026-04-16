import React, { useState } from "react";
import { registerUser, loginUser, logoutUser } from "./api";

export default function AuthForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    // Client-side validation
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (password) =>
        password.length >= 8 && /\d/.test(password) && /[A-Za-z]/.test(password);

    const handleRegister = async () => {
        if (!validateEmail(email)) {
            setMessage("Invalid email format");
            return;
        }
        if (!validatePassword(password)) {
            setMessage("Password must be ≥8 chars, include letters & digits");
            return;
        }
        try {
            const res = await registerUser({ username, email, password });
            setMessage(res.data.message);
        } catch (err) {
            if (err.response && err.response.data) {
                const errors = err.response.data;
                setMessage(typeof errors === "string" ? errors : JSON.stringify(errors));
            } else {
                setMessage("Registration failed");
            }
        }
    };

    const handleLogin = async () => {
        try {
            const res = await loginUser({ username, password });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.error || "Login failed");
        }
    };

    const handleLogout = async () => {
        try {
            const res = await logoutUser();
            setMessage(res.data.message);
        } catch (err) {
            setMessage("Logout failed");
        }
    };

    const handleRefresh = () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setMessage("");
    };

    return (
        <div style={{ maxWidth: "350px", margin: "auto", padding: "20px", border: "1px solid #ccc" }}>
            <h2>Auth Demo</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleRefresh}>Refresh</button>
            <p style={{ color: "red" }}>{message}</p>
        </div>
    );
}
