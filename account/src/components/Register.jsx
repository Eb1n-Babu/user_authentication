// src/components/Register.js
import React, { useState } from "react";
import axios from "axios";
import { Container, Card, Input, Button, Title } from "./StyledComponents";

function Register() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/auth/", formData);
            alert("User registered successfully!");
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            alert("Error registering user");
        }
    };

    return (
        <Container>
            <Card>
                <Title>Sign Up</Title>
                <form onSubmit={handleSubmit}>
                    <Input name="username" placeholder="Username" onChange={handleChange} />
                    <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
                    <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
                    <Button type="submit">Register</Button>
                </form>
            </Card>
        </Container>
    );
}

export default Register;
