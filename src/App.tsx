import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import profileJpg from "./images/profile-jpg.jpg";
import profileSmall from "./images/profile-jpg-small.jpg";
import Image from "./Image";
const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
    margin:0;
  }
`;
const Container = styled.div`
  min-height: 300vh;
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-content: space-between;
  align-items: flex-end;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Image src={profileJpg} preSrc={profileSmall} mode="blur" />
      </Container>
    </>
  );
}

export default App;
