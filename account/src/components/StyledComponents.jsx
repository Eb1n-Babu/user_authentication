// src/components/StyledComponents.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fafafa;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  padding: 40px;
  width: 350px;
  text-align: center;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background: #fafafa;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 12px;
  background: #0095f6;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #0077cc;
  }
`;

export const Title = styled.h2`
  font-family: "sans-serif";
  margin-bottom: 20px;
`;
