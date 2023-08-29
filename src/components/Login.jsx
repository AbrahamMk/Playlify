import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';


export default function Login() {

  const handleClick = () => {  };

  return (
    <Container>
      <img
        src="https://cdn3.iconfinder.com/data/icons/multimedia-flat-icons-vol-1/256/26-512.png"
        alt="Playlify"
      />
      <Link to="/SongPlayer">
      <button onClick={handleClick}>Connect Playlify</button>
      </Link>
    </Container>
  );
}

const rotateAnimation = keyframes`

0%{
  transform: translate() rotate (0deg);
}
100%{
  transform: translate(0) rotate(360deg);
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
  gap: 4rem;

  img {
    height: 40vh;
    animation: ${rotateAnimation} 6s infinite linear;
  }

  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color:  #0b172a;
    color: white;
    font-size: 1rem;
    font-family: "Segoe Print", Times, serif;
    cursor: pointer;
  }
`;
