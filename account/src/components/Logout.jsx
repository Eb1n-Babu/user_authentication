// src/components/Logout.js
import React from "react";
import axios from "axios";
import { Container, Card, Button, Title } from "./StyledComponents";

function Logout() {
    const handleLogout = async () => {
        try {
            const res = await axios.post("http://localhost:8000/auth/logout/");
            alert(res.data.message);
        } catch (err) {
            alert("Error logging out");
        }
    };

    return (
        <Container>
            <Card>
                <Title>Logout</Title>
                <Button onClick={handleLogout}>Logout</Button>
            </Card>
        </Container>
    );
}

export default Logout;
