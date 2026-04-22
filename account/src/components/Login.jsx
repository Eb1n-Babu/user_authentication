// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { Container, Card, Input, Button, Title } from "./StyledComponents";

function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/auth/login/", formData);
            alert(res.data.message);
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <Container>
            <Card>
                <Title>Log In</Title>
                <form onSubmit={handleSubmit}>
                    <Input name="username" placeholder="Username" onChange={handleChange} />
                    <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
                    <Button type="submit">Login</Button>
                </form>
            </Card>
        </Container>
    );
}

export default Login;
