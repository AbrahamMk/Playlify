import styled, { keyframes} from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

export default function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateAccount = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Handle the successful account creation
        const user = userCredential.user;
        console.log('Account created:', user);
      })
      .catch((error) => {
        // Handle any errors during account creation
        console.error(error);
      });
  };

  const handleLogin = () => {
    if (username === "" || password === "") {
      setErrorMessage("Please enter both username and password.");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
          // Successful login
          const user = userCredential.user;
          console.log('Logged in:', user);
          // Navigate to the song player webpage using window.location
          window.location.href = "/SongPlayer";
        })
        .catch((error) => {
          // Invalid credentials or other login errors
          setErrorMessage("Invalid username or password. Please try again.");
          console.error(error);
        });
    }
  };

  return (
    <Container>
      <Title>
        <h2>Playlify for more coziness</h2>
      </Title>
      <img
        src="https://cdn3.iconfinder.com/data/icons/multimedia-flat-icons-vol-1/256/26-512.png"
        alt=""
      />

      <Form>
        <Input
          type="text"
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

        <ButtonContainer>
          <Link to="./creatingaccount">
          <Button onClick={handleCreateAccount}>Create Account</Button>
          </Link>
          <Link to="/Login">
          <Button onClick={handleLogin}>Log In</Button>
          </Link>
        </ButtonContainer>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
  
  img {
    height: 10vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 15px;
    left: 0;

  }
  font-family: "Times New Roman", Times, serif;

`;

const moveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
  `;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  gap: 5rem;
  @media (max-width: 768px) {
    position: static;
    margin-top: 2rem;
  }
  color: #0b172a ;
  align-items: center, top;
  position: fixed;
  top: 0;
  left: 300px;
  animation: ${moveAnimation} 5s infinite;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center, ;
   gap: 25px;
   padding: 1rem 3rem;
   border-radius: 80px;
   border: none;
`;

const Input = styled.input`
   gap: 3rem;
   display: flex;
   padding: 0.4rem;
   flex-direction: column;
   text-align: center;
   justify-content: center;
   border-radius: 5rem;
   border: none;
   height: 3vh;
   width: 20vw;
   font-family: "Segoe Print", Times, serif;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 60px;
  height: 8vh;
  
  justify-content: center;
  text-align: center;
  border: none;
  background-color:#0b172a;
  color: white ;
  font-size: 0.7rem;
  cursor: pointer;
  font-family: "Segoe Print", Times, serif;
  align-items: center;
`;