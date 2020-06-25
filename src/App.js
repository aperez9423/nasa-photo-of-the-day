import React from "react";
import "./App.css";
import MediaCard from "./Components/MediaCard.js";
import styled from 'styled-components'

const Background = styled.div`
  background: lavender;
`
const Title = styled.h1`
  font-size: 2rem;
  background-color: slateblue;
  border-bottom: solid .2rem black;
  border-top: solid .2rem black;
  text-align: center;
  padding: .5rem;
  font-family: oxygen;
`
function App() {
  return (
    <Background>
        <Title>NASA Photo of the Day</Title>
        <div className="App">
        <MediaCard/>
        </div>
    </Background>
  );
}

export default App;
