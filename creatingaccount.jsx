import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Perform validation and account creation logic
    if (password === confirmPassword) {
      // Passwords match, create an account
      console.log("Account created!");
      // Reset form fields
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } else {
      // Passwords don't match, show error message or take appropriate action
      console.log("Passwords do not match!");
    }
  };

  return (
    <Container>
      <Title>Create Account</Title>


      <img
        src="https://cdn3.iconfinder.com/data/icons/multimedia-flat-icons-vol-1/256/26-512.png"
        alt="Playlify"
      />

      <form onSubmit={handleCreateAccount}>
        <Input
          type="text"ya
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Link to="/authentication">
        <Button type="submit">Create Account</Button>
       </Link>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  font-family: "Segoe Print", Times, serif;

  
  img {
    height: 10vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 15px;
    left: 0;

  }


  `;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  display: flex;
  width: 20vw;
  border-radius: 50px;
  align-items:center;
  justify-content: center;
  border: none ;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-family: "Segoe Print", Times, serif;
`;

const Button = styled.button`
  padding: 1rem 5rem;
  border-radius: 50px;
  border: none;
  width: 20vw;
  color: white;
  background-color: #0b172a;
  font-size: 0.8rem;
  cursor: pointer;
  font-family: "Segoe print", Times,serif;
`;